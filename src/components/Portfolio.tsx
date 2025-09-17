import { useState } from 'react';
import { ExternalLink, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const projects = [
  {
    id: 1,
    title: 'E-commerce Moda Feminina',
    category: 'Desenvolvimento Web',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Plataforma completa de e-commerce com integração de pagamentos.',
    result: '+150% vendas online',
    resultDescription: 'Aumento de 150% nas vendas online nos primeiros 6 meses',
    client: 'Boutique Elegance',
    technologies: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
    challenge: 'Criar uma experiência de compra fluida e aumentar conversões',
    solution: 'Desenvolvemos uma plataforma otimizada com checkout simplificado e sistema de recomendações personalizado.'
  },
  {
    id: 2,
    title: 'Clínica Veterinária Digital',
    category: 'SEO & Marketing',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Estratégia completa de SEO e marketing de conteúdo.',
    result: '+300% tráfego orgânico',
    resultDescription: 'Aumento de 300% no tráfego orgânico em 8 meses',
    client: 'Clínica VetCare',
    technologies: ['WordPress', 'Google Analytics', 'Search Console', 'Yoast'],
    challenge: 'Aumentar visibilidade online e atrair novos clientes locais',
    solution: 'Implementamos estratégia de SEO local, otimização técnica e criação de conteúdo relevante sobre cuidados com pets.'
  },
  {
    id: 3,
    title: 'Consultoria Financeira',
    category: 'Design de Marca',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Identidade visual completa e site institucional.',
    result: '+200% leads qualificados',
    resultDescription: 'Aumento de 200% em leads qualificados através do novo site',
    client: 'FinanceProf Consultoria',
    technologies: ['Figma', 'Adobe Creative', 'WordPress', 'Contact Form 7'],
    challenge: 'Transmitir confiança e profissionalismo para o público-alvo',
    solution: 'Criamos identidade visual sóbria e elegante, com site focado em conversão e materiais institucionais de alta qualidade.'
  }
];

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Nosso <span className="text-gradient">Portfólio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos projetos que transformaram a presença digital de nossos clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`card-service fade-in-up stagger-${index + 1} group cursor-pointer`}
              onClick={() => openProjectDetails(project)}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={`Projeto ${project.title} - ${project.description}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white text-sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver detalhes
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="mb-4">
                <span className="text-sm text-primary font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
              </div>

              {/* Result Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  {project.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-foreground">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Image */}
                  <div>
                    <img
                      src={selectedProject.image}
                      alt={`Projeto ${selectedProject.title}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Cliente</h4>
                      <p className="text-muted-foreground">{selectedProject.client}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Categoria</h4>
                      <p className="text-muted-foreground">{selectedProject.category}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Tecnologias</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-accent/10 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-accent" />
                        <h4 className="font-semibold text-foreground">Resultado</h4>
                      </div>
                      <p className="text-accent font-medium text-lg">{selectedProject.result}</p>
                      <p className="text-muted-foreground text-sm mt-1">
                        {selectedProject.resultDescription}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-border">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Desafio</h4>
                    <p className="text-muted-foreground">{selectedProject.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Solução</h4>
                    <p className="text-muted-foreground">{selectedProject.solution}</p>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};