import React, { useState } from "react";
import WidthDisplay from '@/hooks/use-sizer';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full py-5">
      <div className="max-w-full ">
        <nav className="flex items-center justify-between w-full lg:justify-between lg:gap-8 xl:gap-12">
          <img
            src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/01f09ace6fc8f11e5aa08fab7050afd2a3af2a58?placeholderIfAbsent=true"
            className="aspect-[0.97] object-contain w-14 sm:w-24 lg:w-[90px] shrink-0 lg:ml-[10rem] ml-10"
            alt="НЮКТА логотип"
          />
          <div className="hidden lg:flex items-center gap-6 xl:gap-[5rem] text-2xl xl:text-2xl text-[rgba(19,54,92,1)] font-arsenal justify-end flex-1 space-x-20 mr-[10rem]">
            <a href="#about" className="hover:text-[rgba(219,170,80,1)] transition-colors whitespace-nowrap">
              О НАС
            </a>
            <a href="#collection" className="hover:text-[rgba(219,170,80,1)] transition-colors whitespace-nowrap">
              НАША КОЛЛЕКЦИЯ
            </a>
            <a href="#delivery" className="hover:text-[rgba(219,170,80,1)] transition-colors whitespace-nowrap">
              ДОСТАВКА
            </a>
            <a href="#contacts" className="hover:text-[rgba(219,170,80,1)] transition-colors whitespace-nowrap">
              КОНТАКТЫ
            </a>
          </div>

          <button 
          className="lg:hidden p-2 text-[rgba(19,54,92,1)]"
          
          onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6 mr-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
        {menuOpen && (
          <div> 
            <nav className="lg:hidden mt-4 pt-4 border-t border-[rgba(219,170,80,0.3)] ml-9">
              <div className="flex flex-col gap-4 text-xl text-[rgba(19,54,92,1)] font-arsenal">
                <a href="#about" className="hover:text-[rgba(219,170,80,1)] transition-colors py-2">
                  О НАС
                </a>
                <a href="#collection" className="hover:text-[rgba(219,170,80,1)] transition-colors py-2">
                  НАША КОЛЛЕКЦИЯ
                </a>
                <a href="#delivery" className="hover:text-[rgba(219,170,80,1)] transition-colors py-2">
                  ДОСТАВКА
                </a>
                <a href="#contacts" className="hover:text-[rgba(219,170,80,1)] transition-colors py-2">
                  КОНТАКТЫ
                </a>
              </div>
            </nav>
        </div>
        )}
      </div>
    </header>

  );
};
