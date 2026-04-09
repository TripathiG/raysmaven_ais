import { motion } from "motion/react";
import { CheckCircle2, TrendingUp, ShieldCheck, Users, BarChart3, Briefcase } from "lucide-react";

const services = [
  {
    title: "Audit & Assurance",
    icon: ShieldCheck,
    description: "We provide independent and objective assurance that your financial statements are accurate and compliant with all relevant standards.",
    features: ["Statutory Audit", "Internal Audit", "Due Diligence", "Risk Assessment"]
  },
  {
    title: "Tax Consultancy",
    icon: TrendingUp,
    description: "Our tax experts help you navigate the complex landscape of local and international tax laws to optimize your position.",
    features: ["Corporate Tax Planning", "Indirect Tax (GST/VAT)", "Transfer Pricing", "Individual Tax Filing"]
  },
  {
    title: "Business Advisory",
    icon: Users,
    description: "Strategic guidance to help you grow your business, improve operations, and navigate transitions effectively.",
    features: ["M&A Advisory", "Business Valuation", "Restructuring", "Growth Strategy"]
  },
  {
    title: "Financial Planning",
    icon: BarChart3,
    description: "Comprehensive wealth management and financial planning services for businesses and individuals.",
    features: ["Retirement Planning", "Investment Strategy", "Estate Planning", "Cash Flow Analysis"]
  },
  {
    title: "Corporate Finance",
    icon: Briefcase,
    description: "Expert assistance in capital raising, debt restructuring, and financial modeling for complex projects.",
    features: ["Capital Raising", "Debt Advisory", "Project Finance", "Financial Modeling"]
  },
  {
    title: "Compliance & Governance",
    icon: CheckCircle2,
    description: "Ensuring your business meets all regulatory requirements and maintains the highest standards of corporate governance.",
    features: ["Company Secretarial", "Regulatory Compliance", "ESG Reporting", "Board Advisory"]
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 mb-8 text-balance">Comprehensive Financial Solutions</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            At Rays Maven, we offer a wide range of services designed to support your business at every stage of its lifecycle. Our expertise spans across multiple industries and jurisdictions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-warm-cream p-10 rounded-3xl space-y-6 hover:bg-olive hover:text-warm-white transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-olive/10 rounded-xl flex items-center justify-center text-olive group-hover:bg-warm-white/20 group-hover:text-warm-white transition-colors">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-serif font-bold">{service.title}</h3>
              <p className="text-stone-600 group-hover:text-warm-white/80 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 pt-4">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-olive group-hover:text-warm-white" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
