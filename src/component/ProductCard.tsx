import type { Product } from "../types/types";

function Card({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 max-w-xs overflow-hidden border border-gray-100">
      <div className="bg-gray-100 h-56 flex items-center justify-center overflow-hidden">
        <img src={product.image} alt={product.title} className="h-full object-contain" />
      </div>
      
      <div className="p-4 space-y-3">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{product.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-3">{product.description}</p>
        
        <div className="text-sm text-gray-600">
          <span className="font-medium">Category:</span> {product.category}
        </div>
        
        <div className="flex justify-between items-center pt-2">
          <span className="text-lg font-bold text-green-600">${product.price}</span>
          <div className="flex items-center gap-1 text-sm text-yellow-500">
            <span>⭐ {product.rating.rate}</span>
            <span className="text-gray-400">({product.rating.count})</span>
          </div>
        </div>

        <div className="text-xs text-gray-400">Product ID: {product.id}</div>
      </div>
    </div>
  );
}

export default Card;
