import React, { useEffect, useState } from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import vector1 from '@/lib/img/Vector 1.png';
import vector2 from '@/lib/img/Vector 2.png';
import tg from '@/lib/img/tg.png';
import vk from '@/lib/img/vk.png';
import wht from '@/lib/img/wht.png';

interface ContactDetails {
  phone: { label: string; value: string; href: string };
  email: { label: string; value: string; href: string };
  address: string;
}

interface WorkingHours {
  label: string;
  schedule: string[];
}

interface SocialLink {
  name: string;
  url: string;
}

interface FooterLink {
  text: string;
  url: string;
}

interface ContactsData {
  title: string;
  introduction: string;
  contactDetails: ContactDetails;
  feedbackText: string;
  socialLinks: SocialLink[];
  workingHours: WorkingHours;
  footerText: string;
  footerLink: FooterLink;
}

const iconMap: Record<string, string> = {
  Telegram: tg,
  VK: vk,
  WhatsApp: wht
};

export const Contacts: React.FC = () => {
  const isMobile = useIsMobile();
  const [data, setData] = useState<ContactsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/modx/index.php?id=9')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading contacts:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return null;
  if (!data) return null;

  return (
    <section id="contacts" className="w-full">
      {/* Hero Section with Background */}
      <div 
          className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 z-20 custom-max:block ">
          <div className="relative min-h-[250px] h-full w-full " style={{ minHeight: isMobile? "0px" : "250px"}}>
            <img
              src={vector1}
              className="absolute inset-0 w-full h-auto object-contain"
              alt="Красивая линия"
              style={{visibility:isMobile?"hidden":"visible", }}
            />
          </div>
        </div>
      {/* Contact Information */}
        <div className="w-full px-10 lg:px-[10rem] relative z-10 mt-[0rem] lg:mt-[-65px] custom-min:mt-[4rem] mb-8 lg:mb-20">
          <h2 className="text-[2.8rem] sm:text-6xl lg:text-8xl xl:text-[7.5rem] text-[rgba(19,54,92,1)] font-normal text-left mb-4 lg:mb-10">
          {data.title}
        </h2>
        <div className="max-w-7xl">
          <div className=" gap-8 lg:gap-12">
            <article className="lg:col-span-3 text-[1.1rem] sm:text-2xl lg:text-3xl xl:text-3xl text-[rgba(19,54,92,1)] font-normal leading-relaxed">
              <div className="space-y-4 lg:space-y-6">
                
                <p>{data.introduction}</p>
                
                <div className="space-y-[-2px]">
                  <p>{data.contactDetails.phone.label}
                    <a 
                      className="text-[rgba(219,170,80,1)] xl:text-[rgba(19,54,92,1)] hover:text-[rgba(219,170,80,1)] transition-colors"
                      href={data.contactDetails.phone.href}
                      >
                      {data.contactDetails.phone.value}</a></p>
                  <p>
                    {data.contactDetails.email.label}{' '}
                    <a
                      href={data.contactDetails.email.href}
                      className="text-[rgba(219,170,80,1)] xl:text-[rgba(19,54,92,1)] hover:text-[rgba(219,170,80,1)] transition-colors"
                    >
                      {data.contactDetails.email.value}
                    </a>
                  </p>
                  <p>Адрес: {data.contactDetails.address}</p>
                </div>
                
                <p>
                  {data.feedbackText}
                </p>
                <div className="flex space-x-6 mt-2">
                  {data.socialLinks.map((link) => (
                    <a 
                      key={link.name}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={link.name}
                    >
                      <img 
                        src={iconMap[link.name] || ''} 
                        alt={link.name} 
                        className="w-12 h-12" 
                      />
                    </a>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <p>{data.workingHours.label}</p>
                  {data.workingHours.schedule.map((hours, idx) => (
                    <p key={idx}>{hours}</p>
                  ))}
                </div>
              </div>
            </article>


          </div>
        </div>
      </div>


      {/* Footer */}
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-y-hidden">
        <footer className="bg-[rgba(219,170,80,1)] w-full px-4 sm:px-6 lg:px-8 py-0 lg:py-1 overflow-y-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm sm:text-sm lg:text-xl xl:text-xl text-[rgba(19,54,92,1)] font-normal hover:text-[#2b7bd1] transition-colors">
              {data.footerText} <a href={data.footerLink.url}>{data.footerLink.text}</a>
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};
