import Image from 'next/image';

const items = [
  'У тебе є відділ продажів, але менеджери закривають слабше, ніж могли б.',
  'Частина заявок зливається ще до оплати — і ти не розумієш, де саме.',
  'Хочеш побудувати системний відділ, який продає без твоєї постійної участі.',
  'Плануєш х2 по виручці у 2026, але не впевнений, що поточна команда витягне.',
  'Набираєш нових менеджерів, але вони губляться у перші тижні й не доходять до KPI.',
  'Розумієш, що мотивацією й тренінгами вже не вирішити — потрібна система.',
];

export function ForWhom() {
  return (
    <section className="relative bg-black text-white">
      <div className="mx-auto max-w-[1304px] px-6 md:px-10 py-24 md:py-28">
        <h2 className="font-display text-[44px] md:text-h2 uppercase text-center leading-none tracking-[-0.022em] max-w-[900px] mx-auto">
          Цей мастермайнд для тебе, якщо:
        </h2>

        <ul className="mt-14 grid md:grid-cols-2 gap-x-10 gap-y-6 max-w-[1100px] mx-auto">
          {items.map((t) => (
            <li key={t} className="flex gap-4 items-start">
              <Image
                src="/icons/icon-check.svg"
                alt=""
                width={20}
                height={20}
                className="mt-1.5 shrink-0"
              />
              <span className="font-sans text-body-list text-white/85">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
