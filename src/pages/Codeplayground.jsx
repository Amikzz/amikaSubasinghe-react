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
  js: "console.log('Hello from the console!');\n\n// Try changing the text color\ndocument.querySelector('h1').style.color = '#d4f534';",
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
    CSS: false,
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
    <main className="w-full min-h-screen bg-[#111111] text-white flex flex-col items-center pt-32 px-6 md:px-12 lg:px-20 pb-20 relative overflow-hidden font-syne">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3 font-cabinetGrotesk">
            <FaCode className="text-main" /> Code{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-main to-white">
              Playground
            </span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A secure environment to experiment with HTML, CSS, and JavaScript.
          </p>
        </motion.div>

        {/* Editor Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Editors Column */}
          <div className="space-y-4">
            {[
              {
                type: "HTML",
                icon: <FaHtml5 className="text-orange-500" />,
                code: html,
                setCode: setHtml,
                color: "orange",
              },
              {
                type: "CSS",
                icon: <FaCss3Alt className="text-blue-500" />,
                code: css,
                setCode: setCss,
                color: "blue",
              },
              {
                type: "JavaScript",
                icon: <FaJs className="text-yellow-400" />,
                code: js,
                setCode: setJs,
                color: "yellow",
              },
            ].map(({ type, icon, code, setCode, color }) => (
              <motion.div
                key={type}
                layout
                className={`bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 ${
                  expanded[type] ? "ring-1 ring-main/30" : ""
                }`}
              >
                <button
                  onClick={() => toggleExpand(type)}
                  className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {icon}
                    <span className="font-mono font-bold text-sm">{type}</span>
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
                      className="relative"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-10 bg-zinc-900/50 border-r border-white/5 flex flex-col items-end py-4 pr-2 text-zinc-600 font-mono text-xs select-none">
                        {code.split("\n").map((_, i) => (
                          <div key={i} className="leading-6">
                            {i + 1}
                          </div>
                        ))}
                      </div>
                      <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full h-64 bg-zinc-900/30 text-zinc-300 font-mono text-sm p-4 pl-12 resize-y outline-none leading-6 focus:bg-zinc-900/50 transition-colors"
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
              className="w-full py-4 bg-white hover:bg-main text-black rounded-xl font-bold shadow-lg shadow-white/5 flex items-center justify-center gap-2 transition-all"
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
            <div className="flex-1 bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 flex flex-col min-h-[400px]">
              <div className="p-3 bg-white/5 border-b border-white/5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <span className="text-xs text-zinc-500 font-mono ml-2">
                  preview.html
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
            <div className="h-48 bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 flex flex-col">
              <div className="p-3 bg-zinc-900 border-b border-white/5 flex items-center gap-2">
                <FaTerminal className="text-zinc-500" size={12} />
                <span className="text-xs text-zinc-500 font-mono">Console</span>
              </div>
              <div className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-1 bg-zinc-950/50">
                {consoleOutput.length === 0 ? (
                  <span className="text-zinc-600 italic">
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
                      <span className="text-zinc-600 select-none">&gt;</span>
                      <span>{log.message}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaLightbulb className="text-main text-xl" />
            <h2 className="text-xl font-bold text-white font-syne">
              Quick Tips
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="text-blue-400 font-medium text-sm uppercase tracking-wider">
                HTML
              </h3>
              <ul className="text-zinc-400 text-sm space-y-1 list-disc list-inside">
                <li>Use semantic tags</li>
                <li>Keep structure clean</li>
                <li>Properly nest elements</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-violet-400 font-medium text-sm uppercase tracking-wider">
                CSS
              </h3>
              <ul className="text-zinc-400 text-sm space-y-1 list-disc list-inside">
                <li>Use Flexbox & Grid</li>
                <li>Avoid inline styles</li>
                <li>Use CSS variables</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-yellow-400 font-medium text-sm uppercase tracking-wider">
                JavaScript
              </h3>
              <ul className="text-zinc-400 text-sm space-y-1 list-disc list-inside">
                <li>Use const & let</li>
                <li>Keep functions pure</li>
                <li>Debug with console</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default SecureCodePlayground;
