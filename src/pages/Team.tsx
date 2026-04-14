import { motion } from "motion/react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Lalit Mishra",
    role: "Senior Partner",
    qualifications: "B.COM (H), LLB",
    bio: "With over two decades of practice, Mr. Mishra specializes in Corporate Laws, Labor Laws, and Taxation. He serves on the panels of numerous Public Sector Banks and prominent corporations, offering result-oriented solutions backed by deep economic and financial insight."
  },
  {
    name: "Aman Kumar",
    role: "Partner - Audit & Taxation",
    qualifications: "B.COM (H), FCA, ACS",
    bio: "A Fellow Member of ICAI and Associate Member of ICSI, Mr. Aman specializes in Corporate Law, DGFT, and Auditing. His expertise in M&A and PSU audits is complemented by his extensive experience representing clients before various Appellate Authorities."
  },
  {
    name: "Subhash Shishodia",
    role: "Director - International Operations",
    qualifications: "Master in Economics, MBA",
    bio: "With 30 years of experience in banking, international trade, and renewable energy, Mr. Subhash is a pioneer in clean fuel technology. As a co-founder of the Oberon Group, he has a proven track record of optimizing innovation to overcome market challenges."
  },
  {
    name: "Chinky Tripathi",
    role: "Partner - Advisory & Audit",
    qualifications: "B.COM (H), LLB, FCA, ISA",
    bio: "Mrs. Tripathi is a Fellow Chartered Accountant with over 12 years of experience in advisory, compliance, and valuation. She specializes in Internal Audit and has led numerous high-stakes assignments in Due Diligence and corporate restructuring."
  },
  {
    name: "Meenu Sharma",
    role: "Legal Counsel",
    qualifications: "B.A, LLB",
    bio: "A practicing advocate at the Delhi High Court with 12 years of experience, Mrs. Sharma handles complex matters across civil, criminal, banking, and insurance law. Her multi-disciplinary approach ensures legal excellence from planning to implementation."
  },
  {
    name: "Ram Niwas Nirmania",
    role: "Legal Associate",
    qualifications: "B.COM, LLB",
    bio: "Specializing in civil litigation, recovery suits, and family law, Mr. Ram provides strategic advisory services to Nationalized Banks and Co-operative Societies. He is a graduate of Delhi University with a focus on specific relief and tenancy laws."
  },
  {
    name: "Umesh",
    role: "Operations Associate",
    qualifications: "Business Operations",
    bio: "A dedicated and hardworking professional, Umesh drives the day-to-day business needs of the firm, ensuring operational efficiency and seamless service delivery for our clients."
  }
];

export default function Team() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 mb-8">Our Experts</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Meet the dedicated professionals behind Rays Maven. Our diverse team of specialists brings decades of collective experience across finance, law, and business strategy.
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
              <div className="h-full">
                <div className="aspect-[4/5] rounded-3xl p-8 bg-warm-cream flex flex-col justify-end relative border border-stone-100 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1 overflow-hidden">
                  <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="w-12 h-12 border-2 border-olive rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-olive rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="relative z-10 space-y-4 transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-olive uppercase tracking-widest">{member.qualifications}</span>
                      <h3 className="text-3xl font-serif font-bold text-stone-900 leading-tight">{member.name}</h3>
                      <p className="text-stone-500 font-semibold uppercase tracking-widest text-[10px]">{member.role}</p>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed border-t border-stone-200 pt-4 transition-all duration-500">
                      {member.bio}
                    </p>
                  </div>
                  
                  <div className="absolute inset-0 bg-olive/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Empty slot for future hire or just to balance the grid */}
          <Link 
            to="/contact" 
            className="border-2 border-dashed border-stone-200 rounded-3xl flex flex-col items-center justify-center p-8 text-center space-y-4 min-h-[400px] transition-all duration-500 hover:border-olive hover:bg-olive/5 group"
          >
            <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-olive group-hover:text-warm-white transition-colors duration-500">
              <span className="text-2xl">+</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-400 group-hover:text-stone-900 transition-colors duration-500">Join Our Team</h3>
            <p className="text-stone-400 text-sm group-hover:text-stone-600 transition-colors duration-500">We're always looking for exceptional talent to join our growing firm.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
