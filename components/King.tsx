export default function King({ className, solid }: { className?: string; solid?: string }) {
  const fill = solid ?? "url(#king-grad)";
  return (
    <svg viewBox="0 0 200 372" className={className} aria-hidden="true">
      {!solid && (
        <defs>
          <linearGradient id="king-grad" x1="0" x2="1">
            <stop offset="0" stopColor="#f6eee6" />
            <stop offset="0.55" stopColor="#e4d6c8" />
            <stop offset="1" stopColor="#b3a08d" />
          </linearGradient>
        </defs>
      )}
      <g fill={fill}>
        <path d="M92 8h16v14h14v16h-14v14h-16V38H78V22h14z" />
        <path d="M100 56c-26 0-42 14-42 34 0 10 5 17 12 22h60c7-5 12-12 12-22 0-20-16-34-42-34z" />
        <rect x="62" y="112" width="76" height="12" rx="6" />
        <path d="M76 124h48c-2 40 4 90 22 150H54c18-60 24-110 22-150z" />
        <rect x="46" y="274" width="108" height="14" rx="7" />
        <path d="M40 288h120c8 14 14 28 14 40H26c0-12 6-26 14-40z" />
        <ellipse cx="100" cy="338" rx="84" ry="14" />
      </g>
    </svg>
  );
}
