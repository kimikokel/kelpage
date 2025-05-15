import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";

type ContactFormProps = {
  triggerShake: () => void;
};

export default function ContactForm({ triggerShake }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      setError("Please fill in all fields.");
      triggerShake();
      return;
    }

    setError("");
    if (formRef.current) {
      formRef.current.submit();
    }
  };

  return (
    <form
      ref={formRef}
      className="grid gap-4"
      action="https://formspree.io/f/xldbaopj"
      method="POST"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-[#161b22] border border-[#30363d] rounded-md focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-[#161b22] border border-[#30363d] rounded-md focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-[#161b22] border border-[#30363d] rounded-md focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-[#161b22] border border-[#30363d] rounded-md focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent"
        />
      </div>

      {error && (
        <div className="text-red-500 text-sm font-medium -mt-2">{error}</div>
      )}

      <Button
        type="submit"
        className="w-full bg-[#238636] hover:bg-[#2ea043] text-white"
      >
        Send Message
      </Button>
    </form>
  );
}
