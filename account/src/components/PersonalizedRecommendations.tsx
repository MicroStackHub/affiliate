import React from 'react';

interface ProductRecommendation {
  id: string;
  name: string;
  price: number;
  discountPrice?: number;
  imageUrl: string;
  category: string;
  rating: number;
}

interface PersonalizedRecommendationsProps {
  recommendations: ProductRecommendation[];
  onViewProduct: (productId: string) => void;
}

const ProductCard: React.FC<{
  product: ProductRecommendation;
  onViewProduct: (productId: string) => void;
}> = ({ product, onViewProduct }) => {
  const discount = product.discountPrice
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;

  return (
    <div className="product-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="relative">
        <div 
          className="h-40 bg-gray-100 bg-center bg-cover" 
          style={{ backgroundImage: `url(${product.imageUrl})` }}
        ></div>
        {discount > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {discount}% OFF
          </div>
        )}
      </div>
      <div className="p-3">
        <div className="text-xs text-gray-500 mb-1">{product.category}</div>
        <h3 className="font-medium text-gray-800 mb-1 truncate">{product.name}</h3>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className={`w-3 h-3 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.rating.toFixed(1)})</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            {product.discountPrice ? (
              <div className="flex items-center">
                <span className="font-bold text-gray-800">${product.discountPrice.toFixed(2)}</span>
                <span className="text-xs text-gray-500 line-through ml-2">${product.price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="font-bold text-gray-800">${product.price.toFixed(2)}</span>
            )}
          </div>
          <button 
            onClick={() => onViewProduct(product.id)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

const PersonalizedRecommendations: React.FC<PersonalizedRecommendationsProps> = ({ 
  recommendations, 
  onViewProduct 
}) => {
  return (
    <div className="personalized-recommendations-container mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Recommended For You</h2>
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">View All</button>
        </div>
        
        <div className="p-4">
          {recommendations.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {recommendations.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onViewProduct={onViewProduct} 
                />
              ))}
            </div>
          ) : (
            <div className="py-8 text-center">
              <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
              </svg>
              <p className="text-gray-500">We're preparing personalized recommendations for you</p>
              <p className="text-sm text-gray-400 mt-1">Browse more products to get better suggestions</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalizedRecommendations;