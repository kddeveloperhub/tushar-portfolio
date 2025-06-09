import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setSending(true);
  setStatus('');

  try {
    const response = await fetch('https://tushar-portfolio-4ael.onrender.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setStatus('✅ Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } else {
      const data = await response.json();
      setStatus(`❌ Failed to send message: ${data.error || 'Unknown error'}`);
    }
  } catch (error) {
    setStatus('❌ Failed to send message. Please try again.');
  } finally {
    setSending(false);
  }
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
