import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Differentials } from '@/components/Differentials';
import { Portfolio } from '@/components/Portfolio';
import { Testimonials } from '@/components/Testimonials';
import { ContactCTA } from '@/components/ContactCTA';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Differentials />
        <Portfolio />
        <Testimonials />
        <ContactCTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;