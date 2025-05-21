import React, { ReactNode } from 'react';

interface PropertyCardProps {
  title: string;
  icon: ReactNode;
  color: string;
  isSelected: boolean;
  onClick: () => void;
  description: string;
  examples: string[];
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  icon,
  color,
  isSelected,
  onClick,
  description,
  examples
}) => {
  const colorVariants = {
    blue: {
      bg: isSelected ? 'bg-blue-50' : 'bg-white',
      border: isSelected ? 'border-blue-300' : 'border-gray-200',
      shadow: isSelected ? 'shadow-md shadow-blue-100' : 'shadow-sm',
      hover: 'hover:border-blue-300 hover:shadow-md hover:shadow-blue-100',
      title: 'text-blue-700',
      badge: 'bg-blue-100 text-blue-800'
    },
    emerald: {
      bg: isSelected ? 'bg-emerald-50' : 'bg-white',
      border: isSelected ? 'border-emerald-300' : 'border-gray-200',
      shadow: isSelected ? 'shadow-md shadow-emerald-100' : 'shadow-sm',
      hover: 'hover:border-emerald-300 hover:shadow-md hover:shadow-emerald-100',
      title: 'text-emerald-700',
      badge: 'bg-emerald-100 text-emerald-800'
    },
    amber: {
      bg: isSelected ? 'bg-amber-50' : 'bg-white',
      border: isSelected ? 'border-amber-300' : 'border-gray-200',
      shadow: isSelected ? 'shadow-md shadow-amber-100' : 'shadow-sm',
      hover: 'hover:border-amber-300 hover:shadow-md hover:shadow-amber-100',
      title: 'text-amber-700',
      badge: 'bg-amber-100 text-amber-800'
    }
  };

  const variant = colorVariants[color as keyof typeof colorVariants];

  return (
    <div 
      className={`${variant.bg} ${variant.border} ${variant.shadow} ${variant.hover} border rounded-lg p-6 transition-all duration-300 cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <div className="mr-3">{icon}</div>
        <h3 className={`text-xl font-semibold ${variant.title}`}>{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-500">Examples:</p>
        <div className="flex flex-wrap gap-2">
          {examples.map((example, index) => (
            <span 
              key={index} 
              className={`inline-block text-xs px-2 py-1 rounded-full ${variant.badge}`}
            >
              {example}
            </span>
          ))}
        </div>
      </div>
      
      {isSelected && (
        <div className="mt-4 text-sm text-right">
          <span className={`inline-flex items-center font-medium ${variant.title}`}>
            Selected
            <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </span>
        </div>
      )}
    </div>
  );
};

export default PropertyCard;