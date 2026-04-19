import { motion } from "motion/react";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "Navigating Global Tax Changes: Pillar Two Update",
    excerpt: "The international tax landscape is shifting rapidly with the OECD's Pillar Two initiative. Discover how the 15% global minimum tax impacts cross-border operations.",
    date: "Jan 12, 2026",
    category: "Taxation",
    image: "https://picsum.photos/seed/tax/800/500",
    link: "https://www.oecd.org/en/topics/sub-issues/global-minimum-tax/global-anti-base-erosion-model-rules-pillar-two.html"
  },
  {
    title: "ICAI Digital Audit: The Impact of AI on Assurance",
    excerpt: "The Institute of Chartered Accountants of India is leading the digital transformation. Learn about new standards for technology-driven auditing practices.",
    date: "Dec 21, 2025",
    category: "Innovation",
    image: "https://picsum.photos/seed/audit/800/500",
    link: "https://www.icai.org/post.html?post_id=18641"
  },
  {
    title: "SEBI BRSR: A New Era for ESG Reporting in India",
    excerpt: "ESG disclosures are now mandatory for the top 1,000 listed entities. Understand the Business Responsibility and Sustainability Reporting framework.",
    date: "Nov 15, 2025",
    category: "Compliance",
    image: "https://picsum.photos/seed/esg/800/500",
    link: "https://www.sebi.gov.in/legal/circulars/may-2021/business-responsibility-and-sustainability-reporting-by-listed-entities_50096.html"
  },
  {
    title: "M&A Regulatory Framework under Companies Act",
    excerpt: "Mergers and acquisitions require strict adherence to the Companies Act, 2013. Explore the critical legal and financial steps for successful corporate restructuring.",
    date: "Oct 30, 2025",
    category: "Business",
    image: "https://picsum.photos/seed/merger/800/500",
    link: "https://www.mca.gov.in/content/mca/global/en/acts-rules/ebooks/companies-act.html"
  },
  {
    title: "FEMA Compliance: Investment and Asset Management",
    excerpt: "The Foreign Exchange Management Act governs international investment. Stay updated with the latest RBI guidelines on cross-border wealth management.",
    date: "Sep 12, 2025",
    category: "Finance",
    image: "https://picsum.photos/seed/fema/800/500",
    link: "https://www.rbi.org.in/Scripts/Fema.aspx"
  },
  {
    title: "Income Tax India: Latest Compliance Circulars",
    excerpt: "Stay updated with the latest notifications from the Income Tax Department regarding corporate tax, residential status, and TDS compliance for 2026.",
    date: "Aug 25, 2025",
    category: "Compliance",
    image: "https://picsum.photos/seed/incometax/800/500",
    link: "https://incometaxindia.gov.in/Pages/communications/circulars.aspx"
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
              <a 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-[16/10] rounded-3xl overflow-hidden bg-stone-100 mb-8">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </a>
              <div className="space-y-4 flex-grow">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-olive">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-stone-300"></span>
                  <span className="text-stone-400">{post.date}</span>
                </div>
                <h3 className="text-3xl font-serif font-bold text-stone-900 group-hover:text-olive transition-colors leading-tight">
                  <a href={post.link} target="_blank" rel="noopener noreferrer">{post.title}</a>
                </h3>
                <p className="text-stone-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
