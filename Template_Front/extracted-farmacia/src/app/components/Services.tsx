import { Clock, Truck, CreditCard, Phone } from 'lucide-react';

const services = [
  {
    icon: Clock,
    title: 'Aberto 24 horas',
    description: 'Estamos sempre disponíveis para você',
  },
  {
    icon: Truck,
    title: 'Entrega rápida',
    description: 'Receba em casa em até 2 horas',
  },
  {
    icon: CreditCard,
    title: 'Pagamento seguro',
    description: 'Diversas formas de pagamento',
  },
  {
    icon: Phone,
    title: 'Atendimento online',
    description: 'Farmacêutico sempre disponível',
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
