import Image from 'next/image';

export function PreFooter() {
  return (
    <section className="relative bg-black text-white">
      <Image
        src="/images/footer-bg-1.png"
        alt=""
        fill
        className="object-cover opacity-60 pointer-events-none hidden md:block"
      />
      <div className="relative mx-auto max-w-[1304px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-[1fr_600px] gap-12 md:gap-16 items-center">
          <div>
            <p className="font-sans text-tag uppercase text-acid mb-6">Формат</p>
            <h2 className="font-display text-[40px] md:text-h2 uppercase leading-none tracking-[-0.022em] max-w-[560px]">
              Вчись з будь-якого пристрою
            </h2>

            <p className="mt-8 font-sans text-body-bio text-white/80 max-w-lg">
              Прямий ефір у Zoom + запис. Дивись на телефоні, ноутбуці або планшеті — рівно тоді,
              коли зручно. Матеріали залишаться з тобою після мастермайнду.
            </p>

            <div className="mt-10 flex items-center gap-5">
              <a href="#" aria-label="YouTube" className="hover:opacity-80">
                <Image src="/icons/icon-youtube.svg" alt="" width={48} height={34} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80">
                <Image src="/icons/icon-instagram.svg" alt="" width={36} height={36} />
              </a>
              <a
                href="#registration"
                className="font-display text-cta-pill uppercase bg-white/10 text-white rounded-full px-6 py-3 leading-none hover:bg-white/20"
              >
                Слідкуй за анонсами
              </a>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px]">
            <div className="absolute right-0 bottom-0 w-[380px] md:w-[520px] aspect-[626/842]">
              <Image src="/images/mockup-macbook.png" alt="" fill className="object-contain" />
            </div>
            <div className="absolute left-0 bottom-0 w-[200px] md:w-[280px] aspect-[634/842]">
              <Image src="/images/mockup-phone.png" alt="" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
