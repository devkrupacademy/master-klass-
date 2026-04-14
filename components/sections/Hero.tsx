import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <Image
        src="/images/hero-bg-pattern.png"
        alt=""
        fill
        priority
        className="object-cover opacity-60 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black pointer-events-none" />

      <div className="relative mx-auto max-w-[1304px] px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-32">
        <p className="font-sans text-tag uppercase text-acid mb-6">Мастермайнд · 21–22 квітня · Zoom</p>

        <div className="grid md:grid-cols-[1fr_540px] gap-10 md:gap-16 items-end">
          <div>
            <h1 className="font-display text-[56px] md:text-h1 uppercase leading-[0.95] max-w-[780px]">
              Як зробити х2 у продажах у 2026 році з сильною командою продажів
            </h1>

            <p className="mt-8 max-w-xl font-sans text-eyebrow-date text-white/80">
              За 2 вечора розберемо ТОП-5 проблем вашого відділу продажу і як їх усунути без найму.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#registration"
                className="font-display text-cta-pill uppercase bg-acid text-black rounded-full px-8 py-4 leading-none hover:brightness-95"
              >
                Прийняти участь безкоштовно
              </a>
              <span className="font-sans text-body-lead text-white/70">
                2 дні · 21–22 квітня · о 19:00
              </span>
            </div>

            <p className="mt-6 font-sans text-meta text-white/50 max-w-lg">
              Участь безкоштовна · Zoom-формат · Кількість місць обмежена
            </p>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-[360px] md:w-[540px] aspect-[540/641]">
              <Image
                src="/images/andriy-portrait.png"
                alt="Андрій Крупкін"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="hidden md:block absolute -left-10 top-20 font-display leading-none uppercase text-white/95">
              <div className="text-[88px] lg:text-hero leading-none tracking-[-1.88px]">Андрій</div>
              <div className="text-[88px] lg:text-hero leading-none tracking-[-1.88px]">Крупкін</div>
              <div className="mt-4 font-sans text-caption text-white/60 normal-case">Автор курсу</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
