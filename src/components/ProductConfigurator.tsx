import React, { useState, useEffect } from 'react';
import { ColorSelector } from './ColorSelector';
import { SizeSelector } from './SizeSelector';
import { QuantitySelector } from './QuantitySelector';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { useIsMobile } from "@/hooks/use-mobile";
import { FabricSliderGallery } from "./FabricSlider";
import { FeatureSelector } from './FeatureSelector';
import { Button } from 'react-day-picker';

import { PaymentForm } from './PaymentForm';

interface ProductState {
  color: string;
  size: string;
  quantity: number;
  feature?: string; 
}

type SectionType = 'sheet' | 'pillowcase' | 'duvet';

interface ProductPrices {
  sheet: { [key: string]: number };
  pillowcase: { [key: string]: number };
  duvet: { [key: string]: number };
}

export const ProductConfigurator: React.FC = () => {
  // Размеры и цены с учётом feature (варианта исполнения)

  const sheetSizesWithFeature: { [key: string]: string[] } = {
    'без резинки': ['180 * 230', '230 * 260', '230 * 280', 'другое'],
    'на резинке': ['140 * 200 * 30', '160 * 200 * 30', '180 * 200 * 30', 'другое'],
  };

  const sheetPricesWithFeature: { [key: string]: { [key: string]: number } } = {
    'без резинки': {
      '180 * 230': 3800,
      '230 * 260': 4000,
      '230 * 280': 4200,
      'другое': 4200,
    },
    'на резинке': {
      '140 * 200 * 30': 4800,
      '160 * 200 * 30': 4000,
      '180 * 200 * 30': 4200,
      'другое': 5200,
    }
  };

  const pillowcaseSizesWithFeature: { [key: string]: string[] } = {
    'без молнии': ['50 * 70', '70 * 70', 'другое'],
    'на молнии': ['50 * 70', '70 * 70', 'другое'],
  };

  const pillowcasePricesWithFeature: { [key: string]: { [key: string]: number } } = {
    'без молнии': {
      '50 * 70': 1150,
      '70 * 70': 1250,
      'другое': 1250,
    },
    'на молнии': {
      '50 * 70': 1450,
      '70 * 70': 1550,
      'другое': 1550,
    }
  };

  const duvetSizesWithFeature: { [key: string]: string[] } = {
    'без молнии': ['150 * 200', '160 * 210', '175 * 205', '180 * 210', '200 * 200', 'другое'],
    'на молнии': ['150 * 200', '160 * 210', '175 * 205', '180 * 210', '200 * 200', 'другое'],
  };

  const duvetPricesWithFeature: { [key: string]: { [key: string]: number } } = {
    'без молнии': {
      '150 * 200': 5300,
      '160 * 210': 5500,
      '175 * 205': 5500,
      '180 * 210': 5700,
      '200 * 200': 6000,
      'другое' : 6000
    },
    'на молнии': {
      '150 * 200': 6300,
      '160 * 210': 6500,
      '175 * 205': 6500,
      '180 * 210': 6700,
      '200 * 200': 7000,
      'другое' : 7000
    }
  };

  const colors = [
    'rgba(61,141,129,1)', 'rgba(203,188,185,1)', 'rgba(207,212,200,1)', 'rgba(255,251,234,1)',
    'rgba(188,200,208,1)', 'rgba(244,232,215,1)', 'rgba(143,153,168,1)', 'rgba(224,202,202,1)',
    'rgba(206,206,206,1)', 'rgba(214,205,188,1)', 'rgba(227,157,140,1)', 'rgba(186,188,189,1)',
    'rgba(219,204,204,1)', 'rgba(255,227,239,1)', 'rgba(223,248,244,1)', 'rgba(219,228,236,1)',
    'rgba(158,175,203,1)', 'rgba(121,96,86,1)', 'rgba(200,186,167,1)', 'rgba(206,212,178,1)',
    '', '', ''
  ];

  const fabrics = [
    { color: 'rgba(61,141,129,1)',  img: '/img/fabrics/emerald.png' },
    { color: 'rgba(203,188,185,1)', img: '/img/fabrics/lavanda.png' },
    { color: 'rgba(207,212,200,1)', img:'/img/fabrics/mint.png'},
    { color: 'rgba(255,251,234,1)', img:'/img/fabrics/cream.png'},
    { color: 'rgba(188,200,208,1)', img:'/img/fabrics/water.png'},
    { color: 'rgba(244,232,215,1)', img:'/img/fabrics/sand.png'},
    { color: 'rgba(143,153,168,1)', img:'/img/fabrics/indigo.png'},
    { color: 'rgba(224,202,202,1)', img:'/img/fabrics/pouder.png'},
    { color: 'rgba(206,206,206,1)', img:'/img/fabrics/plaplina.png'},
    { color: 'rgba(214,205,188,1)', img:'/img/fabrics/milk_chocolate.png'},
    { color: 'rgba(227,157,140,1)', img:'/img/fabrics/terracota.png'},
    { color: 'rgba(186,188,189,1)', img:'/img/fabrics/dark-grey.png'},
    { color: 'rgba(219,204,204,1)', img:'/img/fabrics/dust-sliva.png'},
    { color: 'rgba(255,227,239,1)', img:'/img/fabrics/pink.png'},
    { color: 'rgba(223,248,244,1)', img:'/img/fabrics/mentol.png'},
    { color: 'rgba(219,228,236,1)', img:'/img/fabrics/white-blue.png'},
    { color: 'rgba(158,175,203,1)', img:'/img/fabrics/blue.png'},
    { color: 'rgba(121,96,86,1)',  img:'/img/fabrics/chocolate.png'},
    { color: 'rgba(241,241,241,1)', img:'/img/fabrics/white.png'},
    { color: 'rgba(200,186,167,1)', img:'/img/fabrics/mokko.png'},
    { color: 'rgba(145,137,129,1)', img:'/img/fabrics/black_diamond.png'},
    { color: 'rgba(206,212,178,1)', img:'/img/fabrics/lime.png'},
    { color: 'rgba(190,222,209,1)', img:'/img/fabrics/evkalipt.png'},
  ];
  const defaultColor = fabrics[0]?.color || colors[0] || ''; // если вдруг fabrics нет

  const [sheetConfig, setSheetConfig] = useState<ProductState>({
    color: defaultColor,
    size: '180 * 230',
    quantity: 1,
    feature: 'без резинки'
  });

  const [pillowcaseConfig, setPillowcaseConfig] = useState<ProductState>({
    color: defaultColor,
    size: '50 * 70',
    quantity: 1,
    feature: 'без молнии'
  });

  const [duvetConfig, setDuvetConfig] = useState<ProductState>({
    color: defaultColor,
    size: '150 * 200',
    quantity: 1,
    feature: 'без молнии'
  });

  const [activeSection, setActiveSection] = useState<SectionType | null>(null);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [orderSummary, setOrderSummary] = useState<string>('');
  const [validationError, setValidationError] = useState<string>('');

  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [formErrors, setFormErrors] = useState({ phone: '', email: '' });
  const [showPaymentFields, setShowPaymentFields] = useState(false);

  const calculateTotal = () => {
    let total = 0;

    if (sheetConfig.size && sheetConfig.feature) {
      const price = sheetPricesWithFeature[sheetConfig.feature]?.[sheetConfig.size] || 0;
      total += price * sheetConfig.quantity;
    }

    if (pillowcaseConfig.size && pillowcaseConfig.feature) {
      const price = pillowcasePricesWithFeature[pillowcaseConfig.feature]?.[pillowcaseConfig.size] || 0;
      total += price * pillowcaseConfig.quantity;
    }

    if (duvetConfig.size && duvetConfig.feature) {
      const price = duvetPricesWithFeature[duvetConfig.feature]?.[duvetConfig.size] || 0;
      total += price * duvetConfig.quantity;
    }

    return total;
  };

  const generateOrderSummary = () => {
    const summary = [];

    if (sheetConfig.color || sheetConfig.size || sheetConfig.quantity > 1) {
      summary.push(`Простыня, ц: "${sheetConfig.color || 'не выбран'}", вид: "${sheetConfig.feature || 'не выбран'}", р: "${sheetConfig.size || 'не выбран'}", колво: "${sheetConfig.quantity}"`);
    }

    if (pillowcaseConfig.color || pillowcaseConfig.size || pillowcaseConfig.quantity > 1) {
      summary.push(`Наволочки, ц: "${pillowcaseConfig.color || 'не выбран'}", вид: "${pillowcaseConfig.feature || 'не выбран'}", р: "${pillowcaseConfig.size || 'не выбран'}", колво: "${pillowcaseConfig.quantity}"`);
    }

    if (duvetConfig.color || duvetConfig.size || duvetConfig.quantity > 1) {
      summary.push(`Пододеяльник, ц: "${duvetConfig.color || 'не выбран'}", вид: "${duvetConfig.feature || 'не выбран'}", р: "${duvetConfig.size || 'не выбран'}", колво: "${duvetConfig.quantity}"`);
    }

    return summary.join('\n');
  };

  const generateOrderSummaryCompact = () => {
    const parts: string[] = [];

    if (sheetConfig.size && sheetConfig.feature) {
      parts.push(`Простыня ${mapFeatureToCode(sheetConfig.feature, 'sheet')}, размер: ${cleanSize(sheetConfig.size)}, цвет: ${mapColorToName(sheetConfig.color)}, кол-во: ${sheetConfig.quantity}`);
    }
    if (pillowcaseConfig.size && pillowcaseConfig.feature) {
      parts.push(`Наволочка ${mapFeatureToCode(pillowcaseConfig.feature, 'pillowcase')}, размер: ${cleanSize(pillowcaseConfig.size)}, цвет: ${mapColorToName(pillowcaseConfig.color)}, кол-во: ${pillowcaseConfig.quantity}`);
    }
    if (duvetConfig.size && duvetConfig.feature) {
      parts.push(`Пододеяльник ${mapFeatureToCode(duvetConfig.feature, 'duvet')}, размер: ${cleanSize(duvetConfig.size)}, цвет: ${mapColorToName(duvetConfig.color)}, кол-во: ${duvetConfig.quantity}`);
    }

    return parts.join('\n');
  };

  const handleSectionToggle = (section: SectionType) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  const validateSection = (section: SectionType) => {
    let config: ProductState;
    let sectionName: string;

    switch (section) {
      case 'sheet':
        config = sheetConfig;
        sectionName = 'Простыня';
        break;
      case 'pillowcase':
        config = pillowcaseConfig;
        sectionName = 'Наволочки';
        break;
      case 'duvet':
        config = duvetConfig;
        sectionName = 'Пододеяльник';
        break;
    }

    if (!config.color) {
      return `${sectionName}: Выберите цвет ткани`;
    }
    if (!config.size) {
      return `${sectionName}: Выберите размер`;
    }
    return null;
  };

  const handleNext = (section: SectionType) => {
    const error = validateSection(section);
    if (error) {
      setValidationError(error);
      setTimeout(() => setValidationError(''), 3000);
      return;
    }

    setValidationError('');
    const total = calculateTotal();
    const summary = generateOrderSummaryCompact();


    setTotalAmount(total);
    setOrderSummary(summary);

    if (section === 'sheet') {
      setActiveSection('pillowcase');
    } else if (section === 'pillowcase') {
      setActiveSection('duvet');
    } else if (section === 'duvet') {
      const element = document.getElementById('order-summary');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      console.log('Конфигурация заказа:', { sheetConfig, pillowcaseConfig, duvetConfig, total, summary });
      setActiveSection(null);
    }
    

  };

  const handleCancel = () => {
    setSheetConfig({ color: '', size: '', quantity: 1, feature: 'без резинки' });
    setPillowcaseConfig({ color: '', size: '', quantity: 1, feature: 'без молнии' });
    setDuvetConfig({ color: '', size: '', quantity: 1, feature: 'без молнии' });
    setActiveSection(null);
    setTotalAmount(0);
    setOrderSummary('');
    setValidationError('');
  };

  const cleanPhone = phone => phone.replace(/[^0-9+]/g, '');
const cleanEmail = email => email.trim();

const validatePhone = (phone) => {
  const cleaned = cleanPhone(phone);
  const phonePattern = /^\+7\d{10}$/;
  return phonePattern.test(cleaned);
};

const validateEmail = (email) => {
  const cleaned = cleanEmail(email);
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(cleaned);
};


  // Используйте handlePayment внутри handleShowPaymentFields, чтобы после валидации запускать оплату
  const handleShowPaymentFields = () => {
    // Ваша валидация телефона и email
    // Если валидно, вызвать handlePayment
    let valid = true;
    const errors = { phone: '', email: '' };

    if (!phone) {
      errors.phone = 'Пожалуйста, введите номер телефона';
      valid = false;
    } else if (!validatePhone(phone)) {
      errors.phone = 'Неверный формат телефона. Используйте +7xxxxxxxxxx';
      valid = false;
    }

    if (!email) {
      errors.email = 'Пожалуйста, введите email';
      valid = false;
    } else if (!validateEmail(email)) {
      errors.email = 'Неверный формат email';
      valid = false;
    }

    setFormErrors(errors);
  };

  const mapFeatureToCode = (feature: string | undefined, type: SectionType): string => {
  if (type === 'pillowcase') {
    return feature === 'на молнии' ? '1' : '0';
  }
  if (type === 'sheet') {
    return feature === 'на резинке' ? '1' : '0';
  }
  if (type === 'duvet') {
    return feature === 'на молнии' ? '1' : '0';
  }
  return '0';
};

const mapColorToName = (color: string): string => {
  const fabric = fabrics.find(f => f.color === color);
  if (!fabric) return 'unknown';
  // Извлечь имя файла без расширения
  const parts = fabric.img.split('/');
  const filename = parts[parts.length - 1];
  return filename.replace('.png', '');
};

const cleanSize = (size: string): string => size.replace(/\s/g, '').replace(/\*/g, 'x');

  
  // Внутри ProductSection получаем набор размеров в зависимости от типа и выбранной опции
  const ProductSection: React.FC<{
    type: SectionType;
    title: string;
    config: ProductState;
    setConfig: React.Dispatch<React.SetStateAction<ProductState>>;
  }> = ({ type, title, config, setConfig }) => {
    const isOpen = activeSection === type;
    const isMobile = useIsMobile();

    // Динамические размеры в зависимости от feature
    let sizesForSection: string[] = [];
    if (type === 'sheet') {
      sizesForSection = sheetSizesWithFeature[config.feature || 'без резинки'] || [];
    } else if (type === 'pillowcase') {
      sizesForSection = pillowcaseSizesWithFeature[config.feature || 'без молнии'] || [];
    } else if (type === 'duvet') {
      sizesForSection = duvetSizesWithFeature[config.feature || 'без молнии'] || [];
    }

    return (
      <div className="mb-4 lg:mb-10">
        <Collapsible open={isOpen} onOpenChange={() => handleSectionToggle(type)}>
          <CollapsibleTrigger asChild>
            <button className="bg-[rgba(219,170,80,1)] flex w-full flex-col items-center text-2xl sm:text-3xl lg:text-4xl text-[rgba(19,54,92,1)] font-bold text-center justify-center px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 hover:bg-[rgba(199,150,60,1)] transition-all duration-300 cursor-pointer transform hover:scale-[1.02] data-[state=open]:bg-[rgba(199,150,60,1)]">
              <h3>{title}</h3>
            </button>
          </CollapsibleTrigger>

          <CollapsibleContent className="overflow-hidden transition-all duration-300 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="pt-8 animate-fade-in">
              <div className={isMobile ? "grid gap-4 lg:gap-10" : "grid gap-4 lg:gap-10"} style={{ gridTemplateColumns: isMobile ? "" : '180px auto' }}>
                <label className="text-[rgba(19,54,92,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold">Цвет ткани</label>
                <div className="w-full">
                  <ColorSelector
                    colors={fabrics.map(f => f.color)}
                    selectedColor={config.color}
                    onColorSelect={color => setConfig(prev => ({ ...prev, color }))}
                    className="justify-start"
                  />
                </div>

                {config.color ? (<label></label>) : null}
                {config.color ? (
                  <div style={{ height: isMobile ? 300 : 400, width: '100%' }} className="w-full">
                    <FabricSliderGallery
                      fabrics={fabrics}
                      selectedColor={config.color}
                      onColorSelect={color => setConfig(prev => ({ ...prev, color }))}
                    />
                  </div>) : null}

                <label className="text-[rgba(19,54,92,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mt-4">Вид</label>
                <FeatureSelector
                  options={type === 'sheet' ? ['без резинки', 'на резинке'] : ['без молнии', 'на молнии']}
                  selectedOption={config.feature}
                  onOptionSelect={(option) => {
                    setConfig(prev => {
                      let validSizes: string[] = [];
                      if (type === 'sheet') validSizes = sheetSizesWithFeature[option] || [];
                      else if (type === 'pillowcase') validSizes = pillowcaseSizesWithFeature[option] || [];
                      else if (type === 'duvet') validSizes = duvetSizesWithFeature[option] || [];

                      return {
                        ...prev,
                        feature: option,
                        size: validSizes.includes(prev.size) ? prev.size : '',
                      };
                    });
                  }}
                />

                <label className="text-[rgba(19,54,92,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mt-4">Размер</label>
                <div className="w-full">
                  <SizeSelector
                    sizes={sizesForSection}
                    selectedSize={config.size}
                    onSizeSelect={(size) => setConfig(prev => ({ ...prev, size }))}
                    className="justify-start"
                  />
                </div>

                <label className="text-[rgba(19,54,92,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mt-4">Количество</label>
                <div className="w-full">
                  <QuantitySelector
                    selectedQuantity={config.quantity}
                    onQuantitySelect={(quantity) => setConfig(prev => ({ ...prev, quantity }))}
                    className="justify-start"
                  />
                </div>

                <div></div>
                <div className="w-full flex gap-4 mt-6">
                  <button
                    onClick={() => handleNext(type)}
                    className="flex-1 bg-transparent border-2 border-[rgba(219,170,80,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-black font-normal py-0 sm:py-[0.75rem] hover:bg-[rgba(219,170,80,0.1)] transition-all duration-300 transform"
                  >
                    далее
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex-1 bg-transparent border-2 border-[rgba(219,170,80,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-black font-normal py-0 sm:py-[0.75rem] hover:bg-[rgba(219,170,80,0.1)] transition-all duration-300 transform"
                  >
                    отмена
                  </button>
                </div>
              </div>

            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  };


  return (
    <section id="collection" className="w-full px-10 lg:px-[10rem] py-4 lg:py-10">
      <div className="max-w-7xl">
        {/* Title Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 lg:gap-12 mb-4 lg:mb-10">
          <h2 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl text-[rgba(19,54,92,1)] font-normal">
            НАША КОЛЛЕКЦИЯ
          </h2>
        </div>

        <p className="text-[1.1rem] sm:text-2xl lg:text-3xl xl:text-4xl text-[rgba(19,54,92,1)] font-normal mb-4 lg:mb-10 leading-relaxed" id="order-summary">
          Выберите идеальный комплект постельного белья, полностью
          адаптированный под ваши пожелания.
        </p>

        {/* Validation Error */}
        {validationError && (
          <div className="mb-4 p-4 bg-red-50 border-2 border-red-200 rounded-lg animate-fade-in" >
            <p className="text-red-600 text-lg sm:text-xl lg:text-2xl font-medium text-center">
              {validationError}
            </p>
          </div>
        )}

        {/* Product Sections */}
        <ProductSection
          type="sheet"
          title="Простыня"
          config={sheetConfig}
          setConfig={setSheetConfig}
        />

        <ProductSection
          type="pillowcase"
          title="Наволочки"
          config={pillowcaseConfig}
          setConfig={setPillowcaseConfig}
          
        />

        <ProductSection
          type="duvet"
          title="Пододеяльник"
          config={duvetConfig}
          setConfig={setDuvetConfig}
        />

        {/* Final Summary Section */}
        {activeSection === null && (totalAmount > 0 || orderSummary) && (
          <div  className="border-b-4 border-[rgba(219,170,80,1)] whitespace-nowrap ">
            <div className="flex flex-row lg:flex-row lg:items-start gap-6 lg:gap-12 mb-4 ">
              <div className="text-[rgba(19,54,92,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold min-w-fit ">
                Итого:
              </div>
              <div className="flex-1 text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[rgba(19,54,92,1)]">
                {totalAmount.toLocaleString('ru-RU')} ₽
              </div>
            </div>
            <div className="mb-4 text-xl sm:text-2xl ">
              <input
                type="telephone"
                placeholder="+71234567890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 mb-2 rounded border-[rgba(219,170,80,1)] border-2"
                required
              />
              {formErrors.phone && <div className="text-red-600">{formErrors.phone}</div>}
              <br/>
              <input
                type="email"
                placeholder="mail@mail.ru"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mb-2 border-[rgba(219,170,80,1)] border-2 rounded"
                required
              />
              {formErrors.email && <div className="text-red-600">{formErrors.email}</div>}
            </div>
          </div>
        )}

      {/* Кнопка оплаты появляется только после заполнения обязательных полей */}
      {activeSection === null && (totalAmount > 0 || orderSummary) && (
        <PaymentForm amount={totalAmount} description={orderSummary}/>
      )}
      </div>
    </section>
  );
};
