import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    PaymentIntegration: any;
  }
}

const PAYMENT_SCRIPT_URL = 'https://integrationjs.tbank.ru/integration.js';
const TERMINAL_KEY = '1759418551647DEMO';
const BACKEND_URL = 'https://83-166-247-114.regru.cloud';

async function generateTokenFront(params, secret) {
  // Исключаем вложенные объекты и поле Token
  const keys = Object.keys(params).filter(k => k !== 'Token' && typeof params[k] !== 'object').sort();

  let str = '';
  for (const key of keys) {
    const val = params[key];
    if (val !== undefined && val !== null && val !== '') {
      str += val.toString();
    }
  }
  str += secret;

  // Кодируем строку в Uint8Array
  const encoder = new TextEncoder();
  const data = encoder.encode(str);

  // Вычисляем хеш
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  // Преобразуем ArrayBuffer в hex строку
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}


export const PaymentForm: React.FC<{ amount: number; description: string }> = ({ amount, description }) => {
  const [integration, setIntegration] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (integration) return;

    setLoading(true);
    const script = document.createElement('script');
    script.src = PAYMENT_SCRIPT_URL;
    script.async = true;
    script.onload = async () => {
      if (window.PaymentIntegration) {
        try {
          const loadedIntegration = await window.PaymentIntegration.init({
            terminalKey: TERMINAL_KEY,
            product: 'eacq',
            features: { iframe: {} },
          });
          setIntegration(loadedIntegration);
        } catch (e) {
          console.error('Ошибка инициализации PaymentIntegration', e);
          alert('Ошибка инициализации платежного модуля');
        }
      } else {
        alert('Скрипт PaymentIntegration не загрузился');
      }
      setLoading(false);
    };
    script.onerror = () => {
      alert('Не удалось загрузить скрипт платежного модуля');
      setLoading(false);
    };
    document.body.appendChild(script);
  }, [integration]);

  const startPayment = async () => {
    if (!integration) {
      alert('Платежный модуль пока не загружен. Попробуйте позже.');
      return;
    }

    try {
      const paymentIframe = await integration.iframe.create('main-integration', {});
      const container = document.getElementById('payment-container');
      if (!container) {
        alert('Контейнер для встраивания платежной формы не найден.');
        return;
      }

      
      const safeDescription = description.replace(/\n/g, ' ').slice(0, 250) || "Оплата заказа";
      const initParams = {
        OrderId: `${Date.now()}${Math.floor(Math.random() * 100)}`,
        TerminalKey: TERMINAL_KEY,
        Amount: amount * 100,
        Description: safeDescription,
      };

      let res;
      if (integration.helpers && integration.helpers.request) {
        res = await integration.helpers.request(`${BACKEND_URL}/api/initPayment`, 'POST', initParams);
      } else {
        const response = await fetch(`${BACKEND_URL}/api/initPayment`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(initParams),
        });
        res = await response.json();
      }

      console.log('Payment init response:', res);
        if (!res || !res.PaymentURL) {
          alert('Ошибка: отсутствует PaymentURL в ответе сервера');
          return;
        }
        await paymentIframe.mount(container, res.PaymentURL);
    } catch (e) {
      console.error('Ошибка при запуске платежной формы:', e);
      alert('Ошибка запуска платежной формы');
    }
  };

  return (
    <>
      <button disabled={loading} onClick={startPayment} 
      className='flex w-full flex-col items-center text-2xl sm:text-3xl lg:text-4xl text-[rgba(19,54,92,1)] font-bold 
      text-center justify-center px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 hover:bg-[rgba(199,150,60,1)] transition-all 
      duration-300 cursor-pointer transform hover:scale-[1.02] bg-[#e0aa45]
      
      '>
        {loading ? 'Загрузка платежного модуля...' : 'Оплатить онлайн'}
      </button>
      <div id="payment-container" style={{ minHeight: 600, marginTop: 20 }}></div>
      
    </>
  );
};
