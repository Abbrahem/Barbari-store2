import React from 'react';

const LoadingSpinner = ({ size = 'medium', color = 'primary' }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'border-blue-600',
    secondary: 'border-gray-600',
    white: 'border-white'
  };

  return (
    <div className="flex justify-center items-center">
      <div 
        className={`
          ${sizeClasses[size]} 
          ${colorClasses[color]} 
          border-4 border-t-transparent 
          rounded-full 
          animate-spin
        `}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
