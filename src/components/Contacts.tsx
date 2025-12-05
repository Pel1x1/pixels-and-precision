import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

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
  Telegram: '/img/contacts/tg.png',
  VK: '/img/contacts/vk.png',
  WhatsApp: '/img/contacts/wht.png'
};

export function Contacts() {
  const [data, setData] = useState<ContactsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    fetch('/modx/index.php?id=9')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex items-center justify-center py-20">Загрузка...</div>;
  if (error) return <div className="text-red-500 py-20">Ошибка загрузки: {error}</div>;
  if (!data) return null;

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-gray-900">
          {data.title}
        </h1>

        {/* Introduction */}
        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          {data.introduction}
        </p>

        {/* Contact Details Grid */}
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-8 mb-16`}>
          {/* Phone */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">{data.contactDetails.phone.label}</h3>
            <a
              href={data.contactDetails.phone.href}
              className="text-lg font-medium text-blue-600 hover:text-blue-700 transition"
            >
              {data.contactDetails.phone.value}
            </a>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">{data.contactDetails.email.label}</h3>
            <a
              href={data.contactDetails.email.href}
              className="text-lg font-medium text-blue-600 hover:text-blue-700 transition break-all"
            >
              {data.contactDetails.email.value}
            </a>
          </div>

          {/* Address */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Адрес:</h3>
            <p className="text-gray-700 leading-relaxed">
              {data.contactDetails.address}
            </p>
          </div>
        </div>

        {/* Feedback Text */}
        <p className="text-center text-gray-600 mb-12 text-lg">
          {data.feedbackText}
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-16 flex-wrap">
          {data.socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
            >
              <img
                src={iconMap[link.name] || '/img/contacts/default.png'}
                alt={link.name}
                className="w-5 h-5"
              />
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        {/* Working Hours */}
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mb-12">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">
            {data.workingHours.label}
          </h3>
          <div className="space-y-2">
            {data.workingHours.schedule.map((hours, idx) => (
              <p key={idx} className="text-gray-700">
                {hours}
              </p>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-2">
            {data.footerText}{' '}
            <a
              href={data.footerLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium transition"
            >
              {data.footerLink.text}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
