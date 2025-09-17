import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="fade-in-up">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
              Transformamos sua{' '}
              <span className="text-gradient">presença digital</span> — mais
              visibilidade, mais clientes.
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Websites, marketing e design sob medida para pequenas e médias
              empresas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={() => scrollToSection('contact')}
                className="btn-hero"
                aria-label="Solicitar orçamento - formulário de contato"
              >
                Solicitar Orçamento
              </Button>
              
              <Button
                onClick={() => scrollToSection('portfolio')}
                variant="outline"
                className="btn-hero-secondary"
                aria-label="Ver nosso portfólio de projetos"
              >
                Ver Portfólio
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Entrega rápida</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Suporte contínuo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Resultados mensuráveis</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="fade-in-up stagger-2 lg:order-last">
            <div className="relative">
              <img
                src={heroImage}
                alt="Equipe profissional da TransformDigital trabalhando em projetos digitais em ambiente moderno e colaborativo"
                className="w-full h-auto rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                loading="eager"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-6 py-3 rounded-xl shadow-lg font-semibold">
                +200 projetos entregues
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};