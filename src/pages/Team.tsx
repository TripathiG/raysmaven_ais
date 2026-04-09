import { motion } from "motion/react";

const teamMembers = [
  {
    name: "Robert Maven",
    role: "Managing Partner",
    bio: "With over 25 years of experience in international taxation and corporate law, Robert leads the firm's strategic vision.",
    image: "https://picsum.photos/seed/member1/400/500"
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Audit",
    bio: "Elena specializes in complex assurance engagements for Fortune 500 companies and emerging tech startups.",
    image: "https://picsum.photos/seed/member2/400/500"
  },
  {
    name: "David Sterling",
    role: "Tax Director",
    bio: "David is a renowned expert in cross-border tax structures and wealth management for high-net-worth individuals.",
    image: "https://picsum.photos/seed/member3/400/500"
  },
  {
    name: "Sophia Chang",
    role: "Advisory Lead",
    bio: "Sophia brings a wealth of knowledge in mergers and acquisitions, having advised on deals totaling over $5B.",
    image: "https://picsum.photos/seed/member4/400/500"
  },
  {
    name: "Marcus Thorne",
    role: "Financial Planner",
    bio: "Marcus helps businesses optimize their capital structure and develop robust long-term financial roadmaps.",
    image: "https://picsum.photos/seed/member5/400/500"
  },
  {
    name: "Isabella Vance",
    role: "Compliance Officer",
    bio: "Isabella ensures that our clients stay ahead of regulatory changes and maintain the highest standards of governance.",
    image: "https://picsum.photos/seed/member6/400/500"
  },
  {
    name: "Jonathan Wu",
    role: "Innovation Strategist",
    bio: "Jonathan focuses on the intersection of finance and technology, helping clients implement modern ERP and AI solutions.",
    image: "https://picsum.photos/seed/member7/400/500"
  }
];

export default function Team() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 mb-8">Our Experts</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Meet the dedicated professionals behind Rays Maven. Our diverse team of specialists is committed to providing the highest level of expertise and personalized service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="space-y-6">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100 relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-olive/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold text-stone-900">{member.name}</h3>
                  <p className="text-olive font-semibold uppercase tracking-widest text-xs">{member.role}</p>
                  <p className="text-stone-600 text-sm leading-relaxed pt-2">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Empty slot for future hire or just to balance the grid */}
          <div className="border-2 border-dashed border-stone-200 rounded-2xl flex flex-col items-center justify-center p-8 text-center space-y-4 min-h-[400px]">
            <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
              <span className="text-2xl">+</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-400">Join Our Team</h3>
            <p className="text-stone-400 text-sm">We're always looking for exceptional talent to join our growing firm.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
