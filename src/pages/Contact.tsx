import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        const scriptUrl = import.meta.env.VITE_CONTACT_FORM_APPS_SCRIPT_URL;
        
        if (!scriptUrl) {
          throw new Error("Target URL not configured. Please set VITE_CONTACT_FORM_APPS_SCRIPT_URL in your environment variables.");
        }

        const response = await fetch(scriptUrl, {
          method: "POST",
          mode: "no-cors", // Apps Script often requires no-cors for direct browser POSTs from different origins
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        // Since we're using no-cors, we can't reliably read the response body or status.
        // Usually, no-cors results in an opaque response.
        // If it didn't throw an error, we assume success for the UI state.
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "", honeypot: "" });
      } catch (err: any) {
        console.error("Submission error:", err);
        setSubmitError(err.message || "Something went wrong. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900">Let's Connect</h1>
              <p className="text-xl text-stone-600 leading-relaxed max-w-lg">
                Whether you're looking for strategic advice or have a specific financial query, our team is here to help you navigate your journey.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-olive/10 rounded-xl flex items-center justify-center text-olive shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-1">Head Office</h3>
                  <p className="text-stone-600">P-20, Ground Floor, South Extention - II<br />New Delhi - 110049</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-olive/10 rounded-xl flex items-center justify-center text-olive shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-1">Phone</h3>
                  <div className="space-y-1 text-stone-600">
                    <p>Tel: 011-40581276 (10 AM - 06 PM)</p>
                    <p>Mob: +91-96500-67855</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-olive/10 rounded-xl flex items-center justify-center text-olive shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-1">Email</h3>
                  <p className="text-stone-600">raysmaven@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-warm-cream rounded-3xl space-y-4">
              <h4 className="font-serif font-bold text-xl text-stone-900">Business Hours</h4>
              <div className="space-y-2 text-stone-600">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-warm-white p-8 md:p-12 rounded-3xl shadow-xl border border-stone-100">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
              >
                <div className="w-20 h-20 bg-olive/10 rounded-full flex items-center justify-center text-olive">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-serif font-bold text-stone-900">Message Sent!</h3>
                  <p className="text-stone-600">Thank you for reaching out. One of our experts will get back to you within 24 hours.</p>
                </div>
                <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full border-olive! text-olive! hover:bg-olive! hover:text-warm-white! transition-all duration-300">
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field for spam protection */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="honeypot"
                    tabIndex={-1}
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    autoComplete="off"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    className={cn("placeholder:opacity-50", errors.name ? "border-red-500" : "")}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className={cn("placeholder:opacity-50", errors.email ? "border-red-500" : "")}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your requirements..." 
                    className={cn("min-h-[150px] placeholder:opacity-50", errors.message ? "border-red-500" : "")}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  {errors.message && <p className="text-xs text-red-500 font-medium">{errors.message}</p>}
                </div>

                {submitError && (
                  <p className="text-sm text-red-500 font-medium bg-red-50 p-3 rounded-lg border border-red-100 italic">
                    {submitError}
                  </p>
                )}

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-olive! text-warm-white! border border-olive! hover:bg-transparent! hover:text-olive! rounded-full py-6 text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-warm-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5 mr-2" /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
