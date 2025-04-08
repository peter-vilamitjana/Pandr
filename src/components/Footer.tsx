
import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pandr-darkGray/80 border-t border-pandr-violet/10 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pandr-ultraviolet to-pandr-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-display font-semibold text-white">
                Pandr<span className="text-pandr-accent">.</span>
              </span>
            </div>
            
            <p className="text-gray-400 text-sm">
              The premium IDE for developers who demand focus, speed, and design in perfect harmony.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pandr-lavender transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pandr-lavender transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pandr-lavender transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-pandr-lavender text-sm">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pandr-lavender text-sm">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pandr-lavender text-sm">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pandr-lavender text-sm">Changelog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pandr-lavender text-sm">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-pandr-lavender text-sm">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pandr-lavender text-sm">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pandr-lavender text-sm">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pandr-lavender text-sm">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pandr-lavender text-sm">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-pandr-lavender text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pandr-lavender text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pandr-lavender text-sm">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pandr-lavender text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pandr-lavender text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-pandr-violet/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm">
            © 2025 Pandr Technologies Inc. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0">
            <div className="text-sm text-gray-500">
              Crafted with precision for developers who care about details
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
