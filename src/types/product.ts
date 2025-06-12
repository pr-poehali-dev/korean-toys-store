export interface Product {
  id: string;
  koreanName: string;
  englishName: string;
  price: number;
  image: string;
  category: Category;
  ageRange: string;
  rating: number;
  description: string;
  inStock: boolean;
  brand: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface Category {
  id: string;
  koreanName: string;
  englishName: string;
  icon: string;
  color: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
