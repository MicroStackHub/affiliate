
import React from 'react';
import AnalyticsComponent from '../Analytics/Analytics';

interface ProfileAnalyticsProps {
  userRole: 'customer' | 'affiliate' | 'admin';
}

const ProfileAnalytics: React.FC<ProfileAnalyticsProps> = ({ userRole }) => {
  return <AnalyticsComponent userRole={userRole} />;
};

export default ProfileAnalytics;
