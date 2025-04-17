import React from 'react';
import { Laptop, Film, ShoppingBag } from 'lucide-react';

export const categories = [
  {
    name: 'Electronics',
    icon: <Laptop className="w-5 h-5" />,
    subcategories: ['Laptops', 'Smartphones', 'Tablets', 'Accessories']
  },
  {
    name: 'Media',
    icon: <Film className="w-5 h-5" />,
    subcategories: ['Movies', 'Music', 'Books', 'Magazines']
  },
  {
    name: 'Fashion',
    icon: <ShoppingBag className="w-5 h-5" />,
    subcategories: ['Men', 'Women', 'Kids', 'Accessories']
  }
];