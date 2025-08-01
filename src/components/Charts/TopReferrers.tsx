
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface ReferrerData {
  source: string;
  referrals: number;
  conversions: number;
  earnings: number;
  conversionRate: number;
}

const TopReferrers: React.FC = () => {
  const { isDarkMode } = useTheme();
  
  const referrerData: ReferrerData[] = [
    { source: 'Social Media', referrals: 45, conversions: 12, earnings: 1840.50, conversionRate: 26.7 },
    { source: 'Email Campaign', referrals: 38, conversions: 15, earnings: 2250.75, conversionRate: 39.5 },
    { source: 'Blog Posts', referrals: 32, conversions: 8, earnings: 1200.25, conversionRate: 25.0 },
    { source: 'Direct Links', referrals: 28, conversions: 11, earnings: 1675.00, conversionRate: 39.3 },
    { source: 'YouTube', referrals: 23, conversions: 6, earnings: 890.50, conversionRate: 26.1 }
  ];

  const maxReferrals = Math.max(...referrerData.map(d => d.referrals));

  return (
    <div className={`p-6 rounded-lg border ${
      isDarkMode 
        ? 'bg-gray-800 border-gray-700 text-white' 
        : 'bg-white border-gray-200 text-gray-900'
    }`}>
      <h3 className="text-lg font-semibold mb-6">Top Referral Sources</h3>
      
      <div className="space-y-4">
        {referrerData.map((referrer, index) => (
          <div key={referrer.source} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
            <div className="flex items-center space-x-4 flex-1">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white text-sm font-semibold">
                {index + 1}
              </div>
              
              <div className="flex-1">
                <div className="font-medium">{referrer.source}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {referrer.referrals} referrals • {referrer.conversions} conversions
                </div>
                
                <div className="mt-2 w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${(referrer.referrals / maxReferrals) * 100}%` }}
                  />
                </div>
              </div>
            </div>
            
            <div className="text-right ml-4">
              <div className="font-semibold text-green-600 dark:text-green-400">
                ${referrer.earnings.toFixed(2)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {referrer.conversionRate}% CVR
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
        <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium">
          View All Sources →
        </button>
      </div>
    </div>
  );
};

export default TopReferrers;
