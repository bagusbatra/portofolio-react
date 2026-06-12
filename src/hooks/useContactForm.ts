import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { contactFormSchema, type ContactFormData } from "../schemas/contactForm";

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: undefined,
      message: "",
    },
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error || "Failed to send your message. Please try again.");
      }

      setIsSuccess(true);
      form.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Failed to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  });

  return {
    ...form,
    isSubmitting,
    isSuccess,
    errorMessage,
    handleSubmit,
  };
}
