import React, { useState } from 'react';
import AddBankAccountModal from '../components/AddBankAccountModal';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const BankAccounts: React.FC = () => {
  const MySwal = withReactContent(Swal);
  const [isAddAccountModalOpen, setIsAddAccountModalOpen] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: 'PayPal', email: 'john@example.com', isDefault: true },
    { id: 2, type: 'Bank Transfer', account: '**** **** **** 1234', isDefault: false },
  ]);

  const handleAddBankAccount = (accountData: any) => {
    const newAccount = {
      id: paymentMethods.length + 1,
      type: accountData.refundType === 'bank' ? 'Bank Transfer' : 'UPI',
      email: accountData.refundType === 'upi' ? accountData.accountNumber : undefined,
      account: accountData.refundType === 'bank' ? `**** **** **** ${accountData.accountNumber.slice(-4)}` : accountData.accountNumber,
      accountHolderName: accountData.accountHolderName,
      mobile: accountData.mobile,
      bankName: accountData.bankName,
      ifsc: accountData.ifsc,
      isDefault: paymentMethods.length === 0
    };
    setPaymentMethods(prev => [...prev, newAccount]);
  };

  const setDefaultAccount = (id: number) => {
    // Find the account that will be set as default
    const accountToSetDefault = paymentMethods.find(method => method.id === id);
    
    if (accountToSetDefault) {
      MySwal.fire({
        title: 'Set as Default?',
        text: `Do you want to set ${accountToSetDefault.type === 'PayPal' ? accountToSetDefault.email : accountToSetDefault.account} as your default payment method?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#10b981', // green-500
        cancelButtonColor: '#6b7280', // gray-500
        confirmButtonText: 'Yes, set as default',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.isConfirmed) {
          setPaymentMethods(prev => 
            prev.map(method => ({
              ...method,
              isDefault: method.id === id
            }))
          );
          
          MySwal.fire({
            title: 'Default Updated!',
            text: 'Your default payment method has been updated.',
            icon: 'success',
            confirmButtonColor: '#10b981'
          });
        }
      });
    }
  };

  const handleRemoveAccount = (id: number) => {
    MySwal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f97316', // orange-primary
      cancelButtonColor: '#6b7280', // gray-500
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        setPaymentMethods(prev => prev.filter(method => method.id !== id));
        MySwal.fire({
          title: 'Deleted!',
          text: 'Your bank account has been removed.',
          icon: 'success',
          confirmButtonColor: '#f97316'
        });
      }
    });
  };

  const handleEditAccount = (id: number) => {
    // In a real application, you would open a modal with the account details for editing
    // For now, we'll just show a notification that this feature is coming soon
    MySwal.fire({
      title: 'Edit Bank Account',
      text: 'This feature will be available soon!',
      icon: 'info',
      confirmButtonColor: '#f97316'
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Bank Accounts</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Manage your bank accounts and payment methods
        </p>
      </div>

      <div className="space-y-4 sm:space-y-6 z-[100]">
        <div className="card">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Bank Accounts</h3>
            <button 
              onClick={() => setIsAddAccountModalOpen(true)}
              className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-orange-primary text-white rounded-lg hover:bg-orange-hover transition-colors cursor-pointer relative z-10"
            >
              Add Account
            </button>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {paymentMethods.map((method) => (
              <div key={method.id} className="flex items-center justify-between p-3 sm:p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-shadow relative z-10">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 dark:text-orange-400 font-semibold text-base sm:text-lg">
                      {method.type === 'PayPal' ? '💳' : '🏦'}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">{method.type}</h4>
                    <p className="text-2xs sm:text-sm text-gray-500 dark:text-gray-400">
                      {method.type === 'PayPal' ? method.email : method.account}
                    </p>
                  </div>
                  {method.isDefault && (
                    <span className="inline-flex px-1.5 py-0.5 sm:px-2 sm:py-1 text-2xs sm:text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Default
                    </span>
                  )}
                </div>
                <div className="flex space-x-1 sm:space-x-2 relative z-20">
                  {!method.isDefault && (
                    <button 
                      onClick={() => setDefaultAccount(method.id)}
                      className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 text-sm font-medium cursor-pointer transition-colors"
                    >
                      Set Default
                    </button>
                  )}
                  <button 
                    onClick={() => handleEditAccount(method.id)}
                    className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 text-sm font-medium cursor-pointer transition-colors"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleRemoveAccount(method.id)}
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 text-sm font-medium cursor-pointer transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Bank Account Modal */}
      <AddBankAccountModal
        isOpen={isAddAccountModalOpen}
        onClose={() => setIsAddAccountModalOpen(false)}
        onSave={handleAddBankAccount}
      />
    </div>
  );
};

export default BankAccounts;