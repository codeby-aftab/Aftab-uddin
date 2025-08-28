import React from 'react';
import { Logo } from './icons/Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="text-center mt-16 pb-8 lg:pb-0">
      <div className="flex justify-center mb-4">
        <Logo />
      </div>
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Aftab Uddin. All Rights Reserved.
      </p>
    </footer>
  );
};
