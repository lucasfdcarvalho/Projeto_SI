import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Button } from '@/app/components/ui/button';
import { categories as allCategories } from '@/data/categories';
import { getProductById } from '@/services/catalog';
import type { Product } from '@/types/models';
import { formatBRL } from '@/utils/format';
import { toast } from 'sonner';

export default function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productId) return;
    let cancelled = false;
    setLoading(true);
    getProductById(productId).then((p) => {
      if (!cancelled) setProduct(p);
      if (!cancelled) setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [productId]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <p className="text-gray-600">Carregando...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Produto não encontrado</h1>
        <Button onClick={() => navigate('/produtos')} className="bg-emerald-600 hover:bg-emerald-700">
          Ver catálogo
        </Button>
      </div>
    );
  }

  const cat = allCategories.find((c) => c.id === product.categoryId);

  return (
    <div className="bg-gray-50 min-h-[60vh] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-emerald-600 hover:underline mb-8 text-sm"
        >
          ← Voltar
        </button>

        <div className="grid lg:grid-cols-2 gap-12 items-start bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
          <div className="rounded-xl overflow-hidden bg-gray-100 aspect-square max-w-xl mx-auto w-full">
            <ImageWithFallback
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm text-emerald-600 font-medium uppercase mb-2">{cat?.name ?? 'Produto'}</p>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-gray-600 leading-relaxed mb-6">{product.shortDescription}</p>
            <p className="text-3xl font-bold text-emerald-700 mb-8">{formatBRL(product.price)}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="button"
                className="bg-emerald-600 hover:bg-emerald-700"
                onClick={() =>
                  toast.success('Simulação: disponibilidade será confirmada pelo balcão ou WhatsApp.')
                }
              >
                Consultar disponibilidade
              </Button>
              <Button type="button" variant="outline" asChild>
                <Link to="/contato">Falar no balcão</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
