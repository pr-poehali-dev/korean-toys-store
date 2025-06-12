import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={14}
        className={
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }
      />
    ));
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.englishName}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              NEW
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              HIT
            </span>
          )}
        </div>

        {/* Quick actions */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50">
            <Icon name="Heart" size={16} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category */}
        <div className="flex items-center gap-2 mb-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: product.category.color }}
          ></span>
          <span className="text-xs text-gray-500 font-medium">
            {product.category.englishName}
          </span>
        </div>

        {/* Korean Name */}
        <h3 className="font-bold text-gray-800 mb-1 text-sm">
          {product.koreanName}
        </h3>

        {/* English Name */}
        <p className="text-gray-600 text-sm mb-3">{product.englishName}</p>

        {/* Rating & Age */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            {renderStars(product.rating)}
            <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
          </div>
          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
            {product.ageRange}
          </span>
        </div>

        {/* Brand */}
        <div className="text-xs text-gray-500 mb-3">
          бренд: <span className="font-medium">{product.brand}</span>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-gray-800">
              {product.price.toLocaleString()} ₽
            </span>
          </div>

          <Button
            size="sm"
            className="bg-red-500 hover:bg-red-600 text-white"
            disabled={!product.inStock}
          >
            {product.inStock ? (
              <>
                <Icon name="ShoppingCart" size={14} />В корзину
              </>
            ) : (
              "Нет в наличии"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
