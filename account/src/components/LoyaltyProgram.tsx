import React from 'react';

interface LoyaltyProgramProps {
  currentPoints: number;
  nextRewardAt: number;
  membershipLevel: string;
  availableRewards: Reward[];
  pointsHistory: PointsActivity[];
}

interface Reward {
  id: string;
  name: string;
  pointsCost: number;
  description: string;
  expiryDate?: string;
  isAvailable: boolean;
}

interface PointsActivity {
  id: string;
  date: string;
  description: string;
  points: number;
  type: 'earned' | 'redeemed';
}

const LoyaltyProgram: React.FC<LoyaltyProgramProps> = ({
  currentPoints,
  nextRewardAt,
  membershipLevel,
  availableRewards,
  pointsHistory
}) => {
  const progressPercentage = Math.min(100, (currentPoints / nextRewardAt) * 100);
  
  // Get membership level color
  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'bronze':
        return 'bg-amber-700';
      case 'silver':
        return 'bg-gray-400';
      case 'gold':
        return 'bg-yellow-500';
      case 'platinum':
        return 'bg-gray-300';
      case 'diamond':
        return 'bg-blue-300';
      default:
        return 'bg-blue-600';
    }
  };
  
  const levelColor = getLevelColor(membershipLevel);
  
  return (
    <div className="loyalty-program-container mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Loyalty Program</h2>
          <div className={`px-3 py-1 rounded-full text-sm font-medium text-white ${levelColor}`}>
            {membershipLevel} Level
          </div>
        </div>
        
        <div className="p-4">
          {/* Points Progress */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Points Progress</span>
              <span className="text-sm font-bold text-blue-600">{currentPoints} / {nextRewardAt}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="mt-1 text-xs text-gray-500 text-right">
              {nextRewardAt - currentPoints} points until your next reward
            </div>
          </div>
          
          {/* Available Rewards */}
          <div className="mb-6">
            <h3 className="text-md font-medium text-gray-800 mb-3">Available Rewards</h3>
            <div className="space-y-3">
              {availableRewards.map(reward => (
                <div 
                  key={reward.id} 
                  className={`p-3 rounded-lg border ${reward.isAvailable ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-gray-50'}`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-800">{reward.name}</h4>
                      <p className="text-sm text-gray-600">{reward.description}</p>
                      {reward.expiryDate && (
                        <p className="text-xs text-gray-500 mt-1">Expires: {reward.expiryDate}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-blue-600">{reward.pointsCost} pts</div>
                      <button 
                        className={`mt-2 px-3 py-1 rounded text-xs font-medium ${reward.isAvailable ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                        disabled={!reward.isAvailable}
                      >
                        {reward.isAvailable ? 'Redeem' : 'Unavailable'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Points History */}
          <div>
            <h3 className="text-md font-medium text-gray-800 mb-3">Points History</h3>
            <div className="divide-y divide-gray-100">
              {pointsHistory.map(activity => (
                <div key={activity.id} className="py-3 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-800">{activity.description}</p>
                    <p className="text-xs text-gray-500">{activity.date}</p>
                  </div>
                  <div className={`font-medium ${activity.type === 'earned' ? 'text-green-600' : 'text-red-600'}`}>
                    {activity.type === 'earned' ? '+' : '-'}{activity.points} pts
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyProgram;