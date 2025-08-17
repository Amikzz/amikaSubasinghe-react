import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Information I Collect",
    content: [
      "I do not collect sensitive personal information without consent.",
      "Non-identifiable information may be collected for analytics and website functionality, including:",
      [
        "IP address and browser type.",
        "Interaction with contact forms and buttons.",
        "Cookies to enhance website performance and analytics.",
      ],
    ],
  },
  {
    title: "2. How I Use Data",
    content: [
      "Collected information is used solely to improve the website and provide better services.",
      "Examples include:",
      [
        "Responding to contact form submissions promptly.",
        "Understanding user engagement and improving website UX.",
        "Monitoring performance and security of the website.",
      ],
    ],
  },
  {
    title: "3. Cookies",
    content: [
      "Minimal cookies are used for analytics and functionality.",
      "You can control or disable cookies in your browser settings.",
    ],
  },
  {
    title: "4. Third-Party Services",
    content: [
      "I may use third-party services for hosting, analytics, or email processing. These may include:",
      [
        "Google Analytics – for traffic insights.",
        "Netlify/Vercel – for hosting and deployment.",
        "Mail services for handling contact form submissions.",
      ],
      "These services may collect limited data according to their privacy policies.",
    ],
  },
  {
    title: "5. Data Retention",
    content: [
      "Information submitted via contact forms is retained only as long as necessary to respond to inquiries.",
      "Analytical data is retained anonymously for improving site functionality and trends analysis.",
    ],
  },
  {
    title: "6. Security",
    content: [
      "I implement reasonable technical and administrative measures to protect data.",
      "However, no transmission over the internet or storage method is 100% secure.",
      "Always exercise caution when sharing personal data online.",
    ],
  },
  {
    title: "7. Children's Privacy",
    content: [
      "This website is not intended for children under 13.",
      "I do not knowingly collect personal information from children under this age.",
    ],
  },
  {
    title: "8. Your Rights",
    content: [
      "You have the right to request access, correction, or deletion of your personal information submitted through this website.",
      "If you wish to exercise these rights, please contact me via email.",
    ],
  },
  {
    title: "9. Contact Me",
    content: [
      "For any questions or concerns about this privacy policy or your data, please reach out to:",
      ["Email: amikasubasinghe@gmail.com"],
    ],
  },
  {
    title: "10. Changes to This Policy",
    content: [
      "This privacy policy may be updated from time to time.",
      "Any changes will be posted here with an updated effective date.",
    ],
  },
];

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-zinc-100">
      {/* Main Privacy Content */}
      <main className="flex-1 px-6 md:px-20 pt-36 pb-12 space-y-12 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-cyan-400 mb-6 text-center md:text-left"
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-zinc-400 mb-12 text-center md:text-left text-lg"
        >
          Your privacy is important. This policy outlines how I handle your personal information and how your data is collected, used, and protected.
        </motion.p>

        {/* Sections */}
        {sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-semibold text-cyan-400">{section.title}</h2>
            {section.content.map((paragraph, idx) =>
              Array.isArray(paragraph) ? (
                <ul key={idx} className="list-disc list-inside text-zinc-400 space-y-1">
                  {paragraph.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              ) : (
                <p key={idx} className="text-zinc-400 text-lg">{paragraph}</p>
              )
            )}
          </motion.section>
        ))}
      </main>
    </div>
  );
};

export default Privacy;
