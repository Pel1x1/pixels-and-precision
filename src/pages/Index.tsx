import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Advantages } from '@/components/Advantages';
import { ProductConfigurator } from '@/components/ProductConfigurator';
import { DeliveryPayment } from '@/components/DeliveryPayment';
import { Contacts } from '@/components/Contacts';
const Index = () => {
  return (
    <div className="bg-[rgba(247,239,219,1)] min-h-screen">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Advantages />
        <ProductConfigurator />
        <DeliveryPayment />
      </main>
      
      <Contacts />
    </div>
  );
};

export default Index;
