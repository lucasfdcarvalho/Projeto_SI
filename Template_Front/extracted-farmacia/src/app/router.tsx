import { createBrowserRouter } from 'react-router';
import MainLayout from '@/app/layouts/MainLayout';
import AboutPage from '@/app/pages/AboutPage';
import ContactPage from '@/app/pages/ContactPage';
import FaqPage from '@/app/pages/FaqPage';
import HomePage from '@/app/pages/HomePage';
import NotFoundPage from '@/app/pages/NotFoundPage';
import ProductDetailPage from '@/app/pages/ProductDetailPage';
import ProductsPage from '@/app/pages/ProductsPage';
import PromotionsPage from '@/app/pages/PromotionsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'sobre', element: <AboutPage /> },
      { path: 'produtos', element: <ProductsPage /> },
      { path: 'produtos/:productId', element: <ProductDetailPage /> },
      { path: 'promocoes', element: <PromotionsPage /> },
      { path: 'contato', element: <ContactPage /> },
      { path: 'faq', element: <FaqPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
