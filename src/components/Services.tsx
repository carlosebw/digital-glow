import { Code, Search, Palette, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Desenvolvimento Web',
    description: 'Sites rápidos e responsivos, integrados com CMS e e-commerce.',
    features: ['Design Responsivo', 'Performance Otimizada', 'SEO Técnico']
  },
  {
    icon: Search,
    title: 'SEO & Conteúdo',
    description: 'Estratégia para aparecer no Google e atrair clientes.',
    features: ['Auditoria SEO', 'Conteúdo Estratégico', 'Link Building']
  },
  {
    icon: Palette,
    title: 'Design de Marca',
    description: 'Identidade visual que comunica profissionalismo.',
    features: ['Logotipo', 'Material Gráfico', 'Brand Guidelines']
  },
  {
    icon: TrendingUp,
    title: 'Gestão de Ads',
    description: 'Campanhas pagas para gerar leads e aumentar vendas.',
    features: ['Google Ads', 'Facebook Ads', 'Otimização ROI']
  }
];

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas para impulsionar sua empresa no ambiente digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`card-service fade-in-up stagger-${index + 1} group`}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-200">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};