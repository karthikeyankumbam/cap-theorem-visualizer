import React from 'react';
import { GithubIcon, LinkedinIcon, BookOpenIcon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-700">CAP Theorem Visualizer</h3>
            <p className="text-sm text-gray-500">An educational resource for distributed systems</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
              <GithubIcon className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
              <BookOpenIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-500">
            Further Reading: 
            <a href="https://en.wikipedia.org/wiki/CAP_theorem" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 ml-1">
              CAP Theorem on Wikipedia
            </a>
            <span className="mx-2">•</span>
            <a href="https://www.ibm.com/topics/cap-theorem" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
              IBM's CAP Theorem Guide
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;