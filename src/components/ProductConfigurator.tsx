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
    <section id="collection" className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 lg:gap-12 mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl text-[rgba(19,54,92,1)] font-normal">
            НАША КОЛЛЕКЦИЯ
          </h2>
          <img
            src="https://api.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/0125581669a0d20229ca1d1058a827be9f9af864?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-20 sm:w-24 lg:w-28 xl:w-[106px] shrink-0"
            alt="Декоративный элемент"
          />
        </div>

        <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[rgba(19,54,92,1)] font-normal mb-16 lg:mb-24 leading-relaxed">
          Выберите идеальный комплект постельного белья, полностью
          адаптированный под ваши пожелания.
        </p>

        {/* Простыня */}
        <div className="mb-16 lg:mb-24">
          <div className="bg-[rgba(219,170,80,1)] flex w-full flex-col items-center text-2xl sm:text-3xl lg:text-4xl text-[rgba(19,54,92,1)] font-bold text-center justify-center px-6 sm:px-8 lg:px-12 py-6 sm:py-8 mb-12 lg:mb-16">
            <h3>Простыня</h3>
          </div>

          <div className="space-y-12 lg:space-y-16">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
              <label className="text-[rgba(19,54,92,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold min-w-fit">
                Цвет ткани
              </label>
              <div className="flex-1">
                <ColorSelector
                  colors={colors}
                  selectedColor={sheetConfig.color}
                  onColorSelect={(color) => setSheetConfig(prev => ({ ...prev, color }))}
                  className="flex-wrap"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
              <label className="text-[rgba(19,54,92,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold min-w-fit">
                Размер
              </label>
              <div className="flex-1">
                <SizeSelector
                  sizes={sheetSizes}
                  selectedSize={sheetConfig.size}
                  onSizeSelect={(size) => setSheetConfig(prev => ({ ...prev, size }))}
                  className="flex-wrap"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
              <label className="text-[rgba(19,54,92,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold min-w-fit">
                Количество
              </label>
              <div className="flex-1">
                <QuantitySelector
                  selectedQuantity={sheetConfig.quantity}
                  onQuantitySelect={(quantity) => setSheetConfig(prev => ({ ...prev, quantity }))}
                  className="flex-wrap"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-8">
              <button 
                onClick={handleNext}
                className="flex-1 sm:flex-initial bg-transparent border-4 border-[rgba(219,170,80,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-black font-normal px-8 sm:px-12 lg:px-16 py-4 sm:py-6 hover:bg-[rgba(219,170,80,0.1)] transition-colors"
              >
                далее
              </button>
              <button 
                onClick={handleCancel}
                className="flex-1 sm:flex-initial bg-transparent border-4 border-[rgba(219,170,80,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-black font-normal px-8 sm:px-12 lg:px-16 py-4 sm:py-6 hover:bg-[rgba(219,170,80,0.1)] transition-colors"
              >
                отмена
              </button>
            </div>
          </div>
        </div>

        {/* Наволочки */}
        <div className="mb-16 lg:mb-24">
          <div className="bg-[rgba(219,170,80,1)] flex w-full flex-col items-center text-2xl sm:text-3xl lg:text-4xl text-[rgba(19,54,92,1)] font-bold text-center justify-center px-6 sm:px-8 lg:px-12 py-6 sm:py-8 mb-12 lg:mb-16">
            <h3>Наволочки</h3>
          </div>

          <div className="space-y-12 lg:space-y-16">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
              <label className="text-[rgba(19,54,92,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold min-w-fit">
                Цвет ткани
              </label>
              <div className="flex-1">
                <ColorSelector
                  colors={colors}
                  selectedColor={pillowcaseConfig.color}
                  onColorSelect={(color) => setPillowcaseConfig(prev => ({ ...prev, color }))}
                  className="flex-wrap"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
              <label className="text-[rgba(19,54,92,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold min-w-fit">
                Размер
              </label>
              <div className="flex-1">
                <SizeSelector
                  sizes={pillowcaseSizes}
                  selectedSize={pillowcaseConfig.size}
                  onSizeSelect={(size) => setPillowcaseConfig(prev => ({ ...prev, size }))}
                  className="flex-wrap"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
              <label className="text-[rgba(19,54,92,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold min-w-fit">
                Количество
              </label>
              <div className="flex-1">
                <QuantitySelector
                  selectedQuantity={pillowcaseConfig.quantity}
                  onQuantitySelect={(quantity) => setPillowcaseConfig(prev => ({ ...prev, quantity }))}
                  className="flex-wrap"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-8">
              <button 
                onClick={handleNext}
                className="flex-1 sm:flex-initial bg-transparent border-4 border-[rgba(219,170,80,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-black font-normal px-8 sm:px-12 lg:px-16 py-4 sm:py-6 hover:bg-[rgba(219,170,80,0.1)] transition-colors"
              >
                далее
              </button>
              <button 
                onClick={handleCancel}
                className="flex-1 sm:flex-initial bg-transparent border-4 border-[rgba(219,170,80,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-black font-normal px-8 sm:px-12 lg:px-16 py-4 sm:py-6 hover:bg-[rgba(219,170,80,0.1)] transition-colors"
              >
                отмена
              </button>
            </div>
          </div>
        </div>

        {/* Пододеяльник */}
        <div>
          <div className="bg-[rgba(219,170,80,1)] flex w-full flex-col items-center text-2xl sm:text-3xl lg:text-4xl text-[rgba(19,54,92,1)] font-bold text-center justify-center px-6 sm:px-8 lg:px-12 py-6 sm:py-8 mb-12 lg:mb-16">
            <h3>Пододеяльник</h3>
          </div>

          <div className="space-y-12 lg:space-y-16">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
              <label className="text-[rgba(19,54,92,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold min-w-fit">
                Цвет ткани
              </label>
              <div className="flex-1">
                <ColorSelector
                  colors={colors}
                  selectedColor={duvetConfig.color}
                  onColorSelect={(color) => setDuvetConfig(prev => ({ ...prev, color }))}
                  className="flex-wrap"
                />
              </div>
            </div>

            <div className="space-y-12 lg:space-y-16">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
                <label className="text-[rgba(19,54,92,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold min-w-fit">
                  Размер
                </label>
                <div className="flex-1">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                    {duvetSizes.slice(0, 4).map((size) => (
                      <button
                        key={size}
                        className={`text-base sm:text-lg lg:text-xl xl:text-2xl text-black font-normal text-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 border-4 transition-all ${
                          duvetConfig.size === size
                            ? 'border-[rgba(19,54,92,1)] bg-[rgba(219,170,80,0.1)]'
                            : 'border-[rgba(219,170,80,1)] hover:bg-[rgba(219,170,80,0.05)]'
                        }`}
                        onClick={() => setDuvetConfig(prev => ({ ...prev, size }))}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {duvetSizes.slice(4).map((size) => (
                      <button
                        key={size}
                        className={`text-base sm:text-lg lg:text-xl xl:text-2xl text-black font-normal text-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 border-4 transition-all ${
                          duvetConfig.size === size
                            ? 'border-[rgba(19,54,92,1)] bg-[rgba(219,170,80,0.1)]'
                            : 'border-[rgba(219,170,80,1)] hover:bg-[rgba(219,170,80,0.05)]'
                        }`}
                        onClick={() => setDuvetConfig(prev => ({ ...prev, size }))}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
                <label className="text-[rgba(19,54,92,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold min-w-fit">
                  Количество
                </label>
                <div className="flex-1">
                  <QuantitySelector
                    selectedQuantity={duvetConfig.quantity}
                    onQuantitySelect={(quantity) => setDuvetConfig(prev => ({ ...prev, quantity }))}
                    className="flex-wrap"
                  />
                </div>
              </div>

              <div className="pt-8 border-t-4 border-[rgba(219,170,80,1)]">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 mb-8">
                  <div className="text-[rgba(19,54,92,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold">
                    Итого:
                  </div>
                  <div className="flex-1 text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[rgba(19,54,92,1)]">
                    {/* Placeholder for total calculation */}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <button 
                    onClick={handleNext}
                    className="flex-1 sm:flex-initial bg-transparent border-4 border-[rgba(219,170,80,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-black font-normal px-8 sm:px-12 lg:px-16 py-4 sm:py-6 hover:bg-[rgba(219,170,80,0.1)] transition-colors"
                  >
                    далее
                  </button>
                  <button 
                    onClick={handleCancel}
                    className="flex-1 sm:flex-initial bg-transparent border-4 border-[rgba(219,170,80,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-black font-normal px-8 sm:px-12 lg:px-16 py-4 sm:py-6 hover:bg-[rgba(219,170,80,0.1)] transition-colors"
                  >
                    отмена
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
