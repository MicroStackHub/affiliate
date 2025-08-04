import React from 'react';

interface ActionButtonProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick?: () => void;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon: Icon, label, onClick, className = '' }) => {
  return (
    <button 
      onClick={onClick}
      className={`btn-secondary flex items-center justify-center space-x-1 sm:space-x-2 py-2 sm:py-3 md:py-4 px-1 sm:px-2 md:px-4 text-xs sm:text-sm md:text-base ${className}`}
    >
      <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
      <span className="truncate">{label}</span>
    </button>
  );
};

export default ActionButton;