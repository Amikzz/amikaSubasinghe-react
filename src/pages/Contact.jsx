import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import SEO from "../components/SEO";

const FAQItem = ({ faq }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="bg-zinc-50 dark:bg-[#1a1a1a] rounded-xl overflow-hidden cursor-pointer border border-black/5 dark:border-white/5 hover:border-main/50 transition-colors"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center px-6 py-4">
        <span className="font-medium text-zinc-800 dark:text-zinc-200">
          {faq.question}
        </span>
        <span
          className={`text-main text-xl transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-4 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed"
          >
            {faq.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@"))
      newErrors.email = "Valid email is required";
    if (formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    emailjs
      .send(
        "service_6gfos5n",
        "template_10aowbf",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "v3Jhn-up11nnRqlcs",
      )
      .then(
        () => {
          setLoading(false);
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setSubmitted(false), 5000);
        },
        (error) => {
          setLoading(false);
          console.error("Email sending failed:", error.text);
          alert("Oops! Something went wrong. Please try again.");
        },
      );
  };

  const faqs = [
    {
      question: "How can I collaborate with you?",
      answer:
        "You can reach me through this contact form or via my social links. I'm always open to discussing new ideas.",
    },
    {
      question: "Do you accept freelance projects?",
      answer:
        "Yes! Please send project details and I will get back to you promptly to discuss feasibility and timeline.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in full-stack development using Laravel, Flutter, C#, and modern frontend frameworks like React and Tailwind CSS.",
    },
    {
      question: "Are you open to internships?",
      answer:
        "Absolutely! I’m always open to learning opportunities, internships, and meaningful collaborations.",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-white dark:bg-[#111111] text-zinc-900 dark:text-white flex flex-col items-center justify-start pt-32 px-6 md:px-12 lg:px-24 pb-20 relative overflow-hidden font-syne">
      <SEO
        title="Contact Me"
        description="Get in touch with Amika Subasinghe for collaborations, freelance projects, or job opportunities."
      />
      <div className="w-full z-10 flex flex-col gap-16">
        {/* Top: Title & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full mb-12"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-zinc-900 dark:text-white mb-8 tracking-tighter leading-[0.9] font-cabinetGrotesk">
            Let's <br />
            <span className="text-zinc-600">Connect.</span>
          </h1>
          <div className="w-full h-[1px] bg-zinc-200 dark:bg-zinc-800 mt-12 mb-8" />
          <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl font-light max-w-2xl">
            Have a project in mind or just want to chat? I'm always open to new
            opportunities and collaborations.
          </p>
        </motion.div>

        {/* Middle: Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-zinc-100/40 dark:bg-zinc-900/40 backdrop-blur-md p-8 md:p-12 rounded-3xl space-y-6 border border-black/5 dark:border-white/5 h-full relative z-10"
          >
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-zinc-600 dark:text-zinc-300"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full bg-zinc-50 dark:bg-zinc-900/50 border ${
                  errors.name
                    ? "border-red-500/50"
                    : "border-zinc-300 dark:border-zinc-700"
                } rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-main focus:ring-1 focus:ring-main transition-all`}
              />
              {errors.name && (
                <span className="text-red-400 text-xs">{errors.name}</span>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-zinc-600 dark:text-zinc-300"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={`w-full bg-zinc-50 dark:bg-zinc-900/50 border ${
                  errors.email
                    ? "border-red-500/50"
                    : "border-zinc-300 dark:border-zinc-700"
                } rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-main focus:ring-1 focus:ring-main transition-all`}
              />
              {errors.email && (
                <span className="text-red-400 text-xs">{errors.email}</span>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-zinc-600 dark:text-zinc-300"
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                className={`w-full bg-zinc-50 dark:bg-zinc-900/50 border ${
                  errors.message
                    ? "border-red-500/50"
                    : "border-zinc-300 dark:border-zinc-700"
                } rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-main focus:ring-1 focus:ring-main transition-all resize-none`}
              />
              {errors.message && (
                <span className="text-red-400 text-xs">{errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-zinc-900 hover:bg-main text-white dark:bg-white dark:text-black font-semibold py-3.5 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-white/5"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              ) : (
                <>
                  Send Message <FaPaperPlane size={14} />
                </>
              )}
            </button>
          </motion.form>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-zinc-100/40 dark:bg-zinc-900/40 backdrop-blur-md p-8 rounded-3xl space-y-8 border border-black/5 dark:border-white/5 h-full flex flex-col relative z-10"
          >
            <div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 font-syne">
                Contact Information
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                Feel free to reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-6 flex-grow">
              <div className="flex items-center gap-4 text-zinc-700 dark:text-zinc-300">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 flex items-center justify-center text-main border border-zinc-200 dark:border-zinc-800">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:amikasubasinghe@gmail.com"
                    className="hover:text-white transition-colors text-lg"
                  >
                    amikasubasinghe@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-zinc-700 dark:text-zinc-300">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 flex items-center justify-center text-main border border-zinc-200 dark:border-zinc-800">
                  <FaPhone size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+94787564524"
                    className="hover:text-white transition-colors text-lg"
                  >
                    +94 78 756 4524
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-zinc-700 dark:text-zinc-300">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 flex items-center justify-center text-main border border-zinc-200 dark:border-zinc-800">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                    Location
                  </p>
                  <p className="text-lg">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex gap-4">
              <a
                href="https://linkedin.com/in/amika-subasinghe-a52b6a1a9"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/Amikzz"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-600 transition-all"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://x.com/amikasubasinghe"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:bg-black hover:text-white hover:border-zinc-800 transition-all"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom: FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-3xl mx-auto w-full pt-10"
        >
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 font-syne text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Success Popup */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-10 right-10 bg-zinc-900 border border-green-500/50 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 z-50"
          >
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
              <FaPaperPlane size={14} />
            </div>
            <div>
              <h4 className="font-bold text-sm">Message Sent!</h4>
              <p className="text-zinc-400 text-xs">
                I'll get back to you soon.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Contact;
