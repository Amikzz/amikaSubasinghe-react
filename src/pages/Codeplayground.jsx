// SecureCodePlayground.jsx
import { useState } from "react";
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
  const [showTips, setShowTips] = useState(false);

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
      <motion.div
        className="flex flex-col md:flex-row gap-6 w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 }
          }
        }}
      >
        {["HTML", "CSS", "JavaScript"].map((type, index) => {
          const codeMap = { HTML: html, CSS: css, JavaScript: js };
          const setterMap = { HTML: setHtml, CSS: setCss, JavaScript: setJs };
          const isExpanded = expanded[type];
          return (
            <motion.div
              key={type}
              className="flex-1 flex flex-col"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <div className="flex justify-between items-center mb-1">
                <label className="text-cyan-400 font-medium">{type}</label>
                <button
                  onClick={() => setExpanded(prev => ({ ...prev, [type]: !prev[type] }))}
                  className="text-sm text-zinc-400 hover:text-cyan-400"
                >
                  {isExpanded ? "Collapse" : "Expand"}
                </button>
              </div>

              <div className="relative bg-zinc-900 rounded-xl shadow-inner border border-zinc-700 overflow-auto">
                <div className="absolute left-0 top-0 bottom-0 w-8 pr-2 text-zinc-500 select-none font-mono text-sm flex flex-col items-end py-2 overflow-hidden">
                  {Array.from({ length: codeMap[type].split("\n").length }, (_, i) => (
                    <span key={i}>{i + 1}</span>
                  ))}
                </div>
                <textarea
                  value={codeMap[type]}
                  onChange={(e) => setterMap[type](e.target.value)}
                  className="bg-zinc-900 text-zinc-50 font-mono text-sm p-2 pl-10 resize-none w-full outline-none focus:ring-2 focus:ring-cyan-400 rounded-xl"
                  style={{ height: isExpanded ? "600px" : "192px" }}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Run Button */}
      <motion.button
        onClick={runCode}
        className="mt-6 bg-zinc-900 border border-zinc-700 text-cyan-400 font-mono px-6 py-3 rounded-xl shadow-inner hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(6, 182, 212, 0.7)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.6 } }}
      >
        <span className="text-cyan-400">▶</span> Run
      </motion.button>

      {/* Output Section */}
      <motion.div
        className="mt-6 flex flex-col md:flex-row gap-6 w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
      >
        <motion.div
          className="flex-1 h-96 border-2 border-zinc-700 rounded-xl overflow-hidden shadow-lg"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
        >
          <iframe
            srcDoc={srcDoc}
            title="Live Output"
            sandbox="allow-scripts"
            frameBorder="0"
            className="w-full h-full bg-zinc-900"
          />
        </motion.div>

        <motion.div
          className="flex-1 max-w-full md:max-w-md bg-zinc-800 rounded-xl p-4 shadow-lg overflow-y-auto h-96 font-mono text-sm"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
        >
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
        </motion.div>
      </motion.div>

      {/* Tips & Tricks */}
      <motion.div
        className="w-full mt-8 bg-zinc-800 rounded-xl p-8 shadow-lg text-zinc-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.8 } }}
      >
        <h2 className="text-cyan-400 text-2xl md:text-3xl font-semibold mb-6 text-center">
          Tips & Tricks
        </h2>

        <div className="space-y-6 text-zinc-300 text-base md:text-lg leading-relaxed">
          <section>
            <h3 className="text-cyan-400 font-medium text-lg md:text-xl mb-2">HTML Tips</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Use semantic tags like <code>&lt;header&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;footer&gt;</code>.</li>
              <li>Keep your HTML structure clean and properly nested.</li>
              <li>Use <code>id</code> and <code>class</code> thoughtfully for styling and JS targeting.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-cyan-400 font-medium text-lg md:text-xl mb-2">CSS Tips</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Use Flexbox and Grid for layout instead of floats.</li>
              <li>Keep reusable styles in classes rather than inline styles.</li>
              <li>Use CSS variables for consistent colors, spacing, and typography.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-cyan-400 font-medium text-lg md:text-xl mb-2">JavaScript Tips</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Use <code>const</code> and <code>let</code> instead of <code>var</code>.</li>
              <li>Keep functions small, reusable, and modular.</li>
              <li>Use <code>console.log</code> to debug and inspect values step by step.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-cyan-400 font-medium text-lg md:text-xl mb-2">Popular Frontend Frameworks</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>React – component-based UI, widely used for SPA development.</li>
              <li>Vue.js – simple syntax with reactive bindings and component support.</li>
              <li>Angular – complete TypeScript-based framework for enterprise apps.</li>
              <li>Svelte – compiler-based, minimal runtime, very fast.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-cyan-400 font-medium text-lg md:text-xl mb-2">Code Editor Usage Tips</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Line numbers help navigate and debug efficiently.</li>
              <li>Expand the editor for longer code snippets.</li>
              <li>Run your JS code frequently to check for errors early.</li>
              <li>Use consistent indentation for readability.</li>
            </ul>
          </section>
        </div>
      </motion.div>

    </main>
  );
};

export default SecureCodePlayground;
