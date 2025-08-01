
import React, { useState, useMemo } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface Referral {
  id: string;
  customerName: string;
  email: string;
  dateJoined: string;
  status: 'Active' | 'Pending' | 'Converted' | 'Inactive';
  commission: number;
  orderValue?: number;
  product?: string;
  country?: string;
  clickDate?: string;
  conversionDate?: string;
}

const DataTable: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortField, setSortField] = useState<keyof Referral>('dateJoined');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const sampleReferrals: Referral[] = [
    {
      id: 'REF001',
      customerName: 'Alice Johnson',
      email: 'alice@example.com',
      dateJoined: '2024-01-15',
      status: 'Converted',
      commission: 45.99,
      orderValue: 299.99,
      product: 'Premium Plan',
      country: 'USA',
      clickDate: '2024-01-10',
      conversionDate: '2024-01-15'
    },
    {
      id: 'REF002',
      customerName: 'Bob Smith',
      email: 'bob@example.com',
      dateJoined: '2024-01-14',
      status: 'Active',
      commission: 0,
      orderValue: 0,
      product: 'Basic Plan',
      country: 'Canada',
      clickDate: '2024-01-14'
    },
    {
      id: 'REF003',
      customerName: 'Carol Davis',
      email: 'carol@example.com',
      dateJoined: '2024-01-13',
      status: 'Pending',
      commission: 0,
      orderValue: 0,
      product: 'Starter Plan',
      country: 'UK',
      clickDate: '2024-01-13'
    },
    {
      id: 'REF004',
      customerName: 'David Wilson',
      email: 'david@example.com',
      dateJoined: '2024-01-12',
      status: 'Converted',
      commission: 32.50,
      orderValue: 199.99,
      product: 'Standard Plan',
      country: 'Australia',
      clickDate: '2024-01-10',
      conversionDate: '2024-01-12'
    },
    {
      id: 'REF005',
      customerName: 'Eva Brown',
      email: 'eva@example.com',
      dateJoined: '2024-01-11',
      status: 'Inactive',
      commission: 0,
      orderValue: 0,
      product: 'Premium Plan',
      country: 'Germany',
      clickDate: '2024-01-11'
    },
    {
      id: 'REF006',
      customerName: 'Frank Miller',
      email: 'frank@example.com',
      dateJoined: '2024-01-10',
      status: 'Converted',
      commission: 67.50,
      orderValue: 449.99,
      product: 'Enterprise Plan',
      country: 'USA',
      clickDate: '2024-01-08',
      conversionDate: '2024-01-10'
    },
    {
      id: 'REF007',
      customerName: 'Grace Lee',
      email: 'grace@example.com',
      dateJoined: '2024-01-09',
      status: 'Active',
      commission: 0,
      orderValue: 0,
      product: 'Basic Plan',
      country: 'South Korea',
      clickDate: '2024-01-09'
    },
    {
      id: 'REF008',
      customerName: 'Henry Taylor',
      email: 'henry@example.com',
      dateJoined: '2024-01-08',
      status: 'Pending',
      commission: 0,
      orderValue: 0,
      product: 'Standard Plan',
      country: 'France',
      clickDate: '2024-01-08'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Converted':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Active':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Inactive':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const handleSort = (field: keyof Referral) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredAndSortedData = useMemo(() => {
    let filtered = sampleReferrals.filter(referral => {
      const matchesStatus = filterStatus === 'all' || referral.status.toLowerCase() === filterStatus.toLowerCase();
      const matchesSearch = referral.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           referral.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           referral.id.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesStatus && matchesSearch;
    });

    return filtered.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (aValue === undefined && bValue === undefined) return 0;
      if (aValue === undefined) return sortDirection === 'asc' ? 1 : -1;
      if (bValue === undefined) return sortDirection === 'asc' ? -1 : 1;
      
      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filterStatus, searchTerm, sortField, sortDirection]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedData, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);

  const SortIcon = ({ field }: { field: keyof Referral }) => {
    if (sortField !== field) {
      return <span className="text-gray-400">↕️</span>;
    }
    return sortDirection === 'asc' ? <span className="text-blue-500">↑</span> : <span className="text-blue-500">↓</span>;
  };

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Search referrals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`px-3 py-2 border rounded-md text-sm ${
              isDarkMode
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            }`}
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className={`px-3 py-2 border rounded-md text-sm ${
              isDarkMode
                ? 'bg-gray-700 border-gray-600 text-white'
                : 'bg-white border-gray-300 text-gray-900'
            }`}
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="converted">Converted</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-600 dark:text-gray-400">Show:</span>
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className={`px-2 py-1 border rounded text-sm ${
              isDarkMode
                ? 'bg-gray-700 border-gray-600 text-white'
                : 'bg-white border-gray-300 text-gray-900'
            }`}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <tr>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={() => handleSort('id')}
              >
                <div className="flex items-center space-x-1">
                  <span>Referral ID</span>
                  <SortIcon field="id" />
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={() => handleSort('customerName')}
              >
                <div className="flex items-center space-x-1">
                  <span>Customer</span>
                  <SortIcon field="customerName" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Product
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={() => handleSort('dateJoined')}
              >
                <div className="flex items-center space-x-1">
                  <span>Date Joined</span>
                  <SortIcon field="dateJoined" />
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={() => handleSort('status')}
              >
                <div className="flex items-center space-x-1">
                  <span>Status</span>
                  <SortIcon field="status" />
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={() => handleSort('orderValue')}
              >
                <div className="flex items-center space-x-1">
                  <span>Order Value</span>
                  <SortIcon field="orderValue" />
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={() => handleSort('commission')}
              >
                <div className="flex items-center space-x-1">
                  <span>Commission</span>
                  <SortIcon field="commission" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className={`divide-y divide-gray-200 dark:divide-gray-700 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            {paginatedData.map((referral) => (
              <tr key={referral.id} className={`hover:${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {referral.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {referral.customerName}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {referral.email}
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">
                      {referral.country}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {referral.product}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  <div>
                    <div>{new Date(referral.dateJoined).toLocaleDateString()}</div>
                    {referral.conversionDate && (
                      <div className="text-xs text-green-600 dark:text-green-400">
                        Converted: {new Date(referral.conversionDate).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(referral.status)}`}>
                    {referral.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {referral.orderValue ? `$${referral.orderValue.toFixed(2)}` : '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600 dark:text-green-400">
                  {referral.commission > 0 ? `$${referral.commission.toFixed(2)}` : '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                      View
                    </button>
                    <button className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300">
                      Contact
                    </button>
                    {referral.status === 'Converted' && (
                      <button className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300">
                        Receipt
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredAndSortedData.length)} of {filteredAndSortedData.length} results
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            First
          </button>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Previous
          </button>
          
          <div className="flex space-x-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 text-sm border rounded-md ${
                    currentPage === page
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>
          
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-sm border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Next
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-sm border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
