import { categories } from "@/data/categories";
import Icon from "@/components/ui/icon";

const CategorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-red-500">카테고리</span> Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выберите категорию корейских игрушек для вашего ребенка
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group bg-gray-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
              style={
                {
                  "--accent-color": category.color,
                } as React.CSSProperties
              }
            >
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${category.color}20` }}
              >
                <Icon
                  name={category.icon as any}
                  size={28}
                  style={{ color: category.color }}
                />
              </div>

              <h3 className="font-bold text-gray-800 mb-1 text-sm lg:text-base">
                {category.koreanName}
              </h3>
              <p className="text-xs lg:text-sm text-gray-600">
                {category.englishName}
              </p>

              <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="w-full h-1 rounded-full"
                  style={{ backgroundColor: category.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
