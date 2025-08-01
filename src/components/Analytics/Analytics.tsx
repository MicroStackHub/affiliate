
// import React from 'react';

// const Analytics: React.FC = () => {
//   const stats = [
//     {
//       title: 'Total Earnings',
//       value: '$12,345.67',
//       change: '+12.5%',
//       trend: 'up',
//       icon: '💰',
//       description: 'All time earnings'
//     },
//     {
//       title: 'This Month',
//       value: '$1,234.56',
//       change: '+8.3%',
//       trend: 'up',
//       icon: '📈',
//       description: 'Current month earnings'
//     },
//     {
//       title: 'Total Referrals',
//       value: '1,234',
//       change: '+15.2%',
//       trend: 'up',
//       icon: '👥',
//       description: 'All referrals made'
//     },
//     {
//       title: 'Active Referrals',
//       value: '567',
//       change: '+5.8%',
//       trend: 'up',
//       icon: '✅',
//       description: 'Currently active'
//     },
//     {
//       title: 'Conversion Rate',
//       value: '3.2%',
//       change: '+2.1%',
//       trend: 'up',
//       icon: '🎯',
//       description: 'Recent conversions'
//     },
//     {
//       title: 'Avg Order Value',
//       value: '$89.50',
//       change: '-3.2%',
//       trend: 'down',
//       icon: '🛒',
//       description: 'Average purchase amount'
//     }
//   ];

//   const timeframes = ['7 Days', '30 Days', '90 Days', '1 Year'];

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Analytics Overview</h2>
//           <p className="text-gray-600 dark:text-gray-400 mt-1">Track your performance metrics</p>
//         </div>
//         <div className="flex space-x-2">
//           {timeframes.map((timeframe) => (
//             <button
//               key={timeframe}
//               className="px-3 py-1.5 text-sm font-medium rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors"
//             >
//               {timeframe}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {stats.map((stat, index) => (
//           <div
//             key={index}
//             className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
//           >
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-3">
//                 <span className="text-2xl">{stat.icon}</span>
//                 <div>
//                   <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
//                   <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
//                 </div>
//               </div>
//               <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-sm font-medium ${stat.trend === 'up'
//                   ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
//                   : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
//                 }`}>
//                 <span className={`text-xs ${stat.trend === 'up' ? '↗️' : '↘️'}`}>
//                   {stat.trend === 'up' ? '↗️' : '↘️'}
//                 </span>
//                 <span>{stat.change}</span>
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{stat.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Analytics; 
import React from 'react';

const Analytics: React.FC = () => {
  const stats = [
    {
      title: 'Total Earnings',
      value: '$12,345.67',
      change: '+12.5%',
      trend: 'up',
      icon: (
        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
          </svg>
        </div>
      ),
      description: 'All time earnings'
    },
    {
      title: 'This Month',
      value: '$1,234.56',
      change: '+8.3%',
      trend: 'up',
      icon: (
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
        </div>
      ),
      description: 'Current month earnings'
    },
    {
      title: 'Total Referrals',
      value: '1,234',
      change: '+15.2%',
      trend: 'up',
      icon: (
        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
        </div>
      ),
      description: 'All referrals made'
    },
    {
      title: 'Active Referrals',
      value: '567',
      change: '+5.8%',
      trend: 'up',
      icon: (
        <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      ),
      description: 'Currently active'
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '+2.1%',
      trend: 'up',
      icon: (
        <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
          </svg>
        </div>
      ),
      description: 'Recent conversions'
    },
    {
      title: 'Avg Order Value',
      value: '$89.50',
      change: '-3.2%',
      trend: 'down',
      icon: (
        <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
          </svg>
        </div>
      ),
      description: 'Average purchase amount'
    }
  ];

  const timeframes = ['7 Days', '30 Days', '90 Days', '1 Year'];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics Overview</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Track your performance metrics and growth</p>
        </div>
        <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          {timeframes.map((timeframe, index) => (
            <button
              key={timeframe}
              className={`px-4 py-2 text-sm font-medium rounded-md ${index === 1
                ? 'bg-white dark:bg-gray-700 text-orange-600 dark:text-orange-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-gray-700/50'
                }`}
            >
              {timeframe}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:border-orange-200 dark:hover:border-orange-700/50"
          >
            <div className="flex items-start justify-between mb-4">
              {stat.icon}
              <div className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-sm font-semibold ${stat.trend === 'up'
                ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                : 'bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                }`}>
                <svg className={`w-4 h-4 ${stat.trend === 'up' ? 'rotate-0' : 'rotate-180'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 4.414 6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span>{stat.change}</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                {stat.title}
              </h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
