import { Clock, HeadphonesIcon, BarChart3, DollarSign } from 'lucide-react';

const differentials = [
  {
    icon: Clock,
    number: '01',
    title: 'Entrega Rápida',
    description: 'Projetos entregues no prazo, sem comprometer a qualidade.'
  },
  {
    icon: HeadphonesIcon,
    number: '02',
    title: 'Suporte Contínuo',
    description: 'Acompanhamento e manutenção após a entrega do projeto.'
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Resultados Mensuráveis',
    description: 'Relatórios detalhados sobre o desempenho dos seus projetos.'
  },
  {
    icon: DollarSign,
    number: '04',
    title: 'Preço Justo',
    description: 'Soluções de qualidade com investimento acessível para PMEs.'
  }
];

export const Differentials = () => {
  return (
    <section className="section-padding">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Por que nos <span className="text-gradient">escolher?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossos diferenciais garantem a melhor experiência e resultados para sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`fade-in-up stagger-${index + 1} group`}
              >
                <div className="flex items-start space-x-4">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                      {item.number}
                    </div>
                  </div>

                  <div className="flex-1">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-200">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};