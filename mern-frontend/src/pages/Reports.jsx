import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import SummaryCard from '../components/SummaryCard'; // adjust path if needed

const Reports = () => {
  const [visitorLogs, setVisitorLogs] = useState([]);
  const [filter, setFilter] = useState({ division: '', status: '', search: '' });

  useEffect(() => {
    // Simulated data fetch
    const logs = [
      {
        id: 1,
        fullName: 'John Dee',
        nic: '123456789V',
        phone: '0771234567',
        email: 'john@example.com',
        company: 'ABC Corp',
        purpose: 'Business Meeting',
        division: 'Finance Division',
        employee: 'Dilani Fernando',
        status: 'Completed',
        entryTime: '2025-08-28 10:15 AM',
        exitTime: '2025-08-28 11:30 AM',
        tokenIssued: true,
      },
      // Add more sample logs here
    ];
    setVisitorLogs(logs);
  }, []);

  const getMostVisitedDivision = (logs) => {
    const count = {};
    logs.forEach((log) => {
      count[log.division] = (count[log.division] || 0) + 1;
    });
    const sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
    return sorted[0]?.[0] || '—';
  };

  const filteredLogs = visitorLogs.filter((log) => {
    const matchesDivision = filter.division ? log.division === filter.division : true;
    const matchesStatus = filter.status ? log.status === filter.status : true;
    const matchesSearch = filter.search
      ? log.fullName.toLowerCase().includes(filter.search.toLowerCase()) ||
        log.nic.includes(filter.search)
      : true;
    return matchesDivision && matchesStatus && matchesSearch;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">📊 Visitor Reports</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <SummaryCard
          icon="🧍"
          label="Total Visitors Today"
          value={visitorLogs.length}
          color="border-blue-500"
        />
        <SummaryCard
          icon="🟢"
          label="Active Visits"
          value={visitorLogs.filter((v) => v.status === 'Active').length}
          color="border-green-500"
        />
        <SummaryCard
          icon="🏢"
          label="Most Visited Division"
          value={getMostVisitedDivision(visitorLogs)}
          color="border-purple-500"
        />
        <SummaryCard
          icon="🎟️"
          label="Tokens Issued"
          value={visitorLogs.filter((v) => v.tokenIssued).length}
          color="border-yellow-500"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={filter.division}
          onChange={(e) => setFilter({ ...filter, division: e.target.value })}
          className="px-4 py-2 border rounded-md"
        >
          <option value="">All Divisions</option>
          <option value="Finance Division">Finance Division</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Legal">Legal</option>
          {/* Add more divisions */}
        </select>

        <select
          value={filter.status}
          onChange={(e) => setFilter({ ...filter, status: e.target.value })}
          className="px-4 py-2 border rounded-md"
        >
          <option value="">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <input
          type="text"
          placeholder="Search by name or NIC"
          value={filter.search}
          onChange={(e) => setFilter({ ...filter, search: e.target.value })}
          className="px-4 py-2 border rounded-md flex-1"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">NIC</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Company</th>
              <th className="px-4 py-2">Purpose</th>
              <th className="px-4 py-2">Division</th>
              <th className="px-4 py-2">Employee</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Entry</th>
              <th className="px-4 py-2">Exit</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.map((log) => (
              <tr key={log.id} className="border-b">
                <td className="px-4 py-2">{log.fullName}</td>
                <td className="px-4 py-2">{log.nic}</td>
                <td className="px-4 py-2">{log.phone}</td>
                <td className="px-4 py-2">{log.company}</td>
                <td className="px-4 py-2">{log.purpose}</td>
                <td className="px-4 py-2">{log.division}</td>
                <td className="px-4 py-2">{log.employee}</td>
                <td className="px-4 py-2">{log.status}</td>
                <td className="px-4 py-2">{log.entryTime}</td>
                <td className="px-4 py-2">{log.exitTime || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
