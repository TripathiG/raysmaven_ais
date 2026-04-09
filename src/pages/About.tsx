import { motion } from "motion/react";

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 leading-tight">
              A Legacy of <span className="text-olive italic">Trust</span> and Innovation.
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              Founded in 2010, Rays Maven has grown from a boutique local practice to a leading financial advisory firm with a global footprint. Our journey is defined by the success of our clients and the integrity of our professionals.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <p className="text-4xl font-serif font-bold text-olive mb-1">500+</p>
                <p className="text-sm text-stone-500 uppercase tracking-widest font-semibold">Clients Worldwide</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-olive mb-1">15+</p>
                <p className="text-sm text-stone-500 uppercase tracking-widest font-semibold">Years Experience</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Office" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-warm-cream rounded-full -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-olive/10 rounded-full -z-10"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <div className="space-y-6 p-10 bg-warm-cream rounded-3xl">
            <h3 className="text-3xl font-serif font-bold text-stone-900">Our Mission</h3>
            <p className="text-stone-600 leading-relaxed">
              To empower businesses and individuals with innovative financial strategies that drive sustainable growth and create lasting value.
            </p>
          </div>
          <div className="space-y-6 p-10 bg-stone-900 text-warm-white rounded-3xl">
            <h3 className="text-3xl font-serif font-bold">Our Vision</h3>
            <p className="text-stone-400 leading-relaxed">
              To be the most trusted global partner for financial excellence, recognized for our integrity, expertise, and commitment to innovation.
            </p>
          </div>
          <div className="space-y-6 p-10 bg-olive text-warm-white rounded-3xl">
            <h3 className="text-3xl font-serif font-bold">Our Values</h3>
            <p className="text-warm-white/80 leading-relaxed">
              Integrity, Excellence, Innovation, and Collaboration. These core values guide every decision we make and every relationship we build.
            </p>
          </div>
        </div>

        <div className="space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">Our Journey</h2>
            <p className="text-stone-600">A timeline of growth and milestones.</p>
          </div>
          
          <div className="space-y-12 max-w-4xl mx-auto">
            {[
              { year: "2010", title: "The Beginning", desc: "Rays Maven was founded in New York with a focus on local SME tax advisory." },
              { year: "2015", title: "Expansion", desc: "Opened our second office in London and launched our dedicated Audit & Assurance wing." },
              { year: "2020", title: "Digital Transformation", desc: "Implemented AI-driven financial modeling and expanded into tech-focused advisory." },
              { year: "2024", title: "Global Reach", desc: "Now serving over 500 clients across 20 countries with a team of 50+ experts." }
            ].map((milestone, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-8 md:gap-16"
              >
                <div className="text-3xl font-serif font-bold text-olive shrink-0 w-20">{milestone.year}</div>
                <div className="space-y-2 border-l border-stone-200 pl-8 pb-8">
                  <h4 className="text-2xl font-serif font-bold text-stone-900">{milestone.title}</h4>
                  <p className="text-stone-600 leading-relaxed">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
