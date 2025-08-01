import React, { useState } from 'react';

const MarketingTools: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('banners');

  const categories = [
    { id: 'banners', name: 'Banners & Ads', icon: '🖼️' },
    { id: 'social', name: 'Social Media', icon: '📱' },
    { id: 'email', name: 'Email Templates', icon: '📧' },
    { id: 'landing', name: 'Landing Pages', icon: '🎯' },
  ];

  const banners = [
    { id: 1, name: 'Premium Banner 728x90', size: '728x90', format: 'PNG', downloads: 234 },
    { id: 2, name: 'Square Social Banner', size: '1080x1080', format: 'JPG', downloads: 189 },
    { id: 3, name: 'Mobile Banner 320x50', size: '320x50', format: 'PNG', downloads: 156 },
    { id: 4, name: 'Leaderboard 970x250', size: '970x250', format: 'JPG', downloads: 98 },
  ];

  const socialPosts = [
    { id: 1, platform: 'Facebook', type: 'Post Template', engagement: '2.4k likes' },
    { id: 2, platform: 'Instagram', type: 'Story Template', engagement: '1.8k views' },
    { id: 3, platform: 'Twitter', type: 'Tweet Template', engagement: '945 retweets' },
    { id: 4, platform: 'LinkedIn', type: 'Article Template', engagement: '567 shares' },
  ];

  const emailTemplates = [
    { id: 1, name: 'Welcome Series', type: 'Email Sequence', openRate: '24.5%' },
    { id: 2, name: 'Product Launch', type: 'Newsletter', openRate: '18.7%' },
    { id: 3, name: 'Holiday Promotion', type: 'Campaign', openRate: '31.2%' },
    { id: 4, name: 'Re-engagement', type: 'Automation', openRate: '15.8%' },
  ];

  const landingPages = [
    { id: 1, name: 'Product Demo Page', conversionRate: '12.4%', visitors: '2.1k' },
    { id: 2, name: 'Free Trial Signup', conversionRate: '8.7%', visitors: '3.4k' },
    { id: 3, name: 'Webinar Registration', conversionRate: '15.3%', visitors: '1.8k' },
    { id: 4, name: 'Download Resource', conversionRate: '22.1%', visitors: '956' },
  ];

  const renderContent = () => {
    switch (activeCategory) {
      case 'banners':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {banners.map((banner) => (
              <div key={banner.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
                <div className="w-full h-32 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-semibold">Banner Preview</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{banner.name}</h4>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex justify-between">
                    <span>Size:</span>
                    <span>{banner.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span>{banner.format}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Downloads:</span>
                    <span>{banner.downloads}</span>
                  </div>
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                  Download
                </button>
              </div>
            ))}
          </div>
        );

      case 'social':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialPosts.map((post) => (
              <div key={post.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 dark:text-orange-400 font-semibold">
                      {post.platform[0]}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{post.platform}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{post.type}</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    🚀 Just discovered this amazing tool that's been a game-changer for my productivity! 
                    Check it out and see the difference it can make for you too. #affiliate #productivity
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-green-600 dark:text-green-400">{post.engagement}</span>
                  <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                    Use Template
                  </button>
                </div>
              </div>
            ))}
          </div>
        );

      case 'email':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emailTemplates.map((template) => (
              <div key={template.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{template.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{template.type}</p>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Subject: Transform Your Workflow Today!
                    <br /><br />
                    Hi [Name],
                    <br /><br />
                    I wanted to share something that's revolutionized the way I work...
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-green-600 dark:text-green-400">
                    Open Rate: {template.openRate}
                  </span>
                  <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                    Use Template
                  </button>
                </div>
              </div>
            ))}
          </div>
        );

      case 'landing':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {landingPages.map((page) => (
              <div key={page.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
                <div className="w-full h-32 bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Landing Page Preview</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{page.name}</h4>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Conversion Rate:</span>
                    <span className="text-green-600 dark:text-green-400 font-medium">{page.conversionRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Visitors:</span>
                    <span className="text-gray-900 dark:text-white">{page.visitors}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                    Use Template
                  </button>
                  <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                    Preview
                  </button>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Marketing Tools</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Professional marketing materials to boost your affiliate success
        </p>
      </div>

      {/* Category Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`p-4 rounded-xl border ${
              activeCategory === category.id
                ? 'bg-orange-600 text-white border-orange-600 shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            <div className="text-2xl mb-2">{category.icon}</div>
            <div className="text-sm font-medium">{category.name}</div>
          </button>
        ))}
      </div>

      {/* Content */}
      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default MarketingTools;