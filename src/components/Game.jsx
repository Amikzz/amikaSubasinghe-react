import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const challenges = [
  {
    question: "What is the output of the following code?",
    snippet: ["console.log(typeof NaN);"],
    options: ["'number'", "'NaN'", "'undefined'", "'object'"],
    correctIdx: 0,
    hint: "NaN is considered a numeric type in JavaScript."
  },
  {
    question: "Which method creates a new array with all elements that pass a test?",
    snippet: [],
    options: ["map()", "filter()", "reduce()", "forEach()"],
    correctIdx: 1,
    hint: "It returns only the elements that satisfy the condition."
  },
  {
    question: "Predict the output of this snippet:",
    snippet: ["let a = [1,2];", "let b = [...a];", "b.push(3);", "console.log(a.length, b.length);"],
    options: ["2 3", "3 3", "2 2", "Error"],
    correctIdx: 0,
    hint: "Spread operator creates a shallow copy; original array remains unchanged."
  }
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
      }, 2000); // Wait 2 seconds so user can read hint
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
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-zinc-900 p-6 rounded-2xl w-11/12 md:w-1/2 text-zinc-50 shadow-xl relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            {/* Modern Close Button */}
            <button
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-cyan-500 text-cyan-400 hover:text-white shadow-md transition-all duration-300"
              onClick={onClose}
            >
              ✕
            </button>

            {!finished ? (
              <>
                {/* Score & Timer */}
                <div className="flex justify-between mb-4 items-center">
                  <p className="text-lg font-mono">Score: {score}</p>
                  <div className="w-1/3 h-2 bg-zinc-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-2 bg-cyan-400"
                      initial={{ width: "100%" }}
                      animate={{ width: `${(timeLeft / 20) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <p className="text-sm text-zinc-400">{timeLeft}s</p>
                </div>

                {/* Challenge */}
                <h2 className="text-xl font-bold text-cyan-400 mb-2">{currentChallenge.question}</h2>
                
                {currentChallenge.snippet.length > 0 && (
                  <div className="bg-zinc-800 p-4 rounded-lg mb-4 font-mono">
                    {currentChallenge.snippet.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                )}

                {/* Options */}
                <div className="flex flex-col gap-2 mb-4">
                  {currentChallenge.options.map((opt, idx) => (
                    <motion.button
                      key={idx}
                      className={`w-full text-left py-2 px-3 rounded-md transition-colors 
                        ${
                          selected === idx
                            ? idx === currentChallenge.correctIdx
                              ? "bg-green-500 text-white"
                              : "bg-red-500 text-white"
                            : "bg-zinc-700 hover:bg-cyan-500"
                        }`}
                      onClick={() => handleClick(idx)}
                      disabled={selected !== null || showHint}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {opt}
                    </motion.button>
                  ))}
                </div>

                {/* Hint */}
                {showHint && selected !== null && (
                  <motion.p
                    className="text-yellow-400 italic mb-4 font-mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    ❌ Wrong! Hint: {currentChallenge.hint}
                  </motion.p>
                )}

                <p className="text-sm text-zinc-400 mt-2">
                  Question {current + 1} of {challenges.length}
                </p>
              </>
            ) : (
              // End Game / Result Screen
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <motion.p
                  className="text-2xl font-bold text-cyan-400 mb-4"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  🎉 Game Over!
                </motion.p>
                <motion.p className="text-lg text-zinc-200 mb-6">
                  Your final score: <span className="font-bold text-green-400">{score}</span> / {challenges.length}
                </motion.p>
                <motion.button
                  className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl shadow-lg font-semibold transition-transform hover:scale-105"
                  onClick={resetGame}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Play Again
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Game;