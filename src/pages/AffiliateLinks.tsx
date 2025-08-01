
import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

const GenerateLinks: React.FC = () => {
  const [productUrl, setProductUrl] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');

  const handleGenerate = () => {
    if (productUrl) {
      setGeneratedLink(`https://affiliate.example.com/r/abc123?url=${encodeURIComponent(productUrl)}`);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Generate New Link</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Product URL
            </label>
            <input
              type="url"
              value={productUrl}
              onChange={(e) => setProductUrl(e.target.value)}
              placeholder="https://example.com/product"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <button
            onClick={handleGenerate}
            className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
          >
            Generate Link
          </button>
          {generatedLink && (
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Generated Affiliate Link
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={generatedLink}
                  readOnly
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-600 dark:text-white"
                />
                <button
                  onClick={copyToClipboard}
                  className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                >
                  Copy
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MyLinks: React.FC = () => {
  const links = [
    { id: 1, product: 'Premium Software License', link: 'https://affiliate.example.com/r/abc123', clicks: 245, conversions: 12, earnings: '$1,234.56' },
    { id: 2, product: 'Online Course Bundle', link: 'https://affiliate.example.com/r/def456', clicks: 189, conversions: 8, earnings: '$892.34' },
    { id: 3, product: 'Digital Marketing Tool', link: 'https://affiliate.example.com/r/ghi789', clicks: 156, conversions: 6, earnings: '$675.12' },
    { id: 4, product: 'Design Template Pack', link: 'https://affiliate.example.com/r/jkl012', clicks: 98, conversions: 4, earnings: '$324.78' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">My Affiliate Links</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Manage and track your affiliate links</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Link</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Clicks</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Conversions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Earnings</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {links.map((link) => (
                <tr key={link.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {link.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 truncate max-w-xs">
                    {link.link}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {link.clicks}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {link.conversions}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600 dark:text-green-400">
                    {link.earnings}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-orange-600 hover:text-orange-900 dark:text-orange-400 dark:hover:text-orange-300 mr-3">
                      Edit
                    </button>
                    <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                      Copy
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const LinkPerformance: React.FC = () => {
  const performanceData = [
    { period: 'Last 7 days', clicks: 89, conversions: 5, rate: '5.6%', earnings: '$245.67' },
    { period: 'Last 30 days', clicks: 342, conversions: 18, rate: '5.3%', earnings: '$892.34' },
    { period: 'Last 90 days', clicks: 1024, conversions: 51, rate: '5.0%', earnings: '$2,567.89' },
    { period: 'All time', clicks: 2156, conversions: 108, rate: '5.0%', earnings: '$5,234.56' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceData.map((data, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{data.period}</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-gray-600 dark:text-gray-400">Clicks:</span>
                <span className="text-xs font-medium text-gray-900 dark:text-white">{data.clicks}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-600 dark:text-gray-400">Conversions:</span>
                <span className="text-xs font-medium text-gray-900 dark:text-white">{data.conversions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-600 dark:text-gray-400">Rate:</span>
                <span className="text-xs font-medium text-green-600 dark:text-green-400">{data.rate}</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-2">
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Earnings:</span>
                <span className="text-sm font-bold text-orange-600 dark:text-orange-400">{data.earnings}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AffiliateLinks: React.FC = () => {
  const location = useLocation();
  
  const tabs = [
    { name: 'Generate Links', path: '/links' },
    { name: 'My Links', path: '/links/my-links' },
    { name: 'Link Performance', path: '/links/performance' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Affiliate Links</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Generate and manage your affiliate links
        </p>
      </div>

      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.path}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                location.pathname === tab.path
                  ? 'border-orange-500 text-orange-600 dark:text-orange-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<GenerateLinks />} />
        <Route path="/my-links" element={<MyLinks />} />
        <Route path="/performance" element={<LinkPerformance />} />
      </Routes>
    </div>
  );
};

export default AffiliateLinks;
