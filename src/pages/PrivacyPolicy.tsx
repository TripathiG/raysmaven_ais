import { motion } from "motion/react";

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-5xl font-serif font-bold text-stone-900">Privacy Policy</h1>
            <p className="text-stone-500">Last updated: April 14, 2026</p>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">1. Introduction</h2>
            <p className="text-stone-600 leading-relaxed">
              Rays Maven & Co. LLP ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">2. Information We Collect</h2>
            <p className="text-stone-600 leading-relaxed">
              We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services, such as your name, email address, and phone number through our contact forms.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">3. How We Use Your Information</h2>
            <p className="text-stone-600 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-stone-600 space-y-2">
              <li>Respond to your inquiries and provide the services you request.</li>
              <li>Improve our website and user experience.</li>
              <li>Send you administrative information or marketing communications (if you have opted in).</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">4. Data Security</h2>
            <p className="text-stone-600 leading-relaxed">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">5. Contact Us</h2>
            <p className="text-stone-600 leading-relaxed">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-warm-cream p-8 rounded-3xl text-stone-900 font-medium">
              Rays Maven & Co. LLP<br />
              P-20, Ground Floor, South Extention - II<br />
              New Delhi - 110049<br />
              Email: raysmaven@gmail.com
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
