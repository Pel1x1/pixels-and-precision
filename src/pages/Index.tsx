import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Advantages } from '@/components/Advantages';
import { ProductConfigurator } from '@/components/ProductConfigurator';
import { DeliveryPayment } from '@/components/DeliveryPayment';
import { Reviews } from '@/components/Reviews';
import { Contacts } from '@/components/Contacts';
import { FloatingButtons } from '@/components/FloatingButtons';

const Index: React.FC = () => {
  return (
    <div className="bg-[rgba(247,239,219,1)]">
      <Header />
      
      <div className="min-h-screen max-w-[1585px] mx-auto">
        <main>
          <Hero />
          <About />
          <Advantages />
          <ProductConfigurator />
          <DeliveryPayment />
          <Reviews />
        </main>
        <Contacts />
      </div>
      
      <FloatingButtons />
    </div>
  );
};

export default Index;
