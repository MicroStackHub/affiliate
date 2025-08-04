
import React, { useState } from 'react';

interface AddBankAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (accountData: BankAccountData) => void;
}

interface BankAccountData {
  accountHolderName: string;
  mobile: string;
  refundType: 'bank' | 'upi';
  accountNumber: string;
  ifsc: string;
  bankName: string;
}

const AddBankAccountModal: React.FC<AddBankAccountModalProps> = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState<BankAccountData>({
    accountHolderName: '',
    mobile: '',
    refundType: 'bank',
    accountNumber: '',
    ifsc: '',
    bankName: '',
  });

  const [errors, setErrors] = useState<Partial<BankAccountData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field
    if (errors[name as keyof BankAccountData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleRefundTypeChange = (type: 'bank' | 'upi') => {
    setFormData(prev => ({
      ...prev,
      refundType: type
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<BankAccountData> = {};

    if (!formData.accountHolderName.trim()) {
      newErrors.accountHolderName = 'Account holder name is required';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile.replace(/\s/g, ''))) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (formData.refundType === 'bank') {
      if (!formData.accountNumber.trim()) {
        newErrors.accountNumber = 'Account number is required';
      }
      if (!formData.ifsc.trim()) {
        newErrors.ifsc = 'IFSC code is required';
      }
      if (!formData.bankName.trim()) {
        newErrors.bankName = 'Bank name is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      onSave(formData);
      setFormData({
        accountHolderName: '',
        mobile: '',
        refundType: 'bank',
        accountNumber: '',
        ifsc: '',
        bankName: '',
      });
      setErrors({});
      onClose();
    }
  };

  const handleCancel = () => {
    setFormData({
      accountHolderName: '',
      mobile: '',
      refundType: 'bank',
      accountNumber: '',
      ifsc: '',
      bankName: '',
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Add Bank Account</h2>
            <button
              onClick={handleCancel}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            {/* Account Holder Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Account Holder Name *
              </label>
              <input
                type="text"
                name="accountHolderName"
                value={formData.accountHolderName}
                onChange={handleInputChange}
                placeholder="Enter account holder name"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-primary focus:border-orange-primary dark:bg-gray-700 dark:text-white"
              />
              {errors.accountHolderName && (
                <p className="text-red-500 text-xs mt-1">{errors.accountHolderName}</p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Mobile *
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Enter mobile number"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-primary focus:border-orange-primary dark:bg-gray-700 dark:text-white"
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
              )}
            </div>

            {/* Refund Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Refund Type *
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="refundType"
                    checked={formData.refundType === 'bank'}
                    onChange={() => handleRefundTypeChange('bank')}
                    className="mr-2 text-orange-primary focus:ring-orange-primary"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Bank Account</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="refundType"
                    checked={formData.refundType === 'upi'}
                    onChange={() => handleRefundTypeChange('upi')}
                    className="mr-2 text-orange-primary focus:ring-orange-primary"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">UPI or VPA</span>
                </label>
              </div>
            </div>

            {/* Bank Account Fields - Only show when bank account is selected */}
            {formData.refundType === 'bank' && (
              <>
                {/* Account Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Account Number *
                  </label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                    placeholder="Enter Account Number"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-primary focus:border-orange-primary dark:bg-gray-700 dark:text-white"
                  />
                  {errors.accountNumber && (
                    <p className="text-red-500 text-xs mt-1">{errors.accountNumber}</p>
                  )}
                </div>

                {/* IFSC */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    IFSC *
                  </label>
                  <input
                    type="text"
                    name="ifsc"
                    value={formData.ifsc}
                    onChange={handleInputChange}
                    placeholder="Enter IFSC"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-primary focus:border-orange-primary dark:bg-gray-700 dark:text-white"
                  />
                  {errors.ifsc && (
                    <p className="text-red-500 text-xs mt-1">{errors.ifsc}</p>
                  )}
                </div>

                {/* Bank Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Bank Name *
                  </label>
                  <input
                    type="text"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleInputChange}
                    placeholder="Enter Bank Name"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-primary focus:border-orange-primary dark:bg-gray-700 dark:text-white"
                  />
                  {errors.bankName && (
                    <p className="text-red-500 text-xs mt-1">{errors.bankName}</p>
                  )}
                </div>
              </>
            )}

            {/* UPI Field - Only show when UPI is selected */}
            {formData.refundType === 'upi' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  UPI ID *
                </label>
                <input
                  type="text"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  placeholder="Enter UPI ID"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-primary focus:border-orange-primary dark:bg-gray-700 dark:text-white"
                />
                {errors.accountNumber && (
                  <p className="text-red-500 text-xs mt-1">{errors.accountNumber}</p>
                )}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={handleCancel}
              className="px-4 py-2 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-orange-primary text-white rounded-lg hover:bg-orange-hover transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBankAccountModal;
