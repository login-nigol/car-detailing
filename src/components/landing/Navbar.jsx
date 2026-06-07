/* ===================== NAVBAR ===================== */
/* Навигационная панель с якорными ссылками и кнопкой CTA */
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

function Navbar() {
    /* Флаг — прокрутил ли пользователь страницу вниз */
    const [scrolled, setScrolled] = useState(false)

    /* Флаг — открыто ли мобильное меню */
    const [menuOpen, setMenuOpen] = useState(false)

    /* Слушаем скролл — добавляем фон когда прокрутили */
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    /* Якорные ссылки для навигации */
    const links = [
        { label: 'Leistungen', href: '#services' },
        { label: 'Galerie', href: '#gallery' },
        { label: 'Preise', href: '#pricing' },
        { label: 'Kontakt', href: '#contact' },
    ]

    return (
        /* Фон появляется после скролла */
        <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>

                {/* Логотип / название */}
                <a href="#hero" className={styles.logo}>
                    Auto<span className={styles.accent}>Glanz</span>
                </a>

                {/* Десктопное меню */}
                <nav className={styles.nav}>
                    {links.map(link => (
                        <a key={link.href} href={link.href} className={styles.navLink}>
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* CTA кнопка */}
                <a href="#contact" className={styles.cta}>
                    Termin buchen
                </a>

                {/* Бургер для мобилки */}
                <button
                    className={styles.burger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menü öffnen"
                >
                    <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ''}`} />
                    <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ''}`} />
                    <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ''}`} />
                </button>
            </div>

            {/* Мобильное меню */}
            {menuOpen && (
                <div className={styles.mobileMenu}>
                    {links.map(link => (

                        <a key={link.href}
                            href={link.href}
                            className={styles.mobileLink}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a href="#contact" className={styles.mobileCta}>
                        Termin buchen
                    </a>
                </div>
            )
            }
        </header >
    )
}

export default Navbar