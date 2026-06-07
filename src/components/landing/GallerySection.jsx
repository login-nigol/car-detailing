/* ===================== GALLERY SECTION ===================== */
/* Секция галереи — сетка работ с плейсхолдерами */
/* Когда появятся фото — просто заменить src в GALLERY_ITEMS */
import styles from './GallerySection.module.css'

/* Данные галереи — легко заменить на реальные фото */
const GALLERY_ITEMS = [
    { id: 1, label: 'Außenreinigung', category: 'Außen' },
    { id: 2, label: 'Innenreinigung', category: 'Innen' },
    { id: 3, label: 'Politur', category: 'Lack' },
    { id: 4, label: 'Detailing', category: 'Premium' },
    { id: 5, label: 'Felgenreinigung', category: 'Außen' },
    { id: 6, label: 'Keramikversiegelung', category: 'Premium' },
]

function GallerySection() {
    return (
        /* id для якорной ссылки из Navbar */
        <section className={styles.gallery} id="gallery">
            <div className={styles.container}>

                {/* Заголовок секции */}
                <h2 className={styles.sectionTitle}>
                    Unsere <span className={styles.accent}>Arbeiten</span>
                </h2>

                {/* Подзаголовок */}
                <p className={styles.sectionSubtitle}>
                    Jedes Fahrzeug behandeln wir mit größter Sorgfalt —
                    das Ergebnis spricht für sich.
                </p>

                {/* Сетка галереи */}
                <div className={styles.grid}>
                    {GALLERY_ITEMS.map(item => (
                        <div key={item.id} className={styles.card}>

                            {/* Плейсхолдер вместо фото */}
                            <div className={styles.placeholder}>
                                <span className={styles.placeholderIcon}>📷</span>
                                <span className={styles.placeholderText}>{item.label}</span>
                            </div>

                            {/* Категория внизу карточки */}
                            <div className={styles.cardFooter}>
                                <span className={styles.category}>{item.category}</span>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default GallerySection