import React from 'react';

interface ProfileSummaryProps {
  username: string;
  email: string;
  memberSince: string;
  loyaltyPoints: number;
  membershipLevel: string;
}

const ProfileSummary: React.FC<ProfileSummaryProps> = ({
  username,
  email,
  memberSince,
  loyaltyPoints,
  membershipLevel
}) => {
  return (
    <div className="profile-summary-container mb-6">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:shrink-0 flex items-center justify-center p-6">
            <div className="relative">
              <div className="h-24 w-24 md:h-32 md:w-32 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white text-4xl font-bold border-4 border-white/50">
                {username.charAt(0).toUpperCase()}
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs rounded-full px-2 py-1 font-semibold">
                {membershipLevel}
              </div>
            </div>
          </div>
          <div className="p-6 md:p-8 text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-1">{username}</h2>
                <p className="text-blue-100 mb-2">{email}</p>
                <p className="text-blue-100 text-sm">Member since: {memberSince}</p>
              </div>
              <div className="mt-4 md:mt-0 md:ml-8 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-center">
                  <p className="text-sm text-blue-100">Loyalty Points</p>
                  <p className="text-3xl font-bold">{loyaltyPoints}</p>
                  <div className="mt-2">
                    <div className="h-2 w-full bg-blue-200/30 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-yellow-400 rounded-full" 
                        style={{ width: `${Math.min(loyaltyPoints / 10, 100)}%` }}
                      ></div>
                    </div>
                    <p className="text-xs mt-1 text-blue-100">{1000 - loyaltyPoints} points until next reward</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSummary;