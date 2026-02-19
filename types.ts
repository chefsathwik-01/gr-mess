
export interface MenuItem {
  id: string;
  name: string;
  category: 'breakfast' | 'lunch' | 'dinner';
  price: string;
  description: string;
  icon: string;
  tag?: string;
  isVeg: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  icon: string;
  price: string;
  description: string;
  features: string[];
  excluded: string[];
  isFeatured?: boolean;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  text: string;
  stars: number;
  avatar: string;
}
