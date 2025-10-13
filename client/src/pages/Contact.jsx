import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare } from "lucide-react";

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
      const response = await fetch("https://tushar-portfolio-4ael.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        setStatus(`❌ Failed: ${data.error || "Unknown error"}`);
      }
    } catch (error) {
      setStatus("❌ Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative my-32 px-6 sm:px-8 lg:px-0 max-w-2xl mx-auto text-white"
    >
      {/* Glowing Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/20 to-transparent blur-3xl animate-pulse" />

      {/* Header */}
      <div className="relative text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-indigo-400">
          Get In Touch
        </h2>
        <p className="text-gray-400 mt-3 text-lg max-w-md mx-auto">
          Have a project in mind or just want to say hello? Let’s connect and make something amazing!
        </p>
      </div>

      {/* Form Container */}
      <motion.form
        onSubmit={handleSubmit}
        className="relative bg-gray-900/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl space-y-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Name Field */}
        <div className="space-y-2">
          <label htmlFor="name" className="block font-medium flex items-center gap-2">
            <User size={18} className="text-indigo-400" /> Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="block font-medium flex items-center gap-2">
            <Mail size={18} className="text-indigo-400" /> Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label htmlFor="message" className="block font-medium flex items-center gap-2">
            <MessageSquare size={18} className="text-indigo-400" /> Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Your message..."
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          ></textarea>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={sending}
          whileTap={{ scale: 0.97 }}
          className={`w-full flex items-center justify-center gap-2 py-3 font-semibold text-white rounded-lg transition-all ${
            sending
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30"
          }`}
        >
          {sending ? (
            "Sending..."
          ) : (
            <>
              <Send size={18} /> Send Message
            </>
          )}
        </motion.button>

        {/* Status Message */}
        {status && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-4 text-center font-medium ${
              status.includes("✅") ? "text-green-400" : "text-red-400"
            }`}
          >
            {status}
          </motion.p>
        )}
      </motion.form>
    </section>
  );
}
