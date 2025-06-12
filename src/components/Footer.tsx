import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <span className="text-xl font-bold">Korean Toys</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Лучшие корейские игрушки для развития и развлечения детей.
              Официальные товары от ведущих корейских брендов.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors cursor-pointer">
                <Icon name="Mail" size={18} />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                <Icon name="Phone" size={18} />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors cursor-pointer">
                <Icon name="MessageCircle" size={18} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Магазин</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Каталог
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Новинки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Хиты продаж
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Скидки
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4">Поддержка</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Возврат
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Гарантия
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm">
            © 2024 Korean Toys. Все права защищены.
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm mt-4 md:mt-0">
            <span>🇰🇷</span>
            <span>Made with love in Korea</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
