import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-emerald-50 to-teal-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Sua saúde é nossa <span className="text-emerald-600">prioridade</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Encontre medicamentos, produtos de higiene e cuidados pessoais com os melhores preços e entrega rápida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/produtos"
                className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
              >
                Ver produtos
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/promocoes"
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors text-center"
              >
                Ver promoções
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-emerald-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200 rounded-full -mr-32 -mt-32 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-200 rounded-full -ml-24 -mb-24 opacity-50"></div>

              <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">💊</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Atendimento estendido</h3>
                    <p className="text-gray-600">Equipe farmacêutica à disposição</p>
                  </div>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Destaque:</strong> confira as promoções da semana na vitrine digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
