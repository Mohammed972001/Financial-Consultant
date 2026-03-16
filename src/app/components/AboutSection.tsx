import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft } from 'lucide-react';

const pillars = [
  { num: '١', text: 'تحليل مالي معمّق ودقيق' },
  { num: '٢', text: 'استراتيجيات مخصصة لواقع السوق السعودي' },
  { num: '٣', text: 'نتائج قابلة للقياس والتحقق' },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-[#0d0d0d]">
      {/* Section label - top center */}
      <div className="flex items-center justify-center gap-4 mb-20">
        <div className="h-px w-16 bg-[#D4AF37]/40" />
        <span
          className="text-[#D4AF37]/70 tracking-widest uppercase"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '0.65rem',
            letterSpacing: '0.3em',
          }}
        >
          Our Philosophy
        </span>
        <div className="h-px w-16 bg-[#D4AF37]/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image Column */}
          <div className="relative order-1 lg:order-1">
            {/* Golden frame accent */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-[#D4AF37]/20 pointer-events-none z-10" />
            <div className="relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1709461745239-ab793af6be61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3VudGFpbiUyMHBlbiUyMGRhcmslMjBwYXBlciUyMG1hY3JvJTIwY2xvc2UlMjB1cCUyMGx1eHVyeXxlbnwxfHx8fDE3NzM1NzE0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Premium fountain pen on dark textured paper"
                className="w-full h-[420px] md:h-[520px] object-cover"
                style={{ filter: 'brightness(0.85) contrast(1.05)' }}
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <div
              className="absolute bottom-8 left-6 bg-[#0d0d0d]/90 border border-[#D4AF37]/30 backdrop-blur-sm px-5 py-4 z-20"
              style={{ backdropFilter: 'blur(8px)' }}
            >
              <div
                className="text-[#D4AF37] mb-1"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '0.65rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                }}
              >
                Established
              </div>
              <div
                className="text-white"
                style={{ fontFamily: 'Amiri, serif', fontSize: '1.4rem', fontWeight: 700 }}
              >
                منذ ٢٠٠٩
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="order-2 lg:order-2">
            {/* Opening quotation mark */}
            <div
              className="text-[#D4AF37]/20 mb-4 leading-none select-none"
              style={{
                fontFamily: 'Amiri, serif',
                fontSize: '6rem',
                lineHeight: 0.8,
              }}
            >
              "
            </div>

            <h2
              className="text-white mb-6 leading-tight"
              style={{
                fontFamily: 'Amiri, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              لا نُقدم مجرد نصائح..{' '}
              <br />
              <span className="text-[#D4AF37]">بل نصنع استراتيجيات</span>
            </h2>

            <p
              className="text-[#b8b8b8] mb-10 leading-loose"
              style={{
                fontFamily: 'Tajawal, sans-serif',
                fontSize: '1.05rem',
                fontWeight: 300,
              }}
            >
              نؤمن بأن الأرقام تروي قصة شركتك. مهمتنا هي قراءة هذه الأرقام بدقة، وتحويلها إلى خطوات عملية تضمن استقرارك المالي وتوسعك الآمن في السوق السعودي.
            </p>

            {/* Pillars */}
            <div className="flex flex-col gap-4 mb-10">
              {pillars.map((p) => (
                <div key={p.num} className="flex items-center gap-4 group">
                  <span
                    className="text-[#D4AF37]/50 select-none w-5 text-left"
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '0.8rem',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {p.num}
                  </span>
                  <div className="h-px w-6 bg-[#D4AF37]/30 group-hover:w-10 transition-all duration-300" />
                  <span
                    className="text-[#d0d0d0] group-hover:text-white transition-colors duration-300"
                    style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '0.95rem' }}
                  >
                    {p.text}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#cta"
              className="group inline-flex items-center gap-3 border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0a0a0a] px-7 py-3.5 transition-all duration-300"
              style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 500, fontSize: '0.9rem' }}
            >
              احجز جلسة تقييم أعمالك
              <ArrowLeft
                size={15}
                className="group-hover:-translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
