import { useForm } from 'react-hook-form';
import { siteInfo } from '@/data/site';
import { submitContact } from '@/services/contact';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { toast } from 'sonner';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: { name: '', email: '', phone: '', message: '' },
  });

  const waLink = `https://wa.me/${siteInfo.whatsappE164}?text=${encodeURIComponent(
    'Olá, gostaria de informações.',
  )}`;

  const onSubmit = async (data: FormValues) => {
    try {
      await submitContact({
        name: data.name,
        email: data.email,
        phone: data.phone || undefined,
        message: data.message,
      });
      toast.success('Mensagem enviada com sucesso (simulação).');
      reset();
    } catch {
      toast.error('Não foi possível enviar. Tente novamente.');
    }
  };

  return (
    <div className="bg-gray-50 min-h-[60vh] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contato</h1>
        <p className="text-gray-600 mb-10">Fale com a FarmaSaúde pelo formulário ou WhatsApp.</p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div>
              <h2 className="font-bold text-lg mb-4 text-gray-900">Dados</h2>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <strong className="text-gray-800">Endereço:</strong>{' '}
                  {siteInfo.addressLines.join(', ')} — {siteInfo.cityState}
                </li>
                <li>
                  <strong className="text-gray-800">Telefone:</strong> {siteInfo.phone}
                </li>
                <li>
                  <strong className="text-gray-800">E-mail:</strong> {siteInfo.email}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Horário</h3>
              <ul className="text-gray-600 space-y-1">
                {siteInfo.openingHours.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <Button type="button" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700" asChild>
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                Conversar no WhatsApp
              </a>
            </Button>

            <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-100 aspect-video">
              {siteInfo.mapEmbedUrl ? (
                <iframe
                  title="Mapa"
                  src={siteInfo.mapEmbedUrl}
                  className="w-full h-full min-h-[240px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div className="flex items-center justify-center h-full min-h-[240px] text-gray-500">
                  Mapa indisponível
                </div>
              )}
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6"
          >
            <h2 className="font-bold text-lg text-gray-900">Envie uma mensagem</h2>

            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" {...register('name', { required: 'Informe seu nome' })} />
              {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                {...register('email', { required: 'Informe um e-mail válido' })}
              />
              {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone (opcional)</Label>
              <Input id="phone" {...register('phone')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                rows={5}
                {...register('message', { required: 'Digite sua mensagem' })}
              />
              {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-emerald-600 hover:bg-emerald-700"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
