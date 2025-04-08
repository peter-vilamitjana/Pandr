
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-4 backdrop-blur-lg bg-pandr-black/80 border-b border-pandr-violet/10"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pandr-ultraviolet to-pandr-accent flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <span className="text-xl font-display font-semibold text-white">
            Pandr<span className="text-pandr-accent">.</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a className="text-gray-300 hover:text-pandr-lavender transition-colors" href="#features">Features</a>
          <a className="text-gray-300 hover:text-pandr-lavender transition-colors" href="#process">Process</a>
          <a className="text-gray-300 hover:text-pandr-lavender transition-colors" href="#why">Why Pandr</a>
          <a className="text-gray-300 hover:text-pandr-lavender transition-colors" href="#pricing">Pricing</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-pandr-lavender hover:text-white">Log in</Button>
          <Button className="bg-gradient-to-r from-pandr-ultraviolet to-pandr-accent hover:shadow-glow text-white">
            Get Started Free
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-pandr-darkGray border-t border-pandr-violet/10 py-4">
          <nav className="flex flex-col space-y-3 px-6">
            <a className="text-gray-300 hover:text-pandr-lavender py-2" href="#features" onClick={() => setMobileMenuOpen(false)}>
              Features
            </a>
            <a className="text-gray-300 hover:text-pandr-lavender py-2" href="#process" onClick={() => setMobileMenuOpen(false)}>
              Process
            </a>
            <a className="text-gray-300 hover:text-pandr-lavender py-2" href="#why" onClick={() => setMobileMenuOpen(false)}>
              Why Pandr
            </a>
            <a className="text-gray-300 hover:text-pandr-lavender py-2" href="#pricing" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </a>
            <div className="flex flex-col pt-3 space-y-3 border-t border-pandr-violet/10">
              <Button variant="ghost" className="justify-start text-pandr-lavender hover:text-white">
                Log in
              </Button>
              <Button className="bg-gradient-to-r from-pandr-ultraviolet to-pandr-accent hover:shadow-glow text-white">
                Get Started Free
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
