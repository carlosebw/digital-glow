import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container-padding">
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-accent mb-4">
              TransformDigital
            </h3>
            <p className="text-background/80 mb-6 leading-relaxed max-w-md">
              Transformamos a presença digital de pequenas e médias empresas através de 
              websites modernos, estratégias de SEO e campanhas de marketing eficazes.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-accent rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                aria-label="Siga-nos no Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-accent rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-accent rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                aria-label="Conecte-se conosco no LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-accent rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                aria-label="Siga-nos no Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Úteis</h4>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection('services')}
                className="block text-background/80 hover:text-accent transition-colors duration-200"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block text-background/80 hover:text-accent transition-colors duration-200"
              >
                Portfólio
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block text-background/80 hover:text-accent transition-colors duration-200"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-background/80 hover:text-accent transition-colors duration-200"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:contato@transformdigital.com.br"
                  className="text-background/80 hover:text-accent transition-colors duration-200"
                >
                  contato@transformdigital.com.br
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+5511999999999"
                  className="text-background/80 hover:text-accent transition-colors duration-200"
                >
                  (11) 99999-9999
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <address className="text-background/80 not-italic">
                  Av. Paulista, 1000<br />
                  São Paulo - SP<br />
                  01310-100
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} TransformDigital. Todos os direitos reservados.
            </p>
            
            <div className="flex gap-6 text-sm">
              <a
                href="/privacy"
                className="text-background/60 hover:text-accent transition-colors duration-200"
              >
                Política de Privacidade
              </a>
              <a
                href="/terms"
                className="text-background/60 hover:text-accent transition-colors duration-200"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};