import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Clock, Shield, TrendingUp } from 'lucide-react';

const guarantees = [
  { icon: Clock, text: 'جلسة استشارية مركّزة ٦٠ دقيقة' },
  { icon: Shield, text: 'سرية تامة لمعطيات أعمالك' },
  { icon: TrendingUp, text: 'خارطة طريق قابلة للتنفيذ' },
];

export function FinalCTASection() {
  return (
    <section id="cta" className="relative py-28 md:py-36 bg-[#0d0d0d]">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-0 border border-[#1e1e1e] overflow-hidden">

          {/* Left: Image Panel */}
          <div className="relative hidden lg:block">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1771270759486-1f7703945072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbGVhdGhlciUyMHBsYW5uZXIlMjBkZXNrJTIwc3BvdGxpZ2h0JTIwcHJlbWl1bSUyMG1pbmltYWx8ZW58MXx8fHwxNzczNTcxNDY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Premium planning desk"
              className="w-full h-full object-cover"
              style={{ minHeight: '500px', opacity: 0.55, filter: 'brightness(0.7) contrast(1.1)' }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d0d0d]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/60 to-transparent" />

            {/* Floating quote on image */}
            <div className="absolute bottom-10 right-8 left-8 p-6 border-r-2 border-[#D4AF37]/60">
              <p
                className="text-[#d0d0d0] italic leading-loose"
                style={{ fontFamily: 'Amiri, serif', fontSize: '1.05rem' }}
              >
                "الاستشارة الصحيحة ليست تكلفة.. بل هي أذكى استثماراتك."
              </p>
            </div>
          </div>

          {/* Right: Content Panel */}
          <div className="bg-[#0a0a0a] p-10 lg:p-14 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#D4AF37]" />
              <span
                className="text-[#D4AF37]/70 tracking-widest uppercase"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '0.65rem',
                  letterSpacing: '0.3em',
                }}
              >
                Book a Consultation
              </span>
            </div>

            <h2
              className="text-white mb-4 leading-tight"
              style={{
                fontFamily: 'Amiri, serif',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              خطوتك القادمة{' '}
              <span className="text-[#D4AF37]">تبدأ بقرار</span>
            </h2>

            <p
              className="text-[#b8b8b8] mb-10 leading-loose"
              style={{
                fontFamily: 'Tajawal, sans-serif',
                fontSize: '1rem',
                fontWeight: 300,
              }}
            >
              وقتك هو أثمن أصولك. دعنا نناقش كيف يمكننا مضاعفة قيمة أعمالك وحماية مكتسباتك في جلسة استشارية مركّزة ومحددة الأهداف.
            </p>

            {/* Guarantees */}
            <div className="flex flex-col gap-4 mb-10">
              {guarantees.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-8 h-8 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-[#D4AF37]" />
                  </div>
                  <span
                    className="text-[#b8b8b8]"
                    style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '0.9rem', fontWeight: 400 }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Mock form row */}
            <div className="flex gap-3 mb-6">
              <input
                type="text"
                placeholder="اسمك الكريم"
                className="flex-1 bg-[#131313] border border-[#2a2a2a] text-[#d0d0d0] px-4 py-3 placeholder-[#8a8a8a] focus:border-[#D4AF37]/50 focus:outline-none transition-colors duration-300"
                style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '0.9rem' }}
              />
              <input
                type="tel"
                placeholder="رقم التواصل"
                className="flex-1 bg-[#131313] border border-[#2a2a2a] text-[#d0d0d0] px-4 py-3 placeholder-[#8a8a8a] focus:border-[#D4AF37]/50 focus:outline-none transition-colors duration-300"
                style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '0.9rem' }}
              />
            </div>

            {/* Primary CTA */}
            <button
              className="group w-full flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#c49d30] text-[#0a0a0a] py-4 transition-all duration-300 shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40"
              style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 500, fontSize: '0.95rem' }}
            >
              احجز استشارتك المالية الآن
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform duration-300"
              />
            </button>

            <p
              className="text-[#a0a0a0] text-center mt-4"
              style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '0.75rem' }}
            >
              بيانات موقع تجريبي لأغراض العرض فقط · لن يُرسل أي طلب فعلي
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
