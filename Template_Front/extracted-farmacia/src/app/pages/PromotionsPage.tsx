import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import { getPromotions } from '@/services/promotions';
import type { Promotion } from '@/types/models';
import { formatBRL } from '@/utils/format';
import { toast } from 'sonner';

export default function PromotionsPage() {
  const [items, setItems] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    getPromotions().then((data) => {
      if (!cancelled) setItems(data);
      if (!cancelled) setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="bg-gray-50 min-h-[60vh] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Promoções</h1>
        <p className="text-gray-600 mb-10">Ofertas fictícias para demonstração do site.</p>

        {loading ? (
          <p className="text-gray-500">Carregando...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((promo) => (
              <Card key={promo.id} className="overflow-hidden flex flex-col border-gray-200 shadow-sm">
                {promo.imageUrl && (
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img src={promo.imageUrl} alt="" className="w-full h-full object-cover" />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{promo.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 space-y-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-lg line-through text-gray-400">{formatBRL(promo.oldPrice)}</span>
                    <span className="text-2xl font-bold text-emerald-600">{formatBRL(promo.currentPrice)}</span>
                  </div>
                  <p className="text-sm font-semibold text-red-600">{promo.discountPercent}% OFF</p>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <Button
                    type="button"
                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                    onClick={() =>
                      toast.success('Interesse registrado (simulação). Entraremos em contato em breve.')
                    }
                  >
                    Tenho interesse
                  </Button>
                  {promo.productId ? (
                    <Button variant="outline" className="w-full" asChild>
                      <Link to={`/produtos/${promo.productId}`}>Ver produto</Link>
                    </Button>
                  ) : null}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
