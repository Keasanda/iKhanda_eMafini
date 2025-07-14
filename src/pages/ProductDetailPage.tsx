import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import { products, Product } from '../data/products';

interface ProductDetailPageProps {
  productId: number;
  onBack: () => void;
  onProductSelect: (productId: number) => void;
}

export default function ProductDetailPage({ productId, onBack, onProductSelect }: ProductDetailPageProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-stone-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-stone-800 mb-4">Product not found</h1>
          <button 
            onClick={onBack}
            className="text-amber-700 hover:text-amber-800 transition-colors"
          >
            Return to collection
          </button>
        </div>
      </div>
    );
  }

  const allImages = [product.image, ...product.additionalImages];
  const relatedProducts = products.filter(p => p.id !== productId).slice(0, 3);

  return (
    <div className="min-h-screen bg-stone-50 pt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-stone-600 hover:text-stone-800 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Collection</span>
        </button>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={allImages[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImageIndex === index 
                      ? 'border-amber-500 ring-2 ring-amber-200' 
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl font-serif font-light text-stone-800 mb-4">
                {product.name}
              </h1>
              <p className="text-3xl font-medium text-stone-800 mb-6">
                R{product.price.toLocaleString()}
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                {product.detailedDescription}
              </p>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-serif font-medium text-stone-800 mb-4">Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-sm font-medium text-stone-500">Material</span>
                  <p className="text-stone-700">{product.specifications.material}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-stone-500">Dimensions</span>
                  <p className="text-stone-700">{product.specifications.dimensions}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-stone-500">Weight</span>
                  <p className="text-stone-700">{product.specifications.weight}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-stone-500">Finish</span>
                  <p className="text-stone-700">{product.specifications.finish}</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-amber-50 rounded-2xl p-6">
              <h3 className="text-xl font-serif font-medium text-stone-800 mb-4">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-amber-600 mt-1">•</span>
                    <span className="text-stone-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact for Purchase */}
            <div className="bg-stone-800 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-serif font-medium text-stone-50 mb-3">
                Interested in this piece?
              </h3>
              <p className="text-stone-300 mb-6">
                Contact us to discuss availability, custom options, or to place an order.
              </p>
              <div className="space-y-3">
                <a 
                  href="mailto:hello@ikhandaemafini.co.za"
                  className="block bg-amber-600 text-white px-6 py-3 rounded-xl hover:bg-amber-700 transition-colors font-medium"
                >
                  Email Us
                </a>
                <a 
                  href="https://wa.me/27011234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 border border-stone-600 text-stone-300 px-6 py-3 rounded-xl hover:border-stone-500 hover:text-stone-200 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp to Order</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="border-t border-stone-200 pt-20">
          <h2 className="text-3xl font-serif font-light text-stone-800 mb-12 text-center">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <div 
                key={relatedProduct.id} 
                className="group cursor-pointer"
                onClick={() => onProductSelect(relatedProduct.id)}
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-4">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-serif font-medium text-stone-800 group-hover:text-amber-700 transition-colors mb-2">
                  {relatedProduct.name}
                </h3>
                <p className="text-stone-600 mb-3">{relatedProduct.description}</p>
                <p className="text-xl font-medium text-stone-800">
                  R{relatedProduct.price.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}