"use client";

import { FormEvent, useState } from "react";

const benefits = [
  ["01", "Портативность", "Весит немного и помещается в спортивную сумку."],
  ["02", "Безопасность", "Амортизирует нагрузку и удерживает гриф на поверхности."],
  ["03", "Универсальность", "Для дома, зала, улицы и восстановительных тренировок."],
  ["04", "Простота", "Никакой сборки: установите наконечник и начинайте тренировку."],
  ["05", "Доступность", "Полноценная landmine-тренировка без громоздкой стойки."],
];

const uses = [
  ["⌂", "Дома", "Тренируйтесь компактно, не занимая комнату тренажёром."],
  ["↗", "В зале", "Быстрая смена упражнений без привязки к одной зоне."],
  ["☀", "На улице", "Устойчивое положение на подходящей твёрдой поверхности."],
  ["＋", "Реабилитация", "Контролируемые траектории для занятий со специалистом."],
];

export default function Home() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <main>
      <header className="header">
        <a className="brand" href="#top" aria-label="Barbell Bro — наверх">
          <span className="brand-mark">BB</span>
          <span>BARBELL<br /><b>BRO</b></span>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#product">Продукт</a>
          <a href="#how">Как работает</a>
          <a href="#benefits">Преимущества</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <a className="button button-small" href="#order">Оставить заявку</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Новая свобода движения</p>
          <h1>ШТАНГА.<br /><span>БЕЗ ГРАНИЦ.</span></h1>
          <p className="lead">Инновационный полиуретановый наконечник для безопасных и удобных тренировок со штангой — в любом месте.</p>
          <div className="hero-actions">
            <a className="button" href="#order">Оформить предзаказ <span>↗</span></a>
            <a className="text-link" href="#how">Узнать, как работает ↓</a>
          </div>
          <div className="stats">
            <div><strong>360°</strong><span>свобода движения</span></div>
            <div><strong>3 сек</strong><span>до старта</span></div>
            <div><strong>7+</strong><span>типов упражнений</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <img src="/package-render.png" alt="Упаковка наконечника Barbell Bro" />
          <span className="visual-tag">Интегральная<br />полиуретановая пена</span>
        </div>
      </section>

      <section className="problem section" id="product">
        <div className="section-number">01 / ПРОБЛЕМА</div>
        <div className="problem-copy">
          <h2>Тренировка со штангой<br />не должна быть <em>сложной.</em></h2>
          <p>Стационарное оборудование занимает место, а импровизированная опора может скользить и повреждать поверхность. Barbell Bro превращает обычный гриф в мобильный landmine-тренажёр.</p>
        </div>
        <div className="problem-card"><span>!</span><p>Меньше риска<br />Больше контроля<br />Свобода движения</p></div>
      </section>

      <section className="solution section">
        <div className="solution-image">
          <img src="/package-render.png" alt="Собранная упаковка Barbell Bro" />
          <span className="image-label">Собранная упаковка</span>
        </div>
        <div className="solution-copy">
          <div className="section-number light">02 / РЕШЕНИЕ</div>
          <p className="eyebrow">Сцепление. Амортизация. Контроль.</p>
          <h2>ОДИН НАКОНЕЧНИК.<br /><span>ДЕСЯТКИ ДВИЖЕНИЙ.</span></h2>
          <p>Плотная интегральная полиуретановая пена принимает нагрузку, помогает зафиксировать нижний конец грифа и защищает точку опоры. Сферическая форма сохраняет естественную траекторию движения.</p>
          <ul>
            <li><b>Устойчивость</b><span>Надёжный контакт с поверхностью</span></li>
            <li><b>Амортизация</b><span>Мягкое распределение нагрузки</span></li>
            <li><b>Совместимость</b><span>Продуманная посадка на гриф</span></li>
          </ul>
        </div>
      </section>

      <section className="how section" id="how">
        <div className="section-heading"><div><span className="section-number">03 / КАК ЭТО РАБОТАЕТ</span><h2>ТРИ ШАГА ДО<br /><em>ТРЕНИРОВКИ</em></h2></div><p>Никаких креплений, инструментов и долгой настройки.</p></div>
        <div className="steps">
          <article><span className="step-num">01</span><div className="step-icon">◉</div><h3>Наденьте</h3><p>Установите Barbell Bro на свободный конец грифа.</p></article>
          <article><span className="step-num">02</span><div className="step-icon">⌄</div><h3>Уприте</h3><p>Поставьте наконечник на ровную устойчивую поверхность.</p></article>
          <article><span className="step-num">03</span><div className="step-icon">↗</div><h3>Тренируйтесь</h3><p>Выполняйте тяги, жимы, выпады, приседания и повороты.</p></article>
        </div>
      </section>

      <section className="benefits section" id="benefits">
        <div className="benefits-title"><span className="section-number light">04 / ПРЕИМУЩЕСТВА</span><h2>СОЗДАН ДЛЯ<br /><span>ДВИЖЕНИЯ</span></h2><p>Barbell Bro делает силовые тренировки проще и доступнее — без компромиссов в функциональности.</p></div>
        <div className="benefit-list">{benefits.map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><b>↗</b></article>)}</div>
      </section>

      <section className="use-section section">
        <div className="section-heading"><div><span className="section-number">05 / ГДЕ ИСПОЛЬЗОВАТЬ</span><h2>ВАША ТРЕНИРОВКА.<br /><em>ВАШИ ПРАВИЛА.</em></h2></div></div>
        <div className="use-grid">{uses.map(([i,t,d]) => <article key={t}><span>{i}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
      </section>

      <section className="price section" id="order">
        <div>
          <span className="section-number light">06 / ПРЕДЗАКАЗ</span>
          <p className="eyebrow">Стартовая стоимость</p><div className="price-value">≈ 2 000 <small>₽</small></div>
          <p className="price-note">В комплекте: наконечник Barbell Bro и подробное руководство по применению.</p>
          <div className="included"><span>✓ Наконечник</span><span>✓ Руководство</span><span>✓ Фирменная упаковка</span></div>
        </div>
        <form onSubmit={submit}>
          <h2>БУДЬТЕ В ЧИСЛЕ<br /><span>ПЕРВЫХ</span></h2><p>Оставьте контакты — сообщим о старте продаж.</p>
          <label>Ваше имя<input name="name" required placeholder="Александр" /></label>
          <label>Телефон или email<input name="contact" required placeholder="+7 999 000-00-00" /></label>
          <label>Комментарий<textarea name="comment" placeholder="Необязательно" /></label>
          <label className="consent"><input type="checkbox" required /> <span>Я согласен(на) на обработку персональных данных в соответствии с 152-ФЗ</span></label>
          <button className="button" type="submit">Отправить заявку <span>↗</span></button>
          {sent && <p className="success" role="status">Спасибо! Заявка принята.</p>}
        </form>
      </section>

      <footer id="contacts">
        <div className="footer-main">
          <div><a className="brand footer-brand" href="#top"><span className="brand-mark">BB</span><span>BARBELL<br /><b>BRO</b></span></a><p>Свобода тренироваться.<br />Сила двигаться дальше.</p></div>
          <address className="footer-contacts">
            <b>КОНТАКТЫ И РЕКВИЗИТЫ</b>
            <strong>ООО «БАРБЕЛЛ БРО»</strong>
            <span>ИНН 6658582310</span>
            <span>620000, Свердловская область, г. Екатеринбург, ул. Маршала Жукова, д. 10, кв. 352</span>
            <a href="tel:+79827489095">+7 982 748-90-95</a>
            <a href="mailto:hello@barbellbro.ru">hello@barbellbro.ru</a>
          </address>
          <div><b>НАВИГАЦИЯ</b><a href="#product">Продукт</a><a href="#how">Как это работает</a><a href="#benefits">Преимущества</a></div>
        </div>
        <div className="support">
          <div className="support-logo-group">
            <div className="fund-logo" aria-label="Фонд содействия инновациям">
              <strong>ФОНД СОДЕЙСТВИЯ<br /><span>ИННОВАЦИЯМ</span></strong>
              <img src="/support-ribbon.png" alt="" />
            </div>
            <img
              className="platform-university-logo"
              src="/platform-university-logo.png"
              alt="Платформа университетского технологического предпринимательства"
            />
          </div>
          <p>Проект реализован при поддержке Фонда содействия инновациям в рамках программы «Студенческий стартап» мероприятия «Платформа университетского технологического предпринимательства» федерального проекта «Технологии»</p>
        </div>
        <div className="copyright">© 2026 BARBELL BRO <a href="#top">НАВЕРХ ↑</a></div>
      </footer>
    </main>
  );
}
