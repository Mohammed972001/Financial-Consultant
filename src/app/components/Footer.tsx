import { Linkedin, Twitter, Mail } from 'lucide-react';

const footerLinks = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'فلسفتنا', href: '#about' },
  { label: 'مجالات الخبرة', href: '#expertise' },
  { label: 'إنجازاتنا', href: '#stats' },
  { label: 'احجز استشارة', href: '#cta' },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter / X' },
  { icon: Mail, href: '#', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a]">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-12">

          {/* Brand Column */}
          <div>
            <div className="mb-4">
              <span
                className="text-[#D4AF37]"
                style={{
                  fontFamily: 'Amiri, serif',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                }}
              >
                الرؤية الاستراتيجية
              </span>
            </div>
            <p
              className="text-[#a0a0a0] leading-loose mb-6 max-w-xs"
              style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '0.85rem', fontWeight: 300 }}
            >
              مستشار مالي وتطوير أعمال متخصص في السوق السعودي، يُقدّم حلولاً استراتيجية متكاملة للشركات ورواد الأعمال.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-[#2a2a2a] flex items-center justify-center text-[#a0a0a0] hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <div
              className="text-[#a0a0a0] mb-5 tracking-widest uppercase"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
              }}
            >
              Navigation
            </div>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#a0a0a0] hover:text-[#D4AF37] transition-colors duration-300"
                  style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '0.9rem' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <div
              className="text-[#a0a0a0] mb-5 tracking-widest uppercase"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
              }}
            >
              Contact
            </div>
            <div className="flex flex-col gap-3">
              <p
                className="text-[#a0a0a0]"
                style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '0.9rem' }}
              >
                الرياض، المملكة العربية السعودية
              </p>
              <a
                href="mailto:info@example.sa"
                className="text-[#a0a0a0] hover:text-[#D4AF37] transition-colors duration-300"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '0.9rem',
                  direction: 'ltr',
                  display: 'inline-block',
                }}
              >
                info@example.sa
              </a>
              <p
                className="text-[#a0a0a0]"
                style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '0.85rem', direction: 'ltr' }}
              >
                +966 5X XXX XXXX
              </p>
            </div>
          </div>
        </div>

        {/* Thin gold separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-[#8a8a8a]"
            style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '0.8rem' }}
          >
            © ٢٠٢٦ الرؤية الاستراتيجية · جميع الحقوق محفوظة
          </p>
          <p
            className="text-[#8a8a8a]"
            style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '0.75rem' }}
          >
            هذا الموقع نموذج تجريبي لأغراض العرض في سابقة الأعمال فقط
          </p>
        </div>
      </div>
    </footer>
  );
}
