import type { FaqItem } from '@/types/models';

export const faqItems: FaqItem[] = [
  {
    id: '1',
    question: 'Vocês entregam em domicílio?',
    answer:
      'Sim. Atendemos regiões próximas com entrega em até 2 horas em horário comercial, conforme disponibilidade da região e pedido mínimo.',
  },
  {
    id: '2',
    question: 'Posso solicitar medicamento controlado?',
    answer:
      'Medicamentos controlados exigem receituário válido e apresentação do documento. Consulte no balcão ou pelo WhatsApp as regras vigentes.',
  },
  {
    id: '3',
    question: 'Como funciona a troca de produtos?',
    answer:
      'Produtos lacrados podem ser trocados em até 7 dias com nota fiscal, conforme nossa política de trocas e devoluções.',
  },
  {
    id: '4',
    question: 'A farmácia tem plantão 24 horas?',
    answer:
      'Sim para atendimento de urgência em medicamentos no balcão; demais serviços seguem o horário divulgado na página de contato.',
  },
];
