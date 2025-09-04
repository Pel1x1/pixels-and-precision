import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="flex w-full max-w-[1644px] items-stretch gap-[40px_85px] text-4xl text-[rgba(19,54,92,1)] font-normal flex-wrap mt-[39px] max-md:max-w-full">
      <article className="grow shrink w-[1436px] basis-auto max-md:max-w-full">
        <p>
          НЮКТА — бренд, вдохновлённый древнегреческой богиней Нюктой,
          символом ночи и покоя. В каждом изделии — уют и комфорт.
          <br />
          <br />
          Мы используем натуральный сатин Турецкого производства состоящий из
          длинноволокнистого американского хлопка, мягкий, прочный и
          гипоаллергенный материал, который дышит и дарит лёгкость.
          <br />
          <br />
          Каждый комплект шьётся по индивидуальным меркам с вниманием к
          деталям и качеству, чтобы обеспечить идеальную посадку и комфорт.
          <br />
          <br />
          Наше бельё долговечно, сохраняет красоту и форму после множества
          стирок. НЮКТА — забота о вашем сне и атмосфера уюта.
        </p>
      </article>
      <img
        src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/fa6bac477da9ebb902cc9e73446209403b76f894?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-[101px] shrink-0 max-w-full mt-[345px] max-md:mt-10"
        alt="Декоративный элемент"
      />
    </section>
  );
};
