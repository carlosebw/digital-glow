import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const ContactCTA = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    'Consultoria gratuita',
    'Orçamento sem compromisso',
    'Resposta em até 24h',
    'Projetos sob medida'
  ];

  return (
    <section className="section-padding bg-gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Pronto para transformar sua presença digital?
          </h2>
          
          <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
            Fale conosco e descubra como podemos impulsionar seu negócio no ambiente digital.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className={`flex items-center justify-center gap-2 bg-white/10 rounded-lg py-3 px-4 backdrop-blur-sm fade-in-up stagger-${index + 1}`}
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm lg:text-base font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-accent hover:bg-accent-600 text-accent-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <div className="flex items-center gap-2 text-white/80">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm">Resposta em até 24 horas</span>
            </div>
          </div>

          {/* Trust indicator */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm">
              Mais de <span className="font-bold text-accent">200 projetos</span> entregues com sucesso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};