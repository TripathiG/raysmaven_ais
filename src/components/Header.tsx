import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        isScrolled
          ? "bg-warm-white/80 backdrop-blur-md border-stone-200 py-3 shadow-sm"
          : "bg-warm-white border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-olive rounded-lg flex items-center justify-center text-warm-white font-serif text-2xl font-bold transition-transform group-hover:scale-105">
            RM
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold tracking-tight text-stone-900 leading-none">
              Rays Maven
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-olive font-medium">
              Growth & Innovation
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-olive relative py-1",
                location.pathname === link.href
                  ? "text-olive after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-olive"
                  : "text-stone-600"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild nativeButton={false} className="bg-olive hover:bg-stone-900! text-warm-white! rounded-full px-6 transition-colors">
            <Link to="/contact">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-stone-900">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-warm-white border-stone-200 w-[300px]">
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      "text-xl font-serif font-medium flex items-center justify-between group",
                      location.pathname === link.href ? "text-olive" : "text-stone-900"
                    )}
                  >
                    {link.name}
                    <ChevronRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity text-olive" />
                  </Link>
                ))}
                <Button asChild nativeButton={false} className="bg-olive hover:bg-stone-900! text-warm-white! rounded-full w-full mt-4 transition-colors">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
