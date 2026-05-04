import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { siteInfo } from '@/data/site';

export function CTASection() {
  const wa = `https://wa.me/${siteInfo.whatsappE164}?text=${encodeURIComponent(
    'Olá, preciso de ajuda com um produto.',
  )}`;

  return (
    <section id="contato" className="py-16 bg-emerald-600 text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Precisa de ajuda para escolher?</h2>
        <p className="text-emerald-100 max-w-2xl mx-auto mb-8">
          Fale com nosso time pelo WhatsApp ou envie uma mensagem pela página de contato.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="secondary" className="rounded-full px-8">
            <a href={wa} target="_blank" rel="noopener noreferrer">
              WhatsApp agora
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full px-8 border-white text-white hover:bg-white/10 bg-transparent"
          >
            <Link to="/contato">Formulário de contato</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
