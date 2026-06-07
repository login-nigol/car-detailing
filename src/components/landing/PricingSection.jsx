/* ===================== PRICING SECTION ===================== */
/* Секция цен — 3 тарифных пакета */
/* Средний пакет выделен как популярный */
import styles from './PricingSection.module.css'

/* Данные тарифов вынесены отдельно — легко редактировать */
const PLANS = [
    {
        id: 1,
        name: 'Basic',
        price: '89',
        duration: 'ab',
        popular: false,
        description: 'Perfekt für die regelmäßige Pflege',
        features: [
            'Handwäsche außen',
            'Felgenreinigung',
            'Scheiben innen & außen',
            'Staubsaugen Innenraum',
            'Armaturenbrett reinigen',
        ],
    },
    {
        id: 2,
        name: 'Premium',
        price: '189',
        duration: 'ab',
        popular: true,
        description: 'Unser beliebtestes Paket',
        features: [
            'Alles aus Basic',
            'Tiefenreinigung Innenraum',
            'Lederreinigung & Pflege',
            'Politur (einstufig)',
            'Wachsversiegelung',
            'Ozonbehandlung',
        ],
    },
    {
        id: 3,
        name: 'Detailing',
        price: '349',
        duration: 'ab',
        popular: false,
        description: 'Maximaler Schutz & Glanz',
        features: [
            'Alles aus Premium',
            'Lackkorrektur (zweistufig)',
            'Keramikversiegelung',
            'Motorraum reinigen',
            'Reifenpflege',
            'Detailergebnis-Garantie',
        ],
    },
]

function PricingSection() {
    return (
        /* id для якорной ссылки из Navbar */
        <section className={styles.pricing} id="pricing">
            <div className={styles.container}>

                {/* Заголовок секции */}
                <h2 className={styles.sectionTitle}>
                    Unsere <span className={styles.accent}>Preise</span>
                </h2>

                {/* Подзаголовок */}
                <p className={styles.sectionSubtitle}>
                    Transparente Preise ohne versteckte Kosten —
                    wählen Sie das passende Paket für Ihr Fahrzeug.
                </p>

                {/* Сетка тарифов */}
                <div className={styles.grid}>
                    {PLANS.map(plan => (
                        <div
                            key={plan.id}
                            /* Популярный план получает дополнительный класс */
                            className={`${styles.card} ${plan.popular ? styles.popular : ''}`}
                        >
                            {/* Бейдж популярного плана */}
                            {plan.popular && (
                                <div className={styles.popularBadge}>
                                    ⭐ Beliebteste Wahl
                                </div>
                            )}

                            {/* Шапка карточки */}
                            <div className={styles.cardHeader}>
                                {/* Название пакета */}
                                <h3 className={styles.planName}>{plan.name}</h3>

                                {/* Описание пакета */}
                                <p className={styles.planDescription}>{plan.description}</p>

                                {/* Цена */}
                                <div className={styles.priceRow}>
                                    <span className={styles.priceDuration}>{plan.duration}</span>
                                    <span className={styles.price}>{plan.price}€</span>
                                </div>
                            </div>

                            {/* Разделитель */}
                            <div className={styles.divider} />

                            {/* Список включённых услуг */}
                            <ul className={styles.features}>
                                {plan.features.map((feature, index) => (
                                    <li key={index} className={styles.feature}>
                                        {/* Галочка */}
                                        <span className={styles.check}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA кнопка */}

                            <a href="#contact"
                                className={`${styles.btn} ${plan.popular ? styles.btnPrimary : styles.btnSecondary}`}
                            >
                                Jetzt buchen
                            </a>

                        </div>
                    ))}
                </div>

            </div>
        </section >
    )
}

export default PricingSection