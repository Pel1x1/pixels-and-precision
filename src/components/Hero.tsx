import React from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
export const Hero: React.FC = () => {
  const isMobile = useIsMobile();

  const text = encodeURIComponent(
    "Здравствуйте! Хочу получить консультацию по поводу постельного белья."
  );

  const url = `https://t.me/NuktaVibe?text=${text}`;

  return (
    
    <section className="w-full py-[1rem] lg:py-10">
      <div className="max-w-7xl ">
        <div className="grid grid-cols-1 lg:grid-cols-2  items-start">

          {/* Left Column - Image and About */}
          <div className={`lg:order-1 order-2 flex flex-col justify-center lg:justify-end 
          ${ isMobile ? 'h-[75%] w-[80%] ml-[10%] mr-[10%] mt-8' : 'w-full h-full ml-[4.2rem]'}`} >
            <img
              src="/img/hero1.png"
              className="w-full rounded-[40px]"
              alt="Постельное белье НЮКТА"
            />
          </div>

            
          {/* Center Column - Main Content */}
          <div className="lg:order-1 order-2 flex flex-col justify-between h-full w-full lg:ml-[10rem] lg:pr-[3rem]" style={{marginTop: isMobile?"-1rem":""}}>
            <h1
              className={"text-6xl lg:text-8xl xl:text-[110px] text-[rgba(19,54,92,1)] font-normal flex flex-col items-center lg:items-start lg:text-left"}
            >
              <p style={{marginBottom: isMobile? "0.5rem" : ""}}>НЮКТА</p>

            </h1>

            <p className="text-xl lg:text-3xl xl:text-3xl text-[rgba(19,54,92,1)] font-normal leading-relaxed w-full text-left px-10 lg:px-0">
              Постельное бельё на заказ из турецкого сатина. <br/><br/>
              Сатин, который дарит прохладу летом и тепло зимой. Сшито идеально по вашим размерам — никаких сползаний и морщин<br/>
              <br/>
              Доставка по всей России
            </p>

            <div className='flex flex-col items-center  lg:items-start  lg:mt-0'>
              <a href='#collection'>  
              <button
                className="bg-[rgba(219,170,80,1)] mt-[2rem] text-2xl lg:text-3xl xl:text-4xl text-[rgba(247,239,219,1)] font-normal px-11 lg:px-12 xl:px-[70px] py-2 lg:py-5
                hover:bg-[rgba(199,150,60,1)] transition-colors lg:w-full max-w-md text-center"
                onClick={() => {
                  const text = encodeURIComponent(
                    "Здравствуйте! Хочу получить консультацию по поводу постельного белья"
                  );
                  window.open(`https://t.me/NuktaVibe?text=${text}`, "_blank", "noopener");
                }}
              >
                Хочу консультацию
              </button>

            </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};