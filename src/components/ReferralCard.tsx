import React from 'react';

interface ReferralCardProps {
  name: string;
  email: string;
  earnings: string;
  date: string;
  className?: string;
}

const ReferralCard: React.FC<ReferralCardProps> = ({ name, email, earnings, date, className = '' }) => {
  const initials = name.split(' ').map(n => n[0]).join('');
  
  return (
    <div className={`flex flex-col p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 border border-gray-100 dark:border-gray-700 hover:shadow-sm ${className}`}>
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-semibold">
            {initials}
          </span>
        </div>
        <div className="flex-1 truncate">
          <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{email}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-100 dark:border-gray-700">
        <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">{earnings}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{date}</p>
      </div>
    </div>
  );
};

export default ReferralCard;