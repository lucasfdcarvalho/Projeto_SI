export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-[60vh]">
      <section className="bg-gradient-to-r from-emerald-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sobre a FarmaSaúde</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Há mais de duas décadas cuidando da saúde da comunidade com medicamentos de qualidade,
            orientação farmacêutica e atendimento humanizado.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nossa missão</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Oferecer produtos confiáveis, preço justo e informação clara para que cada cliente tome
            decisões seguras sobre seu tratamento e bem-estar.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Valores</h2>
          <ul className="grid sm:grid-cols-2 gap-6 text-gray-600">
            <li className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <strong className="text-emerald-700">Ética</strong>
              <p className="mt-2">Respeito à legislação e à prescrição médica.</p>
            </li>
            <li className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <strong className="text-emerald-700">Acessibilidade</strong>
              <p className="mt-2">Genéricos, promoções e parcelamento quando disponível.</p>
            </li>
            <li className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <strong className="text-emerald-700">Proximidade</strong>
              <p className="mt-2">Canal digital e balcão sempre à disposição.</p>
            </li>
            <li className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <strong className="text-emerald-700">Segurança</strong>
              <p className="mt-2">Cadeia de armazenamento e rastreabilidade.</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
