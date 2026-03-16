import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    prefix: '+',
    value: 500,
    unit: 'مليون',
    currency: 'ريال',
    label: 'حجم الأصول المُدارة',
    description: 'حجم أصول ومحافظ تم توجيهها وإدارتها استراتيجياً',
  },
  {
    prefix: '+',
    value: 50,
    unit: '',
    currency: 'شركة',
    label: 'عميل تجاوز نقطة التعادل',
    description: 'شركة كبرى وناشئة تم الوصول بها إلى نقطة التعادل والربحية',
  },
  {
    prefix: '',
    value: 15,
    unit: '',
    currency: 'عاماً',
    label: 'من الخبرة الميدانية',
    description: 'من الخبرة العميقة والفهم الدقيق لاقتصاد السوق السعودي',
  },
];

function useCountUp(target: number, duration = 2000, isActive: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    let start = 0;
    const steps = 70;
    const increment = target / steps;
    const intervalMs = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isActive, target, duration]);

  return count;
}

function StatItem({ stat, isActive }: { stat: (typeof stats)[0]; isActive: boolean }) {
  const count = useCountUp(stat.value, 2200, isActive);

  return (
    <div className="relative flex flex-col items-center text-center px-6 lg:px-10 group">
      {/* Large number */}
      <div className="mb-3 flex items-start justify-center gap-1">
        {stat.prefix && (
          <span
            className="text-[#D4AF37]/70 mt-4"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 300,
            }}
          >
            {stat.prefix}
          </span>
        )}
        <span
          className="text-[#D4AF37] leading-none"
          style={{
            fontFamily: 'Amiri, serif',
            fontSize: 'clamp(4rem, 9vw, 7rem)',
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          {count.toLocaleString('ar-SA')}
        </span>
      </div>

      {/* Unit + currency */}
      <div
        className="text-[#D4AF37]/70 mb-4"
        style={{
          fontFamily: 'Amiri, serif',
          fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
          fontWeight: 400,
        }}
      >
        {stat.unit && `${stat.unit} `}
        {stat.currency}
      </div>

      {/* Thin decorative line */}
      <div className="w-10 h-px bg-[#D4AF37]/40 mb-4 group-hover:w-16 transition-all duration-500" />

      {/* Label */}
      <div
        className="text-white mb-3"
        style={{
          fontFamily: 'Tajawal, sans-serif',
          fontSize: '0.95rem',
          fontWeight: 500,
        }}
      >
        {stat.label}
      </div>

      {/* Description */}
      <p
        className="text-[#a0a0a0] max-w-[220px] leading-relaxed"
        style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '0.8rem', fontWeight: 300 }}
      >
        {stat.description}
      </p>
    </div>
  );
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-[#080808] overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow at center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-24">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#D4AF37]/40" />
            <span
              className="text-[#D4AF37]/70 tracking-widest uppercase"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.65rem',
                letterSpacing: '0.3em',
              }}
            >
              Track Record
            </span>
            <div className="h-px w-16 bg-[#D4AF37]/40" />
          </div>
          <h2
            className="text-white"
            style={{
              fontFamily: 'Amiri, serif',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 700,
              lineHeight: 1.3,
            }}
          >
            أرقامنا تتحدث{' '}
            <span className="text-[#D4AF37]">بلغة الإنجاز</span>
          </h2>
        </div>

        {/* Stats Row with vertical dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 md:divide-x md:divide-x-reverse md:divide-[#D4AF37]/10">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} isActive={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
