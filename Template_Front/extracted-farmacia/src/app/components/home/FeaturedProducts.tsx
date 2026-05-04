import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Button } from '@/app/components/ui/button';
import { categories as allCategories } from '@/data/categories';
import { getProducts } from '@/services/catalog';
import type { Product } from '@/types/models';
import { formatBRL } from '@/utils/format';

export function FeaturedProducts() {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    getProducts({ featuredOnly: true }).then(setItems);
  }, []);

  if (items.length === 0) return null;

  return (
    <section id="medicamentos" className="py-16 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Produtos em destaque</h2>
            <p className="text-gray-600 mt-2">Seleção fictícia atualizada periodicamente.</p>
          </div>
          <Button variant="outline" asChild className="border-emerald-600 text-emerald-700">
            <Link to="/produtos">Ver todos</Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.slice(0, 4).map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <Link to={`/produtos/${p.id}`} className="block aspect-square bg-gray-100 overflow-hidden">
                <ImageWithFallback
                  src={p.imageUrl}
                  alt={p.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </Link>
              <div className="p-4">
                <p className="text-xs text-emerald-600 font-medium uppercase mb-1">
                  {allCategories.find((c) => c.id === p.categoryId)?.name}
                </p>
                <h3 className="font-bold text-gray-900 line-clamp-2 min-h-[3rem]">{p.name}</h3>
                <p className="text-lg font-semibold text-emerald-700 mt-2">{formatBRL(p.price)}</p>
                <Button asChild className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700">
                  <Link to={`/produtos/${p.id}`}>Ver detalhes</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
