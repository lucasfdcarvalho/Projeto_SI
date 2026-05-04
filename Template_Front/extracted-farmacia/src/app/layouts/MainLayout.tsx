import { Outlet } from 'react-router';
import { Toaster } from 'sonner';
import { ChatbotButton } from '@/app/components/ChatbotButton';
import { Footer } from '@/app/components/Footer';
import { Header } from '@/app/components/Header';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ChatbotButton />
      <Toaster richColors position="top-center" />
    </div>
  );
}
