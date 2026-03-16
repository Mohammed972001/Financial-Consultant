import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const navLinks = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'فلسفتنا', href: '#about' },
  { label: 'مجالات الخبرة', href: '#expertise' },
  { label: 'إنجازاتنا', href: '#stats' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#D4AF37]/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo – right side in RTL */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="text-[#D4AF37] group-hover:text-[#E5C04A] transition-colors duration-300 flex-shrink-0">
            <Logo className="w-9 h-9 md:w-10 md:h-10" />
          </div>
          <div className="flex flex-col items-end">
            <span
              className="text-[#D4AF37] group-hover:text-[#E5C04A] tracking-widest transition-colors duration-300"
              style={{
                fontFamily: 'Amiri, serif',
                fontSize: '1.3rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                lineHeight: 1.2,
              }}
            >
              الرؤية الاستراتيجية
            </span>
            <span
              className="text-[#b8b8b8] tracking-[0.25em] uppercase"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.6rem',
                letterSpacing: '0.3em',
              }}
            >
              Financial Advisory
            </span>
          </div>
          {/* Gold vertical accent */}
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent hidden sm:block" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#b8b8b8] hover:text-[#D4AF37] transition-colors duration-300 relative group"
              style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '0.9rem', fontWeight: 400 }}
            >
              {link.label}
              <span className="absolute -bottom-1 right-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#cta"
            className="border border-[#D4AF37]/60 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0a0a0a] px-5 py-2.5 transition-all duration-300"
            style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '0.875rem', fontWeight: 500 }}
          >
            تواصل معنا
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#D4AF37]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0a]/98 border-t border-[#2a2a2a] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[#d0d0d0] hover:text-[#D4AF37] transition-colors text-right"
              style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '1rem' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setMobileOpen(false)}
            className="border border-[#D4AF37]/60 text-[#D4AF37] px-5 py-3 text-center transition-all duration-300"
            style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '0.9rem' }}
          >
            تواصل معنا
          </a>
        </div>
      )}
    </header>
  );
}
