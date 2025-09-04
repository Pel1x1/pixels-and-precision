import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="self-stretch flex items-stretch gap-5 justify-between mt-[53px] max-md:max-w-full max-md:mr-[3px] max-md:mt-10">
      <div className="flex flex-col items-stretch text-9xl text-[rgba(19,54,92,1)] font-normal my-auto max-md:max-w-full max-md:text-[40px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/7917790ff807599acdf16a2c8aee6a70b08d6f56?placeholderIfAbsent=true"
          className="aspect-[1.09] object-contain w-full rounded-[222px_222px_0px_0px] max-md:max-w-full"
          alt="Постельное белье НЮКТА"
        />
        <div className="self-center flex w-[444px] max-w-full items-stretch gap-[27px] mt-[81px] max-md:text-[40px] max-md:mt-10">
          <h2 className="grow shrink w-[315px] basis-auto max-md:text-[40px]">
            О НАС
          </h2>
          <img
            src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/32a783704e4d94e36ed7b96fa96218e64be5778a?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[85px] shrink-0"
            alt="Декоративный элемент"
          />
        </div>
      </div>
      <div className="flex flex-col items-stretch max-md:max-w-full">
        <h1 className="text-[rgba(19,54,92,1)] text-9xl font-normal max-md:text-[40px]">
          НЮКТА
        </h1>
        <p className="text-[rgba(19,54,92,1)] text-4xl font-normal mt-[113px] max-md:max-w-full max-md:mt-10">
          НЮКТА — искусство создавать уют и комфорт.Постельное белье из
          Турецкого натурального сатина, шитое по вашим меркам.
          <br />
          Для тех, кто ценит качество и нежность в каждой детали.
        </p>
        <button className="bg-[rgba(219,170,80,1)] flex w-[471px] max-w-full flex-col items-center text-4xl text-[rgba(247,239,219,1)] font-normal text-center justify-center mt-[84px] px-[70px] py-[30px] hover:bg-[rgba(199,150,60,1)] transition-colors max-md:mt-10 max-md:px-5">
          <div>Перейти в каталог</div>
        </button>
        <div className="flex w-[560px] max-w-full flex-col mr-[23px] max-md:mr-2.5">
          <img
            src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/32a783704e4d94e36ed7b96fa96218e64be5778a?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[85px]"
            alt="Декоративный элемент"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/1261109808776fe548430f5da44b67570b228fd7?placeholderIfAbsent=true"
            className="aspect-[1.02] object-contain w-[85px] mt-[74px] max-md:mt-10"
            alt="Декоративный элемент"
          />
        </div>
      </div>
      <img
        src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/32a783704e4d94e36ed7b96fa96218e64be5778a?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-[85px] shrink-0 mt-[150px] max-md:mt-10"
        alt="Декоративный элемент"
      />
    </section>
  );
};
