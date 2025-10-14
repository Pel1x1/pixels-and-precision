import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    PaymentIntegration: any;
  }
}

const PAYMENT_SCRIPT_URL = 'https://integrationjs.tbank.ru/integration.js';
const TERMINAL_KEY = '1759418551647DEMO';
const BACKEND_URL = 'https://83-166-247-114.regru.cloud';

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

      const initParams = {
        OrderId: `${Date.now()}${Math.floor(Math.random() * 100)}`,
        TerminalKey: TERMINAL_KEY,
        Amount: amount * 100,
        Description: description || 'Оплата заказа',
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

      await paymentIframe.mount(container, res.PaymentURL);
    } catch (e) {
      console.error('Ошибка при запуске платежной формы:', e);
      alert('Ошибка запуска платежной формы');
    }
  };

  return (
    <>
      <div id="payment-container" style={{ minHeight: 600, marginTop: 20 }}></div>
      <button disabled={loading} onClick={startPayment} style={{ marginTop: 20, padding: '10px 20px' }}>
        {loading ? 'Загрузка платежного модуля...' : 'Оплатить онлайн'}
      </button>
    </>
  );
};
