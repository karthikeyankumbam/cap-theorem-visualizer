import React from 'react';
import { CheckCircle, Cloud, Split } from 'lucide-react';

interface CAPTriangleProps {
  selected: string[];
  onSelect: (property: string) => void;
}

const CAPTriangle: React.FC<CAPTriangleProps> = ({ selected, onSelect }) => {
  const isCA = selected.includes('C') && selected.includes('A') && !selected.includes('P');
  const isCP = selected.includes('C') && selected.includes('P') && !selected.includes('A');
  const isAP = selected.includes('A') && selected.includes('P') && !selected.includes('C');

  return (
    <div className="relative w-full h-[400px] mx-auto">
      <svg 
        viewBox="0 0 400 350" 
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))' }}
      >
        {/* Triangle outline */}
        <path
          d="M200,10 L10,340 L390,340 Z"
          fill="white"
          stroke="#e2e8f0"
          strokeWidth="2"
        />
        
        {/* CA section */}
        <path
          d="M200,10 L10,340 L200,340 Z"
          fill={isCA ? 'rgba(147, 197, 253, 0.3)' : 'rgba(147, 197, 253, 0.1)'}
          stroke={isCA ? '#3b82f6' : '#e2e8f0'}
          strokeWidth={isCA ? '3' : '1'}
          onClick={() => {
            onSelect('C');
            onSelect('A');
          }}
          style={{ cursor: 'pointer' }}
        />
        <text x="110" y="290" fontSize="16" fill={isCA ? '#1e40af' : '#64748b'} textAnchor="middle">CA</text>
        
        {/* CP section */}
        <path
          d="M200,10 L200,340 L390,340 Z"
          fill={isCP ? 'rgba(167, 243, 208, 0.3)' : 'rgba(167, 243, 208, 0.1)'}
          stroke={isCP ? '#10b981' : '#e2e8f0'}
          strokeWidth={isCP ? '3' : '1'}
          onClick={() => {
            onSelect('C');
            onSelect('P');
          }}
          style={{ cursor: 'pointer' }}
        />
        <text x="290" y="290" fontSize="16" fill={isCP ? '#047857' : '#64748b'} textAnchor="middle">CP</text>
        
        {/* AP section */}
        <path
          d="M10,340 L390,340 L200,10 Z"
          fill={isAP ? 'rgba(252, 211, 77, 0.3)' : 'rgba(252, 211, 77, 0.1)'}
          stroke={isAP ? '#f59e0b' : '#e2e8f0'}
          strokeWidth={isAP ? '3' : '1'}
          clipPath="polygon(25% 100%, 75% 100%, 50% 0%)"
          onClick={() => {
            onSelect('A');
            onSelect('P');
          }}
          style={{ cursor: 'pointer' }}
        />
        <text x="200" y="320" fontSize="16" fill={isAP ? '#b45309' : '#64748b'} textAnchor="middle">AP</text>
        
        {/* Consistency Node */}
        <circle 
          cx="200" 
          cy="10" 
          r="30" 
          fill={selected.includes('C') ? '#10b981' : 'white'} 
          stroke={selected.includes('C') ? '#059669' : '#e2e8f0'}
          strokeWidth="2"
          onClick={() => onSelect('C')}
          style={{ cursor: 'pointer' }}
        />
        <foreignObject x="170" y="-20" width="60" height="60">
          <div className="flex items-center justify-center h-full">
            <CheckCircle 
              className={`h-8 w-8 ${selected.includes('C') ? 'text-white' : 'text-emerald-500'}`}
            />
          </div>
        </foreignObject>
        <text 
          x="200" 
          y="70" 
          fontSize="16" 
          fontWeight="600"
          fill="#1f2937" 
          textAnchor="middle"
        >
          Consistency
        </text>
        
        {/* Availability Node */}
        <circle 
          cx="10" 
          cy="340" 
          r="30" 
          fill={selected.includes('A') ? '#3b82f6' : 'white'} 
          stroke={selected.includes('A') ? '#2563eb' : '#e2e8f0'}
          strokeWidth="2"
          onClick={() => onSelect('A')}
          style={{ cursor: 'pointer' }}
        />
        <foreignObject x="-20" y="310" width="60" height="60">
          <div className="flex items-center justify-center h-full">
            <Cloud 
              className={`h-8 w-8 ${selected.includes('A') ? 'text-white' : 'text-blue-500'}`}
            />
          </div>
        </foreignObject>
        <text 
          x="25" 
          y="390" 
          fontSize="16" 
          fontWeight="600"
          fill="#1f2937" 
          textAnchor="middle"
        >
          Availability
        </text>
        
        {/* Partition Tolerance Node */}
        <circle 
          cx="390" 
          cy="340" 
          r="30" 
          fill={selected.includes('P') ? '#f59e0b' : 'white'} 
          stroke={selected.includes('P') ? '#d97706' : '#e2e8f0'}
          strokeWidth="2"
          onClick={() => onSelect('P')}
          style={{ cursor: 'pointer' }}
        />
        <foreignObject x="360" y="310" width="60" height="60">
          <div className="flex items-center justify-center h-full">
            <Split 
              className={`h-8 w-8 ${selected.includes('P') ? 'text-white' : 'text-amber-500'}`}
            />
          </div>
        </foreignObject>
        <text 
          x="390" 
          y="390" 
          fontSize="16" 
          fontWeight="600"
          fill="#1f2937" 
          textAnchor="middle"
        >
          Partition Tolerance
        </text>
      </svg>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {selected.length === 3 && (
          <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-sm border border-gray-200 max-w-[180px] text-center transform translate-y-[-20px]">
            <p className="text-sm text-gray-600">Select any property to explore CAP trade-offs</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CAPTriangle;