import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPlay,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaChevronDown,
  FaChevronUp,
  FaTerminal,
  FaLightbulb,
} from "react-icons/fa";

const defaultCode = {
  html: "<h1>Hello World!</h1>\n<p>Welcome to my playground.</p>",
  css: "body {\n  font-family: 'Syne', sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  background: #111111;\n  color: #fff;\n}\n\nh1 {\n  color: #d4f534;\n  font-size: 3rem;\n}",
  js: "console.log('Hello from the console!');",
};

const escapeHTML = (str) =>
  str.replace(
    /[&<>"'`]/g,
    (match) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "`": "&#96;",
      }[match])
  );

const SecureCodePlayground = () => {
  const [html, setHtml] = useState(defaultCode.html);
  const [css, setCss] = useState(defaultCode.css);
  const [js, setJs] = useState(defaultCode.js);
  const [srcDoc, setSrcDoc] = useState("");
  const [consoleOutput, setConsoleOutput] = useState([]);
  const [expanded, setExpanded] = useState({
    HTML: true,
    CSS: true,
    JavaScript: false,
  });
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setConsoleOutput([]);

    const combinedHTML = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
        </body>
      </html>
    `;
    setSrcDoc(combinedHTML);

    const workerCode = `
      self.onmessage = function(e) {
        const code = e.data.code;
        const timeout = e.data.timeout;
        let finished = false;
        const originalLog = console.log;
        console.log = function(...args) {
          self.postMessage({ type: 'log', message: args.join(' ') });
          originalLog.apply(console, args);
        };
        const timer = setTimeout(() => {
          if (!finished) self.postMessage({ type: 'error', message: 'Execution timed out (infinite loop?)' });
        }, timeout);
        try {
          eval(code);
          finished = true;
        } catch(e) {
          self.postMessage({ type: 'error', message: e.toString() });
        }
        clearTimeout(timer);
      };
    `;
    const blob = new Blob([workerCode], { type: "application/javascript" });
    const worker = new Worker(URL.createObjectURL(blob));
    worker.onmessage = (e) => {
      const sanitizedMessage = escapeHTML(e.data.message);
      setConsoleOutput((prev) => [
        ...prev,
        { type: e.data.type, message: sanitizedMessage },
      ]);
    };
    worker.postMessage({ code: js, timeout: 2000 });

    setTimeout(() => setIsRunning(false), 500);
  };

  const toggleExpand = (type) => {
    setExpanded((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <main className="w-full min-h-screen bg-[#111111] text-white flex flex-col pt-32 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden font-syne">
      <div className="w-full z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-cabinetGrotesk tracking-tighter uppercase leading-[0.9]">
            Code <br />
            <span className="text-zinc-600">Playground.</span>
          </h1>
          <div className="w-full h-[1px] bg-zinc-800 mt-12 mb-6" />
          <p className="text-zinc-400 text-lg max-w-2xl font-light">
            A secure, sandbox environment to experiment with HTML, CSS, and
            JavaScript. Write code, run it instantly, and see the results live.
          </p>
        </motion.div>

        {/* Editor Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {/* Editors Column */}
          <div className="space-y-4">
            {[
              {
                type: "HTML",
                icon: <FaHtml5 className="text-orange-500" />,
                code: html,
                setCode: setHtml,
              },
              {
                type: "CSS",
                icon: <FaCss3Alt className="text-blue-500" />,
                code: css,
                setCode: setCss,
              },
              {
                type: "JavaScript",
                icon: <FaJs className="text-yellow-400" />,
                code: js,
                setCode: setJs,
              },
            ].map(({ type, icon, code, setCode }) => (
              <motion.div
                key={type}
                layout
                className={`bg-[#0a0a0a] rounded-xl overflow-hidden border ${
                  expanded[type] ? "border-main/50" : "border-zinc-800"
                } transition-colors duration-300`}
              >
                <button
                  onClick={() => toggleExpand(type)}
                  className="w-full flex items-center justify-between p-4 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {icon}
                    <span className="font-mono font-bold text-sm text-zinc-300">
                      {type}
                    </span>
                  </div>
                  {expanded[type] ? (
                    <FaChevronUp className="text-zinc-500" />
                  ) : (
                    <FaChevronDown className="text-zinc-500" />
                  )}
                </button>

                <AnimatePresence>
                  {expanded[type] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="relative border-t border-zinc-800"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-10 bg-zinc-950 border-r border-zinc-800/50 flex flex-col items-end py-4 pr-2 text-zinc-700 font-mono text-xs select-none">
                        {code.split("\n").map((_, i) => (
                          <div key={i} className="leading-6">
                            {i + 1}
                          </div>
                        ))}
                      </div>
                      <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full h-64 bg-[#0a0a0a] text-zinc-300 font-mono text-sm p-4 pl-12 resize-y outline-none leading-6 focus:bg-zinc-900/20 transition-colors"
                        spellCheck="false"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            <motion.button
              onClick={runCode}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-white hover:bg-zinc-200 text-black rounded-xl font-bold flex items-center justify-center gap-2 transition-all mt-4"
            >
              {isRunning ? (
                <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              ) : (
                <>
                  <FaPlay size={14} /> Run Code
                </>
              )}
            </motion.button>
          </div>

          {/* Output Column */}
          <div className="flex flex-col gap-4 h-full">
            {/* Preview */}
            <div className="flex-1 bg-[#1a1a1a] rounded-2xl overflow-hidden border border-zinc-800 flex flex-col min-h-[500px]">
              <div className="p-3 bg-zinc-900/50 border-b border-zinc-800 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                </div>
                <span className="text-xs text-zinc-500 font-mono ml-2">
                  Live Preview
                </span>
              </div>
              <iframe
                srcDoc={srcDoc}
                title="Live Output"
                sandbox="allow-scripts"
                className="w-full flex-1 bg-white"
              />
            </div>

            {/* Console */}
            <div className="h-48 bg-[#0a0a0a] rounded-xl overflow-hidden border border-zinc-800 flex flex-col">
              <div className="p-3 bg-zinc-900/50 border-b border-zinc-800 flex items-center gap-2">
                <FaTerminal className="text-zinc-500" size={12} />
                <span className="text-xs text-zinc-500 font-mono">Console</span>
              </div>
              <div className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-1 text-zinc-400">
                {consoleOutput.length === 0 ? (
                  <span className="text-zinc-700 italic">
                    // Console output will appear here...
                  </span>
                ) : (
                  consoleOutput.map((log, i) => (
                    <div
                      key={i}
                      className={`flex gap-2 ${
                        log.type === "error" ? "text-red-400" : "text-zinc-300"
                      }`}
                    >
                      <span className="text-zinc-700 select-none">&gt;</span>
                      <span>{log.message}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section - Minimalist List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 font-cabinetGrotesk">
            <span className="w-3 h-3 bg-main rounded-full" /> Quick Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* HTML */}
            <div className="group border-t border-zinc-800 pt-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FaHtml5 className="text-zinc-500 group-hover:text-orange-500 transition-colors" />{" "}
                HTML
              </h3>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-zinc-700 rounded-full" /> Use
                  semantic tags
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-zinc-700 rounded-full" /> Keep
                  structure clean
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-zinc-700 rounded-full" /> Properly
                  nest elements
                </li>
              </ul>
            </div>

            {/* CSS */}
            <div className="group border-t border-zinc-800 pt-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FaCss3Alt className="text-zinc-500 group-hover:text-blue-500 transition-colors" />{" "}
                CSS
              </h3>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-zinc-700 rounded-full" /> Use
                  Flexbox & Grid
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-zinc-700 rounded-full" /> Avoid
                  inline styles
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-zinc-700 rounded-full" /> Use CSS
                  variables
                </li>
              </ul>
            </div>

            {/* JS */}
            <div className="group border-t border-zinc-800 pt-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FaJs className="text-zinc-500 group-hover:text-yellow-400 transition-colors" />{" "}
                JavaScript
              </h3>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-zinc-700 rounded-full" /> Use
                  const & let
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-zinc-700 rounded-full" /> Keep
                  functions pure
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-zinc-700 rounded-full" /> Debug
                  with console
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default SecureCodePlayground;
