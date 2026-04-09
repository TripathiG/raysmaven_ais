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
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      // In a real app, you'd send the data here
      console.log("Form submitted:", formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
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
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-1">Our Office</h3>
                  <p className="text-stone-600">123 Financial District, Suite 500<br />New York, NY 10004</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-olive/10 rounded-xl flex items-center justify-center text-olive shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-1">Phone</h3>
                  <p className="text-stone-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-olive/10 rounded-xl flex items-center justify-center text-olive shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-1">Email</h3>
                  <p className="text-stone-600">contact@raysmaven.com</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-warm-cream rounded-3xl space-y-4">
              <h4 className="font-serif font-bold text-xl text-stone-900">Business Hours</h4>
              <div className="space-y-2 text-stone-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
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
                <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full border-olive text-olive">
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    className={errors.name ? "border-red-500" : ""}
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
                    className={errors.email ? "border-red-500" : ""}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help?" 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your requirements..." 
                    className={cn("min-h-[150px]", errors.message ? "border-red-500" : "")}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  {errors.message && <p className="text-xs text-red-500 font-medium">{errors.message}</p>}
                </div>

                <Button type="submit" className="w-full bg-olive hover:bg-olive-dark text-warm-white rounded-full py-6 text-lg">
                  <Send className="w-5 h-5 mr-2" /> Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
