import Image from 'next/image';

export function AboutFounder() {
  return (
    <section className="relative bg-black text-white">
      <Image
        src="/images/section-bg-mask-1.png"
        alt=""
        fill
        className="object-cover opacity-40 pointer-events-none hidden md:block"
      />
      <div className="relative mx-auto max-w-[1304px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-[430px_1fr] gap-12 md:gap-20 items-center">
          <div className="relative w-[260px] md:w-[430px] aspect-square mx-auto md:mx-0">
            <Image src="/images/logo-hero-large.png" alt="" fill className="object-contain" />
          </div>

          <div>
            <p className="font-sans text-tag uppercase text-acid mb-4">Про автора</p>
            <h2 className="font-display text-[48px] md:text-h2 uppercase leading-none tracking-[-0.022em]">
              6+ років у сфері продажів
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-6 max-w-[520px]">
              <div>
                <span className="font-numeric text-numeric text-acid leading-none block">18+</span>
                <span className="font-sans text-body-subline text-white/70 mt-3 block">
                  років у сфері продажів
                </span>
              </div>
              <div>
                <span className="font-numeric text-numeric text-acid leading-none block">184+</span>
                <span className="font-sans text-body-subline text-white/70 mt-3 block">
                  побудованих відділів продажів
                </span>
              </div>
            </div>

            <p className="mt-10 font-sans text-body-bio text-white/80 max-w-xl">
              Пройшов шлях від менеджера з продажів до серійного підприємця. Будує системні відділи
              продажів у нішах з високою конкуренцією.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
