import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

type ContactFormProps = {
  triggerShake: () => void;
};

export default function ContactForm({ triggerShake }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const { t, isInitialized } = useTranslation();
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
          <label
            htmlFor="name"
            className="font-mono text-xs uppercase tracking-[0.12em] text-[#7d8187]"
          >
            {t("contact.name")}
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#212327] bg-[#1a1c20] px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-white/60"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="font-mono text-xs uppercase tracking-[0.12em] text-[#7d8187]"
          >
            {t("contact.email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#212327] bg-[#1a1c20] px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-white/60"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="font-mono text-xs uppercase tracking-[0.12em] text-[#7d8187]"
        >
          {t("contact.subject")}
        </label>
        <input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full rounded-lg border border-[#212327] bg-[#1a1c20] px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-white/60"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="font-mono text-xs uppercase tracking-[0.12em] text-[#7d8187]"
        >
          {t("contact.message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-[#212327] bg-[#1a1c20] px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-white/60"
        />
      </div>

      {error && (
        <div className="-mt-2 text-sm font-medium text-[#ffc285]">{error}</div>
      )}

      <Button type="submit" variant="outline" className="w-full text-white">
        {t("contact.send")}
      </Button>
    </form>
  );
}
