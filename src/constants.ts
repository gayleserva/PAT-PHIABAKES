export interface Treat {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'cake' | 'pastry' | 'event';
  trending?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  handle?: string;
  text?: string;
  avatar: string;
  image?: string;
}

export const TREATS: Treat[] = [
  {
    id: '1',
    name: 'Dubai Chewy Mochi',
    description: 'A soft, chewy mochi dessert infused with rich pistachio goodness and a hint of chocolate—perfectly indulgent in every bite.',
    price: 'Php 120',
    image: 'https://lh3.googleusercontent.com/d/1oOJDudX7YPtYuMlgEwPBGxDtg3Oy_vCr',
    category: 'pastry',
    trending: true,
  },
  {
    id: '2',
    name: 'Velvet Rose Macarons',
    description: 'Delicate shells filled with rosewater ganache and a hint of raspberry.',
    price: '$24',
    image: 'https://lh3.googleusercontent.com/d/1alPy2Wn94pE737auZi0VwjY3gjgxSvXN',
    category: 'pastry',
  },
  {
    id: '3',
    name: 'Dubai Pistachio Banana Pudding',
    description: 'Creamy, nutty, and irresistibly smooth—your classic banana pudding, but make it Dubai ✨',
    price: 'Php 120',
    image: 'https://lh3.googleusercontent.com/d/1W2VQub-32L6f9VX2XDFgLBNPRrcyhGy7',
    category: 'pastry',
    trending: true,
  },
  {
    id: '4',
    name: 'Peach Sunset Tart',
    description: 'Buttery shortcrust with vanilla bean custard and caramelized peaches.',
    price: '$18',
    image: 'https://lh3.googleusercontent.com/d/1Uj6x1-Auz9yQFlvPzfGBrNm5f12iT5C8',
    category: 'pastry',
  },
  {
    id: '5',
    name: 'Dubai Pistachio Cookie',
    description: 'Thick, chewy, and loaded with pistachio goodness—Dubai-style indulgence in every bite.',
    price: 'Php 120',
    image: 'https://lh3.googleusercontent.com/d/1KKqkgJRW5-g19POoxlLx0fnfLDNai_7w',
    category: 'pastry',
    trending: true,
  },
  {
    id: '6',
    name: 'Ethereal Wedding Tier',
    description: 'Custom multi-tier masterpiece designed for your special day.',
    price: 'Custom',
    image: 'https://lh3.googleusercontent.com/d/1Fou3UpoNbwP9hCyPLMPYNvYn6S9JuCU5',
    category: 'event',
  },
  {
    id: '7',
    name: 'Midnight Chocolate Cake',
    description: 'Rich dark chocolate layers with sea salt caramel filling.',
    price: '$45',
    image: 'https://lh3.googleusercontent.com/d/1QA1YtxVmJu4JfqEXHhoY_PiTJPri21LX',
    category: 'cake',
  },
  {
    id: '8',
    name: 'Lemon Meringue Cloud',
    description: 'Zesty lemon curd topped with toasted marshmallow meringue.',
    price: '$12',
    image: 'https://lh3.googleusercontent.com/d/19CQjLEm1oJdEenr4k-yt1kz4GcxzRuFZ',
    category: 'pastry',
  },
  {
    id: '9',
    name: 'Strawberry Dream Tart',
    description: 'Fresh organic strawberries on a bed of white chocolate mousse.',
    price: '$15',
    image: 'https://lh3.googleusercontent.com/d/10nvF25Nb04OzvqatryKPxwsqMyabhJvc',
    category: 'pastry',
  },
  {
    id: '10',
    name: 'Golden Birthday Tier',
    description: 'A shimmering gold-leaf cake for the ultimate birthday celebration.',
    price: 'Custom',
    image: 'https://lh3.googleusercontent.com/d/1StzCGzOutT8DUsSKPqss2WSYMzlbIUX2',
    category: 'event',
  },
  {
    id: '11',
    name: 'Matcha Zen Cupcakes',
    description: 'Premium ceremonial grade matcha with a light honey drizzle.',
    price: '$28',
    image: 'https://lh3.googleusercontent.com/d/14bJ47zfoduV9Cr_eEVp3-FqnCW6Chovh',
    category: 'pastry',
  },
  {
    id: '12',
    name: 'Blueberry Bliss Cheesecake',
    description: 'Creamy New York style cheesecake with wild blueberry compote.',
    price: '$38',
    image: 'https://lh3.googleusercontent.com/d/1xBW0JPpXn2iWktvFWf_lvtfiM3a4mkJ6',
    category: 'cake',
  },
  {
    id: '13',
    name: 'Lavender Honey Scones',
    description: 'Buttery scones infused with dried lavender and local honey.',
    price: '$10',
    image: 'https://lh3.googleusercontent.com/d/1MR-KwSuiAJhCh-fovQp4ecehuNjOj4yW',
    category: 'pastry',
  },
  {
    id: '14',
    name: 'Red Velvet Sparkle',
    description: 'Classic red velvet with a modern aesthetic twist and edible glitter.',
    price: '$35',
    image: 'https://lh3.googleusercontent.com/d/1bbwiQoRKGhKX_WUeFPjtW3lrFXsh5ZyZ',
    category: 'cake',
  },
  {
    id: '15',
    name: 'Tropical Mango Mousse',
    description: 'Light and airy mango mousse with a coconut biscuit base.',
    price: '$14',
    image: 'https://lh3.googleusercontent.com/d/1g6ObTt_thAOJ6PTzqL0fEXFNOlzBpp79',
    category: 'pastry',
  },
  {
    id: '16',
    name: 'Rustic Garden Cake',
    description: 'Semi-naked cake adorned with fresh edible flowers and berries.',
    price: 'Custom',
    image: 'https://lh3.googleusercontent.com/d/1iM8s9sshv9GsCnYMfZgsorE0MnniqRmb',
    category: 'event',
  },
  {
    id: '17',
    name: 'Pistachio Dream Éclair',
    description: 'Choux pastry filled with pistachio cream and topped with crushed nuts.',
    price: '$8',
    image: 'https://lh3.googleusercontent.com/d/1LmvONQwRCwEKSGORRgstb6aso7ktAL2p',
    category: 'pastry',
  },
  {
    id: '18',
    name: 'Galaxy Marble Cake',
    description: 'Stunning mirror glaze cake with a cosmic marble design.',
    price: '$50',
    image: 'https://lh3.googleusercontent.com/d/1ZwI92g5CYI5Lc_E68Pm7pSEPMJw_GZdM',
    category: 'cake',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Notsomundanestudios',
    avatar: 'https://lh3.googleusercontent.com/d/1tk8byVMTz38NdNvWieccCfFtigI5zCVH',
    image: 'https://lh3.googleusercontent.com/d/1ZDf1xXyoksw2rCB8GTKPGRT75R061LQx',
  },
  {
    id: '2',
    name: 'Sarah Mae Ramirez',
    avatar: 'https://lh3.googleusercontent.com/d/18j4LiV3732qXZ0DXFfK9vj20O1S_4y1Z',
    image: 'https://lh3.googleusercontent.com/d/1Bc2-XZjfst-hGLg5ZCcANX7pf-M0HYrF',
  },
  {
    id: '3',
    name: 'Princess Diane',
    avatar: 'https://picsum.photos/seed/user3/100/100',
    image: 'https://lh3.googleusercontent.com/d/1o73KKu9f4BoamGUWWEzYsYeZSnntjINx',
  },
];
