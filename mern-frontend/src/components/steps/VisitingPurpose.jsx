import { useState } from 'react';
import BackArrowIcon from '../iconset/BackArrowIcon';
import NextArrowIcon from '../iconset/NextArrowIcon';

const VisitingPurpose = ({ visitorData, setVisitorData, onNext, onBack }) => {
  const [customReason, setCustomReason] = useState('');

  const purposes = [
    'Business Meeting',
    'Interview',
    'Delivery',
    'Maintenance/Repair',
    'Guest Speaker',
    'Training Session',
    'Client Visit',
    'Vendor Appointment',
    'Facility Tour',
    'Personal Visit',
    'Government Official',
    'Emergency Access',
    'Other',
  ];

  const handleSelect = (reason) => {
    setVisitorData({ ...visitorData, purpose: reason });
    if (reason !== 'Other') setCustomReason('');
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-gray-800">🎯 Visiting Purpose</h3>
      <p className="text-gray-600">Please select the reason for the visitor’s visit:</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {purposes.map((reason) => (
          <button
            key={reason}
            onClick={() => handleSelect(reason)}
            className={`px-4 py-3 rounded-lg border transition-all duration-200 shadow-sm ${
              visitorData.purpose === reason
                ? 'bg-blue-500 text-white border-blue-600'
                : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}
          >
            {reason}
          </button>
        ))}
      </div>

      {visitorData.purpose === 'Other' && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Custom Reason</label>
          <input
            type="text"
            placeholder="Enter custom reason"
            value={customReason}
            onChange={(e) => setCustomReason(e.target.value)}
            onBlur={() => setVisitorData({ ...visitorData, purpose: customReason })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      )}

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
        >
          <BackArrowIcon />
          Back
        </button>
        <button
          onClick={onNext}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Next 
          <NextArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default VisitingPurpose;
