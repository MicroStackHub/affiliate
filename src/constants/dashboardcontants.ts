import {
    CurrencyDollarIcon,
    UserGroupIcon,
    LinkIcon,
    ChartBarIcon,
    ArrowUpIcon,
    ArrowDownIcon,
    EyeIcon,
    CursorArrowRaysIcon
} from '@heroicons/react/24/outline';



export const stats = [
    {
        title: 'Total Earnings',
        value: '₹2,847.52',
        change: '+12.5%',
        trend: 'up' as const,
        icon: CurrencyDollarIcon,
    },
    {
        title: 'Active Referrals',
        value: '156',
        change: '+8.2%',
        trend: 'up' as const,
        icon: UserGroupIcon,
    },
    {
        title: 'Clicks This Month',
        value: '1,247',
        change: '-3.1%',
        trend: 'down' as const,
        icon: CursorArrowRaysIcon,
    },
    {
        title: 'Conversion Rate',
        value: '3.2%',
        change: '+0.8%',
        trend: 'up' as const,
        icon: ChartBarIcon,
    },
];

export const recentReferrals = [
    { id: 1, name: 'John Smith', email: 'john@example.com', earnings: '₹25.00', date: 'Today' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', earnings: '₹15.50', date: 'Yesterday' },
    { id: 3, name: 'Mike Wilson', email: 'mike@example.com', earnings: '₹32.75', date: '2 days ago' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', earnings: '₹18.25', date: '3 days ago' },
];