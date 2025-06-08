import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('');

    emailjs
      .send(
        'service_0512u7s', // ✅ Your service ID
        'template_zonmk1p', // ✅ Your template ID
        form,
        'TYMUkjPx-UEgjPAJM' // ✅ Your public key
      )
      .then(
        () => {
          setStatus('✅ Message sent successfully!');
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error(error);
          setStatus('❌ Failed to send message. Please try again.');
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="my-20 px-4 max-w-lg mx-auto text-white">
      <h2 className="text-4xl font-semibold mb-8 text-center">Contact Me</h2>

      <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-xl">
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={sending}
          className={`w-full py-2 text-white rounded ${
            sending
              ? 'bg-gray-500 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700 transition'
          }`}
        >
          {sending ? 'Sending...' : 'Send Message'}
        </button>

        {status && (
          <p
            className={`mt-4 text-center font-medium ${
              status.includes('success') ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
