import React from 'react';
import { useNavigate } from 'react-router-dom';

const AffiliateDashboard: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/dashboard');
  }, [navigate]);

  return null;
};

export default AffiliateDashboard;