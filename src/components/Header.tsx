
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-800 text-white relative z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 space-x-reverse">
            <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">جع</span>
            </div>
            <span className="font-semibold text-lg">جمعية العلماء المسلمين</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <a href="#" className="hover:text-emerald-400 transition-colors">الرئيسية</a>
            <a href="#courses" className="hover:text-emerald-400 transition-colors">الدورات</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">أساليب التعلم</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">المدونة</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">من نحن</a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3 space-x-reverse">
            <Button variant="ghost" className="text-white hover:text-emerald-400">
              تسجيل الدخول
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              إنشاء حساب
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-700">
            <nav className="flex flex-col space-y-3 mt-4">
              <a href="#" className="hover:text-emerald-400 transition-colors text-right">الرئيسية</a>
              <a href="#courses" className="hover:text-emerald-400 transition-colors text-right">الدورات</a>
              <a href="#" className="hover:text-emerald-400 transition-colors text-right">أساليب التعلم</a>
              <a href="#" className="hover:text-emerald-400 transition-colors text-right">المدونة</a>
              <a href="#" className="hover:text-emerald-400 transition-colors text-right">من نحن</a>
              <div className="flex flex-col space-y-2 mt-4">
                <Button variant="ghost" className="text-white hover:text-emerald-400 justify-start">
                  تسجيل الدخول
                </Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  إنشاء حساب
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
