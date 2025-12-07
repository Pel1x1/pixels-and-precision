import React, { useState } from "react";
import { Phone } from "lucide-react";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className="w-full py-4 bg-[rgba(247,239,219,1)] sticky top-0 z-40 shadow-sm">
      <div className="max-w-[1585px] px-10 lg:px-[10.5rem]">
        <nav className="flex items-center justify-between w-full">
          {/* Logo - clickable to home */}
          <a href="/" className="shrink-0 ">
            <img
              src="/img/logo.png"
              className="aspect-[0.97] object-contain w-12 sm:w-16 lg:w-[70px]"
              alt="НЮКТА логотип"
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10 text-lg xl:text-xl text-[rgba(19,54,92,1)] font-arsenal">
            <a href="#about" className="hover:text-[rgba(219,170,80,1)] transition-colors whitespace-nowrap">
              О НАС
            </a>
            <a href="#collection" className="hover:text-[rgba(219,170,80,1)] transition-colors whitespace-nowrap">
              КАТАЛОГ
            </a>
            <a href="#delivery" className="hover:text-[rgba(219,170,80,1)] transition-colors whitespace-nowrap">
              ДОСТАВКА
            </a>
            <a href="#reviews" className="hover:text-[rgba(219,170,80,1)] transition-colors whitespace-nowrap">
              ОТЗЫВЫ
            </a>
            <a href="#contacts" className="hover:text-[rgba(219,170,80,1)] transition-colors whitespace-nowrap">
              КОНТАКТЫ
            </a>
          </div>

          {/* Phone number - desktop */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            <a 
              href="tel:+79501237503" 
              className="flex items-center gap-2 text-[rgba(19,54,92,1)] hover:text-[rgba(219,170,80,1)] transition-colors font-semibold text-lg"
            >
              <Phone className="w-5 h-5" />
              +7 (950) 123-75-03
            </a>
            <a 
              href="#collection"
              className="bg-[rgba(219,170,80,1)] text-white px-5 py-2 rounded hover:bg-[rgba(199,150,60,1)] transition-colors font-medium"
            >
              Заказать
            </a>
          </div>

          {/* Mobile: phone + burger */}
          <div className="flex lg:hidden items-center gap-3">
            <a 
              href="tel:+79501237503" 
              className="p-2 text-[rgba(19,54,92,1)]"
              aria-label="Позвонить"
            >
              <Phone className="w-6 h-6" />
            </a>
            <button 
              className="p-2 text-[rgba(19,54,92,1)]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Меню"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
        
        {/* Mobile menu */}
        {menuOpen && (
          <nav className="lg:hidden mt-4 pt-4 border-t border-[rgba(219,170,80,0.3)]">
            <div className="flex flex-col gap-3 text-lg text-[rgba(19,54,92,1)] font-arsenal">
              <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-[rgba(219,170,80,1)] transition-colors py-2">
                О НАС
              </a>
              <a href="#collection" onClick={() => setMenuOpen(false)} className="hover:text-[rgba(219,170,80,1)] transition-colors py-2">
                КАТАЛОГ
              </a>
              <a href="#delivery" onClick={() => setMenuOpen(false)} className="hover:text-[rgba(219,170,80,1)] transition-colors py-2">
                ДОСТАВКА
              </a>
              <a href="#reviews" onClick={() => setMenuOpen(false)} className="hover:text-[rgba(219,170,80,1)] transition-colors py-2">
                ОТЗЫВЫ
              </a>
              <a href="#contacts" onClick={() => setMenuOpen(false)} className="hover:text-[rgba(219,170,80,1)] transition-colors py-2">
                КОНТАКТЫ
              </a>
              <a 
                href="tel:+79501237503" 
                className="flex items-center gap-2 text-[rgba(219,170,80,1)] font-semibold py-2"
              >
                <Phone className="w-5 h-5" />
                +7 (950) 123-75-03
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
