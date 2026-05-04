import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { getPromotions } from '@/services/promotions';
import type { Promotion } from '@/types/models';
import { formatBRL } from '@/utils/format';

export function HomePromotions() {
  const [items, setItems] = useState<Promotion[]>([]);

  useEffect(() => {
    getPromotions().then((all) => setItems(all.slice(0, 3)));
  }, []);

  if (items.length === 0) return null;

  return (
    <section id="ofertas" className="py-16 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Promoções da semana</h2>
            <p className="text-gray-600 mt-2">Aproveite antes que acabe o estoque demonstrativo.</p>
          </div>
          <Button variant="outline" asChild className="border-emerald-600 text-emerald-700">
            <Link to="/promocoes">Ver todas</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((promo) => (
            <div
              key={promo.id}
              className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-gray-50 flex flex-col"
            >
              {promo.imageUrl && (
                <div className="aspect-video bg-gray-200">
                  <img src={promo.imageUrl} alt="" className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-3">{promo.title}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm line-through text-gray-400">{formatBRL(promo.oldPrice)}</span>
                  <span className="text-xl font-bold text-emerald-600">{formatBRL(promo.currentPrice)}</span>
                </div>
                <p className="text-sm text-red-600 font-semibold mb-4">{promo.discountPercent}% OFF</p>
                <Button asChild className="mt-auto bg-emerald-600 hover:bg-emerald-700">
                  <Link to="/promocoes">Eu quero</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
