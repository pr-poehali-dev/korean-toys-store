import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-red-50 to-blue-50 min-h-[600px] flex items-center overflow-hidden">
      {/* Korean flag colors accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 rounded-full opacity-10 -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500 rounded-full opacity-10 translate-y-20 -translate-x-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Sparkles" size={16} />
              Официальные корейские игрушки
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-red-500">Chingu Toys</span>
              <br />
              <span className="text-blue-600">장난감</span>
              <br />
              <span className="text-gray-800">Korean Toys</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Лучшие корейские игрушки от популярных брендов. Пороро, Тайо,
              K-pop мерч и традиционные игры для развития вашего ребенка.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                <Icon name="ShoppingCart" size={20} />
                Купить сейчас
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-600 hover:bg-blue-50"
              >
                <Icon name="Play" size={20} />
                Смотреть каталог
              </Button>
            </div>

            <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">500+</div>
                <div className="text-sm text-gray-600">Товаров</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">★ 4.8</div>
                <div className="text-sm text-gray-600">Рейтинг</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-500">24/7</div>
                <div className="text-sm text-gray-600">Поддержка</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=600&fit=crop"
                alt="Korean Toys Collection"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
              <Icon name="Heart" size={24} className="text-red-500" />
            </div>
            <div className="absolute bottom-4 left-4 bg-white rounded-full p-3 shadow-lg animate-pulse">
              <Icon name="Star" size={24} className="text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
