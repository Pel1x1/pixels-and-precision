import React, { useState } from 'react';
import { ColorSelector } from './ColorSelector';
import { SizeSelector } from './SizeSelector';
import { QuantitySelector } from './QuantitySelector';

interface ProductState {
  color: string;
  size: string;
  quantity: number;
}

export const ProductConfigurator: React.FC = () => {
  const [sheetConfig, setSheetConfig] = useState<ProductState>({
    color: '',
    size: '',
    quantity: 1
  });

  const [pillowcaseConfig, setPillowcaseConfig] = useState<ProductState>({
    color: '',
    size: '',
    quantity: 1
  });

  const [duvetConfig, setDuvetConfig] = useState<ProductState>({
    color: '',
    size: '',
    quantity: 1
  });

  const colors = [
    'rgba(61,141,129,1)', 'rgba(203,188,185,1)', 'rgba(207,212,200,1)', 'rgba(255,251,234,1)',
    'rgba(188,200,208,1)', 'rgba(244,232,215,1)', 'rgba(143,153,168,1)', 'rgba(224,202,202,1)',
    'rgba(206,206,206,1)', 'rgba(214,205,188,1)', 'rgba(227,157,140,1)', 'rgba(186,188,189,1)',
    'rgba(219,204,204,1)', 'rgba(255,227,239,1)', 'rgba(223,248,244,1)', 'rgba(219,228,236,1)',
    'rgba(158,175,203,1)', 'rgba(121,96,86,1)', 'rgba(241,241,241,1)', 'rgba(200,186,167,1)',
    'rgba(145,137,129,1)', 'rgba(206,212,178,1)', 'rgba(190,222,209,1)'
  ];

  const sheetSizes = ['180 * 230', '230 * 260', '230 * 280', 'другое'];
  const pillowcaseSizes = ['50 * 70', '70 * 70', 'другое'];
  const duvetSizes = ['150 * 200', '150 * 210', '180 * 210', '200 * 200', '200 * 210', '200 * 220', '220 * 240', 'другое'];

  const handleNext = () => {
    console.log('Конфигурация заказа:', { sheetConfig, pillowcaseConfig, duvetConfig });
  };

  const handleCancel = () => {
    setSheetConfig({ color: '', size: '', quantity: 1 });
    setPillowcaseConfig({ color: '', size: '', quantity: 1 });
    setDuvetConfig({ color: '', size: '', quantity: 1 });
  };

  return (
    <section id="collection" className="w-full max-w-[1734px] mt-[51px] max-md:mt-10">
      <div className="flex items-start gap-[40px_43px] text-9xl text-[rgba(19,54,92,1)] font-normal flex-wrap ml-20 mb-[93px] max-md:text-[40px] max-md:mb-10">
        <h2 className="basis-auto grow shrink mt-[31px] max-md:max-w-full max-md:text-[40px]">
          НАША КОЛЛЕКЦИЯ
        </h2>
        <img
          src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/0125581669a0d20229ca1d1058a827be9f9af864?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[106px] shrink-0 max-w-full"
          alt="Декоративный элемент"
        />
      </div>

      <p className="text-[rgba(19,54,92,1)] text-4xl font-normal ml-[89px] mb-[88px] max-md:max-w-full max-md:mb-10">
        Выберите идеальный комплект постельного белья, полностью
        адаптированный под ваши пожелания.
      </p>

      {/* Простыня */}
      <div className="w-full max-w-[1495px] mx-auto mb-[72px]">
        <div className="bg-[rgba(219,170,80,1)] flex w-full flex-col items-center text-4xl text-[rgba(19,54,92,1)] font-bold whitespace-nowrap text-center justify-center px-[70px] py-[31px] max-md:px-5 mb-[72px]">
          <h3>Простыня</h3>
        </div>

        <div className="space-y-[72px]">
          <div className="flex w-full items-stretch gap-[40px_76px] flex-wrap">
            <label className="text-[rgba(19,54,92,1)] text-4xl font-bold grow shrink w-[137px]">
              Цвет ткани
            </label>
            <ColorSelector
              colors={colors}
              selectedColor={sheetConfig.color}
              onColorSelect={(color) => setSheetConfig(prev => ({ ...prev, color }))}
              className="grow shrink basis-auto"
            />
          </div>

          <div className="flex w-full items-stretch gap-[40px_100px] text-4xl flex-wrap">
            <label className="text-[rgba(19,54,92,1)] font-bold grow shrink w-[89px]">
              Размер
            </label>
            <SizeSelector
              sizes={sheetSizes}
              selectedSize={sheetConfig.size}
              onSizeSelect={(size) => setSheetConfig(prev => ({ ...prev, size }))}
              className="max-md:max-w-full"
            />
          </div>

          <div className="flex w-full items-stretch gap-[39px] text-4xl">
            <label className="text-[rgba(19,54,92,1)] font-bold grow shrink w-[155px]">
              Количество
            </label>
            <QuantitySelector
              selectedQuantity={sheetConfig.quantity}
              onQuantitySelect={(quantity) => setSheetConfig(prev => ({ ...prev, quantity }))}
            />
          </div>

          <div className="flex w-[1252px] max-w-full items-stretch gap-5 text-4xl text-black font-normal whitespace-nowrap text-center flex-wrap justify-between mr-[147px] max-md:mr-2.5">
            <button 
              onClick={handleNext}
              className="flex flex-col items-center pt-0.5 pb-[33px] px-[70px] border-[rgba(219,170,80,1)] border-solid border-4 hover:bg-[rgba(219,170,80,0.1)] transition-colors max-md:max-w-full max-md:px-5"
            >
              <div>далее</div>
            </button>
            <button 
              onClick={handleCancel}
              className="flex flex-col items-center pt-0.5 pb-[38px] px-[70px] border-[rgba(219,170,80,1)] border-solid border-4 hover:bg-[rgba(219,170,80,0.1)] transition-colors max-md:max-w-full max-md:px-5"
            >
              <div>отмена</div>
            </button>
          </div>
        </div>
      </div>

      {/* Наволочки */}
      <div className="w-full max-w-[1495px] mx-auto mb-[72px]">
        <div className="bg-[rgba(219,170,80,1)] flex w-full flex-col items-center text-4xl text-[rgba(19,54,92,1)] font-bold whitespace-nowrap text-center pt-[25px] pb-[45px] px-[70px] max-md:px-5 mb-[72px]">
          <h3>Наволочки</h3>
        </div>

        <div className="space-y-[72px]">
          <div className="flex w-full items-stretch gap-[40px_75px] flex-wrap">
            <label className="text-[rgba(19,54,92,1)] text-4xl font-bold grow shrink w-[137px]">
              Цвет ткани
            </label>
            <ColorSelector
              colors={colors}
              selectedColor={pillowcaseConfig.color}
              onColorSelect={(color) => setPillowcaseConfig(prev => ({ ...prev, color }))}
              className="grow shrink basis-auto"
            />
          </div>

          <div className="flex w-full items-stretch gap-[40px_100px] text-4xl flex-wrap">
            <label className="text-[rgba(19,54,92,1)] font-bold grow shrink w-[89px]">
              Размер
            </label>
            <SizeSelector
              sizes={pillowcaseSizes}
              selectedSize={pillowcaseConfig.size}
              onSizeSelect={(size) => setPillowcaseConfig(prev => ({ ...prev, size }))}
              className="max-md:max-w-full"
            />
          </div>

          <div className="flex w-full items-stretch gap-[39px] text-4xl">
            <label className="text-[rgba(19,54,92,1)] font-bold grow shrink w-[155px]">
              Количество
            </label>
            <QuantitySelector
              selectedQuantity={pillowcaseConfig.quantity}
              onQuantitySelect={(quantity) => setPillowcaseConfig(prev => ({ ...prev, quantity }))}
            />
          </div>

          <div className="flex w-[1252px] max-w-full items-stretch gap-5 text-4xl text-black font-normal whitespace-nowrap text-center flex-wrap justify-between mr-[147px] max-md:mr-2.5">
            <button 
              onClick={handleNext}
              className="flex flex-col items-center pt-0.5 pb-[33px] px-[70px] border-[rgba(219,170,80,1)] border-solid border-4 hover:bg-[rgba(219,170,80,0.1)] transition-colors max-md:max-w-full max-md:px-5"
            >
              <div>далее</div>
            </button>
            <button 
              onClick={handleCancel}
              className="flex flex-col items-center pt-0.5 pb-[38px] px-[70px] border-[rgba(219,170,80,1)] border-solid border-4 hover:bg-[rgba(219,170,80,0.1)] transition-colors max-md:max-w-full max-md:px-5"
            >
              <div>отмена</div>
            </button>
          </div>
        </div>
      </div>

      {/* Пододеяльник */}
      <div className="w-full max-w-[1495px] mx-auto">
        <div className="bg-[rgba(219,170,80,1)] flex w-full flex-col items-center text-4xl text-[rgba(19,54,92,1)] font-bold whitespace-nowrap text-center pt-[25px] pb-10 px-[70px] max-md:px-5 mb-[72px]">
          <h3>Пододеяльник</h3>
        </div>

        <div className="space-y-[72px]">
          <div className="flex w-full items-stretch gap-[40px_75px] flex-wrap">
            <label className="text-[rgba(19,54,92,1)] text-4xl font-bold grow shrink w-[137px]">
              Цвет ткани
            </label>
            <ColorSelector
              colors={colors}
              selectedColor={duvetConfig.color}
              onColorSelect={(color) => setDuvetConfig(prev => ({ ...prev, color }))}
              className="grow shrink basis-auto"
            />
          </div>

          <div className="flex w-full items-stretch gap-[40px_64px] text-4xl flex-wrap">
            <div className="flex flex-col text-[rgba(19,54,92,1)] font-bold whitespace-nowrap mt-2">
              <label>Размер</label>
              <label className="self-stretch mt-[199px] max-md:mt-10">
                Количество
              </label>
              <div className="mt-[231px] max-md:mt-10">Итого:</div>
            </div>
            <div className="text-black font-normal text-center grow shrink-0 basis-0 w-fit max-md:max-w-full">
              <div className="grid grid-cols-4 gap-5 mb-[42px] max-md:grid-cols-2">
                {duvetSizes.slice(0, 4).map((size) => (
                  <button
                    key={size}
                    className={`pt-1.5 pb-[27px] px-[70px] border-4 transition-all ${
                      duvetConfig.size === size
                        ? 'border-[rgba(19,54,92,1)] bg-[rgba(219,170,80,0.1)]'
                        : 'border-[rgba(219,170,80,1)] hover:bg-[rgba(219,170,80,0.05)]'
                    } max-md:px-5`}
                    onClick={() => setDuvetConfig(prev => ({ ...prev, size }))}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-5 mb-[72px] max-md:grid-cols-2">
                {duvetSizes.slice(4).map((size) => (
                  <button
                    key={size}
                    className={`pt-1.5 pb-[27px] px-[70px] border-4 transition-all ${
                      duvetConfig.size === size
                        ? 'border-[rgba(19,54,92,1)] bg-[rgba(219,170,80,0.1)]'
                        : 'border-[rgba(219,170,80,1)] hover:bg-[rgba(219,170,80,0.05)]'
                    } max-md:px-5`}
                    onClick={() => setDuvetConfig(prev => ({ ...prev, size }))}
                  >
                    {size}
                  </button>
                ))}
              </div>
              
              <QuantitySelector
                selectedQuantity={duvetConfig.quantity}
                onQuantitySelect={(quantity) => setDuvetConfig(prev => ({ ...prev, quantity }))}
                className="mb-[72px] justify-between"
              />

              <div className="flex items-stretch gap-5 whitespace-nowrap flex-wrap justify-between mb-[117px]">
                <button 
                  onClick={handleNext}
                  className="flex flex-col items-center pt-0.5 pb-[33px] px-[70px] border-[rgba(219,170,80,1)] border-solid border-4 hover:bg-[rgba(219,170,80,0.1)] transition-colors max-md:max-w-full max-md:px-5"
                >
                  <div>далее</div>
                </button>
                <button 
                  onClick={handleCancel}
                  className="flex flex-col items-center pt-0.5 pb-[38px] px-[70px] border-[rgba(219,170,80,1)] border-solid border-4 hover:bg-[rgba(219,170,80,0.1)] transition-colors max-md:max-w-full max-md:px-5"
                >
                  <div>отмена</div>
                </button>
              </div>
              <div className="w-[1249px] shrink-0 max-w-full h-1 border-[rgba(219,170,80,1)] border-solid border-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
