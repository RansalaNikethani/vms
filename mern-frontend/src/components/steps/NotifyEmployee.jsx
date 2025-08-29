import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import CheckCircleIcon from '../iconset/CheckCircleIcon';
import BackArrowIcon from '../iconset/BackArrowIcon';

// Simulated employee data by division
const employeeDirectory = {
  1: ['Nuwan Perera', 'Chamika Silva'],
  2: ['Dilani Fernando', 'Ruwan Jayasuriya'],
  3: ['Tharindu Senanayake', 'Kavindi Rajapaksha'],
  4: ['Sajith Kumara', 'Nadeesha Fernando'],
  5: ['Harsha Wijesinghe', 'Nimali Jayawardena'],
  6: ['Lakmal Abeykoon', 'Ishara Gunasekara'],
  7: ['Chathura Dias', 'Roshini Perera'],
  8: ['Dinesh Samarasinghe', 'Shanika Pathirana'],
  9: ['Kasun Rathnayake', 'Nadeeka Silva'],
};

const NotifyEmployee = ({ visitorData, onBack }) => {
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [note, setNote] = useState('');
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const divisionId = visitorData.divisionId;
    if (divisionId && employeeDirectory[divisionId]) {
      setEmployees(employeeDirectory[divisionId]);
    } else {
      setEmployees([]);
    }
  }, [visitorData.divisionId]);

  const handleNotify = () => {
    if (!selectedEmployee) {
      toast.error('Please select an employee to notify.');
      return;
    }

    toast.success(`Notification sent to ${selectedEmployee}`);
    console.log('Notification details:', {
      employee: selectedEmployee,
      division: visitorData.divisionName,
      visitor: visitorData.fullName,
      note,
    });

    // You can trigger backend logic here if needed
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-gray-800">📣 Notify Employee</h3>
      <p className="text-gray-600">Select an employee from the <strong>{visitorData.divisionName}</strong> division to notify:</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {employees.map((emp) => (
          <button
            key={emp}
            onClick={() => setSelectedEmployee(emp)}
            className={`px-4 py-2 rounded-lg border transition ${
              selectedEmployee === emp
                ? 'bg-blue-500 text-white border-blue-600'
                : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}
          >
            {emp}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Optional Note</label>
        <textarea
          rows={3}
          placeholder="Add a message for the employee..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
        >
          <BackArrowIcon /> Back
        </button>
        <button
          onClick={handleNotify}
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          <CheckCircleIcon /> Notify Employee
        </button>
      </div>
    </div>
  );
};

export default NotifyEmployee;
