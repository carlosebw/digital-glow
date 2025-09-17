import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Mariana Silva',
    role: 'CEO',
    company: 'Loja Moda & Estilo',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    content: 'A agência nos ajudou a dobrar o tráfego em 3 meses. Profissionais e rápidos. O site novo converteu muito mais clientes e nossa presença digital mudou completamente.',
    rating: 5
  },
  {
    id: 2,
    name: 'Carlos Mendes',
    role: 'Diretor Comercial',
    company: 'TechSolutions Ltd',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    content: 'Excelente trabalho na nossa identidade visual e website. A equipe entendeu perfeitamente nossa visão e entregou além das expectativas. Recomendo fortemente!',
    rating: 5
  },
  {
    id: 3,
    name: 'Ana Costa',
    role: 'Proprietária',
    company: 'Clínica VetCare',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    content: 'Nossa clínica triplicou o número de agendamentos online após o trabalho de SEO. O investimento se pagou rapidamente com o aumento de clientes.',
    rating: 5
  },
  {
    id: 4,
    name: 'Roberto Santos',
    role: 'Gerente de Marketing',
    company: 'Construtora Horizonte',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    content: 'Profissionais competentes e dedicados. O projeto foi entregue no prazo e superou nossas expectativas. O suporte pós-entrega é excepcional.',
    rating: 5
  },
  {
    id: 5,
    name: 'Luciana Ferreira',
    role: 'Diretora',
    company: 'Escola Crescer',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    content: 'A nova identidade visual da escola ficou incrível! Os pais elogiaram muito o novo site e as matrículas online aumentaram significativamente.',
    rating: 5
  }
];

const clientLogos = [
  'Loja Moda & Estilo',
  'TechSolutions',
  'VetCare',
  'Construtora Horizonte',
  'Escola Crescer',
  'FinanceProf'
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            O que nossos <span className="text-gradient">clientes dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja os depoimentos de empresas que transformaram sua presença digital conosco
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="card-testimonial text-center relative">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-primary" />
              </div>
            </div>

            {/* Rating */}
            <div className="flex justify-center items-center gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-current" />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-xl lg:text-2xl text-foreground mb-8 leading-relaxed italic">
              "{currentTestimonial.content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <img
                src={currentTestimonial.avatar}
                alt={`Foto de ${currentTestimonial.name}`}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-foreground text-lg">
                  {currentTestimonial.name}
                </div>
                <div className="text-muted-foreground">
                  {currentTestimonial.role} - {currentTestimonial.company}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={goToPrevious}
                className="rounded-full w-10 h-10 p-0"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? 'bg-primary' : 'bg-muted'
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={goToNext}
                className="rounded-full w-10 h-10 p-0"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="border-t border-border pt-16">
          <div className="text-center mb-8">
            <p className="text-muted-foreground font-medium">
              Empresas que confiam em nosso trabalho
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
            {clientLogos.map((client, index) => (
              <div
                key={client}
                className="text-muted-foreground font-semibold text-lg hover:text-foreground transition-colors duration-200"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};