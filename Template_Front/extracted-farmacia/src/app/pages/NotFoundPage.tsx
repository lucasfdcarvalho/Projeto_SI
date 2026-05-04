import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Página não encontrada</h1>
      <p className="text-gray-600 mb-8">O endereço pode ter sido alterado ou não existe.</p>
      <Link
        to="/"
        className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-white hover:bg-emerald-700 transition-colors"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
