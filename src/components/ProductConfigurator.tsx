import React, { useState } from 'react';
import { ColorSelector } from './ColorSelector';
import { SizeSelector } from './SizeSelector';
import { QuantitySelector } from './QuantitySelector';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

interface ProductState {
  color: string;
  size: string;
  quantity: number;
}

type SectionType = 'sheet' | 'pillowcase' | 'duvet';

interface ProductPrices {
  sheet: { [key: string]: number };
  pillowcase: { [key: string]: number };
  duvet: { [key: string]: number };
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

  const [activeSection, setActiveSection] = useState<SectionType | null>(null);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [orderSummary, setOrderSummary] = useState<string>('');

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

  // Примерные цены для расчета
  const prices: ProductPrices = {
    sheet: {
      '180 * 230': 2500,
      '230 * 260': 3000,
      '230 * 280': 3200,
      'другое': 3500
    },
    pillowcase: {
      '50 * 70': 800,
      '70 * 70': 900,
      'другое': 1000
    },
    duvet: {
      '150 * 200': 3500,
      '150 * 210': 3600,
      '180 * 210': 3800,
      '200 * 200': 4000,
      '200 * 210': 4100,
      '200 * 220': 4200,
      '220 * 240': 4500,
      'другое': 5000
    }
  };

  const calculateTotal = () => {
    let total = 0;
    
    if (sheetConfig.size) {
      total += (prices.sheet[sheetConfig.size] || 0) * sheetConfig.quantity;
    }
    
    if (pillowcaseConfig.size) {
      total += (prices.pillowcase[pillowcaseConfig.size] || 0) * pillowcaseConfig.quantity;
    }
    
    if (duvetConfig.size) {
      total += (prices.duvet[duvetConfig.size] || 0) * duvetConfig.quantity;
    }
    
    return total;
  };

  const generateOrderSummary = () => {
    const summary = [];
    
    if (sheetConfig.color || sheetConfig.size || sheetConfig.quantity > 1) {
      summary.push(`Простыня, цвет: "${sheetConfig.color || 'не выбран'}", размер: "${sheetConfig.size || 'не выбран'}", количество: "${sheetConfig.quantity}"`);
    }
    
    if (pillowcaseConfig.color || pillowcaseConfig.size || pillowcaseConfig.quantity > 1) {
      summary.push(`Наволочки, цвет: "${pillowcaseConfig.color || 'не выбран'}", размер: "${pillowcaseConfig.size || 'не выбран'}", количество: "${pillowcaseConfig.quantity}"`);
    }
    
    if (duvetConfig.color || duvetConfig.size || duvetConfig.quantity > 1) {
      summary.push(`Пододеяльник, цвет: "${duvetConfig.color || 'не выбран'}", размер: "${duvetConfig.size || 'не выбран'}", количество: "${duvetConfig.quantity}"`);
    }
    
    return summary.join('\n');
  };

  const handleSectionToggle = (section: SectionType) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  const handleNext = (section: SectionType) => {
    const total = calculateTotal();
    const summary = generateOrderSummary();
    
    setTotalAmount(total);
    setOrderSummary(summary);

    if (section === 'sheet') {
      setActiveSection('pillowcase');
    } else if (section === 'pillowcase') {
      setActiveSection('duvet');
    } else if (section === 'duvet') {
      console.log('Конфигурация заказа:', { sheetConfig, pillowcaseConfig, duvetConfig, total, summary });
      setActiveSection(null);
    }
  };

  const handleCancel = () => {
    setSheetConfig({ color: '', size: '', quantity: 1 });
    setPillowcaseConfig({ color: '', size: '', quantity: 1 });
    setDuvetConfig({ color: '', size: '', quantity: 1 });
    setActiveSection(null);
    setTotalAmount(0);
    setOrderSummary('');
  };

  const ProductSection: React.FC<{
    type: SectionType;
    title: string;
    config: ProductState;
    setConfig: React.Dispatch<React.SetStateAction<ProductState>>;
    sizes: string[];
  }> = ({ type, title, config, setConfig, sizes }) => {
    const isOpen = activeSection === type;
    
    return (
      <div className="mb-8">
        <Collapsible open={isOpen} onOpenChange={() => handleSectionToggle(type)}>
          <CollapsibleTrigger asChild>
            <button className="bg-[rgba(219,170,80,1)] flex w-full flex-col items-center text-2xl sm:text-3xl lg:text-4xl text-[rgba(19,54,92,1)] font-bold text-center justify-center px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 hover:bg-[rgba(199,150,60,1)] transition-colors cursor-pointer">
              <h3>{title}</h3>
            </button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="pt-8">
            <div className="space-y-8">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
                <label className="text-[rgba(19,54,92,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold min-w-fit">
                  Цвет ткани
                </label>
                <div className="flex-1">
                  <ColorSelector
                    colors={colors}
                    selectedColor={config.color}
                    onColorSelect={(color) => setConfig(prev => ({ ...prev, color }))}
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
                    sizes={sizes}
                    selectedSize={config.size}
                    onSizeSelect={(size) => setConfig(prev => ({ ...prev, size }))}
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
                    selectedQuantity={config.quantity}
                    onQuantitySelect={(quantity) => setConfig(prev => ({ ...prev, quantity }))}
                    className="flex-wrap"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-8">
                <button 
                  onClick={() => handleNext(type)}
                  className="flex-1 sm:flex-initial bg-transparent border-2 border-[rgba(219,170,80,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-black font-normal px-8 sm:px-12 lg:px-16 py-2 sm:py-3 hover:bg-[rgba(219,170,80,0.1)] transition-colors"
                >
                  далее
                </button>
                <button 
                  onClick={handleCancel}
                  className="flex-1 sm:flex-initial bg-transparent border-2 border-[rgba(219,170,80,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-black font-normal px-8 sm:px-12 lg:px-16 py-2 sm:py-3 hover:bg-[rgba(219,170,80,0.1)] transition-colors"
                >
                  отмена
                </button>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  };

  return (
    <section id="collection" className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 lg:gap-12 mb-8 lg:mb-16">
          <h2 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl text-[rgba(19,54,92,1)] font-normal">
            НАША КОЛЛЕКЦИЯ
          </h2>
        </div>

        <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[rgba(19,54,92,1)] font-normal mb-8 lg:mb-16 leading-relaxed">
          Выберите идеальный комплект постельного белья, полностью
          адаптированный под ваши пожелания.
        </p>

        {/* Product Sections */}
        <ProductSection
          type="sheet"
          title="Простыня"
          config={sheetConfig}
          setConfig={setSheetConfig}
          sizes={sheetSizes}
        />

        <ProductSection
          type="pillowcase"
          title="Наволочки"
          config={pillowcaseConfig}
          setConfig={setPillowcaseConfig}
          sizes={pillowcaseSizes}
        />

        <ProductSection
          type="duvet"
          title="Пододеяльник"
          config={duvetConfig}
          setConfig={setDuvetConfig}
          sizes={duvetSizes}
        />

        {/* Final Summary Section */}
        {activeSection === null && (totalAmount > 0 || orderSummary) && (
          <div className="mt-8 pt-8 border-t-4 border-[rgba(219,170,80,1)]">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12 mb-8">
              <div className="text-[rgba(19,54,92,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold min-w-fit">
                Итого:
              </div>
              <div className="flex-1 text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[rgba(19,54,92,1)]">
                {totalAmount.toLocaleString('ru-RU')} ₽
              </div>
            </div>
            
            {orderSummary && (
              <div className="mb-8">
                <div className="text-[rgba(19,54,92,1)] text-lg sm:text-xl lg:text-2xl font-normal whitespace-pre-line bg-[rgba(219,170,80,0.1)] p-6 rounded-lg">
                  {orderSummary}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};