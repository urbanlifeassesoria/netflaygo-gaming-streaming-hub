// SUPPORT SECTION - FAQ Accordion + WhatsApp CTA
import { motion } from 'framer-motion';
import { MessageCircle, HelpCircle, CreditCard, Clock, Shield, Zap } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: '¿Cómo activo mi cuenta?',
    answer: 'Después de realizar el pago, te enviaremos las credenciales por WhatsApp en menos de 5 minutos. El proceso es 100% automatizado y seguro.',
    icon: Zap,
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos Nequi, Daviplata, Bancolombia, Efecty, Binance y transferencias. Todos los pagos son verificados al instante.',
    icon: CreditCard,
  },
  {
    question: '¿Cuánto dura la garantía?',
    answer: 'Cada producto tiene su garantía específica (desde 27 días hasta 1 año). Si hay algún problema, te reponemos el servicio o te devolvemos el dinero.',
    icon: Shield,
  },
  {
    question: '¿Cuánto tiempo tarda la entrega?',
    answer: 'La entrega es inmediata. Una vez confirmado el pago, recibes tus credenciales en máximo 5 minutos por WhatsApp.',
    icon: Clock,
  },
];

export const SupportSection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola Netflaygo 🎮, tengo una consulta');
    window.open(`https://wa.me/573116462203?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 md:py-24 relative" id="soporte">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium text-secondary">Preguntas Frecuentes</span>
            </div>
            <h2 className="font-gaming text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">¿Tienes Dudas?</span>
            </h2>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass rounded-xl border-border overflow-hidden"
                >
                  <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3 text-left">
                      <faq.icon className="w-5 h-5 text-secondary shrink-0" />
                      <span className="font-medium">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4 pt-0 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="gradient-border rounded-2xl p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-green-500" />
              </div>
              
              <h3 className="font-gaming text-2xl font-bold mb-3">
                Soporte <span className="text-green-500">24/7</span>
              </h3>
              
              <p className="text-muted-foreground mb-6">
                ¿Necesitas ayuda? Escríbenos por WhatsApp y te respondemos en minutos.
              </p>

              <button
                onClick={handleWhatsApp}
                className="btn-whatsapp w-full py-4 text-lg font-semibold flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                +57 311 646 2203
              </button>

              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { label: 'Respuesta', value: '< 5 min' },
                  { label: 'Clientes', value: '500+' },
                  { label: 'Garantía', value: '100%' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-gaming text-lg font-bold text-secondary">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
