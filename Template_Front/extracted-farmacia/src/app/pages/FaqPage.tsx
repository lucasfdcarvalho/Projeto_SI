import { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';
import { getFaq } from '@/services/faq';
import type { FaqItem } from '@/types/models';

export default function FaqPage() {
  const [items, setItems] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    getFaq().then((data) => {
      if (!cancelled) setItems(data);
      if (!cancelled) setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="bg-gray-50 min-h-[60vh] py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dúvidas frequentes</h1>
        <p className="text-gray-600 mb-10">Respostas rápidas sobre entrega, trocas e atendimento.</p>

        {loading ? (
          <p className="text-gray-500">Carregando...</p>
        ) : (
          <Accordion type="single" collapsible className="w-full space-y-2">
            {items.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-white border border-gray-200 rounded-lg px-4"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </div>
  );
}
