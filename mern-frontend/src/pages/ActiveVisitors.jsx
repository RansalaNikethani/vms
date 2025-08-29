import { useState, useEffect } from 'react';

const ActiveVisitors = () => {
  const [activeVisitors, setActiveVisitors] = useState([]);

  useEffect(() => {
    // Simulated fetch of active visitors
    const visitors = [
      {
        id: 1,
        fullName: 'Jane Silva',
        nic: '987654321V',
        phone: '0779876543',
        company: 'XYZ Ltd',
        purpose: 'Interview',
        division: 'Human Resources',
        employee: 'Harsha Wijesinghe',
        entryTime: '2025-08-28 09:45 AM',
        tokenNumber: 'T-1023',
      },
      // Add more sample visitors
    ];
    setActiveVisitors(visitors);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">🟢 Active Visitors</h2>

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
              <th className="px-4 py-2">Entry Time</th>
              <th className="px-4 py-2">Token No.</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {activeVisitors.map((visitor) => (
              <tr key={visitor.id} className="border-b">
                <td className="px-4 py-2">{visitor.fullName}</td>
                <td className="px-4 py-2">{visitor.nic}</td>
                <td className="px-4 py-2">{visitor.phone}</td>
                <td className="px-4 py-2">{visitor.company}</td>
                <td className="px-4 py-2">{visitor.purpose}</td>
                <td className="px-4 py-2">{visitor.division}</td>
                <td className="px-4 py-2">{visitor.employee}</td>
                <td className="px-4 py-2">{visitor.entryTime}</td>
                <td className="px-4 py-2">{visitor.tokenNumber}</td>
                <td className="px-4 py-2 space-x-2">
                  <button className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-xs">
                    Mark as Exited
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveVisitors;
