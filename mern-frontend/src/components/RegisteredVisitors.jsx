import { useEffect, useState } from 'react';
import axios from 'axios';

const RegisteredVisitors = () => {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/visitors')
      .then((res) => setVisitors(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">🗂️ Registered Visitors</h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">NIC</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Company</th>
              <th className="px-4 py-2">Registered At</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map((v) => (
              <tr key={v._id} className="border-b">
                <td className="px-4 py-2">{v.fullName}</td>
                <td className="px-4 py-2">{v.nic}</td>
                <td className="px-4 py-2">{v.phone}</td>
                <td className="px-4 py-2">{v.email}</td>
                <td className="px-4 py-2">{v.company}</td>
                <td className="px-4 py-2">{new Date(v.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisteredVisitors;
