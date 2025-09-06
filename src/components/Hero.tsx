import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        
          {/* Left Column - Image and About */}
          <div className="lg:order-1 order-2 flex flex-col justify-end h-full mr-[70px]"> 
            <img
              src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/7917790ff807599acdf16a2c8aee6a70b08d6f56?placeholderIfAbsent=true"
              className="w-full"
              alt="Постельное белье НЮКТА"
            />
          </div>

          {/* Center Column - Main Content */}
          <div className="lg:order-2 order-1 flex flex-col justify-between h-full">
            <h1 className="text-6xl lg:text-8xl xl:text-[110px] text-[rgba(19,54,92,1)] font-normal flex items-center">
              НЮКТА
              <img
                src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/32a783704e4d94e36ed7b96fa96218e64be5778a?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-16 lg:w-20 xl:w-[85px] -translate-y-11"
                alt="Декоративный элемент"
              />
            </h1>
            
            <p className="text-2xl lg:text-3xl xl:text-3xl text-[rgba(19,54,92,1)] font-normal leading-relaxed max-w-full">
              НЮКТА — искусство создавать уют и комфорт. 
              Постельное белье из
              Турецкого натурального сатина, шитое по вашим меркам.
              <br />
              <br />
              Для тех, кто ценит качество и нежность в каждой детали.
              </p>
            <button className="bg-[rgba(219,170,80,1)] text-2xl lg:text-3xl xl:text-4xl text-[rgba(247,239,219,1)] font-normal px-8 lg:px-12 xl:px-[70px] py-6 lg:py-8 hover:bg-[rgba(199,150,60,1)] transition-colors w-full max-w-md">
              Перейти в каталог
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
