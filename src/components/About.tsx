import React from 'react';
import { useIsMobile } from "@/hooks/use-mobile";

export const About: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <section id="about" className="w-full py-4 lg:py-12">
      <div className="max-w-[90rem]">
        <div className="grid grid-cols-1 items-start">
          <article className={`lg:col-span-3 text-[1.25rem] lg:text-3xl xl:text-3xl
           text-[rgba(19,54,92,1)] font-normal leading-relaxed
           
          ${ isMobile ? 'h-[75%] w-[80%] ml-[10%] mr-[10%] mt-2' : 'w-full h-full pl-[10rem] pr-[0px] '}`} >

            <div className="flex gap-6 text-6xl lg:text-8xl xl:text-9xl text-[rgba(19,54,92,1)] font-normal mb-4 lg:mb-10">
              <h2 className="text-center">О НАС</h2>
              <img
                src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/32a783704e4d94e36ed7b96fa96218e64be5778a?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-11 lg:w-20 xl:w-[85px] shrink-0"
                alt="Декоративный элемент"
              />
            </div>
            <p className="space-y-6 lg:space-y-10 ">
              <span className="block">
                НЮКТА — бренд, вдохновлённый древнегреческой богиней Нюктой,
                символом ночи и покоя. В каждом {isMobile && (<br />)} изделии — уют и комфорт.
              </span>
              
              <span className="block">
                Мы используем натуральный сатин Турецкого производства состоящий из
                длинноволокнистого американского хлопка, мягкий, прочный и
                гипоаллергенный материал, который дышит и дарит лёгкость.
              </span>
              
              <span className="block">
                Каждый комплект шьётся по индивидуальным меркам с вниманием к
                деталям и качеству, чтобы обеспечить идеальную посадку и комфорт.
              </span>
              
              <span className="block">
                Наше бельё долговечно, сохраняет красоту и форму после множества
                стирок. НЮКТА — забота о вашем сне и атмосфера уюта.
              </span>
            </p>
          </article>
        
        </div>
      </div>
    </section>
  );
};
