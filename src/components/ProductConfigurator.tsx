import React, { useState, useEffect } from 'react';
import { ColorSelector } from './ColorSelector';
import { SizeSelector } from './SizeSelector';
import { QuantitySelector } from './QuantitySelector';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { useIsMobile } from "@/hooks/use-mobile";
import { FabricSliderGallery } from "./FabricSlider";
import { FeatureSelector } from './FeatureSelector';
import { Button } from 'react-day-picker';
import { AddressInput } from './AddressInput';
import { PaymentForm } from './PaymentForm';
import vector1 from '@/lib/img/Vector 1.png';


interface ProductState {
  color: string;
  size: string;
  quantity: number;
  feature?: string; 
}


type SectionType = 'sheet' | 'pillowcase' | 'duvet';


interface ConfigData {
  fabrics: Array<{ color: string; img: string }>;
  sheetSizesWithFeature: { [key: string]: string[] };
  sheetPricesWithFeature: { [key: string]: { [key: string]: number } };
  pillowcaseSizesWithFeature: { [key: string]: string[] };
  pillowcasePricesWithFeature: { [key: string]: { [key: string]: number } };
  duvetSizesWithFeature: { [key: string]: string[] };
  duvetPricesWithFeature: { [key: string]: { [key: string]: number } };
}


export const ProductConfigurator: React.FC = () => {
  // Состояние для данных с API
  const [configData, setConfigData] = useState<ConfigData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Загружаем данные с MODX API при монтировании компонента
  useEffect(() => {
    const fetchConfig = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://xn--80ativ2d.xn--p1ai/modx/index.php?id=6');
        
        if (!response.ok) {
          throw new Error(`Ошибка загрузки конфига: ${response.status}`);
        }
        
        const data: ConfigData = await response.json();
        setConfigData(data);
        setError(null);
      } catch (err) {
        console.error('Ошибка загрузки конфигурации:', err);
        setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  // Получаем данные из состояния или используем пустые значения при загрузке
  const fabrics = configData?.fabrics || [];
  const sheetSizesWithFeature = configData?.sheetSizesWithFeature || {};
  const sheetPricesWithFeature = configData?.sheetPricesWithFeature || {};
  const pillowcaseSizesWithFeature = configData?.pillowcaseSizesWithFeature || {};
  const pillowcasePricesWithFeature = configData?.pillowcasePricesWithFeature || {};
  const duvetSizesWithFeature = configData?.duvetSizesWithFeature || {};
  const duvetPricesWithFeature = configData?.duvetPricesWithFeature || {};

  const defaultColor = fabrics[0]?.color || '';

  const [sheetConfig, setSheetConfig] = useState<ProductState>({
    color: defaultColor,
    size: '',
    quantity: 1,
    feature: 'без резинки'
  });

  const [pillowcaseConfig, setPillowcaseConfig] = useState<ProductState>({
    color: defaultColor,
    size: '',
    quantity: 1,
    feature: 'без молнии'
  });

  const [duvetConfig, setDuvetConfig] = useState<ProductState>({
    color: defaultColor,
    size: '',
    quantity: 1,
    feature: 'без молнии'
  });

  // Обновляем default sizes когда данные загружены
  useEffect(() => {
    if (configData) {
      const defaultSheetSize = sheetSizesWithFeature['без резинки']?.[0] || '';
      const defaultPillowcaseSize = pillowcaseSizesWithFeature['без молнии']?.[0] || '';
      const defaultDuvetSize = duvetSizesWithFeature['без молнии']?.[0] || '';

      setSheetConfig(prev => ({
        ...prev,
        color: defaultColor,
        size: defaultSheetSize
      }));

      setPillowcaseConfig(prev => ({
        ...prev,
        color: defaultColor,
        size: defaultPillowcaseSize
      }));

      setDuvetConfig(prev => ({
        ...prev,
        color: defaultColor,
        size: defaultDuvetSize
      }));
    }
  }, [configData]);
  const isMobile = useIsMobile();

  const [activeSection, setActiveSection] = useState<SectionType | null>(null);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [orderSummary, setOrderSummary] = useState<string>('');
  const [validationError, setValidationError] = useState<string>('');

  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [formErrors, setFormErrors] = useState({ phone: '', email: '' });
  const [showPaymentFields, setShowPaymentFields] = useState(false);

  const [address, setAddress] = useState('');
  const [addressValid, setAddressValid] = useState(false);

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

    if (!address) {
      valid = false;
      alert("Введите адрес доставки");
    } else if (!addressValid) {
      valid = false;
      alert("Проверьте корректность адреса");
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
  return filename.replace('.webp', '');
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
          <h2 className="text-[2.8rem] sm:text-6xl lg:text-8xl xl:text-9xl text-[rgba(19,54,92,1)] font-normal">
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

        {activeSection === null && (totalAmount > 0 || orderSummary) && (
          <>
          <div className=" whitespace-nowrap">
            <div className="flex flex-row lg:flex-row lg:items-start gap-6 lg:gap-12 mb-4">
              <div className="text-[rgba(19,54,92,1)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold min-w-fit">
                Итого:
              </div>
              <div className="flex-1 text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[rgba(19,54,92,1)]">
                {totalAmount.toLocaleString('ru-RU')} ₽
              </div>
            </div>

            <div className="mb-4 text-xl sm:text-2xl ">
              <input
                type="tel"
                placeholder="+71234567890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 mb-2 rounded border-[rgba(219,170,80,1)] border-2"
                required
              />
              {formErrors.phone && <div className="text-red-600">{formErrors.phone}</div>}

              <br />

              <input
                type="email"
                placeholder="mail@mail.ru"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mb-2 border-[rgba(219,170,80,1)] border-2 rounded"
                required
              />
              {formErrors.email && <div className="text-red-600">{formErrors.email}</div>}

              <br />

              <input
                type="text"
                placeholder="город Ангарск, переулок Грибной, дом 10"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-3 mb-2 border-[rgba(219,170,80,1)] border-2 rounded"
                required
              />
              {!address && (
                <div className="text-red-600">Пожалуйста, введите адрес</div>
              )}

            </div>
              {/* Кнопка показать оплату */}
              <button
                onClick={() => {
                  handleShowPaymentFields();
                  if (validatePhone(phone) && validateEmail(email)) {
                    setShowPaymentFields(true);
                  } else {
                    setShowPaymentFields(false);
                  }
                }}
                className="mt-4 w-full bg-[rgba(219,170,80,1)] text-white text-2xl py-3 rounded hover:bg-[rgba(199,150,60,1)] transition-all"
              >
                Перейти к оплате
              </button>
            </div>


            {/* Оплата отображается только при валидных полях */}
            {showPaymentFields && (
              <div className="mt-10">
                <PaymentForm 
                amount={totalAmount} 
                description={`${orderSummary}\nТелефон: ${phone}\nEmail: ${email}\nАдрес: ${address}`}
                />
              </div>
            )}
          
          </>
        )}
        </div>
    </section>
  );
};
