
import React from 'react';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  sales: number;
  category: string;
  image: string;
  promoted?: boolean;
}

interface InventoryTableProps {
  products: Product[];
  onEdit: (productId: string) => void;
  onDelete: (productId: string) => void;
  onPromote: (productId: string, promote: boolean) => void;
}

const InventoryTable = ({ products, onEdit, onDelete, onPromote }: InventoryTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50 text-left">
            <th className="px-4 py-3 text-sm font-medium text-gray-500">Product</th>
            <th className="px-4 py-3 text-sm font-medium text-gray-500">Price</th>
            <th className="px-4 py-3 text-sm font-medium text-gray-500">Stock</th>
            <th className="px-4 py-3 text-sm font-medium text-gray-500">Sales</th>
            <th className="px-4 py-3 text-sm font-medium text-gray-500">Category</th>
            <th className="px-4 py-3 text-sm font-medium text-gray-500">Promote</th>
            <th className="px-4 py-3 text-sm font-medium text-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="px-4 py-3">
                <div className="flex items-center">
                  <img 
                    src={product.image || '/placeholder.svg'} 
                    alt={product.name}
                    className="w-10 h-10 rounded object-cover mr-3"
                  />
                  <div className="font-medium">{product.name}</div>
                </div>
              </td>
              <td className="px-4 py-3">KES {product.price.toLocaleString()}</td>
              <td className="px-4 py-3">{product.stock}</td>
              <td className="px-4 py-3">{product.sales}</td>
              <td className="px-4 py-3">{product.category}</td>
              <td className="px-4 py-3">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={product.promoted}
                    onChange={(e) => onPromote(product.id, e.target.checked)}
                    className="rounded border-gray-300 text-kelo-blue focus:ring-kelo-blue h-4 w-4"
                  />
                </label>
              </td>
              <td className="px-4 py-3">
                <div className="flex space-x-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => onEdit(product.id)}
                    className="h-8 w-8 p-0"
                  >
                    <Pencil className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => onDelete(product.id)}
                    className="h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {products.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No products found. Add some products to your inventory.
        </div>
      )}
    </div>
  );
};

export default InventoryTable;
