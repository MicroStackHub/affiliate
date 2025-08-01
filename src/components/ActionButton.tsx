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
      className={`btn-secondary flex items-center justify-center space-x-2 py-3 md:py-4 px-2 md:px-4 text-sm md:text-base ${className}`}
    >
      <Icon className="w-4 h-4 md:w-5 md:h-5" />
      <span className="truncate">{label}</span>
    </button>
  );
};

export default ActionButton;