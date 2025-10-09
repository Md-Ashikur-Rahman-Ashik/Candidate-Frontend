// components/FeatureCards.tsx
import React from 'react';
import { StaticImageData } from 'next/image';


interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}


const featureCardsData: FeatureCardProps[] = [
  {
    icon: 'M12 11.25v1.5m-7.844-9.375c.148-.804.877-1.25 1.737-1.25h9.61c.86 0 1.589.446 1.737 1.25L17.5 13.5h-10.25l-.156-.75m.698-5.75c.148-.804.877-1.25 1.737-1.25h9.61c.86 0 1.589.446 1.737 1.25l-.156.75H8.344l.156-.75zM12 11.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z', // SVG path for a graduate cap
    title: 'Youth Empowerment',
    description: 'Investing in our youth is investing in our future. We\'ll create more opportunities for education and employment.',
  },
  {
    icon: 'M13.5 12c0-1.2.9-2.2 2.1-2.2H18a.75.75 0 01.75.75v6a.75.75 0 01-.75.75h-2.4c-1.2 0-2.1-.9-2.1-2.1v-2.1zm-7.2-2.2c1.2 0 2.1.9 2.1 2.2V16.5c0 1.2-.9 2.1-2.1 2.1H6a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75h.3zm.3 0c-.8 0-1.5.7-1.5 1.5v6c0 .8.7 1.5 1.5 1.5h1.5a1.5 1.5 0 001.5-1.5v-6c0-.8-.7-1.5-1.5-1.5h-1.5zm9 0c-.8 0-1.5.7-1.5 1.5v6c0 .8.7 1.5 1.5 1.5h1.5a1.5 1.5 0 001.5-1.5v-6c0-.8-.7-1.5-1.5-1.5h-1.5zM12 11.25V9.75c0-.4-.3-.75-.75-.75H10.5a.75.75 0 00-.75.75V11.25M12 11.25a.75.75 0 00.75.75H13.5a.75.75 0 00.75-.75M12 11.25V9.75c0-.4-.3-.75-.75-.75H10.5a.75.75 0 00-.75.75V11.25',
    title: 'Economic Growth',
    description: 'A thriving economy benefits everyone. We\'ll support local businesses and attract new investments.',
  },
  {
    icon: 'M18.375 12a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM12 8.25a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM12 15.75a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM5.625 12a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM12 3.75a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM12 20.25a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM3.375 12a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM20.625 12a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM12 5.25a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM12 18.75a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z',
    title: 'Community Development',
    description: 'Strong communities are built on trust. We\'ll work to bring people together and foster collaboration.',
  },
];

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg p-6 shadow-sm border border-gray-100 min-h-[180px]">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-green-50 p-1.5">
          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d={icon} clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="ml-3 text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed text-sm flex-grow">{description}</p>
    </div>
  );
};

const FeatureCards: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureCardsData.map((card, index) => (
          <FeatureCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;