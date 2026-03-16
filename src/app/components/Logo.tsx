/**
 * Logo for الرؤية الاستراتيجية - Strategic Vision Financial Advisory
 * Combines an upward trend line (growth) with a focal point (vision/clarity)
 */
export function Logo({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Base line - foundation/stability */}
      <path
        d="M8 32 L32 32"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Upward trend - growth trajectory */}
      <path
        d="M10 28 L18 20 L26 12 L32 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Focal point - strategic vision */}
      <circle cx="32" cy="8" r="3" fill="currentColor" />
    </svg>
  );
}
