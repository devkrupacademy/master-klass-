import Image from 'next/image';

const days = [
  {
    day: 'День 1',
    date: '21 квітня',
    title: 'Діагностика твого відділу продажів',
    points: [
      'Як порахувати в цифрах, скільки грошей твій відділ зливає щотижня.',
      'ТОП-5 непомітних дір у воронці, через які ти втрачаєш до 40% заявок.',
      'Карта ролей: хто має закривати, хто — прогрівати, і де зараз у вас збій.',
      'Робота з живими кейсами учасників — розбір у прямому ефірі.',
    ],
  },
  {
    day: 'День 2',
    date: '22 квітня',
    title: 'Побудова системи, яка дає х2',
    points: [
      'Скрипти, які реально продають: від першого контакту до закриття.',
      'Система KPI, що мотивує менеджерів добивати угоди, а не саботувати.',
      'Як наймати й вводити в роботу так, щоб новачок виходив на план за 30 днів.',
      'План на 90 днів: що впровадити першим, щоб побачити х2.',
    ],
  },
];

export function Program() {
  return (
    <section id="program" className="relative bg-black text-white">
      <Image
        src="/images/section-bg-mask-2.png"
        alt=""
        fill
        className="object-cover opacity-30 pointer-events-none hidden md:block"
      />
      <div className="relative mx-auto max-w-[1304px] px-6 md:px-10 py-24 md:py-32">
        <h2 className="font-display text-[44px] md:text-h2 uppercase text-center leading-none tracking-[-0.022em]">
          Програма мастермайнду
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-6 md:gap-8">
          {days.map((d) => (
            <article
              key={d.day}
              className="rounded-3xl bg-white/5 border border-white/10 p-8 md:p-10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="text-day bg-white/10 text-white rounded-full px-4 py-1">
                  {d.day}
                </span>
                <span className="text-day bg-acid text-black rounded-full px-4 py-1">{d.date}</span>
                <span className="text-day bg-white/10 text-white rounded-full px-4 py-1">
                  19:00
                </span>
              </div>

              <h3 className="font-display text-[40px] md:text-h3 leading-none">{d.title}</h3>

              <ul className="mt-8 space-y-4">
                {d.points.map((p) => (
                  <li key={p} className="flex gap-3 items-start">
                    <Image
                      src="/icons/icon-check.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="mt-1.5 shrink-0"
                    />
                    <span className="font-sans text-body text-white/85">{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
