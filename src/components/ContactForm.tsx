import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  source: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    source: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    // Nome completo
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Nome deve ter pelo menos 2 caracteres';
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'E-mail deve ter formato válido';
    }

    // Mensagem
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, corrija os campos destacados.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      toast({
        title: "Obrigado!",
        description: "Recebemos sua mensagem — responderemos em até 24 horas.",
        duration: 6000,
      });

      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        source: ''
      });

    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Vamos conversar sobre seu <span className="text-gradient">projeto?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-lg p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Nome completo */}
                <div>
                  <Label htmlFor="name" className="form-label">
                    Nome completo *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={`form-input ${errors.name ? 'border-destructive focus:ring-destructive' : ''}`}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    required
                  />
                  {errors.name && (
                    <p id="name-error" className="text-destructive text-sm mt-1" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Empresa */}
                <div>
                  <Label htmlFor="company" className="form-label">
                    Empresa
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Nome da sua empresa"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <Label htmlFor="email" className="form-label">
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`form-input ${errors.email ? 'border-destructive focus:ring-destructive' : ''}`}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    required
                  />
                  {errors.email && (
                    <p id="email-error" className="text-destructive text-sm mt-1" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Telefone */}
                <div>
                  <Label htmlFor="phone" className="form-label">
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Como nos encontrou */}
              <div>
                <Label htmlFor="source" className="form-label">
                  Como nos encontrou?
                </Label>
                <Select onValueChange={(value) => handleChange('source', value)}>
                  <SelectTrigger className="form-input">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="google">Busca no Google</SelectItem>
                    <SelectItem value="social">Redes sociais</SelectItem>
                    <SelectItem value="referral">Indicação</SelectItem>
                    <SelectItem value="ads">Anúncio online</SelectItem>
                    <SelectItem value="other">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Mensagem */}
              <div>
                <Label htmlFor="message" className="form-label">
                  Mensagem *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos sobre seu projeto, objetivos e como podemos ajudar..."
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className={`form-input min-h-[120px] resize-none ${errors.message ? 'border-destructive focus:ring-destructive' : ''}`}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  required
                />
                {errors.message && (
                  <p id="message-error" className="text-destructive text-sm mt-1" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-accent w-full sm:w-auto min-w-[200px]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>

              {/* Privacy note */}
              <p className="text-sm text-muted-foreground">
                Seus dados estão seguros conosco. Não compartilhamos informações com terceiros.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};