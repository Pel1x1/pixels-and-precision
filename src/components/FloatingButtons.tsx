import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export const FloatingButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
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

      {/* Scroll to top */}
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
