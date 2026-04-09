import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "Navigating Global Tax Changes in 2026",
    excerpt: "The international tax landscape is shifting rapidly. Here's what your business needs to know about the latest OECD guidelines.",
    date: "Oct 12, 2025",
    category: "Taxation",
    author: "David Sterling",
    image: "https://picsum.photos/seed/blog1/800/500"
  },
  {
    title: "The Impact of AI on Corporate Auditing",
    excerpt: "Artificial Intelligence is transforming how we approach assurance. Discover the benefits of real-time data analysis in auditing.",
    date: "Sep 28, 2025",
    category: "Innovation",
    author: "Elena Rodriguez",
    image: "https://picsum.photos/seed/blog2/800/500"
  },
  {
    title: "Sustainable Finance: A New Era for SMEs",
    excerpt: "ESG reporting is no longer just for large corporations. Learn how small and medium enterprises can benefit from sustainable practices.",
    date: "Sep 15, 2025",
    category: "Strategy",
    author: "Marcus Thorne",
    image: "https://picsum.photos/seed/blog3/800/500"
  },
  {
    title: "Preparing for a Successful Merger",
    excerpt: "M&A activity is on the rise. We outline the critical financial steps to ensure your next merger or acquisition is a success.",
    date: "Aug 30, 2025",
    category: "Business",
    author: "Sophia Chang",
    image: "https://picsum.photos/seed/blog4/800/500"
  },
  {
    title: "Wealth Management in a Volatile Market",
    excerpt: "Strategies for protecting and growing your assets during periods of economic uncertainty and market fluctuations.",
    date: "Aug 12, 2025",
    category: "Finance",
    author: "Robert Maven",
    image: "https://picsum.photos/seed/blog5/800/500"
  },
  {
    title: "The Future of Remote Work and Tax Nexus",
    excerpt: "As remote work becomes permanent, businesses must understand the tax implications of employees working across state and national borders.",
    date: "Jul 25, 2025",
    category: "Compliance",
    author: "Isabella Vance",
    image: "https://picsum.photos/seed/blog6/800/500"
  }
];

export default function Blog() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 mb-8">Industry Insights</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Expert analysis, company news, and strategic advice from the professionals at Rays Maven. Stay informed about the trends shaping the future of finance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col"
            >
              <div className="aspect-[16/10] rounded-3xl overflow-hidden bg-stone-100 mb-8">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4 flex-grow">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-olive">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-stone-300"></span>
                  <span className="text-stone-400">{post.date}</span>
                </div>
                <h3 className="text-3xl font-serif font-bold text-stone-900 group-hover:text-olive transition-colors leading-tight">
                  <Link to={`/blog`}>{post.title}</Link>
                </h3>
                <p className="text-stone-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              <div className="pt-6 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-stone-200"></div>
                  <span className="text-sm font-semibold text-stone-900">{post.author}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 p-12 bg-warm-cream rounded-[3rem] text-center space-y-8">
          <h2 className="text-4xl font-serif font-bold text-stone-900">Subscribe to our Newsletter</h2>
          <p className="text-stone-600 max-w-xl mx-auto">Get the latest industry insights and company news delivered directly to your inbox every month.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-6 py-4 rounded-full border border-stone-200 focus:outline-none focus:ring-2 focus:ring-olive/20"
            />
            <Button className="bg-olive hover:bg-olive-dark text-warm-white rounded-full px-8 py-4">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
