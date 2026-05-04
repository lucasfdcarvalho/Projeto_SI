import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Link } from 'react-router';
import { siteInfo } from '@/data/site';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">+</span>
              </div>
              <span className="text-xl font-bold">{siteInfo.brandName}</span>
            </Link>
            <p className="text-gray-400 mb-4">{siteInfo.tagline}</p>
            <div className="flex gap-3">
              {siteInfo.social.facebook && (
                <a
                  href={siteInfo.social.facebook}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {siteInfo.social.instagram && (
                <a
                  href={siteInfo.social.instagram}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {siteInfo.social.twitter && (
                <a
                  href={siteInfo.social.twitter}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/produtos" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/promocoes" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Promoções
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Dúvidas frequentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Atendimento</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Central de ajuda
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Fale conosco
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 shrink-0" />
                <span>{siteInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5 shrink-0" />
                <span>{siteInfo.email}</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 shrink-0" />
                <span>
                  {siteInfo.addressLines.join(', ')}
                  <br />
                  {siteInfo.cityState}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {siteInfo.brandName}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
