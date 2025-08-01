import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Referrals from './pages/Referrals';
import AffiliateLinks from './pages/AffiliateLinks';
import Earnings from './pages/Earnings';
import Payouts from './pages/Payouts';
import MarketingTools from './pages/MarketingTools';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Support from './pages/Support';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/referrals" element={<Referrals />} />
            <Route path="/affiliate-links/*" element={<AffiliateLinks />} />
            <Route path="/earnings" element={<Earnings />} />
            <Route path="/payouts" element={<Payouts />} />
            <Route path="/marketing-tools" element={<MarketingTools />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/support" element={<Support />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;