export type CategoryIconKey =
  | 'pill'
  | 'heart'
  | 'baby'
  | 'sparkles'
  | 'droplet'
  | 'shield';

export interface Category {
  id: string;
  name: string;
  icon: CategoryIconKey;
  colorClass: string;
}

export interface Product {
  id: string;
  name: string;
  categoryId: string;
  price: number;
  /** URL da imagem (placeholder remoto ou asset local) */
  imageUrl: string;
  shortDescription: string;
  /** Destaque na home */
  featured?: boolean;
}

export interface Promotion {
  id: string;
  title: string;
  productId?: string;
  oldPrice: number;
  currentPrice: number;
  discountPercent: number;
  imageUrl?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SiteInfo {
  brandName: string;
  tagline: string;
  phone: string;
  whatsappE164: string;
  email: string;
  addressLines: string[];
  cityState: string;
  /** Horário para exibição */
  openingHours: string[];
  /** iframe src para mapa (Google Maps embed) ou vazio para placeholder */
  mapEmbedUrl: string;
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

export type ChatRole = 'bot' | 'user';

export interface ChatMessage {
  id: string;
  role: ChatRole;
  text: string;
}

export interface ChatQuickReply {
  id: string;
  label: string;
  /** texto que o bot “responde” ao clicar */
  botReply: string;
}

export interface ChatbotConfig {
  welcomeMessage: string;
  quickReplies: ChatQuickReply[];
}
