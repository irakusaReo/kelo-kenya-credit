
import React, { useState } from 'react';
import VendorLayout from '@/components/vendor/VendorLayout';
import InventoryTable from '@/components/vendor/InventoryTable';
import AddProductModal from '@/components/vendor/AddProductModal';
import { Button } from '@/components/ui/button';
import { Plus, Upload } from 'lucide-react';

// Mock product data
const mockProducts = [
  {
    id: '1',
    name: 'HP Laptop Pro',
    price: 75000,
    stock: 15,
    sales: 23,
    category: 'Electronics',
    image: '/placeholder.svg',
    promoted: true,
  },
  {
    id: '2',
    name: 'Samsung Galaxy S23',
    price: 120000,
    stock: 8,
    sales: 12,
    category: 'Phones',
    image: '/placeholder.svg',
    promoted: false,
  },
  {
    id: '3',
    name: 'Sony Headphones',
    price: 15000,
    stock: 30,
    sales: 45,
    category: 'Audio',
    image: '/placeholder.svg',
    promoted: true,
  },
  {
    id: '4',
    name: 'Dell Monitor 27"',
    price: 35000,
    stock: 5,
    sales: 7,
    category: 'Computer Accessories',
    image: '/placeholder.svg',
    promoted: false,
  },
  {
    id: '5',
    name: 'Apple iPad Pro',
    price: 95000,
    stock: 10,
    sales: 18,
    category: 'Tablets',
    image: '/placeholder.svg',
    promoted: true,
  },
];

const VendorProducts = () => {
  const [products, setProducts] = useState(mockProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (productId: string) => {
    console.log('Edit product:', productId);
    // Implementation would open the modal with product data pre-filled
  };

  const handleDelete = (productId: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(product => product.id !== productId));
    }
  };

  const handlePromote = (productId: string, promote: boolean) => {
    setProducts(products.map(product => 
      product.id === productId ? { ...product, promoted: promote } : product
    ));
  };

  const handleAddProduct = (product: any) => {
    const newProduct = {
      ...product,
      id: Date.now().toString(),
      sales: 0,
      promoted: false,
    };
    setProducts([...products, newProduct]);
    setIsModalOpen(false);
  };

  return (
    <VendorLayout title="Product Inventory">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">All Products ({products.length})</h2>
          <div className="flex space-x-2">
            <Button 
              variant="outline"
              className="flex items-center"
              onClick={() => console.log('CSV upload clicked')}
            >
              <Upload className="mr-2 h-4 w-4" />
              Import CSV
            </Button>
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="bg-kelo-blue hover:bg-kelo-blue/90"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </div>
        </div>

        <InventoryTable 
          products={products}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onPromote={handlePromote}
        />

        <AddProductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddProduct}
        />
      </div>
    </VendorLayout>
  );
};

export default VendorProducts;
