/* ===================== LANDING PAGE ===================== */
import Navbar from '../components/landing/Navbar'
import HeroSection from '../components/landing/HeroSection'
import ServicesSection from '../components/landing/ServicesSection'
import GallerySection from '../components/landing/GallerySection'
import PricingSection from '../components/landing/PricingSection'
import ContactSection from '../components/landing/ContactSection'

function LandingPage() {
    return (
        <>
            {/* Навигация */}
            <Navbar />

            {/* Секции лендинга */}
            <main>
                <HeroSection />
                <ServicesSection />
                <GallerySection />
                <PricingSection />
                <ContactSection />
            </main>
        </>
    )
}

export default LandingPage