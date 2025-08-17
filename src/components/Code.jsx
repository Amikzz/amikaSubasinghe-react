import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const defaultCodeLines = [
  "import { Coffee, Code, Sleep } from 'life-utils';",
  "",
  "function dailyRoutine() {",
  "  while(!dead) {",
  "    Coffee.drink();",
  "    Code.write('awesome features');",
  "    Debug.fix('unexpected bugs');",
  "    Sleep.take(6);",
  "    Reflect.on('life decisions');",
  "  }",
  "}",
  "",
  "console.log('Life is better with code!');",
];

const Code = () => {
  const [codeLines, setCodeLines] = useState(defaultCodeLines);
  const [displayedCode, setDisplayedCode] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [fileName, setFileName] = useState("dailyRoutine.ts"); // default file name
  const [userFileName, setUserFileName] = useState(""); // input file name

  const fullCode = codeLines.join("\n");

  useEffect(() => {
    let index = displayedCode.length;
    let timeout;

    if (!isDeleting) {
      if (index < fullCode.length) {
        timeout = setTimeout(() => {
          setDisplayedCode(fullCode.slice(0, index + 1));
        }, 15); // typing speed
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1500);
      }
    } else {
      if (index > 0) {
        timeout = setTimeout(() => {
          setDisplayedCode(fullCode.slice(0, index - 1));
        }, 10); // deleting speed
      } else {
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedCode, isDeleting, fullCode]);

  // Handle user submission
  const handleSubmit = () => {
    if (userInput.trim()) {
      setCodeLines(userInput.split("\n")); // replace code lines with user input
      setDisplayedCode(""); // reset typing
      setIsDeleting(false);
    }
    if (userFileName.trim()) {
      setFileName(userFileName); // update file name
    }
    setShowModal(false);
    setUserInput("");
    setUserFileName("");
  };

  return (
    <section className="hidden md:flex w-full bg-zinc-900 text-zinc-50 relative py-20 md:py-40 flex-col justify-center items-center">
      <div className="w-full max-w-5xl bg-zinc-800 rounded-xl shadow-lg overflow-hidden border border-zinc-700">
        {/* VS Code top bar */}
        <div className="flex items-center space-x-2 px-4 py-2 bg-zinc-900 border-b border-zinc-700">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-400 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
          <span className="ml-4 text-zinc-300 font-medium text-sm">
            {fileName}
          </span>
        </div>

        {/* Code editor area */}
        <div className="p-6 font-mono text-sm md:text-base text-zinc-100 h-96 overflow-y-auto bg-zinc-800 whitespace-pre">
          {displayedCode}
          <span className="animate-pulse">|</span> {/* blinking cursor */}
        </div>
      </div>

      {/* Try Me button (styled like code) */}
      <button
        onClick={() => setShowModal(true)}
        className="mt-6 px-6 py-3 font-mono text-sm text-blue-400 bg-zinc-900 border border-zinc-700 rounded-lg shadow-md hover:bg-zinc-800 hover:text-blue-300 transition-colors"
      >
        {"<"}TryMe /{">"}
      </button>

      {/* Modal with animation */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-zinc-800 p-6 rounded-lg shadow-lg w-full max-w-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h2 className="text-lg font-semibold mb-4 text-white">
                Enter Your Code
              </h2>

              {/* File Name Input */}
              <input
                type="text"
                className="w-full mb-4 p-3 font-mono text-sm bg-zinc-900 text-white rounded-lg border border-zinc-700 focus:outline-none"
                placeholder="Enter file name (e.g., myScript.js)"
                value={userFileName}
                onChange={(e) => setUserFileName(e.target.value)}
              />

              {/* Code Input */}
              <textarea
                rows="8"
                className="w-full p-3 font-mono text-sm bg-zinc-900 text-white rounded-lg border border-zinc-700 focus:outline-none"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Write your own code here..."
              />

              {/* Buttons */}
              <div className="flex justify-end mt-4 space-x-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg font-mono text-sm bg-red-600 text-white shadow-md hover:bg-red-500 transition"
                >
                  &lt;Cancel /&gt;
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 rounded-lg font-mono text-sm bg-green-600 text-white shadow-md hover:bg-green-500 transition"
                >
                  &lt;Run /&gt;
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Code;
