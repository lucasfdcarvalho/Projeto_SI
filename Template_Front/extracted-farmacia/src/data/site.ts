import type { SiteInfo } from '@/types/models';

export const siteInfo: SiteInfo = {
  brandName: 'FarmaSaúde',
  tagline: 'Cuidando da sua saúde com qualidade e dedicação.',
  phone: '(11) 3000-0000',
  whatsappE164: '5511999999999',
  email: 'contato@farmasaude.com',
  addressLines: ['Av. Paulista, 1000', 'Bela Vista'],
  cityState: 'São Paulo - SP',
  openingHours: [
    'Segunda a sábado: 7h às 22h',
    'Domingo e feriados: 8h às 20h',
    'Plantão 24h para medicamentos de urgência (balcão)',
  ],
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975762890625!2d-46.6558759!3d-23.5614372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr',
  social: {
    facebook: '#',
    instagram: '#',
    twitter: '#',
  },
};
