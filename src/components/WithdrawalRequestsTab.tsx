import React, { useState } from 'react';

interface WithdrawalRequest {
  id: number;
  date: string;
  amount: string;
  method: string;
  status: string;
  reference?: string;
}

const WithdrawalRequestsTab: React.FC = () => {
  const [activeRequestTab, setActiveRequestTab] = useState<'unconfirmed' | 'confirmed'>('unconfirmed');

  const unconfirmedRequests: WithdrawalRequest[] = [
    { id: 1, date: '2024-02-15', amount: '₹1,500.00', method: 'PayPal', status: 'Pending' },
    { id: 2, date: '2024-02-10', amount: '₹2,300.50', method: 'Bank Transfer', status: 'Processing' },
  ];

  const confirmedRequests: WithdrawalRequest[] = [
    { id: 3, date: '2024-01-25', amount: '₹1,200.00', method: 'PayPal', status: 'Completed', reference: 'TXN001240' },
    { id: 4, date: '2024-01-05', amount: '₹3,450.75', method: 'Bank Transfer', status: 'Completed', reference: 'TXN001241' },
  ];

  return (
    <>
      {/* Tabs for confirmed/unconfirmed */}
      <div className="mb-6 relative z-10">
        <div className="flex space-x-4 border-b border-gray-200 dark:border-gray-700">
          <button 
            onClick={() => setActiveRequestTab('unconfirmed')}
            className={`py-2 px-4 border-b-2 cursor-pointer relative z-20 transition-colors ${activeRequestTab === 'unconfirmed' ? 'border-orange-primary text-orange-primary' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'} font-medium`}
          >
            Unconfirmed
          </button>
          <button 
            onClick={() => setActiveRequestTab('confirmed')}
            className={`py-2 px-4 border-b-2 cursor-pointer relative z-20 transition-colors ${activeRequestTab === 'confirmed' ? 'border-orange-primary text-orange-primary' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'} font-medium`}
          >
            Confirmed
          </button>
        </div>
      </div>
      
      {/* Unconfirmed Requests List */}
      {activeRequestTab === 'unconfirmed' && (
        <div className="space-y-4 relative z-10">
          {unconfirmedRequests.length > 0 ? (
            unconfirmedRequests.map((request) => (
              <div key={request.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-shadow relative z-10">
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Request #{request.id}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{request.date}</span>
                </div>
                <div className="flex flex-col space-y-1 items-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{request.amount}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{request.method}</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                    {request.status}
                  </span>
                  <button 
                    onClick={() => console.log('Cancel request:', request.id)}
                    className="ml-4 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-sm font-medium cursor-pointer relative z-20 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              No unconfirmed withdrawal requests found.
            </div>
          )}
        </div>
      )}
      
      {/* Confirmed Requests List */}
      {activeRequestTab === 'confirmed' && (
        <div className="space-y-4 relative z-10">
          {confirmedRequests.length > 0 ? (
            confirmedRequests.map((request) => (
              <div key={request.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-shadow relative z-10">
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Request #{request.id}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{request.date}</span>
                </div>
                <div className="flex flex-col space-y-1 items-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{request.amount}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{request.method}</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    {request.status}
                  </span>
                  <span className="ml-4 text-sm text-gray-500 dark:text-gray-400 cursor-default">
                    Ref: {request.reference}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              No confirmed withdrawal requests found.
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default WithdrawalRequestsTab;