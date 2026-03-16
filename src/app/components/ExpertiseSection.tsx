import { ArrowLeft } from 'lucide-react';

const expertiseAreas = [
  {
    index: '01',
    title: 'إعادة الهيكلة المالية',
    description:
      'تحسين التدفقات النقدية وتقليل الهدر المالي بفعالية، عبر مراجعة شاملة لبنية التكاليف واستراتيجيات التمويل.',
    tags: ['التدفق النقدي', 'إدارة الديون', 'الكفاءة التشغيلية'],
  },
  {
    index: '02',
    title: 'تقييم الفرص الاستثمارية',
    description:
      'دراسات جدوى دقيقة مدعومة بتحليل استراتيجي لواقع السوق، تمنحك رؤية استثمارية واضحة تتجاوز المتوسط.',
    tags: ['دراسات الجدوى', 'تحليل المخاطر', 'العوائد المستهدفة'],
  },
  {
    index: '03',
    title: 'استراتيجيات التوسع والنمو',
    description:
      'تخطيط مالي متين يدعم انتقال شركتك للمرحلة التالية بأمان، مع خرائط طريق مالية واضحة وقابلة للتنفيذ.',
    tags: ['التوسع الجغرافي', 'الاندماج والاستحواذ', 'التخطيط المرحلي'],
  },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="relative py-28 md:py-36 bg-[#0a0a0a]">
      {/* Subtle horizontal line decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-20 lg:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-[#D4AF37]" />
            <span
              className="text-[#D4AF37]/70 tracking-widest uppercase"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.65rem',
                letterSpacing: '0.3em',
              }}
            >
              Areas of Expertise
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-white leading-tight"
              style={{
                fontFamily: 'Amiri, serif',
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 700,
                lineHeight: 1.25,
              }}
            >
              خبرة قيادية..{' '}
              <span className="text-[#D4AF37]">تقودك نحو الصدارة</span>
            </h2>
            <p
              className="text-[#a0a0a0] max-w-xs lg:text-left"
              style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '0.9rem', fontWeight: 300 }}
            >
              ثلاثة محاور استراتيجية متكاملة تغطي دورة النمو الكاملة لأعمالك
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-0 border border-[#1e1e1e] divide-x divide-x-reverse divide-[#1e1e1e]">
          {expertiseAreas.map((area) => (
            <div
              key={area.index}
              className="group relative p-8 lg:p-10 hover:bg-[#111111] transition-colors duration-500 cursor-default"
            >
              {/* Top gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-[#1e1e1e] overflow-hidden">
                <div className="absolute inset-0 bg-[#D4AF37] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>

              {/* Index number */}
              <div
                className="text-[#D4AF37]/15 group-hover:text-[#D4AF37]/25 transition-colors duration-500 mb-8 leading-none select-none"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '4rem',
                  fontWeight: 300,
                  lineHeight: 1,
                }}
              >
                {area.index}
              </div>

              {/* Title */}
              <h3
                className="text-white group-hover:text-[#D4AF37] mb-4 transition-colors duration-300 leading-tight"
                style={{
                  fontFamily: 'Amiri, serif',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  lineHeight: 1.3,
                }}
              >
                {area.title}
              </h3>

              {/* Thin divider */}
              <div className="h-px w-10 bg-[#D4AF37]/30 mb-5 group-hover:w-16 transition-all duration-300" />

              {/* Description */}
              <p
                className="text-[#a0a0a0] group-hover:text-[#b8b8b8] leading-loose mb-7 transition-colors duration-300"
                style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '0.9rem', fontWeight: 300 }}
              >
                {area.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[#D4AF37]/50 border border-[#D4AF37]/15 px-2.5 py-1 group-hover:border-[#D4AF37]/30 group-hover:text-[#D4AF37]/70 transition-all duration-300"
                    style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '0.7rem', fontWeight: 400 }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="#cta"
            className="group inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#c49d30] text-[#0a0a0a] px-10 py-4 transition-all duration-300 shadow-lg shadow-[#D4AF37]/15 hover:shadow-[#D4AF37]/35"
            style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 500, fontSize: '0.95rem' }}
          >
            احجز اجتماعك الآن
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform duration-300"
            />
          </a>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
    </section>
  );
}
