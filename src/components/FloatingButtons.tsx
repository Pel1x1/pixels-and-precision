import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export const FloatingButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showSocials, setShowSocials] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCartClick = () => {
    if (cartCount > 0) {
      // Scroll to cart section
      const cartSection = document.querySelector('#cart-section');
      if (cartSection) {
        cartSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Scroll to collection section
      const collectionSection = document.querySelector('#collection');
      if (collectionSection) {
        collectionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
      {/* Блок с соцсетями — выезжает/прячется по showSocials */}
      <div
        className={`
          flex flex-col gap-3 mb-2
          transition-all duration-300
          ${showSocials ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
        `}
      >
        {/* Telegram */}
        <a
          href="https://t.me/NuktaVibe"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#0088cc] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Написать в Telegram"
        >
          <img src="/img/tg.png" alt="Telegram" className="w-7 h-7" />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/79501237503"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Написать в WhatsApp"
        >
          <img src="/img/wht.png" alt="WhatsApp" className="w-7 h-7" />
        </a>

        {/* VK */}
        <a
          href="https://vk.com/club227935210"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#c9e5f3] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Написать в Vk"
        >
          <img src="/img/vk.png" alt="Vk" className="w-7 h-7" />
        </a>
      </div>

      {/* Кнопка "ссылки" (открывает/закрывает соцсети) */}
      <button
        onClick={() => setShowSocials(prev => !prev)}
        className="w-14 h-14 bg-[rgba(219,170,80,1)] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Открыть ссылки"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </button>

      {/* Кнопка корзины */}
      <button
        onClick={handleCartClick}
        className="w-14 h-14 bg-[rgba(219,170,80,1)] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative"
        aria-label="Корзина"
      >
        <ShoppingCart className="w-6 h-6 text-white" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
            {cartCount > 99 ? '99+' : cartCount}
          </span>
        )}
      </button>

      {/* Кнопка "наверх" */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-14 h-14 bg-[rgba(219,170,80,1)] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Наверх"
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </button>
      )}
    </div>
  );
};
