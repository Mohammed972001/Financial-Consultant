import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1651562759189-fe2e9b51807f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMGhpZ2glMjByaXNlJTIwd2luZG93JTIwY2l0eSUyMGR1c2slMjBzaWxob3VldHRlfGVufDF8fHx8MTc3MzU3MTQ2NHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Executive overlooking city"
          className="w-full h-full object-cover"
          style={{ opacity: 0.28, transform: 'scale(1.02)' }}
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-[#0a0a0a]/60" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/80" />
      </div>

      {/* Decorative vertical line – right aligned */}
      <div className="absolute top-0 right-[10%] w-px h-full bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 w-full">
        <div className="max-w-3xl mr-auto ml-0">
          {/* Eyebrow label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-[#D4AF37]" />
            <span
              className="text-[#D4AF37] tracking-widest uppercase"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.72rem',
                letterSpacing: '0.28em',
              }}
            >
              Strategic Financial Advisory · المملكة العربية السعودية
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-white mb-8 leading-tight"
            style={{
              fontFamily: 'Amiri, serif',
              fontSize: 'clamp(2.6rem, 6vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1.25,
            }}
          >
            قرارات مالية دقيقة..{' '}
            <br />
            <span className="text-[#D4AF37]">لنمو أعمالك بثقة</span>
          </h1>

          {/* Subtitle */}
          <p
            className="mb-12 leading-loose text-[#d0d0d0]"
            style={{
              fontFamily: 'Tajawal, sans-serif',
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              fontWeight: 300,
              maxWidth: '560px',
            }}
          >
            نُمكّن الشركات ورواد الأعمال في المملكة من تجاوز التحديات المالية وتحقيق أقصى درجات الربحية برؤية استراتيجية واضحة ومدروسة.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#cta"
              className="group inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#c49d30] text-[#0a0a0a] px-8 py-4 transition-all duration-300 shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40"
              style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 500, fontSize: '0.95rem' }}
            >
              حدّد موعداً لاستشارتك
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform duration-300"
              />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-[#d0d0d0] hover:text-[#D4AF37] transition-colors duration-300 underline-offset-4"
              style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '0.9rem', fontWeight: 400 }}
            >
              اكتشف فلسفتنا
            </a>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span
          className="text-[#a0a0a0] tracking-widest uppercase"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
          }}
        >
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#D4AF37]/60 to-transparent animate-pulse" />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
