import { motion } from "motion/react";

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 leading-tight">
              Excellence in <span className="text-olive italic">Legal</span> & Financial Advisory.
            </h1>
            <div className="space-y-6">
              <p className="text-xl text-stone-600 leading-relaxed">
                Rays Maven & Co. LLP is a Limited Liability Partnership Firm incorporated under The Limited Liability Partnership Act, 2008. Formed on 26th March, 2018 in New Delhi (LLPIN: AAM-3058), we have established ourselves as a cornerstone of professional excellence.
              </p>
              <p className="text-lg text-stone-500 leading-relaxed">
                Our team of professionals serves companies throughout the business lifecycle, helping them emerge stronger and smarter by delivering an overall distinctive client experience through tailored service offerings and global resources.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <p className="text-4xl font-serif font-bold text-olive mb-1">2018</p>
                <p className="text-sm text-stone-500 uppercase tracking-widest font-semibold">Incorporated</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-olive mb-1">Global</p>
                <p className="text-sm text-stone-500 uppercase tracking-widest font-semibold">Specialist Network</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Rays Maven Office" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-warm-cream rounded-full -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-olive/10 rounded-full -z-10"></div>
          </div>
        </div>

        <div className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">Our Promoters</h2>
            <p className="text-stone-600">The visionary leadership behind Rays Maven & Co. LLP.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 p-10 bg-warm-cream rounded-3xl border border-stone-100">
              <div className="space-y-2">
                <h3 className="text-3xl font-serif font-bold text-stone-900">Mr. Lalit Mishra</h3>
                <p className="text-olive font-semibold uppercase tracking-widest text-xs">Senior Advocate & Promoter</p>
              </div>
              <p className="text-stone-600 leading-relaxed">
                A Senior Advocate by profession with an immense experience of two decades in the field of Corporate Legal Advisory. Currently, he is a member of the Bar Council of India and the High Court of Delhi, providing strategic legal direction to the firm.
              </p>
            </div>
            <div className="space-y-6 p-10 bg-stone-900 text-warm-white rounded-3xl">
              <div className="space-y-2">
                <h3 className="text-3xl font-serif font-bold">Mr. Aman Kr Mishra</h3>
                <p className="text-olive font-semibold uppercase tracking-widest text-xs">FCA, ACS & Promoter</p>
              </div>
              <p className="text-stone-400 leading-relaxed">
                A Fellow member of The Institute of Chartered Accountants of India and an Associate member of The Institute of Company Secretaries of India. Actively serving the profession since 2008, he brings deep financial and compliance expertise to our clients.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-olive text-warm-white p-12 md:p-20 rounded-[3rem]">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">Our Commitment</h2>
            <p className="text-warm-white/80 text-lg leading-relaxed">
              Our professionals are committed to understanding and exceeding your specific organisational requirements. We work under the direct supervision of management to ensure that every solution is aligned with your business goals.
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-warm-white/90 leading-relaxed">
              With extensive business knowledge and compliance know-how, we provide access to a global network of industry specialists. We help companies navigate their entire lifecycle, ensuring they emerge stronger through tailored service offerings and distinctive resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
