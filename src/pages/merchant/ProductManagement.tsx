
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MainLayout from '@/components/layouts/MainLayout';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye,
  Upload,
  Download,
  MoreVertical
} from 'lucide-react';

const ProductManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'home', name: 'Home & Garden' }
  ];

  const products = [
    {
      id: 1,
      name: 'Samsung Galaxy A54 5G',
      sku: 'SAM-A54-128',
      category: 'Electronics',
      price: 35000,
      stock: 24,
      status: 'active',
      sales: 89,
      revenue: 3115000,
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'iPhone 13 128GB',
      sku: 'IPH-13-128',
      category: 'Electronics',
      price: 85000,
      stock: 12,
      status: 'active',
      sales: 67,
      revenue: 5695000,
      image: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Nike Air Max 270',
      sku: 'NIK-AM270',
      category: 'Fashion',
      price: 12000,
      stock: 0,
      status: 'out_of_stock',
      sales: 156,
      revenue: 1872000,
      image: '/placeholder.svg'
    },
    {
      id: 4,
      name: 'MacBook Air M2',
      sku: 'APL-MBA-M2',
      category: 'Electronics',
      price: 120000,
      stock: 8,
      status: 'low_stock',
      sales: 23,
      revenue: 2760000,
      image: '/placeholder.svg'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           product.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusBadge = (status: string, stock: number) => {
    if (status === 'out_of_stock' || stock === 0) {
      return <Badge variant="destructive">Out of Stock</Badge>;
    } else if (status === 'low_stock' || stock < 10) {
      return <Badge variant="outline" className="border-yellow-500 text-yellow-600">Low Stock</Badge>;
    } else {
      return <Badge variant="default" className="bg-green-500">In Stock</Badge>;
    }
  };

  return (
    <MainLayout showFloatingCart={false}>
      <div className="min-h-screen bg-gray-50">
        <div className="kelo-container py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Product Management</h1>
              <p className="text-gray-600">Manage your inventory and product listings</p>
            </div>
            <div className="flex gap-2 mt-4 lg:mt-0">
              <Button variant="outline">
                <Upload className="h-4 w-4 mr-2" />
                Import CSV
              </Button>
              <Button className="bg-kelo-blue hover:bg-kelo-blue/90">
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </div>
          </div>

          {/* Search and Filters */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search products by name or SKU..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Products Table */}
          <Card>
            <CardHeader>
              <CardTitle>Products ({filteredProducts.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="grid">
                <TabsList className="mb-6">
                  <TabsTrigger value="grid">Grid View</TabsTrigger>
                  <TabsTrigger value="table">Table View</TabsTrigger>
                </TabsList>
                
                <TabsContent value="grid">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                      <Card key={product.id} className="overflow-hidden">
                        <div className="aspect-square relative">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2">
                            {getStatusBadge(product.status, product.stock)}
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-1 truncate">{product.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">SKU: {product.sku}</p>
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-lg font-bold">KES {product.price.toLocaleString()}</span>
                            <span className="text-sm text-gray-600">{product.stock} in stock</span>
                          </div>
                          <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                            <span>{product.sales} sold</span>
                            <span>KES {(product.revenue / 1000000).toFixed(1)}M revenue</span>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                            <Button variant="outline" size="sm" className="flex-1">
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="table">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Product</th>
                          <th className="text-left py-3 px-4">SKU</th>
                          <th className="text-left py-3 px-4">Category</th>
                          <th className="text-left py-3 px-4">Price</th>
                          <th className="text-left py-3 px-4">Stock</th>
                          <th className="text-left py-3 px-4">Status</th>
                          <th className="text-left py-3 px-4">Sales</th>
                          <th className="text-left py-3 px-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredProducts.map((product) => (
                          <tr key={product.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-3">
                                <img 
                                  src={product.image} 
                                  alt={product.name}
                                  className="w-10 h-10 object-cover rounded"
                                />
                                <span className="font-medium">{product.name}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 font-mono text-sm">{product.sku}</td>
                            <td className="py-3 px-4">{product.category}</td>
                            <td className="py-3 px-4 font-semibold">KES {product.price.toLocaleString()}</td>
                            <td className="py-3 px-4">{product.stock}</td>
                            <td className="py-3 px-4">{getStatusBadge(product.status, product.stock)}</td>
                            <td className="py-3 px-4">{product.sales}</td>
                            <td className="py-3 px-4">
                              <div className="flex gap-1">
                                <Button variant="ghost" size="sm">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              </Tabs>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">No products found matching your criteria</p>
                  <Button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Bulk Actions */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Bulk Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Bulk Upload Images
                </Button>
                <Button variant="outline">
                  <Edit className="h-4 w-4 mr-2" />
                  Bulk Edit Prices
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Selected
                </Button>
                <Button variant="outline">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Bulk Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductManagement;
