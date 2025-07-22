import type { Product, Category } from '../types/index';


export const categories: Category[] = [
  {
    id: 'tees',
    name: 'Tees',
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
    isActive: true
  },
  {
    id: 'jackets',
    name: 'Jackets',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
    isActive: false
  },
  {
    id: 'caps',
    name: 'Caps',
    image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=400',
    isActive: false
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400',
    isActive: false
  },
  {
    id: 'limited',
    name: 'Limited',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
    isActive: false
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Monaco GP Racing Tee',
    price: 45,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'tees',
    description: 'Premium cotton racing tee inspired by the Monaco Grand Prix. Features vintage F1 graphics and comfortable fit.'
  },
  {
    id: '2',
    name: 'Silverstone Circuit Tee',
    price: 42,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'tees',
    description: 'Classic black tee with Silverstone circuit map design. Made from organic cotton blend.'
  },
  {
    id: '3',
    name: 'Speed Demon Racing Tee',
    price: 48,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'tees',
    description: 'Bold red racing tee with aerodynamic design elements. Perfect for F1 enthusiasts.'
  },
  {
    id: '4',
    name: 'Pit Stop Crew Tee',
    price: 40,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'tees',
    description: 'Professional pit crew inspired design with racing stripes and team colors.'
  },
  {
    id: '5',
    name: 'Championship Winner Tee',
    price: 50,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'tees',
    description: 'Limited edition championship celebration tee with gold accents and premium materials.'
  },
  {
    id: '6',
    name: 'Grid Position Tee',
    price: 44,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'tees',
    description: 'Minimalist design featuring starting grid positions and racing typography.'
  }
];