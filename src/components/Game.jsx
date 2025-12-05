import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaTrophy, FaRedo, FaLightbulb } from "react-icons/fa";

const challenges = [
  {
    question: "What is the output of the following code?",
    snippet: ["console.log(typeof NaN);"],
    options: ["'number'", "'NaN'", "'undefined'", "'object'"],
    correctIdx: 0,
    hint: "NaN is considered a numeric type in JavaScript.",
  },
  {
    question:
      "Which method creates a new array with all elements that pass a test?",
    snippet: [],
    options: ["map()", "filter()", "reduce()", "forEach()"],
    correctIdx: 1,
    hint: "It returns only the elements that satisfy the condition.",
  },
  {
    question: "Predict the output of this snippet:",
    snippet: [
      "let a = [1,2];",
      "let b = [...a];",
      "b.push(3);",
      "console.log(a.length, b.length);",
    ],
    options: ["2 3", "3 3", "2 2", "Error"],
    correctIdx: 0,
    hint: "Spread operator creates a shallow copy; original array remains unchanged.",
  },
];

const Game = ({ isOpen, onClose }) => {
  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);

  const currentChallenge = challenges[current];

  useEffect(() => {
    if (!isOpen || finished) return;
    if (timeLeft === 0) handleNext(false);
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, isOpen, finished]);

  const handleClick = (idx) => {
    setSelected(idx);
    const isCorrect = idx === currentChallenge.correctIdx;

    if (isCorrect) {
      setScore(score + 1);
      setTimeout(() => handleNext(true), 800);
    } else {
      setShowHint(true);
      setTimeout(() => {
        setShowHint(false);
        handleNext(false);
      }, 2000);
    }
  };

  const handleNext = (isCorrect) => {
    setSelected(null);
    setTimeLeft(20);
    setShowHint(false);
    if (current + 1 < challenges.length) setCurrent(current + 1);
    else setFinished(true);
  };

  const resetGame = () => {
    setScore(0);
    setCurrent(0);
    setFinished(false);
    setSelected(null);
    setShowHint(false);
    setTimeLeft(20);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4 font-syne"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#1a1a1a] w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", bounce: 0.4 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/10 bg-white/5">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="text-2xl">🎮</span> DevQuiz
              </h2>
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-red-500/20 text-zinc-400 hover:text-red-500 transition-all duration-300"
                onClick={onClose}
              >
                <FaTimes />
              </button>
            </div>

            <div className="p-8">
              {!finished ? (
                <>
                  {/* Progress & Timer */}
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-zinc-400">
                        Question
                      </span>
                      <span className="px-2 py-1 rounded-md bg-main/20 text-main font-bold text-sm">
                        {current + 1}/{challenges.length}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-32 h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-main"
                          initial={{ width: "100%" }}
                          animate={{ width: `${(timeLeft / 20) * 100}%` }}
                          transition={{ duration: 1, ease: "linear" }}
                        />
                      </div>
                      <span
                        className={`font-mono font-bold ${
                          timeLeft < 5 ? "text-red-400" : "text-zinc-400"
                        }`}
                      >
                        {timeLeft}s
                      </span>
                    </div>
                  </div>

                  {/* Question */}
                  <div className="mb-8">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                      {currentChallenge.question}
                    </h3>

                    {currentChallenge.snippet.length > 0 && (
                      <div className="bg-zinc-950/50 p-4 rounded-xl border border-white/5 font-mono text-sm text-main mb-6 overflow-x-auto">
                        {currentChallenge.snippet.map((line, idx) => (
                          <div key={idx} className="whitespace-pre">
                            {line}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 gap-3">
                    {currentChallenge.options.map((opt, idx) => {
                      let btnClass =
                        "bg-zinc-800/50 hover:bg-zinc-800 border-zinc-700 hover:border-main/50 text-zinc-300";

                      if (selected !== null) {
                        if (idx === currentChallenge.correctIdx) {
                          btnClass =
                            "bg-green-500/20 border-green-500 text-green-400";
                        } else if (selected === idx) {
                          btnClass =
                            "bg-red-500/20 border-red-500 text-red-400";
                        } else {
                          btnClass =
                            "bg-zinc-800/20 border-zinc-800 text-zinc-600 opacity-50";
                        }
                      }

                      return (
                        <motion.button
                          key={idx}
                          className={`w-full text-left p-4 rounded-xl border transition-all duration-200 font-medium ${btnClass}`}
                          onClick={() => handleClick(idx)}
                          disabled={selected !== null || showHint}
                          whileHover={
                            selected === null ? { scale: 1.01, x: 4 } : {}
                          }
                          whileTap={selected === null ? { scale: 0.99 } : {}}
                        >
                          <span className="mr-3 opacity-50">
                            {String.fromCharCode(65 + idx)}.
                          </span>
                          {opt}
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Hint */}
                  <AnimatePresence>
                    {showHint && selected !== null && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3"
                      >
                        <FaLightbulb className="text-amber-400 mt-1 shrink-0" />
                        <p className="text-amber-200 text-sm">
                          <span className="font-bold block mb-1">Hint:</span>
                          {currentChallenge.hint}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                // Result Screen
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="w-24 h-24 rounded-full bg-gradient-to-tr from-yellow-400 to-amber-600 mx-auto mb-6 flex items-center justify-center shadow-lg shadow-amber-500/20"
                  >
                    <FaTrophy className="text-4xl text-white" />
                  </motion.div>

                  <h3 className="text-3xl font-bold text-white mb-2">
                    Quiz Completed!
                  </h3>
                  <p className="text-zinc-400 mb-8">Here's how you performed</p>

                  <div className="grid grid-cols-2 gap-4 mb-8 max-w-xs mx-auto">
                    <div className="bg-zinc-800/50 p-4 rounded-2xl border border-white/5">
                      <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">
                        Score
                      </p>
                      <p className="text-3xl font-bold text-white">{score}</p>
                    </div>
                    <div className="bg-zinc-800/50 p-4 rounded-2xl border border-white/5">
                      <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">
                        Accuracy
                      </p>
                      <p className="text-3xl font-bold text-main">
                        {Math.round((score / challenges.length) * 100)}%
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center gap-4">
                    <button
                      onClick={onClose}
                      className="px-6 py-3 rounded-xl font-semibold text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      Close
                    </button>
                    <button
                      onClick={resetGame}
                      className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold bg-white hover:bg-main text-black shadow-lg shadow-white/5 transition-all hover:scale-105 active:scale-95"
                    >
                      <FaRedo size={14} /> Play Again
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Game;
