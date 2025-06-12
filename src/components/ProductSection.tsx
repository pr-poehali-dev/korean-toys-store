import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-blue-500">인기 상품</span> Popular Toys
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Самые популярные корейские игрушки для детей всех возрастов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
            Показать все товары
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
