import React from 'react';

export const policiesData = [
  {
    id: 'education',
    title: 'Education for All',
    description:
      'We will work to ensure every child has access to quality education, from early childhood to higher learning.',
  },
  {
    id: 'healthcare',
    title: 'Healthcare Reform',
    description:
      'Affordable and accessible healthcare is a right, not a privilege. We will expand coverage and lower costs.',
  },
  {
    id: 'environment',
    title: 'Environmental Protection',
    description:
      'We will take bold action to combat climate change and protect our natural resources for future generations.',
  },
];

interface Policy {
  id: string;
  title: string;
  description: string;
}

interface PoliciesProps {
  policies: Policy[];
}

const Policies: React.FC<PoliciesProps> = ({ policies }) => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold mb-6 md:mb-8 text-gray-800">
        Our Policies
      </h2>
      <div className="space-y-4 md:space-y-6">
        {policies.map((policy) => (
          <div
            key={policy.id}
            className="bg-white text-center p-5 md:p-6 rounded-lg shadow-sm border-b-full border-gray-200"
          >
            <h3 className="text-lg md:text-xl font-medium text-green-600 mb-2">
              {policy.title}
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {policy.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Policies;