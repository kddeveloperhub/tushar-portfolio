import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  User,
  MessageSquare,
  Phone,
  MapPin,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    try {
      const response = await fetch(
        "https://tushar-portfolio-4ael.onrender.com/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        setStatus(`❌ Failed: ${data.error || "Unknown error"}`);
      }
    } catch {
      setStatus("❌ Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    show: { opacity: 1, x: 0 },
  };

  const fieldAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* ================= CONTACT SECTION ================= */}
      <section
        id="contact"
        className="relative py-32 px-6 max-w-6xl mx-auto text-white overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-500/20 blur-[140px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-500/20 blur-[140px]" />

        <div className="relative grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Let’s build something
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                amazing together
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-400 max-w-md">
              Have a project in mind, a question, or just want to say hello?
              Fill out the form and I’ll get back to you as soon as possible.
            </p>

            {/* CONTACT DETAILS */}
            <div className="mt-10 space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <MapPin className="text-indigo-400" />
                <span>Royal Estate, Near Depot Shiv Mandir, Bhawanigarh</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-indigo-400" />
                <a
                  href="mailto:tushardhawan1607@gmail.com"
                  className="hover:text-indigo-400 transition"
                >
                  tushardhawan1607@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-indigo-400" />
                <a
                  href="tel:9988140768"
                  className="hover:text-indigo-400 transition"
                >
                  +91 99881 40768
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10
            rounded-3xl p-8 shadow-xl space-y-6"
          >
            {/* Name */}
            <motion.div variants={fieldAnim}>
              <label className="flex items-center gap-2 mb-2 text-sm">
                <User size={16} className="text-indigo-400" /> Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-black/40
                border border-white/10 focus:border-indigo-400
                focus:ring-2 focus:ring-indigo-400/40 outline-none transition"
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={fieldAnim}>
              <label className="flex items-center gap-2 mb-2 text-sm">
                <Mail size={16} className="text-indigo-400" /> Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@email.com"
                className="w-full px-4 py-3 rounded-xl bg-black/40
                border border-white/10 focus:border-indigo-400
                focus:ring-2 focus:ring-indigo-400/40 outline-none transition"
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={fieldAnim}>
              <label className="flex items-center gap-2 mb-2 text-sm">
                <MessageSquare size={16} className="text-indigo-400" /> Message
              </label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-black/40
                border border-white/10 focus:border-indigo-400
                focus:ring-2 focus:ring-indigo-400/40 outline-none transition resize-none"
              />
            </motion.div>

            {/* Button */}
            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ y: -2, boxShadow: "0 15px 40px rgba(99,102,241,0.35)" }}
              whileTap={{ scale: 0.97 }}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition ${
                sending
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-indigo-600 to-purple-600"
              }`}
            >
              {sending ? "Sending..." : <><Send size={18} /> Send Message</>}
            </motion.button>

            {/* Status */}
            {status && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center font-medium ${
                  status.includes("✅") ? "text-green-400" : "text-red-400"
                }`}
              >
                {status}
              </motion.p>
            )}
          </motion.form>
        </div>
      </section>

      {/* ================= WHATSAPP FLOATING BUTTON ================= */}
      <a
        href="https://wa.me/919988140768"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full bg-green-500
        flex items-center justify-center
        shadow-lg hover:scale-110 transition"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          className="w-7 h-7"
        >
          <path d="M19.11 17.2c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.6.14-.18.27-.7.89-.86 1.07-.16.18-.32.2-.6.07-.27-.14-1.14-.42-2.18-1.34-.81-.72-1.36-1.6-1.52-1.87-.16-.27-.02-.42.12-.56.13-.13.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.6-1.44-.82-1.97-.22-.53-.45-.46-.6-.47h-.51c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3s.99 2.67 1.13 2.85c.14.18 1.95 2.98 4.73 4.18.66.29 1.18.46 1.58.59.66.21 1.27.18 1.75.11.53-.08 1.62-.66 1.85-1.29.23-.63.23-1.17.16-1.29-.07-.12-.25-.2-.52-.34z"/>
          <path d="M16 3C9.37 3 4 8.37 4 15c0 2.64.86 5.08 2.32 7.05L4 29l7.14-2.29A11.94 11.94 0 0016 27c6.63 0 12-5.37 12-12S22.63 3 16 3zm0 21.82c-2.27 0-4.39-.67-6.17-1.83l-.44-.28-4.24 1.36 1.38-4.13-.29-.43A9.84 9.84 0 016.18 15C6.18 9.58 10.58 5.18 16 5.18S25.82 9.58 25.82 15 21.42 24.82 16 24.82z"/>
        </svg>
      </a>
    </>
  );
}
