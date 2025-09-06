import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          <article className="lg:col-span-3 text-2xl lg:text-3xl xl:text-4xl text-[rgba(19,54,92,1)] font-normal leading-relaxed">
            <div className="flex items-center justify-center gap-6 text-6xl lg:text-8xl xl:text-9xl text-[rgba(19,54,92,1)] font-normal">
              <h2 className="text-center">О НАС</h2>
              <img
                src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/32a783704e4d94e36ed7b96fa96218e64be5778a?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-16 lg:w-20 xl:w-[85px] shrink-0"
                alt="Декоративный элемент"
              />
            </div>
            <p className="space-y-6">
              <span className="block">
                НЮКТА — бренд, вдохновлённый древнегреческой богиней Нюктой,
                символом ночи и покоя. В каждом изделии — уют и комфорт.
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
          
          <div className="lg:col-span-1 flex justify-center lg:justify-end items-start lg:mt-16">
            <img
              src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/fa6bac477da9ebb902cc9e73446209403b76f894?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-20 lg:w-24 xl:w-[101px]"
              alt="Декоративный элемент"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
