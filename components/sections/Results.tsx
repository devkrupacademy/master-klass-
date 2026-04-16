const results = [
  {
    eyebrow: '+21% до конверсії в оплату',
    heading: 'З поточного трафіку команда починає забирати більше грошей',
    body: 'Ми не докуповували ліди. Ми перестали їх втрачати. Після програми менеджери інакше виявляють потребу й не відпускають теплі заявки.',
  },
  {
    eyebrow: 'Ріст LTV на 34%',
    heading: 'Клієнти повертаються і купують більше за один цикл',
    body: 'Прописали цикл супроводу: від першої угоди до повторного продажу. Клієнти перестали йти після першого замовлення.',
  },
  {
    eyebrow: 'Найм у 2 рази швидший',
    heading: 'Новий менеджер виходить на план за 30 днів',
    body: 'Онбординг став системним: скрипти, KPI, контрольні точки. Новий продавець не губиться і приносить результат у перший місяць.',
  },
  {
    eyebrow: 'Мінус 40% "злитих" заявок',
    heading: 'Система контролю бачить діри воронки в реальному часі',
    body: 'Керівник бачить, де саме заявка губиться, і втручається до того, як клієнт охолов. Команда перестала сподіватись "на пам’ять".',
  },
];

export function Results() {
  return (
    <section id="results" className="relative bg-black text-white">
      <div className="mx-auto max-w-[1304px] px-6 md:px-10 py-24 md:py-32">
        <h2 className="font-display text-[44px] md:text-h2 uppercase text-center leading-none tracking-[-0.022em]">
          Результати після мастермайнду
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-6 md:gap-8">
          {results.map((r) => (
            <article
              key={r.heading}
              className="rounded-3xl bg-white/[0.04] border border-white/10 p-8 md:p-10 flex flex-col gap-5"
            >
              <p className="font-sans text-card-eyebrow italic text-acid">{r.eyebrow}</p>
              <h3 className="font-sans text-card-heading uppercase text-white">{r.heading}</h3>
              <p className="font-sans text-card-body text-white/75">{r.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
