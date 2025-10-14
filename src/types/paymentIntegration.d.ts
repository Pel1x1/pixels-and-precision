interface PaymentIntegrationHelpers {
  request(url: string, method: string, params: object): Promise<any>;
}

interface PaymentIntegrationIframe {
  create(name: string, config: object): Promise<{
    mount(container: HTMLElement, paymentUrl: string): Promise<void>;
    connect(iframe: HTMLIFrameElement): Promise<void>;
    setLang(lang: 'ru' | 'en'): Promise<void>;
    setTheme(theme: 'dark' | 'light'): Promise<void>;
    unmount(): Promise<void>;
  }>;
  get(name: string): Promise<any>;
  remove(name: string): Promise<void>;
}

interface PaymentIntegration {
  iframe: PaymentIntegrationIframe;
  helpers: PaymentIntegrationHelpers;
}

declare global {
  interface Window {
    PaymentIntegration: {
      init(config: object): Promise<PaymentIntegration>;
    };
  }
}