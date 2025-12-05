import React from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import { QuickContactForm } from './QuickContactForm';

export const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="w-full py-6 lg:py-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Image */}
          <div className="lg:order-1 order-2">
            <img
              src="/img/hero.png"
              className="w-full rounded-[30px] shadow-xl"
              alt="Постельное белье НЮКТА"
            />
          </div>

          {/* Right Column - Content + Form */}
          <div className="lg:order-2 order-1 flex flex-col gap-6">
            {/* Brand name */}
            <h1 className="text-5xl lg:text-7xl xl:text-8xl text-[rgba(19,54,92,1)] font-normal text-center lg:text-left">
              НЮКТА
            </h1>
            
            {/* Main headline - specific and clear */}
            <h2 className="text-2xl lg:text-3xl xl:text-4xl text-[rgba(19,54,92,1)] font-semibold text-center lg:text-left leading-tight">
              Постельное бельё на заказ<br/>из турецкого сатина
            </h2>
            
            {/* Delivery badge */}
            <p className="text-lg text-[rgba(219,170,80,1)] font-medium text-center lg:text-left">
              Доставка по всей России
            </p>

            {/* UTP - benefits focused */}
            <p className="text-lg lg:text-xl text-[rgba(19,54,92,0.8)] leading-relaxed text-center lg:text-left">
              Сатин, который дарит прохладу летом и тепло зимой.<br/>
              Сшито идеально по вашим размерам — никаких сползаний и морщин.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#collection">
                <button className="bg-[rgba(219,170,80,1)] text-white text-lg lg:text-xl font-semibold px-8 py-4 hover:bg-[rgba(199,150,60,1)] transition-colors w-full sm:w-auto">
                  Подобрать ткань и размер
                </button>
              </a>
            </div>

            {/* Quick Contact Form - visible on desktop */}
            <div className="hidden lg:block mt-4">
              <QuickContactForm />
            </div>
          </div>
        </div>
        
        {/* Quick Contact Form - mobile */}
        <div className="lg:hidden mt-8 flex justify-center">
          <QuickContactForm />
        </div>
      </div>
    </section>
  );
};
