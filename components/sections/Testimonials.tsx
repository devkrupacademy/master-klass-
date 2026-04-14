import Image from 'next/image';

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-black text-white">
      <div className="mx-auto max-w-[1304px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-[420px_1fr] gap-10 md:gap-16 items-center">
          <div className="relative w-[260px] md:w-[420px] aspect-square mx-auto md:mx-0 rounded-[32px] overflow-hidden">
            <Image
              src="/images/avatar-testimonial-large.png"
              alt="Володимир Семанюк"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="font-sans text-tag uppercase text-acid mb-6">Відгук учасника</p>

            <blockquote className="font-sans text-testimonial-italic italic text-white/90 text-[22px] md:text-[28px] leading-[1.4] max-w-[720px]">
              «Завдяки матеріалам мастермайнду зрозумів, як реально влаштовані продажі, як правильно
              спілкуватися з клієнтом і де саме моя команда зливала заявки. За перший місяць після
              впровадження вирахували мінімум 18% недоотриманого доходу — і закрили ці діри.»
            </blockquote>

            <div className="mt-8">
              <div className="font-display text-h4-testimonial uppercase">Володимир Семанюк</div>
              <div className="font-sans text-caption text-white/60 mt-2">
                Власник бізнесу · меблева ніша
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
