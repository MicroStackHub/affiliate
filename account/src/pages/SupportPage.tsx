
import React from 'react';

const SupportPage: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Help & Support
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Get help and find answers to your questions
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div className="text-center">
            <div className="text-4xl mb-4">❓</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Find quick answers to common questions
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors">
              View FAQ
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div className="text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Contact Support
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Get help from our support team
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors">
              Contact Us
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div className="text-center">
            <div className="text-4xl mb-4">💭</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Live Chat
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Chat with our support team in real-time
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors">
              Start Chat
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div className="text-center">
            <div className="text-4xl mb-4">🐛</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Report an Issue
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Report bugs or technical problems
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors">
              Report Issue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
