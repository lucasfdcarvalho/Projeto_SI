import { Baby, Droplet, Heart, Pill, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import { categories } from '@/data/categories';
import type { CategoryIconKey } from '@/types/models';

const iconMap: Record<CategoryIconKey, typeof Pill> = {
  pill: Pill,
  heart: Heart,
  baby: Baby,
  sparkles: Sparkles,
  droplet: Droplet,
  shield: Shield,
};

export function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Categorias</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <Link
                key={category.id}
                to={`/produtos?category=${category.id}`}
                className="flex flex-col items-center gap-3 p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div
                  className={`w-16 h-16 rounded-full ${category.colorClass} flex items-center justify-center`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">{category.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
