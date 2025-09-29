import React from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
export const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <section className="w-full py-[1rem] lg:py-10">
      <div className="max-w-7xl ">
        <div className="grid grid-cols-1 lg:grid-cols-2  items-start">
        
          {/* Left Column - Image and About */}
          <div className={`lg:order-1 order-2 flex flex-col justify-center lg:justify-end 
          ${ isMobile ? 'h-[75%] w-[80%] ml-[10%] mr-[10%] mt-2' : 'w-full h-full ml-[4.2rem]'}`} >
            <img
              src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/7917790ff807599acdf16a2c8aee6a70b08d6f56?placeholderIfAbsent=true"
              className="w-full rounded-[40px]"
              alt="Постельное белье НЮКТА"
            />
          </div>

          {/* Center Column - Main Content */}
          <div className="lg:order-1 order-2 flex flex-col justify-between h-full w-full lg:ml-[10rem] lg:pr-[3rem]" style={{marginTop: isMobile?"-1rem":""}}>
            <h1
              className={"text-6xl lg:text-8xl xl:text-[110px] text-[rgba(19,54,92,1)] font-normal flex flex-col items-center lg:items-start lg:text-left"}
            >
              <p style={{marginBottom: isMobile? "1rem" : ""}}>НЮКТА</p>
             
            </h1>

            <p className="text-xl lg:text-3xl xl:text-3xl text-[rgba(19,54,92,1)] font-normal leading-relaxed w-full text-left px-10 lg:px-0">
              Нюкта-тихая роскошь для идеальной атмосферы сна.<br/>
              Постельное белье из
              Индивидуальный пошив постельного белья из премиального Турецкого сатина.<br/><br/>

              Для тех, кто ценит стиль и качество в каждой детали.
            </p>

            <div className='flex flex-col items-center  lg:items-start mt-[1rem] lg:mt-0'>
              <a href='#collection'>
              <button 
              className="bg-[rgba(219,170,80,1)] mt-[2rem] text-2xl lg:text-3xl xl:text-4xl
            text-[rgba(247,239,219,1)] font-normal px-11 lg:px-12 xl:px-[70px] py-2 lg:py-5
            hover:bg-[rgba(199,150,60,1)] transition-colors lg:w-full  max-w-md text-center
            
            ">
                Перейти в каталог
              </button>
            </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
