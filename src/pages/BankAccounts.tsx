
import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  fetchBankAccounts,
  addBankAccount,
  editBankAccount,
  setDefaultBankAccount,
  deleteBankAccount,
  clearError,
} from '../store/slices/bankSlice';
import AddBankAccountModal from '../components/AddBankAccountModal';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const BankAccounts: React.FC = () => {
  const dispatch = useAppDispatch();
  const MySwal = withReactContent(Swal);
  
  const { 
    accounts, 
    loading, 
    addLoading, 
    editLoading, 
    deleteLoading, 
    setDefaultLoading, 
    error,
    pagination 
  } = useAppSelector((state) => state.bank);

  const [isAddAccountModalOpen, setIsAddAccountModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch bank accounts on component mount
  useEffect(() => {
    dispatch(fetchBankAccounts(currentPage));
  }, [dispatch, currentPage]);

  // Show error messages
  useEffect(() => {
    if (error) {
      MySwal.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
        confirmButtonColor: '#f97316'
      });
      dispatch(clearError());
    }
  }, [error, dispatch, MySwal]);

  const handleAddBankAccount = async (accountData: any) => {
    try {
      const bankData = {
        account_holder_name: accountData.accountHolderName,
        mobile_number: accountData.mobile,
        account_type: accountData.refundType as 'bank' | 'upi',
        ...(accountData.refundType === 'bank' ? {
          account_number: accountData.accountNumber,
          ifsc_code: accountData.ifsc,
          bank_name: accountData.bankName,
        } : {
          upi_id: accountData.accountNumber,
        }),
      };

      const result = await dispatch(addBankAccount(bankData)).unwrap();
      
      if (result.success) {
        MySwal.fire({
          title: 'Success!',
          text: 'Bank account added successfully.',
          icon: 'success',
          confirmButtonColor: '#10b981'
        });
        setIsAddAccountModalOpen(false);
      }
    } catch (error) {
      MySwal.fire({
        title: 'Error!',
        text: 'Failed to add bank account. Please try again.',
        icon: 'error',
        confirmButtonColor: '#f97316'
      });
    }
  };

  const setDefaultAccount = (account: any) => {
    MySwal.fire({
      title: 'Set as Default?',
      text: `Do you want to set ${account.account_type === 'upi' ? account.upi_id : `****${account.account_number?.slice(-4)}`} as your default payment method?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#10b981',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, set as default',
      cancelButtonText: 'Cancel'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await dispatch(setDefaultBankAccount({ refund_payment_id: account.id })).unwrap();
          MySwal.fire({
            title: 'Default Updated!',
            text: 'Your default payment method has been updated.',
            icon: 'success',
            confirmButtonColor: '#10b981'
          });
        } catch (error) {
          MySwal.fire({
            title: 'Error!',
            text: 'Failed to set default account. Please try again.',
            icon: 'error',
            confirmButtonColor: '#f97316'
          });
        }
      }
    });
  };

  const handleRemoveAccount = (account: any) => {
    MySwal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f97316',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await dispatch(deleteBankAccount({ refund_payment_id: account.id })).unwrap();
          MySwal.fire({
            title: 'Deleted!',
            text: 'Your bank account has been removed.',
            icon: 'success',
            confirmButtonColor: '#f97316'
          });
        } catch (error) {
          MySwal.fire({
            title: 'Error!',
            text: 'Failed to delete bank account. Please try again.',
            icon: 'error',
            confirmButtonColor: '#f97316'
          });
        }
      }
    });
  };

  const handleEditAccount = (account: any) => {
    MySwal.fire({
      title: 'Edit Bank Account',
      text: 'This feature will be available soon!',
      icon: 'info',
      confirmButtonColor: '#f97316'
    });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading && currentPage === 1) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-primary"></div>
      </div>
    );
  }

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
              disabled={addLoading}
              className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-orange-primary text-white rounded-lg hover:bg-orange-hover transition-colors cursor-pointer relative z-10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {addLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white"></div>
                  <span>Adding...</span>
                </div>
              ) : (
                'Add Account'
              )}
            </button>
          </div>

          {accounts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400">No bank accounts found. Add your first account to get started.</p>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {accounts.map((account) => (
                <div key={account.id} className="flex items-center justify-between p-3 sm:p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-shadow relative z-10">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 dark:text-orange-400 font-semibold text-base sm:text-lg">
                        {account.account_type === 'upi' ? '💳' : '🏦'}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
                        {account.account_type === 'upi' ? 'UPI' : account.bank_name || 'Bank Account'}
                      </h4>
                      <p className="text-2xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {account.account_type === 'upi' 
                          ? account.upi_id 
                          : `****${account.account_number?.slice(-4)}`
                        }
                      </p>
                      <p className="text-2xs sm:text-xs text-gray-400 dark:text-gray-500">
                        {account.account_holder_name}
                      </p>
                    </div>
                    {account.is_default && (
                      <span className="inline-flex px-1.5 py-0.5 sm:px-2 sm:py-1 text-2xs sm:text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        Default
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-1 sm:space-x-2 relative z-20">
                    {!account.is_default && (
                      <button 
                        onClick={() => setDefaultAccount(account)}
                        disabled={setDefaultLoading}
                        className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 text-sm font-medium cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {setDefaultLoading ? 'Setting...' : 'Set Default'}
                      </button>
                    )}
                    <button 
                      onClick={() => handleEditAccount(account)}
                      disabled={editLoading}
                      className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 text-sm font-medium cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleRemoveAccount(account)}
                      disabled={deleteLoading}
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 text-sm font-medium cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {deleteLoading ? 'Removing...' : 'Remove'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {pagination && pagination.last_page > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-6">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1 || loading}
                className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Page {currentPage} of {pagination.last_page}
              </span>
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === pagination.last_page || loading}
                className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}
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
