import Image from 'next/image';

export function Registration() {
  return (
    <section id="registration" className="relative bg-black text-white">
      <Image
        src="/images/footer-bg-2.png"
        alt=""
        fill
        className="object-cover opacity-50 pointer-events-none hidden md:block"
      />
      <div className="relative mx-auto max-w-[1304px] px-6 md:px-10 py-24 md:py-32">
        <div className="relative rounded-[40px] bg-gradient-to-br from-white/10 to-white/[0.03] border border-white/10 p-8 md:p-16 overflow-hidden">
          <div className="absolute -right-8 -top-8 w-[180px] md:w-[220px] aspect-square pointer-events-none">
            <Image src="/images/gift-badge.png" alt="" fill className="object-contain" />
          </div>

          <p className="font-sans text-tag uppercase text-acid mb-6">Реєстрація відкрита</p>

          <h2 className="font-display text-[44px] md:text-h2 uppercase leading-none tracking-[-0.022em] max-w-[820px]">
            Зареєструйся та отримай бонусом аудит твоєї воронки
          </h2>

          <p className="mt-8 font-sans text-eyebrow-date text-white/80 max-w-xl">
            Перші 50 учасників отримають персональний розбір своєї воронки від Андрія — безкоштовно.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#"
              className="font-display text-cta uppercase bg-acid text-black rounded-full px-10 py-5 leading-none hover:brightness-95"
            >
              Зареєструватись
            </a>
            <span className="font-sans text-meta text-white/70">
              Участь безкоштовна · Zoom · 21–22 квітня, 19:00
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
