import { motion } from "motion/react";

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-5xl font-serif font-bold text-stone-900">Terms of Service</h1>
            <p className="text-stone-500">Last updated: April 14, 2026</p>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">1. Acceptance of Terms</h2>
            <p className="text-stone-600 leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">2. Use of the Site</h2>
            <p className="text-stone-600 leading-relaxed">
              The content of the pages of this website is for your general information and use only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">3. Professional Advice</h2>
            <p className="text-stone-600 leading-relaxed">
              The information provided on this website does not constitute legal, financial, or professional advice. You should consult with a professional advisor for advice specific to your situation.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">4. Limitation of Liability</h2>
            <p className="text-stone-600 leading-relaxed">
              Rays Maven & Co. LLP will not be liable for any damages arising out of or in connection with the use of this website. This is a comprehensive limitation of liability that applies to all damages of any kind.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">5. Governing Law</h2>
            <p className="text-stone-600 leading-relaxed">
              Your use of this website and any dispute arising out of such use of the website is subject to the laws of India.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
