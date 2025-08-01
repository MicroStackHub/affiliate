
import React from 'react';

const Icons = {
  Dashboard: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v0a2 2 0 01-2 2H10a2 2 0 01-2-2v0z" />
    </svg>
  ),
  Earnings: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
    </svg>
  ),
  Links: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
  Analytics: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Referrals: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  Profile: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  Settings: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Support: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Marketing: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  ),
  Payouts: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  )
};

export interface SubMenuItem {
  text: string;
  path: string;
  onClick?: () => void;
}

export interface MenuItem {
  id: string;
  type: 'item' | 'heading';
  icon?: React.ReactNode;
  text: string;
  isActive?: boolean;
  onClick?: () => void;
  hasSubMenu?: boolean;
  subMenuItems?: SubMenuItem[];
  badge?: string;
}

export const sidebarConfig: MenuItem[] = [
  {
    id: 'overview',
    type: 'heading',
    text: 'Overview'
  },
  {
    id: 'dashboard',
    type: 'item',
    icon: Icons.Dashboard,
    text: 'Dashboard',
    isActive: true
  },
  {
    id: 'earnings',
    type: 'item',
    icon: Icons.Earnings,
    text: 'Earnings',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Current Month', path: '/earnings/current' },
      { text: 'Previous Months', path: '/earnings/previous' },
      { text: 'Annual Report', path: '/earnings/annual' }
    ]
  },
  {
    id: 'analytics',
    type: 'item',
    icon: Icons.Analytics,
    text: 'Analytics',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Performance', path: '/analytics/performance' },
      { text: 'Conversion Rates', path: '/analytics/conversion' },
      { text: 'Traffic Sources', path: '/analytics/traffic' }
    ]
  },
  {
    id: 'marketing',
    type: 'heading',
    text: 'Marketing'
  },
  {
    id: 'links',
    type: 'item',
    icon: Icons.Links,
    text: 'Affiliate Links',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Generate Links', path: '/links/generate' },
      { text: 'My Links', path: '/links/my-links' },
      { text: 'Link Performance', path: '/links/performance' }
    ]
  },
  {
    id: 'referrals',
    type: 'item',
    icon: Icons.Referrals,
    text: 'Referrals',
    badge: '12',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Active Referrals', path: '/referrals/active' },
      { text: 'Pending Referrals', path: '/referrals/pending' },
      { text: 'Referral History', path: '/referrals/history' }
    ]
  },
  {
    id: 'marketing-tools',
    type: 'item',
    icon: Icons.Marketing,
    text: 'Marketing Tools',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Banners & Creatives', path: '/marketing/banners' },
      { text: 'Email Templates', path: '/marketing/emails' },
      { text: 'Social Media Kit', path: '/marketing/social' }
    ]
  },
  {
    id: 'payments',
    type: 'heading',
    text: 'Payments'
  },
  {
    id: 'payouts',
    type: 'item',
    icon: Icons.Payouts,
    text: 'Payouts',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Payment History', path: '/payouts/history' },
      { text: 'Payment Methods', path: '/payouts/methods' },
      { text: 'Request Payout', path: '/payouts/request' }
    ]
  },
  {
    id: 'account',
    type: 'heading',
    text: 'Account'
  },
  {
    id: 'profile',
    type: 'item',
    icon: Icons.Profile,
    text: 'Profile',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Personal Info', path: '/profile/personal' },
      { text: 'Tax Information', path: '/profile/tax' },
      { text: 'Bank Details', path: '/profile/bank' }
    ]
  },
  {
    id: 'settings',
    type: 'item',
    icon: Icons.Settings,
    text: 'Settings',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Account Settings', path: '/settings/account' },
      { text: 'Notifications', path: '/settings/notifications' },
      { text: 'Privacy', path: '/settings/privacy' }
    ]
  },
  {
    id: 'support',
    type: 'item',
    icon: Icons.Support,
    text: 'Support',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Help Center', path: '/support/help' },
      { text: 'Contact Support', path: '/support/contact' },
      { text: 'FAQ', path: '/support/faq' }
    ]
  }
];
