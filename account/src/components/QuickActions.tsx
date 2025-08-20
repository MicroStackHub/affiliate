import React from 'react';

interface QuickActionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
}

const getVariantClasses = (variant: QuickActionProps['variant'] = 'primary') => {
  switch (variant) {
    case 'primary':
      return 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100';
    case 'secondary':
      return 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100';
    case 'success':
      return 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100';
    case 'danger':
      return 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100';
    case 'warning':
      return 'bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100';
    default:
      return 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100';
  }
};

const QuickAction: React.FC<QuickActionProps> = ({ 
  title, 
  description, 
  icon, 
  onClick, 
  variant = 'primary' 
}) => {
  const variantClasses = getVariantClasses(variant);
  
  return (
    <button 
      onClick={onClick}
      className={`quick-action p-4 rounded-lg border shadow-sm ${variantClasses} transition-all duration-200 text-left w-full hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
    >
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-4">
          {icon}
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm opacity-80">{description}</p>
        </div>
      </div>
    </button>
  );
};

interface QuickActionsProps {
  onAction: (action: string) => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ onAction }) => {
  return (
    <div className="quick-actions-container mb-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <QuickAction
          title="Track Order"
          description="Check the status of your recent orders"
          icon={
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v5h2v-5zm0 6h-2v2h2v-2z"></path>
            </svg>
          }
          onClick={() => onAction('track-order')}
          variant="primary"
        />
        <QuickAction
          title="Return Item"
          description="Start a return or exchange process"
          icon={
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path>
            </svg>
          }
          onClick={() => onAction('return-item')}
          variant="secondary"
        />
        <QuickAction
          title="Update Payment"
          description="Manage your payment methods"
          icon={
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
            </svg>
          }
          onClick={() => onAction('update-payment')}
          variant="success"
        />
        <QuickAction
          title="Contact Support"
          description="Get help with your account or orders"
          icon={
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path>
            </svg>
          }
          onClick={() => onAction('contact-support')}
          variant="warning"
        />
      </div>
    </div>
  );
};

export default QuickActions;