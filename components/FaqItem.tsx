'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
        type="button"
        aria-expanded={isOpen}
      >
        <h3 className="font-display text-lg font-semibold text-gray-900 text-left">
          {question}
        </h3>
        <ChevronDown 
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      
      <div 
        className={`grid transition-all duration-200 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
        role="region"
        aria-labelledby={`faq-question-${question.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="overflow-hidden">
          <p className="px-6 py-4 text-gray-600 bg-gray-50">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem; 