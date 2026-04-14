import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-olive rounded-lg flex items-center justify-center text-warm-white font-serif text-2xl font-bold">
                RM
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-warm-white">
                Rays Maven
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Your trusted partner in growth and innovation. Providing professional financial services and strategic consultancy to businesses worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-olive hover:border-olive transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-olive hover:border-olive transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-olive hover:border-olive transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-warm-white font-serif text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-olive transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-olive transition-colors">Our Services</Link></li>
              <li><Link to="/team" className="hover:text-olive transition-colors">Meet the Team</Link></li>
              <li><Link to="/blog" className="hover:text-olive transition-colors">Industry Insights</Link></li>
              <li><Link to="/contact" className="hover:text-olive transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-warm-white font-serif text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-olive transition-colors">Audit & Assurance</Link></li>
              <li><Link to="/services" className="hover:text-olive transition-colors">Tax Consultancy</Link></li>
              <li><Link to="/services" className="hover:text-olive transition-colors">Business Advisory</Link></li>
              <li><Link to="/services" className="hover:text-olive transition-colors">Financial Planning</Link></li>
              <li><Link to="/services" className="hover:text-olive transition-colors">Corporate Finance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-warm-white font-serif text-xl font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-olive shrink-0" />
                <span className="text-sm">P-20, Ground Floor, South Extention - II, New Delhi - 110049</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-olive shrink-0" />
                <span className="text-sm">+91-96500-67855</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-olive shrink-0" />
                <span className="text-sm">raysmaven@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Rays Maven. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-stone-500">
            <a href="#" className="hover:text-warm-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-warm-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-warm-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
