const messages = [
  "Complimentary shipping across India",
  "Easy size exchanges within 7 days",
  "Handcrafted in small batches",
  "New Spring / Summer 26 — now in atelier",
];

export function AnnouncementBar() {
  return (
    <div className="bg-charcoal text-ivory overflow-hidden border-b border-charcoal">
      <div className="flex whitespace-nowrap marquee-track py-2.5 text-[0.65rem] tracking-[0.28em] uppercase font-light">
        {[...messages, ...messages, ...messages].map((m, i) => (
          <span key={i} className="px-10 inline-flex items-center gap-10">
            {m}
            <span className="opacity-40">◦</span>
          </span>
        ))}
      </div>
    </div>
  );
}