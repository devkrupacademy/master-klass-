import Image from 'next/image';

const logos = [1, 2, 3, 4, 5, 6];

export function PartnerLogos() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-[1304px] px-6 md:px-10 py-20 md:py-24">
        <p className="font-display text-[36px] md:text-h5-block uppercase text-center leading-none mb-10">
          Засновник компаній:
        </p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 items-center max-w-[1100px] mx-auto">
          {logos.map((i) => (
            <div
              key={i}
              className="relative aspect-square rounded-full bg-white/5 border border-white/10 overflow-hidden p-4"
            >
              <div className="relative w-full h-full">
                <Image src={`/images/logo-company-${i}.png`} alt="" fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
