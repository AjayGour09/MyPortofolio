import React, { useState } from "react";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setSent(false);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#050816] text-white px-6">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-20 blur-[150px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 relative z-10">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Let’s <span className="text-purple-400">Connect</span>
          </h1>

          <p className="text-gray-400">
            Open for internships, freelance projects, and collaboration.
            Feel free to reach out 🚀
          </p>

          <div className="space-y-3 mt-6">

            <Info title="Email" value="your@email.com" />
            <Info title="Location" value="India" />
            <Info title="Availability" value="Open to Work" />

          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">
            <Social text="GitHub" />
            <Social text="LinkedIn" />
            <Social text="Twitter" />
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 space-y-6 shadow-2xl"
        >

          <h2 className="text-2xl font-semibold mb-4">
            Send Message ✉️
          </h2>

          <FloatingInput
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <FloatingInput
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <FloatingTextarea
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition duration-300 py-3 rounded-xl font-semibold"
          >
            Send Message 🚀
          </button>

          {sent && (
            <p className="text-green-400 text-sm">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

const Info = ({ title, value }) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
    <p className="text-gray-400 text-sm">{title}</p>
    <p className="font-semibold">{value}</p>
  </div>
);

const Social = ({ text }) => (
  <button className="px-4 py-2 border border-white/20 rounded-xl hover:bg-white/10 transition">
    {text}
  </button>
);

const FloatingInput = ({ label, name, value, onChange }) => (
  <div className="relative">
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      required
      className="peer w-full bg-transparent border border-white/20 rounded-xl px-4 pt-6 pb-2 focus:outline-none"
    />
    <label className="absolute left-4 top-2 text-sm text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm transition-all">
      {label}
    </label>
  </div>
);

const FloatingTextarea = ({ label, name, value, onChange }) => (
  <div className="relative">
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      required
      rows="4"
      className="peer w-full bg-transparent border border-white/20 rounded-xl px-4 pt-6 pb-2 focus:outline-none"
    />
    <label className="absolute left-4 top-2 text-sm text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm transition-all">
      {label}
    </label>
  </div>
);

export default Contact;