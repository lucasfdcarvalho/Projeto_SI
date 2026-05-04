import type { ChatbotConfig } from '@/types/models';

export const chatbotConfig: ChatbotConfig = {
  welcomeMessage:
    'Olá! Bem-vindo à FarmaSaúde. Como posso ajudar? Escolha uma opção ou digite sua dúvida.',
  quickReplies: [
    {
      id: 'med',
      label: 'Consultar medicamento',
      botReply:
        'Para consultar disponibilidade, informe o nome do medicamento ou envie uma foto da receita pelo WhatsApp. Posso também indicar genéricos similares.',
    },
    {
      id: 'promo',
      label: 'Ver promoções',
      botReply:
        'Temos descontos em genéricos, dermocosméticos e vitaminas. Acesse a página Promoções no site ou fale com um atendente.',
    },
    {
      id: 'hours',
      label: 'Horário de funcionamento',
      botReply:
        'Segunda a sábado 7h–22h; domingo e feriados 8h–20h. Plantão 24h para urgências no balcão.',
    },
    {
      id: 'addr',
      label: 'Endereço da farmácia',
      botReply:
        'Estamos na Av. Paulista, 1000 – Bela Vista, São Paulo – SP. Há estacionamento conveniado nas proximidades.',
    },
    {
      id: 'human',
      label: 'Falar com atendente',
      botReply:
        'Vou encaminhar para a fila de atendimento. Enquanto isso, use o WhatsApp para resposta mais rápida.',
    },
  ],
};
