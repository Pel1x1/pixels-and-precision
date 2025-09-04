import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="self-center flex w-full max-w-[1920px] flex-col items-center max-md:max-w-full mt-3">
      <nav className="flex w-full max-w-[1500px] gap-[40px_12%] text-3xl text-[rgba(19,54,92,1)] font-arsenal max-md:max-w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/01f09ace6fc8f11e5aa08fab7050afd2a3af2a58?placeholderIfAbsent=true"
          className="aspect-[0.97] object-contain w-[100px] self-stretch shrink-0"
          alt="НЮКТА логотип"
        />
        <a href="#about" className="mt-[17px] hover:text-[rgba(219,170,80,1)] transition-colors text-3xl">
          О НАС
        </a>
        <a href="#collection" className="grow shrink mt-[17px] hover:text-[rgba(219,170,80,1)] transition-colors text-3xl" >
          НАША КОЛЛЕКЦИЯ
        </a>
        <a href="#delivery" className="grow shrink mt-[17px] hover:text-[rgba(219,170,80,1)] transition-colors text-3xl">
          ДОСТАВКА
        </a>
        <a href="#contacts" className="grow shrink mt-[17px] hover:text-[rgba(219,170,80,1)] transition-colors text-3xl">
          КОНТАКТЫ
        </a>
      </nav>
    </header>

  );
};
