import { Menu, Search, ShoppingCart, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import { siteInfo } from '@/data/site';
import { cn } from '@/app/components/ui/utils';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    'transition-colors',
    isActive ? 'text-emerald-600 font-medium' : 'text-gray-700 hover:text-emerald-600',
  );

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.search]);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) navigate(`/produtos?q=${encodeURIComponent(q)}`);
    else navigate('/produtos');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">+</span>
              </div>
              <span className="text-xl font-bold text-emerald-600">{siteInfo.brandName}</span>
            </Link>

            <nav className="hidden md:flex gap-6">
              <NavLink to="/produtos" className={navLinkClass}>
                Produtos
              </NavLink>
              <NavLink to="/promocoes" className={navLinkClass}>
                Promoções
              </NavLink>
              <NavLink to="/" end className={navLinkClass}>
                Início
              </NavLink>
              <NavLink to="/sobre" className={navLinkClass}>
                Sobre
              </NavLink>
              <NavLink to="/contato" className={navLinkClass}>
                Contato
              </NavLink>
              <NavLink to="/faq" className={navLinkClass}>
                FAQ
              </NavLink>
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <form onSubmit={onSearch} className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar produtos..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent w-48 lg:w-56"
                aria-label="Buscar produtos"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </form>

            <button type="button" className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Conta">
              <User className="w-6 h-6 text-gray-700" />
            </button>

            <button type="button" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative" aria-label="Carrinho">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Abrir menu"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <form onSubmit={onSearch} className="relative mb-4">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </form>
            <nav className="flex flex-col gap-4">
              <NavLink to="/produtos" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
                Produtos
              </NavLink>
              <NavLink to="/promocoes" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
                Promoções
              </NavLink>
              <NavLink to="/sobre" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
                Sobre
              </NavLink>
              <NavLink to="/contato" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
                Contato
              </NavLink>
              <NavLink to="/faq" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
                FAQ
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
