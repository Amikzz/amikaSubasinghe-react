import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const defaultCode = {
  html: "<h1>Hello World!</h1>",
  css: "h1 { color: cyan; text-align: center; font-family: monospace; }",
  js: "console.log('Hello World!');"
};

const escapeHTML = (str) =>
  str.replace(/[&<>"'`]/g, (match) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "`": "&#96;"
  }[match]));

const SecureCodePlayground = () => {
  const [html, setHtml] = useState(defaultCode.html);
  const [css, setCss] = useState(defaultCode.css);
  const [js, setJs] = useState(defaultCode.js);
  const [srcDoc, setSrcDoc] = useState("");
  const [consoleOutput, setConsoleOutput] = useState([]);
  const [expanded, setExpanded] = useState({ HTML: false, CSS: false, JavaScript: false });

  const runCode = () => {
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
      setConsoleOutput(prev => [...prev, { type: e.data.type, message: sanitizedMessage }]);
    };
    worker.postMessage({ code: js, timeout: 2000 });
  };

  return (
    <main className="w-full min-h-screen bg-zinc-900 text-zinc-50 flex flex-col items-center pt-32 px-6 md:px-20">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold text-cyan-400 mb-4 text-center"
      >
        Secure Code Playground
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-zinc-400 text-center mb-12 max-w-3xl"
      >
        Write HTML, CSS, and JavaScript safely. Click <span className="text-cyan-400 font-semibold">Run</span> to see live result and console output.
      </motion.p>

      {/* Editors */}
      <motion.div className="flex flex-col md:flex-row gap-6 w-full">
        {["HTML", "CSS", "JavaScript"].map((type) => {
          const codeMap = { HTML: html, CSS: css, JavaScript: js };
          const setterMap = { HTML: setHtml, CSS: setCss, JavaScript: setJs };
          const isExpanded = expanded[type];
          return (
            <div key={type} className="flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-1">
                <label className="text-cyan-400 font-medium">{type}</label>
                <button
                  onClick={() => setExpanded(prev => ({ ...prev, [type]: !prev[type] }))}
                  className="text-sm text-zinc-400 hover:text-cyan-400"
                >
                  {isExpanded ? "Collapse" : "Expand"}
                </button>
              </div>

              <div className={`relative bg-zinc-900 rounded-xl shadow-inner border border-zinc-700 overflow-auto`}>
                {/* Line numbers */}
                <div className="absolute left-0 top-0 bottom-0 w-8 pr-2 text-zinc-500 select-none font-mono text-sm flex flex-col items-end py-2 overflow-hidden">
                  {Array.from({ length: codeMap[type].split('\n').length }, (_, i) => (
                    <span key={i}>{i + 1}</span>
                  ))}
                </div>
                <textarea
                  value={codeMap[type]}
                  onChange={(e) => setterMap[type](e.target.value)}
                  className={`bg-zinc-900 text-zinc-50 font-mono text-sm p-2 pl-10 resize-none w-full outline-none focus:ring-2 focus:ring-cyan-400 rounded-xl`}
                  style={{ height: isExpanded ? "600px" : "192px" }}
                />
              </div>
            </div>
          );
        })}
      </motion.div>

      <motion.button
        onClick={runCode}
        className="mt-6 bg-cyan-400 hover:bg-cyan-500 text-zinc-900 font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Run
      </motion.button>

      {/* Output */}
      <motion.div className="mt-6 flex flex-col md:flex-row gap-6 w-full">
        <div className="flex-1 h-96 border-2 border-zinc-700 rounded-xl overflow-hidden shadow-lg">
          <iframe
            srcDoc={srcDoc}
            title="Live Output"
            sandbox="allow-scripts"
            frameBorder="0"
            className="w-full h-full bg-zinc-900"
          />
        </div>

        <div className="flex-1 max-w-full md:max-w-md bg-zinc-800 rounded-xl p-4 shadow-lg overflow-y-auto h-96 font-mono text-sm">
          <h3 className="text-cyan-400 mb-2 font-medium">Console Output:</h3>
          {consoleOutput.length === 0 ? (
            <p className="text-zinc-400">No logs yet. Run your code!</p>
          ) : (
            <pre className="whitespace-pre-wrap">
              {consoleOutput.map((entry, idx) => (
                <div key={idx} className={entry.type === "error" ? "text-red-500" : "text-zinc-50"}>
                  {entry.message}
                </div>
              ))}
            </pre>
          )}
        </div>
      </motion.div>
    </main>
  );
};

export default SecureCodePlayground;
