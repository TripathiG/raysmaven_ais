import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Quote, TrendingUp, ShieldCheck, Users, ChevronRight, BarChart3, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-warm-cream">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#5A5A40_1px,transparent_1px)] bg-[length:40px_40px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-olive/10 text-olive rounded-full">
                Professional Financial Excellence
              </span>
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-stone-900 leading-[0.9] mb-8">
                Your trusted partner in <span className="text-olive italic">growth</span> and innovation.
              </h1>
              <p className="text-xl text-stone-600 mb-10 max-w-2xl leading-relaxed">
                Rays Maven provides comprehensive financial, tax, and strategic advisory services designed to help your business navigate complexity and achieve sustainable success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild nativeButton={false} size="lg" className="bg-olive hover:bg-olive-dark text-warm-white rounded-full px-8 py-6 text-lg">
                  <Link to="/contact">Book a Consultation</Link>
                </Button>
                <Button asChild nativeButton={false} variant="outline" size="lg" className="border-stone-300 text-stone-900 hover:bg-stone-100 rounded-full px-8 py-6 text-lg">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute right-[-10%] bottom-[-10%] w-[600px] h-[600px] bg-olive/5 rounded-full blur-3xl"></div>
      </section>

      {/* About Brief */}
      <section className="py-24 bg-warm-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000" 
                  alt="Professional CA" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-olive p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-serif font-bold text-warm-white mb-1">15+</p>
                <p className="text-sm text-warm-white/80 uppercase tracking-wider">Years of Excellence</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">Excellence in Financial Stewardship</h2>
                <p className="text-lg text-stone-600 leading-relaxed">
                  At Rays Maven, we believe that every business deserves a partner who understands their vision. Since opening our doors in 2018, we’re proud to say that each year we have a bigger list of returning and new clients.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Strategic Tax Planning & Compliance",
                  "Comprehensive Audit & Assurance",
                  "Business Advisory & Growth Strategy",
                  "Financial Risk Management"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-800 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-olive" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild nativeButton={false} variant="link" className="text-olive p-0 h-auto text-lg font-semibold group">
                <Link to="/about" className="flex items-center gap-2">
                  Learn more about our firm <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Brief */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">Our Expertise</h2>
            <p className="text-lg text-stone-600">
              Tailored financial solutions designed to meet the unique challenges of modern businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Business Advisory",
                desc: "Tailored solutions for complex challenges, focusing on maximizing value through specialized industry expertise.",
                icon: Users
              },
              {
                title: "Due Diligence",
                desc: "In-depth analysis to safeguard investments, identifying critical risks and quantifying tax exposures.",
                icon: ShieldCheck
              },
              {
                title: "Banking & Finance",
                desc: "Comprehensive advisory for financial transactions, debt syndication, and regulatory compliance.",
                icon: BarChart3
              }
            ].map((service, i) => (
              <Card key={i} className="bg-warm-white border-none shadow-sm hover:shadow-md transition-shadow group">
                <CardContent className="p-8 space-y-6">
                  <div className="w-14 h-14 bg-olive/10 rounded-xl flex items-center justify-center text-olive group-hover:bg-olive group-hover:text-warm-white transition-colors">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-stone-900">{service.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{service.desc}</p>
                  <Button asChild nativeButton={false} variant="link" className="text-olive p-0 h-auto font-semibold group/btn">
                    <Link to="/services" className="flex items-center gap-2">
                      Read more <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button asChild nativeButton={false} className="bg-olive hover:bg-olive-dark text-warm-white rounded-full px-10 py-6">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Valued Clients & Testimonials */}
      <section className="py-24 bg-warm-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">Our Valued Clients</h2>
            <p className="text-stone-600">Trusted by industry leaders worldwide.</p>
          </div>
          
          {/* Logo Placeholders */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 mb-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {["Global Corp", "Tech Innovate", "Nexus Ltd", "Apex Systems", "Vanguard"].map((client, i) => (
              <div key={i} className="flex items-center gap-2 font-serif text-2xl font-bold text-stone-400">
                <div className="w-8 h-8 rounded bg-stone-200"></div>
                {client}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Rays Maven has been instrumental in our international expansion. Their strategic tax advice saved us significant resources.",
                author: "Sarah Jenkins",
                role: "CFO, Tech Innovate"
              },
              {
                quote: "The level of professionalism and attention to detail during our annual audit was exceptional. Highly recommended.",
                author: "Michael Chen",
                role: "Director, Nexus Ltd"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-warm-cream p-10 rounded-3xl relative">
                <Quote className="absolute top-8 left-8 w-12 h-12 text-olive/10" />
                <div className="relative z-10 space-y-6">
                  <p className="text-xl italic text-stone-800 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-stone-300"></div>
                    <div>
                      <p className="font-bold text-stone-900">{testimonial.author}</p>
                      <p className="text-sm text-stone-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Brief */}
      <section className="py-24 bg-stone-900 text-warm-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold">Led by Visionaries</h2>
              <p className="text-lg text-stone-400 leading-relaxed">
                Our team consists of seasoned professionals with decades of experience in global finance, law, and business strategy. We bring a diverse set of perspectives to every challenge.
              </p>
              <Button asChild nativeButton={false} className="bg-olive hover:bg-olive-dark text-warm-white rounded-full px-10 py-6">
                <Link to="/team">Meet Our Experts</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
                "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400"
              ].map((url, i) => (
                <div key={i} className={cn("aspect-square rounded-2xl overflow-hidden transition-all duration-500 group relative", i % 2 === 0 ? "mt-8" : "")}>
                  <img 
                    src={url} 
                    alt="Team member" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-olive/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Brief */}
      <section className="py-24 bg-warm-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">Industry Insights</h2>
              <p className="text-lg text-stone-600 max-w-xl">Stay updated with the latest trends in finance, taxation, and business innovation.</p>
            </div>
            <Button asChild nativeButton={false} variant="outline" className="border-olive text-olive hover:bg-olive hover:text-warm-white rounded-full px-8">
              <Link to="/blog">View All News</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Navigating Global Tax Changes in 2026",
                date: "Oct 12, 2025",
                category: "Taxation"
              },
              {
                title: "The Impact of AI on Corporate Auditing",
                date: "Sep 28, 2025",
                category: "Innovation"
              },
              {
                title: "Sustainable Finance: A New Era for SMEs",
                date: "Sep 15, 2025",
                category: "Strategy"
              }
            ].map((post, i) => (
              <Link key={i} to="/blog" className="group">
                <article className="space-y-4">
                  <div className="aspect-video rounded-2xl overflow-hidden bg-stone-100 mb-6">
                    <img 
                      src={`https://picsum.photos/seed/blog${i}/600/400`} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-olive">
                    <span>{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-stone-300"></span>
                    <span className="text-stone-400">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-stone-900 group-hover:text-olive transition-colors leading-tight">
                    {post.title}
                  </h3>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-olive text-warm-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-serif font-bold max-w-4xl mx-auto leading-tight">
            Ready to accelerate your <span className="italic">growth</span>?
          </h2>
          <p className="text-xl text-warm-white/80 max-w-2xl mx-auto">
            Schedule a confidential consultation with our experts today and discover how we can transform your financial future.
          </p>
          <Button asChild nativeButton={false} size="lg" className="bg-warm-white text-olive hover:bg-warm-cream rounded-full px-12 py-8 text-xl font-bold">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
