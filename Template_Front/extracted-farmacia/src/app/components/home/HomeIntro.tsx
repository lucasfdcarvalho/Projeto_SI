export function HomeIntro() {
  return (
    <section id="sobre" className="py-16 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sua farmácia de confiança</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Na FarmaSaúde reunimos medicamentos, dermocosméticos e produtos de higiene com curadoria
            farmacêutica. Atendemos prescrições com segurança e orientamos sobre uso correto e
            alternativas acessíveis.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Conte com entrega rápida na região, programa de descontos em genéricos e canal digital
            para tirar dúvidas sem sair de casa.
          </p>
        </div>
        <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold">✓</span>
              Farmacêuticos disponíveis para orientação.
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold">✓</span>
              Medicamentos refrigerados com cadeia fria monitorada.
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold">✓</span>
              Parcerias com convênios e programas de desconto.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
