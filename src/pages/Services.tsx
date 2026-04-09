import { motion } from "motion/react";
import { CheckCircle2, TrendingUp, ShieldCheck, Users, Briefcase, BarChart3, Building2 } from "lucide-react";

const services = [
  {
    title: "Business Advisory Services",
    icon: Users,
    description: "We deliver tailored, innovative solutions for complex business challenges. Led by industry specialists, our advisory services focus on maximizing value through a broad range of competencies, including one-stop liaison for start-ups and specialized support for financial institutions.",
    features: ["One-stop liaison service", "Start-up support", "Financial institution services", "Value proposition focus"]
  },
  {
    title: "Management Consultancy",
    icon: TrendingUp,
    description: "We enhance organizational performance by analyzing current operational challenges and developing robust growth strategies. Our integrated approach covers strategic planning, account outsourcing, transactional services, and compliance management.",
    features: ["Performance enhancement", "Strategic planning", "Account outsourcing", "Compliance outsourcing"]
  },
  {
    title: "Liaisoning Services",
    icon: Building2,
    description: "End-to-end consultancy for government schemes and regulatory compliance. We handle documentation, rigorous follow-ups with departments, and facilitate interactions with major PSUs like Coal India, ONGC, and GAIL to ensure smooth industrial promotion.",
    features: ["Government scheme consultancy", "Regulatory compliance", "PSU facilitation", "Real-time updates"]
  },
  {
    title: "Business Due Diligence",
    icon: ShieldCheck,
    description: "Professional, in-depth due diligence to safeguard investments. Our transparent approach identifies critical risks, quantifies tax exposures, and evaluates the quality of assets and projected earnings to ensure informed decision-making.",
    features: ["Risk identification", "Asset evaluation", "Tax exposure analysis", "Transactional due diligence"]
  },
  {
    title: "Banking & Financial Services",
    icon: BarChart3,
    description: "Comprehensive advisory for lenders, borrowers, and financial institutions. We specialize in complex deal management, debt syndication, project finance, and representing clients in regulatory frameworks and legal recovery proceedings.",
    features: ["Project finance", "Debt syndication", "Debt restructuring", "Regulatory representation"]
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
