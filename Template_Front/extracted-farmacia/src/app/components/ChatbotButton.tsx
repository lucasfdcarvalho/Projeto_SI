import { MessageCircle, X } from 'lucide-react';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { chatbotConfig } from '@/data/chatbot';
import { siteInfo } from '@/data/site';
import type { ChatMessage, ChatQuickReply } from '@/types/models';
import { Button } from '@/app/components/ui/button';

function newMessageId() {
  return crypto.randomUUID();
}

export function ChatbotButton() {
  const panelId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome',
      role: 'bot',
      text: chatbotConfig.welcomeMessage,
    },
  ]);
  const [draft, setDraft] = useState('');
  const panelRef = useRef<HTMLDivElement>(null);

  const waHref = `https://wa.me/${siteInfo.whatsappE164}?text=${encodeURIComponent(
    'Olá, vim pelo site da FarmaSaúde.',
  )}`;

  const appendBot = useCallback((text: string) => {
    setMessages((prev) => [...prev, { id: newMessageId(), role: 'bot', text }]);
  }, []);

  const appendUser = useCallback((text: string) => {
    setMessages((prev) => [...prev, { id: newMessageId(), role: 'user', text }]);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && panelRef.current) {
      const focusable = panelRef.current.querySelector<HTMLElement>('button, input, a');
      focusable?.focus();
    }
  }, [isOpen]);

  const handleQuickReply = (q: ChatQuickReply) => {
    appendUser(q.label);
    setTimeout(() => appendBot(q.botReply), 350);
  };

  const handleSend = () => {
    const text = draft.trim();
    if (!text) return;
    appendUser(text);
    setDraft('');
    const lower = text.toLowerCase();
    let reply =
      'Obrigado pela mensagem. Para um atendimento completo, use o WhatsApp ou fale com um atendente no balcão.';
    if (lower.includes('horário') || lower.includes('hora')) {
      reply = siteInfo.openingHours.join(' ');
    }
    if (lower.includes('endereço') || lower.includes('onde')) {
      reply = `${siteInfo.addressLines.join(', ')} — ${siteInfo.cityState}`;
    }
    if (lower.includes('promo')) {
      reply = 'Confira nossas promoções na página Promoções do site.';
    }
    setTimeout(() => appendBot(reply), 400);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-700 transition-all hover:scale-110 flex items-center justify-center z-50"
        aria-label={isOpen ? 'Fechar chat' : 'Abrir chat'}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="Assistente virtual"
          className="fixed bottom-24 right-6 w-[min(100vw-2rem,24rem)] sm:w-96 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[min(70vh,520px)]"
        >
          <div className="bg-emerald-600 text-white p-4 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">Assistente virtual</h3>
                <p className="text-xs text-emerald-100">Respostas simuladas — sem IA</p>
              </div>
            </div>
          </div>

          <div className="flex-1 min-h-0 bg-gray-50 p-4 overflow-y-auto max-h-[280px]">
            <div className="space-y-3">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`rounded-lg px-3 py-2 max-w-[88%] text-sm shadow-sm ${
                      m.role === 'user'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white text-gray-800 border border-gray-100'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-1 gap-2">
              {chatbotConfig.quickReplies.map((q) => (
                <button
                  key={q.id}
                  type="button"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-left hover:bg-gray-50 transition-colors text-sm font-medium text-gray-900"
                  onClick={() => handleQuickReply(q)}
                >
                  {q.label}
                </button>
              ))}
            </div>

            <div className="mt-4">
              <Button variant="outline" className="w-full border-emerald-600 text-emerald-700" asChild>
                <a href={waHref} target="_blank" rel="noopener noreferrer">
                  Abrir WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="p-4 border-t bg-white shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleSend())}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                aria-label="Mensagem para o assistente"
              />
              <button
                type="button"
                onClick={handleSend}
                className="w-10 h-10 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors flex items-center justify-center shrink-0"
                aria-label="Enviar mensagem"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
