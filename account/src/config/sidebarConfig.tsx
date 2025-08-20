import React from 'react';

// Icon components
const Icons = {
  Dashboard: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
    </svg>
  ),
  Profile: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  ),
  Orders: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 4V2C7 1.45 7.45 1 8 1h8c.55 0 1 .45 1 1v2h5c.55 0 1 .45 1 1s-.45 1-1 1h-1v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6H2c-.55 0-1-.45-1-1s.45-1 1-1h5z"/>
    </svg>
  ),
  Wishlist: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  ),
  Address: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  ),
  Payment: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
    </svg>
  ),
  Messages: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
    </svg>
  ),
  Notifications: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
    </svg>
  ),
  Coupons: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 12c0-.8.4-1.5 1-1.9V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v3.1c.6.4 1 1.1 1 1.9s-.4 1.5-1 1.9V17c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-3.1c-.6-.4-1-1.1-1-1.9z"/>
    </svg>
  ),
  Analytics: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"/>
    </svg>
  ),
  Security: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/>
    </svg>
  ),
  Settings: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
    </svg>
  ),
  Support: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/>
    </svg>
  )
};

// Types
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

// Sidebar configuration
export const sidebarConfig: MenuItem[] = [
  {
    id: 'overview',
    type: 'item',
    icon: Icons.Dashboard,
    text: 'Account Overview',
    isActive: true,
    onClick: () => console.log('Navigate to Overview')
  },
  {
    id: 'profile-management',
    type: 'heading',
    text: 'Profile Management'
  },
  {
    id: 'profile',
    type: 'item',
    icon: Icons.Profile,
    text: 'Personal Profile',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Basic Information', path: '/profile/basic', onClick: () => window.dispatchEvent(new CustomEvent('navigateToProfile', { detail: 'basic' })) },
      { text: 'Contact Details', path: '/profile/contact', onClick: () => window.dispatchEvent(new CustomEvent('navigateToProfile', { detail: 'contact' })) },
      { text: 'Profile Picture', path: '/profile/picture', onClick: () => window.dispatchEvent(new CustomEvent('navigateToProfile', { detail: 'picture' })) },
      { text: 'Bio & Preferences', path: '/profile/bio', onClick: () => window.dispatchEvent(new CustomEvent('navigateToProfile', { detail: 'bio' })) }
    ]
  },
  {
    id: 'orders-purchases',
    type: 'heading',
    text: 'Orders & Purchases'
  },
  {
    id: 'orders',
    type: 'item',
    icon: Icons.Orders,
    text: 'My Orders',
    hasSubMenu: true,
    badge: '3',
    subMenuItems: [
      { text: 'Active Orders', path: '/orders/active' },
      { text: 'Order History', path: '/orders/history' },
      { text: 'Returns & Refunds', path: '/orders/returns' },
      { text: 'Track Package', path: '/orders/tracking' }
    ]
  },
  {
    id: 'wishlist',
    type: 'item',
    icon: Icons.Wishlist,
    text: 'Wishlist',
    badge: '24',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'All Items', path: '/wishlist/all' },
      { text: 'Available', path: '/wishlist/available' },
      { text: 'Out of Stock', path: '/wishlist/out-of-stock' },
      { text: 'On Sale', path: '/wishlist/on-sale' }
    ]
  },
  {
    id: 'payment-address',
    type: 'heading',
    text: 'Payment & Address'
  },
  {
    id: 'addresses',
    type: 'item',
    icon: Icons.Address,
    text: 'Addresses',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Shipping Addresses', path: '/addresses/shipping' },
      { text: 'Billing Addresses', path: '/addresses/billing' },
      { text: 'Add New Address', path: '/addresses/add' }
    ]
  },
  {
    id: 'payment-methods',
    type: 'item',
    icon: Icons.Payment,
    text: 'Payment Methods',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Credit Cards', path: '/payment/cards' },
      { text: 'Bank Accounts', path: '/payment/bank' },
      { text: 'Digital Wallets', path: '/payment/wallets' },
      { text: 'Add Payment Method', path: '/payment/add' }
    ]
  },
  {
    id: 'communication',
    type: 'heading',
    text: 'Communication'
  },
  {
    id: 'messages',
    type: 'item',
    icon: Icons.Messages,
    text: 'Messages',
    hasSubMenu: true,
    badge: '5',
    subMenuItems: [
      { text: 'Inbox', path: '/messages/inbox' },
      { text: 'Sent', path: '/messages/sent' },
      { text: 'Order Updates', path: '/messages/orders' },
      { text: 'Promotions', path: '/messages/promotions' }
    ]
  },
  {
    id: 'notifications',
    type: 'item',
    icon: Icons.Notifications,
    text: 'Notifications',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Email Preferences', path: '/notifications/email' },
      { text: 'SMS Settings', path: '/notifications/sms' },
      { text: 'Push Notifications', path: '/notifications/push' },
      { text: 'Marketing Preferences', path: '/notifications/marketing' }
    ]
  },
  {
    id: 'rewards-offers',
    type: 'heading',
    text: 'Rewards & Offers'
  },
  {
    id: 'coupons',
    type: 'item',
    icon: Icons.Coupons,
    text: 'Coupons & Offers',
    badge: 'New',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Available Coupons', path: '/coupons/available' },
      { text: 'Used Coupons', path: '/coupons/used' },
      { text: 'Expired Coupons', path: '/coupons/expired' },
      { text: 'Referral Rewards', path: '/coupons/referral' }
    ]
  },
  {
    id: 'analytics',
    type: 'item',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v4h8V3h-8z"/>
      </svg>
    ),
    text: 'Purchase Analytics',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Spending Overview', path: '/analytics/spending' },
      { text: 'Category Breakdown', path: '/analytics/categories' },
      { text: 'Monthly Reports', path: '/analytics/monthly' },
      { text: 'Savings Tracker', path: '/analytics/savings' }
    ]
  },
  {
    id: 'security-settings',
    type: 'heading',
    text: 'Security & Settings'
  },
  {
    id: 'security',
    type: 'item',
    icon: Icons.Security,
    text: 'Security Settings',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'Change Password', path: '/security/password' },
      { text: 'Two-Factor Auth', path: '/security/2fa' },
      { text: 'Login History', path: '/security/history' },
      { text: 'Privacy Settings', path: '/security/privacy' }
    ]
  },
  {
    id: 'settings',
    type: 'item',
    icon: Icons.Settings,
    text: 'Account Settings',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'General Settings', path: '/settings/general' },
      { text: 'Language & Region', path: '/settings/language' },
      { text: 'Accessibility', path: '/settings/accessibility' },
      { text: 'Data Export', path: '/settings/export' }
    ]
  },
  {
    id: 'support-help',
    type: 'heading',
    text: 'Support & Help'
  },
  {
    id: 'support',
    type: 'item',
    icon: Icons.Support,
    text: 'Help & Support',
    hasSubMenu: true,
    subMenuItems: [
      { text: 'FAQ', path: '/support/faq' },
      { text: 'Contact Support', path: '/support/contact' },
      { text: 'Live Chat', path: '/support/chat' },
      { text: 'Report Issue', path: '/support/report' }
    ]
  }
];