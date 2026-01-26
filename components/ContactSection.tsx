"use client";

import { useState, useEffect } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-primary text-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slideInUp">
          <p className="text-accent font-semibold mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let&#39;s Create Something Amazing</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I&#39;m always excited to discuss new projects and opportunities. Feel free to reach out!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: "✉️",
              title: "Email",
              value: "genierosecastillo@example.com",
              link: "mailto:genierosecastillo@example.com",
            },
            {
              icon: "💼",
              title: "LinkedIn",
              value: "linkedin.com/in/genierosecastillo",
              link: "#",
            },
            {
              icon: "🐙",
              title: "GitHub",
              value: "github.com/castillo0507",
              link: "#",
            },
          ].map((method, index) => (
            <a
              key={index}
              href={method.link}
              className="group p-6 bg-gray-900 rounded-lg hover:bg-accent/10 border border-gray-800 hover:border-accent transition-all duration-300 text-center animate-slideInUp"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="text-4xl mb-3">{method.icon}</div>
              <h3 className="font-bold mb-2 group-hover:text-accent transition-colors">{method.title}</h3>
              <p className="text-gray-400 text-sm">{method.value}</p>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        {isMounted && (
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-8 max-w-2xl mx-auto animate-slideInUp">
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center animate-slideInDown">
                ✓ Message sent successfully! I&#39;ll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent text-white font-bold rounded-lg hover:bg-blue-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
            </form>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2026 Genie Rose Castillo-IT31. All Rights Reserved.</p>
          <p className="text-sm mt-2">IT 381 - Application Development and Emerging Technologies</p>
        </div>
      </div>
    </section>
  );
}
