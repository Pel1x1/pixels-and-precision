import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="self-center flex w-full max-w-[1734px] flex-col items-center ml-[26px] max-md:max-w-full">
      <nav className="flex w-full max-w-[1491px] gap-[40px_100px] text-[40px] text-[rgba(19,54,92,1)] font-normal max-md:max-w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/01f09ace6fc8f11e5aa08fab7050afd2a3af2a58?placeholderIfAbsent=true"
          className="aspect-[0.97] object-contain w-[98px] self-stretch shrink-0"
          alt="НЮКТА логотип"
        />
        <a href="#about" className="mt-[17px] hover:text-[rgba(219,170,80,1)] transition-colors">
          О НАС
        </a>
        <a href="#collection" className="grow shrink w-[255px] mt-[17px] hover:text-[rgba(219,170,80,1)] transition-colors">
          наша коллекция
        </a>
        <a href="#delivery" className="grow shrink w-[134px] mt-[17px] hover:text-[rgba(219,170,80,1)] transition-colors">
          доставка
        </a>
        <a href="#contacts" className="grow shrink w-[135px] mt-[17px] hover:text-[rgba(219,170,80,1)] transition-colors">
          контакты
        </a>
      </nav>
    </header>
  );
};
