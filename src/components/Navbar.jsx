import React, { useState, useEffect } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Menu, X, Mail, Sparkles, Heart, Share2 } from 'lucide-react';

export const Navbar = ({ onReopenEnvelope, petalsEnabled, onTogglePetals, onOpenShareModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { couple } = weddingConfig;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "The Wedding", href: "#hero" },
    { label: "Schedule & Venue", href: "#events" },
    { label: "Dress Code", href: "#dress-code" },
    { label: "Gallery", href: "#gallery" },
    { label: "RSVP", href: "#rsvp" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#fdfcf9]/90 backdrop-blur-md shadow-sm border-b border-[#c5a059]/20 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Monogram Brand */}
        <a 
          href="#hero" 
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center space-x-2 group"
        >
          <div className="w-8 h-8 rounded-full border border-[#c5a059] flex items-center justify-center bg-[#56040b] text-[#fdfcf9] font-serif text-xs font-semibold shadow-sm group-hover:scale-105 transition-transform">
            {couple.initials}
          </div>
          <span className="font-serif text-lg tracking-wider text-[#56040b] font-medium hidden sm:inline-block">
            {couple.groom.firstName} <span className="text-[#c5a059]">&amp;</span> {couple.bride.firstName}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-6 text-xs uppercase font-serif tracking-[0.16em] text-[#5a4246]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-[#56040b] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#56040b] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Petals Toggle + Reopen Envelope + RSVP button */}
        <div className="flex items-center space-x-2.5">
          <button
            onClick={onTogglePetals}
            className={`p-2 rounded-full border transition-colors ${
              petalsEnabled 
                ? 'border-[#c5a059] text-[#56040b] bg-[#c5a059]/10' 
                : 'border-transparent text-[#8f4a5a] opacity-60 hover:opacity-100'
            }`}
            title={petalsEnabled ? "Disable falling petals" : "Enable falling petals"}
            aria-label="Toggle falling petals"
          >
            <Sparkles className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenShareModal}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-[#c5a059] bg-[#ffffff] text-xs font-serif tracking-wider text-[#56040b] hover:bg-[#56040b] hover:text-[#ffffff] transition-all duration-300 shadow-xs"
            title="Create & share guest link"
          >
            <Share2 className="w-3.5 h-3.5 text-[#c5a059]" />
            <span className="hidden sm:inline">Send Link</span>
          </button>

          <button
            onClick={onReopenEnvelope}
            className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-[#c5a059]/50 text-xs font-serif tracking-wider text-[#56040b] bg-[#ffffff]/80 hover:bg-[#56040b] hover:text-[#ffffff] transition-all duration-300 shadow-sm"
            title="Re-open wedding envelope"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Card</span>
          </button>

          <a
            href="#rsvp"
            onClick={(e) => handleLinkClick(e, '#rsvp')}
            className="inline-flex items-center space-x-1 px-4 py-1.5 rounded-full bg-[#56040b] text-[#fdfcf9] font-serif text-xs uppercase tracking-widest shadow hover:bg-[#6e1f2d] hover:shadow-md transition-all active:scale-95"
          >
            <span>RSVP</span>
            <Heart className="w-3 h-3 fill-current text-[#c5a059]" />
          </a>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#56040b] hover:bg-[#f0ebe1] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fdfcf9] border-b border-[#c5a059]/30 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4 text-center font-serif text-sm tracking-[0.18em] uppercase text-[#56040b]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="py-2 hover:text-[#c5a059] transition-colors border-b border-[#f0ebe1]"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onReopenEnvelope();
              }}
              className="mt-2 py-2.5 rounded-full border border-[#56040b] text-[#56040b] flex items-center justify-center space-x-2 text-xs uppercase tracking-wider"
            >
              <Mail className="w-4 h-4" />
              <span>Reopen Envelope</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
