import { BadgePercent, Headphones, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: BadgePercent,
    title: 'Preço justo',
    text: 'Genéricos e promoções semanais para o seu bolso.',
  },
  {
    icon: ShieldCheck,
    title: 'Produtos originais',
    text: 'Fornecedores auditados e armazenamento adequado.',
  },
  {
    icon: Headphones,
    title: 'Atendimento próximo',
    text: 'WhatsApp, telefone e balcão com equipe treinada.',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Benefícios da FarmaSaúde</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100"
              >
                <div className="inline-flex w-14 h-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
