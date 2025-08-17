import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email is required";
    if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    emailjs.send(
      "service_6gfos5n",
      "template_10aowbf",
      { from_name: formData.name, from_email: formData.email, message: formData.message },
      "v3Jhn-up11nnRqlcs"
    )
    .then(
      () => {
        setLoading(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      },
      (error) => {
        setLoading(false);
        console.error("Email sending failed:", error.text);
        alert("Oops! Something went wrong. Please try again.");
      }
    );
  };

  // Updated FAQs
  const faqs = [
    {
      question: "How can I collaborate with you?",
      answer: "You can reach me through this contact form or via my social links."
    },
    {
      question: "Do you accept freelance projects?",
      answer: "Yes! Please send project details and I will get back to you promptly."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in full-stack development using Laravel, Flutter, C#, and modern frontend frameworks like React and Tailwind CSS."
    },
    {
      question: "What type of projects do you usually work on?",
      answer: "I work on a variety of projects ranging from web applications, mobile apps, enterprise solutions, to personal portfolio websites."
    },
    {
      question: "Do you contribute to open-source?",
      answer: "Yes, I enjoy contributing to open-source projects and sharing knowledge with the developer community."
    },
    {
      question: "Are you open to internships or collaborations?",
      answer: "Absolutely! I’m always open to learning opportunities, internships, and meaningful collaborations."
    },
    {
      question: "How do you stay updated with technology trends?",
      answer: "I regularly follow tech blogs, watch tutorials, participate in developer communities, and experiment with new technologies."
    },
    {
      question: "What sets you apart as a software engineer?",
      answer: "I combine strong technical skills with practical project experience and a passion for building scalable, user-friendly solutions."
    },
    {
      question: "What are your hobbies?",
      answer: "Coding is one of my hobbies itself. Apart from that, I love to play cricket, watch movies, and travel."
    },
    {
      question: "How can someone get in touch with you for professional inquiries?",
      answer: "The best way is through the contact form on my website or via my LinkedIn and GitHub profiles."
    }
  ];

  return (
    <main className="w-full min-h-screen bg-zinc-900 text-zinc-50 flex flex-col items-center justify-start pt-32 px-6 md:px-20 relative">

      {/* Hero Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold text-cyan-400 mb-6 text-center"
      >
        Contact Me
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-zinc-400 text-center mb-12 max-w-3xl"
      >
        Have a question, want to collaborate, or just want to say Hi! Fill out the form below or reach me via socials.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full max-w-2xl bg-zinc-800 rounded-xl p-8 shadow-lg space-y-4"
      >
        <div className="flex flex-col space-y-1">
          <label htmlFor="name" className="text-zinc-400 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={`bg-zinc-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${errors.name && 'ring-2 ring-red-500'}`}
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="text-zinc-400 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className={`bg-zinc-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${errors.email && 'ring-2 ring-red-500'}`}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="message" className="text-zinc-400 font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            rows={6}
            className={`bg-zinc-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none ${errors.message && 'ring-2 ring-red-500'}`}
          />
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="relative flex items-center justify-center bg-cyan-400 text-zinc-900 font-semibold px-6 py-3 rounded-md hover:bg-cyan-500 transition disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <motion.div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : "Send Message"}
        </button>
      </motion.form>

      {/* Success Popup */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg z-50"
          >
            🎉 Thank you! Your message has been sent.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Additional Info & Socials */}
      <motion.div className="mt-16 max-w-2xl text-center space-y-4">
        <p className="text-zinc-400"><strong>Email:</strong> <span className="text-cyan-400 font-mono">amikasubasinghe@gmail.com</span></p>
        <p className="text-zinc-400"><strong>Phone:</strong> <span className="text-cyan-400 font-mono">+94 78 756 4524</span></p>
        <p className="text-zinc-400"><strong>Location:</strong> Colombo, Sri Lanka</p>

        <div className="flex justify-center space-x-6 mt-4 text-2xl text-cyan-400">
          <a href="https://linkedin.com/in/amika-subasinghe-a52b6a1a9" target="_blank" rel="noreferrer"><FaLinkedin className="hover:scale-125 transition"/></a>
          <a href="https://github.com/Amikzz" target="_blank" rel="noreferrer"><FaGithub className="hover:scale-125 transition"/></a>
          <a href="https://x.com/amikasubasinghe" target="_blank" rel="noreferrer"><FaTwitter className="hover:scale-125 transition"/></a>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div className="mt-16 max-w-2xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-8 text-center">FAQs</h2>

        {faqs.map((faq, index) => {
          const [open, setOpen] = useState(false);

          return (
            <motion.div
              key={index}
              className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <motion.button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-zinc-50 font-medium focus:outline-none"
              >
                <span>{faq.question}</span>
                <motion.span
                  animate={{ rotate: open ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4 text-cyan-400"
                >
                  +
                </motion.span>
              </motion.button>

              <motion.div
                initial={false}
                animate={{ maxHeight: open ? 200 : 0, opacity: open ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="px-6 overflow-hidden text-zinc-400"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: open ? 1 : 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="pb-4"
                >
                  {faq.answer}
                </motion.p>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Footer */}
      <motion.div className="mt-12 mb-12 text-center text-zinc-400">
        <p>© 2025 Amika Subasinghe. All rights reserved.</p>
      </motion.div>
    </main>
  );
};

export default Contact;
