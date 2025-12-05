import React, { useState } from 'react';
import { toast } from '@/hooks/use-toast';

export const QuickContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePhone = (phone: string) => {
    const phoneRegex = /^(\+7|8)?[\s-]?\(?[0-9]{3}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите ваше имя",
        variant: "destructive"
      });
      return;
    }

    if (!validatePhone(phone)) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите корректный номер телефона",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const orderNumber = Math.floor(Math.random() * 10000) + 1000;
    
    toast({
      title: "Спасибо!",
      description: `Ваша заявка №${orderNumber} получена. Наш менеджер свяжется с вами в течение 10 минут.`,
    });
    
    setName('');
    setPhone('');
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-sm w-full">
      <h3 className="text-xl font-bold text-[rgba(19,54,92,1)] mb-2">
        Рассчитать стоимость
      </h3>
      <p className="text-sm text-[rgba(19,54,92,0.7)] mb-4">
        Оставьте заявку и получите расчёт за 1 минуту
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-[rgba(219,170,80,0.3)] focus:border-[rgba(219,170,80,1)] focus:outline-none text-[rgba(19,54,92,1)]"
          maxLength={50}
        />
        <input
          type="tel"
          placeholder="+7 (___) ___-__-__"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-[rgba(219,170,80,0.3)] focus:border-[rgba(219,170,80,1)] focus:outline-none text-[rgba(19,54,92,1)]"
          maxLength={20}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[rgba(219,170,80,1)] text-white font-semibold py-3 rounded-lg hover:bg-[rgba(199,150,60,1)] transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Отправка...' : 'Получить расчёт'}
        </button>
      </form>
      
      <p className="text-xs text-[rgba(19,54,92,0.5)] mt-3 text-center">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </div>
  );
};
