import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Button } from '@/app/components/ui/button';
import { categories as allCategories } from '@/data/categories';
import { getProducts } from '@/services/catalog';
import type { Product } from '@/types/models';
import { formatBRL } from '@/utils/format';
import { toast } from 'sonner';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') ?? '';
  const qParam = searchParams.get('q') ?? '';

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getProducts({
      categoryId: categoryParam || undefined,
      q: qParam || undefined,
    }).then((data) => {
      if (!cancelled) setProducts(data);
      if (!cancelled) setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [categoryParam, qParam]);

  const title = useMemo(() => {
    if (qParam) return `Resultados para “${qParam}”`;
    if (categoryParam) {
      const c = allCategories.find((x) => x.id === categoryParam);
      return c ? c.name : 'Produtos';
    }
    return 'Todos os produtos';
  }, [categoryParam, qParam]);

  return (
    <div className="bg-gray-50 min-h-[60vh] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            <p className="text-gray-600 mt-2">Preços fictícios para demonstração.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant={!categoryParam ? 'default' : 'outline'}
              className={!categoryParam ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
              onClick={() => {
                const next = new URLSearchParams(searchParams);
                next.delete('category');
                setSearchParams(next);
              }}
            >
              Todas categorias
            </Button>
            {allCategories.map((c) => (
              <Button
                key={c.id}
                type="button"
                variant={categoryParam === c.id ? 'default' : 'outline'}
                className={categoryParam === c.id ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
                onClick={() => {
                  const next = new URLSearchParams(searchParams);
                  next.set('category', c.id);
                  setSearchParams(next);
                }}
              >
                {c.name}
              </Button>
            ))}
          </div>
        </div>

        {loading ? (
          <p className="text-gray-500">Carregando...</p>
        ) : products.length === 0 ? (
          <p className="text-gray-600">Nenhum produto encontrado.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <article
                key={p.id}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <Link to={`/produtos/${p.id}`} className="block aspect-square overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={p.imageUrl}
                    alt={p.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </Link>
                <div className="p-4 flex flex-col flex-1">
                  <p className="text-xs uppercase text-emerald-600 font-medium mb-1">
                    {allCategories.find((c) => c.id === p.categoryId)?.name ?? '—'}
                  </p>
                  <h2 className="font-bold text-gray-900 line-clamp-2 mb-2">{p.name}</h2>
                  <p className="text-sm text-gray-600 flex-1 line-clamp-2">{p.shortDescription}</p>
                  <p className="text-lg font-semibold text-emerald-700 mt-3">{formatBRL(p.price)}</p>
                  <div className="flex flex-col gap-2 mt-4">
                    <Button
                      asChild
                      className="w-full bg-emerald-600 hover:bg-emerald-700"
                    >
                      <Link to={`/produtos/${p.id}`}>Ver detalhes</Link>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full"
                      onClick={() =>
                        toast.success(
                          'Solicitação simulada: um atendente confirmará disponibilidade em instantes.',
                        )
                      }
                    >
                      Consultar disponibilidade
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
