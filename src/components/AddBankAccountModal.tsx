
import React, { useState } from 'react';

interface BankAccountData {
  accountHolderName: string;
  mobile: string;
  refundType: 'bank' | 'upi';
  accountNumber: string;
  ifsc: string;
  bankName: string;
}

interface AddBankAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (accountData: BankAccountData) => void;
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
    } else {
      if (!formData.accountNumber.trim()) {
        newErrors.accountNumber = 'UPI ID is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      onSave(formData);
      handleCancel();
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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-lg max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-primary rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">Add Bank Account</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">Add your payment details</p>
              </div>
            </div>
            <button
              onClick={handleCancel}
              className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto max-h-[calc(85vh-140px)]">
          <div className="space-y-4">
            {/* Account Holder Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Account Holder Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="accountHolderName"
                value={formData.accountHolderName}
                onChange={handleInputChange}
                placeholder="Shriram Tiwari"
                className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-primary/20 focus:border-orange-primary dark:bg-gray-700 dark:text-white placeholder:text-gray-400 text-sm transition-all"
              />
              {errors.accountHolderName && (
                <p className="text-red-500 text-xs mt-1">{errors.accountHolderName}</p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mobile <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Mobile number"
                className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-primary/20 focus:border-orange-primary dark:bg-gray-700 dark:text-white placeholder:text-gray-400 text-sm transition-all"
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
              )}
            </div>

            {/* Refund Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Refund Type <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="refundType"
                    value="bank"
                    checked={formData.refundType === 'bank'}
                    onChange={() => handleRefundTypeChange('bank')}
                    className="w-4 h-4 text-orange-primary border-gray-300 focus:ring-orange-primary focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Bank Account</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="refundType"
                    value="upi"
                    checked={formData.refundType === 'upi'}
                    onChange={() => handleRefundTypeChange('upi')}
                    className="w-4 h-4 text-orange-primary border-gray-300 focus:ring-orange-primary focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">UPI or VPA</span>
                </label>
              </div>
            </div>

            {/* Bank Account Fields */}
            {formData.refundType === 'bank' ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Account Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Account Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleInputChange}
                      placeholder="Enter Account Number"
                      className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-primary/20 focus:border-orange-primary dark:bg-gray-700 dark:text-white placeholder:text-gray-400 text-sm transition-all"
                    />
                    {errors.accountNumber && (
                      <p className="text-red-500 text-xs mt-1">{errors.accountNumber}</p>
                    )}
                  </div>

                  {/* IFSC */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      IFSC <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="ifsc"
                      value={formData.ifsc}
                      onChange={handleInputChange}
                      placeholder="Enter IFSC"
                      className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-primary/20 focus:border-orange-primary dark:bg-gray-700 dark:text-white placeholder:text-gray-400 text-sm transition-all"
                    />
                    {errors.ifsc && (
                      <p className="text-red-500 text-xs mt-1">{errors.ifsc}</p>
                    )}
                  </div>
                </div>

                {/* Bank Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Bank Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleInputChange}
                    placeholder="Bank Name"
                    className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-primary/20 focus:border-orange-primary dark:bg-gray-700 dark:text-white placeholder:text-gray-400 text-sm transition-all"
                  />
                  {errors.bankName && (
                    <p className="text-red-500 text-xs mt-1">{errors.bankName}</p>
                  )}
                </div>
              </>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  UPI ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  placeholder="username@paytm"
                  className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-primary/20 focus:border-orange-primary dark:bg-gray-700 dark:text-white placeholder:text-gray-400 text-sm transition-all"
                />
                {errors.accountNumber && (
                  <p className="text-red-500 text-xs mt-1">{errors.accountNumber}</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 rounded-b-2xl">
          <div className="flex justify-end space-x-3">
            <button
              onClick={handleCancel}
              className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 text-sm font-medium bg-orange-primary text-white rounded-lg hover:bg-orange-hover transition-colors shadow-lg hover:shadow-xl"
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
