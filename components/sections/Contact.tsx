"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Input, Textarea } from "@/components/Input";
import Button from "@/components/Button";
import { BentoCard } from "@/components/Card";
import Reveal from "@/animations/Reveal";
import TextReveal from "@/animations/TextReveal";
import { PROFILE_DATA } from "@/data/config";

interface FormValues {
  name: string;
  email: string;
  company: string;
  role: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormValues>({
    name: "",
    email: "",
    company: "",
    role: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [honeypot, setHoneypot] = useState("");
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [toast, setToast] = useState<{
    visible: boolean;
    type: "success" | "error";
    message: string;
  }>({ visible: false, type: "success", message: "" });

  const triggerToast = (type: "success" | "error", message: string) => {
    setToast({ visible: true, type, message });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!form.name.trim()) tempErrors.name = "Name is required";
    if (!form.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!form.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Spam Honeypot Protection
    if (honeypot) {
      setStatus("success");
      setForm({ name: "", email: "", company: "", role: "", subject: "", message: "" });
      return;
    }

    // Rate-Limiting Spam Protection
    const now = Date.now();
    if (now - lastSubmitTime < 10000) { // 10s cooldown
      triggerToast("error", "Rate limit exceeded. Please wait 10 seconds before transmitting again.");
      return;
    }
    setLastSubmitTime(now);

    setStatus("submitting");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    if (!serviceId || !templateId || !publicKey) {
      // Fallback for development if keys aren't set yet
      console.warn("EmailJS credentials missing. Falling back to local simulation.");
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus("success");
        setForm({ name: "", email: "", company: "", role: "", subject: "", message: "" });
        triggerToast("success", "Simulation transmission complete. Message processed locally.");
      } catch (err) {
        setStatus("error");
        triggerToast("error", "Simulated transmission failed.");
      }
      return;
    }

    try {
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        company: form.company || "Not Specified",
        role: form.role || "Not Specified",
        subject: form.subject || "No Subject",
        message: form.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setStatus("success");
      setForm({ name: "", email: "", company: "", role: "", subject: "", message: "" });
      triggerToast("success", "Transmission complete! Connection established with Anurag.");
    } catch (err) {
      console.error("EmailJS Transmission Failure:", err);
      setStatus("error");
      triggerToast("error", "Transmission failed. Verify connection settings and retry.");
    }
  };

  return (
    <section id="contact" className="relative w-full py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-16">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent-blue">
            08 / Connection
          </span>
          <TextReveal
            text="Let's build something great."
            as="h2"
            type="words"
            className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-foreground"
          />
        </div>

        {/* Form & Contact details columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Contact metadata */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10 text-left h-full">
            <div className="space-y-6">
              <Reveal variant="fade-up" delay={0.1}>
                <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                  Connect Node
                </h3>
              </Reveal>
              <Reveal variant="fade-up" delay={0.2}>
                <p className="text-sm md:text-base text-foreground/70 font-sans leading-relaxed">
                  Have an open SDE role, an interesting AI research proposal, or just want to chat about agentic system designs? Drop a message here, and I'll get back to you within 24 hours.
                </p>
              </Reveal>
            </div>

            {/* Info lists */}
            <div className="space-y-5 font-sans text-xs md:text-sm text-foreground/80 pt-6 border-t border-neutral-border">
              <Reveal variant="fade-up" delay={0.3} className="flex items-center gap-3">
                <div className="p-2.5 bg-neutral-soft border border-neutral-border rounded-xl">
                  <Mail className="h-4.5 w-4.5 text-accent-blue" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider font-semibold text-foreground/45">Email</span>
                  <a href={`mailto:${PROFILE_DATA.email}`} className="font-medium hover:underline text-foreground">
                    {PROFILE_DATA.email}
                  </a>
                </div>
              </Reveal>

              <Reveal variant="fade-up" delay={0.4} className="flex items-center gap-3">
                <div className="p-2.5 bg-neutral-soft border border-neutral-border rounded-xl">
                  <Phone className="h-4.5 w-4.5 text-accent-blue" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider font-semibold text-foreground/45">Phone / WhatsApp</span>
                  <a href={`tel:${PROFILE_DATA.phone}`} className="font-medium hover:underline text-foreground">
                    {PROFILE_DATA.phone}
                  </a>
                </div>
              </Reveal>

              <Reveal variant="fade-up" delay={0.5} className="flex items-center gap-3">
                <div className="p-2.5 bg-neutral-soft border border-neutral-border rounded-xl">
                  <MapPin className="h-4.5 w-4.5 text-accent-blue" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider font-semibold text-foreground/45">Base Coordinates</span>
                  <span className="font-medium">{PROFILE_DATA.location}</span>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Side: Contact Form Container */}
          <div className="lg:col-span-7">
            <Reveal variant="zoom-in" delay={0.2} duration={0.8}>
              <BentoCard className="p-6 md:p-8 relative overflow-hidden min-h-[500px] flex flex-col justify-center">
                
                {/* Form Elements */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Full Name *"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      error={errors.name}
                      placeholder="Anurag Thakur"
                      disabled={status === "submitting"}
                    />
                    <Input
                      label="Email Address *"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      error={errors.email}
                      placeholder="name@company.com"
                      disabled={status === "submitting"}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Company Name"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="e.g. Google"
                      disabled={status === "submitting"}
                    />
                    <Input
                      label="Role / Title"
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      placeholder="e.g. Technical Recruiter"
                      disabled={status === "submitting"}
                    />
                  </div>

                  <Input
                    label="Subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="SDE Internship / AI Developer Role Opportunity"
                    disabled={status === "submitting"}
                  />

                  <Textarea
                    label="Message Content *"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    error={errors.message}
                    placeholder="Write details of the opportunity here..."
                    disabled={status === "submitting"}
                  />

                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                    autoComplete="off"
                    tabIndex={-1}
                  />

                  <div className="flex items-center justify-end pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      magnetic
                      disabled={status === "submitting"}
                      icon={<Send className="h-4.5 w-4.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />}
                    >
                      {status === "submitting" ? "Transmitting..." : "Send Message"}
                    </Button>
                  </div>
                </form>

                {/* Submitting Loading overlay */}
                <AnimatePresence>
                  {status === "submitting" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-background/60 backdrop-blur-xs flex items-center justify-center z-20 pointer-events-auto"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div className="h-8 w-8 rounded-full border-2 border-accent-blue/30 border-t-accent-blue animate-spin" />
                        <span className="text-xs font-sans font-bold tracking-widest uppercase text-foreground/60 animate-pulse">
                          Transmitting Packets...
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Success Overlay Panel */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ ease: [0.16, 1, 0.3, 1] as [number, number, number, number], duration: 0.4 }}
                      className="absolute inset-0 bg-neutral-card flex flex-col items-center justify-center p-6 text-center z-30 pointer-events-auto"
                    >
                      <div className="flex flex-col items-center gap-5 max-w-sm">
                        <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                          <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-display text-xl font-bold text-foreground">
                            Transmission Successful
                          </h4>
                          <p className="text-xs font-sans text-foreground/60 leading-relaxed">
                            Thank you! Your connection request has been received. I will review the payload parameters and respond shortly.
                          </p>
                        </div>
                        <Button
                          onClick={() => setStatus("idle")}
                          variant="secondary"
                          size="sm"
                          magnetic
                        >
                          Send New Message
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Failure State Notice */}
                {status === "error" && (
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-red-500 font-sans p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <AlertCircle className="h-4.5 w-4.5 shrink-0" />
                    <span>Transmission failed. Verify connection status and try again.</span>
                    <button
                      onClick={() => setStatus("idle")}
                      className="ml-auto underline hover:text-red-600 transition-colors"
                    >
                      Dismiss
                    </button>
                  </div>
                )}

              </BentoCard>
            </Reveal>
          </div>

        </div>

      </div>

      {/* Floating Toast Notification Container */}
      <AnimatePresence>
        {toast.visible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={cn(
              "fixed bottom-6 right-6 z-[9999] flex items-center gap-3 p-4 rounded-2xl border shadow-premium font-sans text-xs max-w-sm pointer-events-auto",
              toast.type === "success"
                ? "bg-neutral-card border-emerald-500/20 text-foreground"
                : "bg-neutral-card border-red-500/20 text-foreground"
            )}
          >
            <div className={cn(
              "p-1.5 rounded-lg shrink-0",
              toast.type === "success" ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"
            )}>
              {toast.type === "success" ? (
                <CheckCircle2 className="h-4.5 w-4.5" />
              ) : (
                <AlertCircle className="h-4.5 w-4.5" />
              )}
            </div>
            <div className="flex-1 space-y-0.5">
              <span className="block font-bold">
                {toast.type === "success" ? "Signal Transmitted" : "Transmission Failure"}
              </span>
              <span className="block text-foreground/60 leading-normal">{toast.message}</span>
            </div>
            <button
              onClick={() => setToast((prev) => ({ ...prev, visible: false }))}
              className="text-foreground/30 hover:text-foreground transition-colors p-1"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
