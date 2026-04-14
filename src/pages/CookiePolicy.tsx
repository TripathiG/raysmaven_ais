import { motion } from "motion/react";

export default function CookiePolicy() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-5xl font-serif font-bold text-stone-900">Cookie Policy</h1>
            <p className="text-stone-500">Last updated: April 14, 2026</p>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">1. What Are Cookies</h2>
            <p className="text-stone-600 leading-relaxed">
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">2. How We Use Cookies</h2>
            <p className="text-stone-600 leading-relaxed">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-stone-600 space-y-2">
              <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly.</li>
              <li><strong>Analytics Cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
              <li><strong>Preference Cookies:</strong> These allow the website to remember choices you make (such as your language or region).</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">3. Managing Cookies</h2>
            <p className="text-stone-600 leading-relaxed">
              Most web browsers allow you to control cookies through their settings. You can set your browser to block cookies or alert you when cookies are being sent. However, if you block cookies, some parts of our website may not function properly.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">4. Changes to This Policy</h2>
            <p className="text-stone-600 leading-relaxed">
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
