
interface FakeStoreProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface MappedProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  partnerId: string;
  partnerName: string;
  partnerLogo: string;
  rating: number;
  interestRate: number;
  specifications?: string[];
  discountPercentage?: number;
  originalPrice?: number;
  verticalId?: string;
}

export const fetchFakeStoreProducts = async (): Promise<FakeStoreProduct[]> => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const mapFakeStoreProducts = (products: FakeStoreProduct[], partnerId: string, partnerName: string, partnerLogo: string, interestRate: number): MappedProduct[] => {
  return products.map(product => ({
    id: `${partnerId}-${product.id}`,
    name: product.title,
    price: Math.round(product.price * 100), // Convert to KES (roughly)
    description: product.description,
    image: product.image,
    category: product.category,
    partnerId,
    partnerName,
    partnerLogo,
    rating: product.rating.rate,
    interestRate,
    specifications: [
      `Category: ${product.category}`,
      `Rating: ${product.rating.rate}/5 (${product.rating.count} reviews)`,
    ],
    // Add a random discount to some products
    ...(Math.random() > 0.7 ? {
      discountPercentage: Math.round(Math.random() * 20) + 5,
      originalPrice: Math.round(product.price * 120), // 20% higher as original price
    } : {})
  }));
};
