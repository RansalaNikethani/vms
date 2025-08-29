import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const NICValidation = ({ visitorData, setVisitorData, onValidated }) => {
  const [isValidated, setIsValidated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleValidate = async () => {
    if (!visitorData.nic) {
      toast.error('Please enter a NIC number.');
      return;
    }

    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:5000/api/visitors/check-nic/${visitorData.nic}`);
      if (res.data.exists) {
        const retrievedData = res.data.visitor;
        setVisitorData({ ...visitorData, ...retrievedData });
        setIsValidated(true);
        toast.success('Visitor found!');
      } else {
        toast.error('Visitor not found!');
        setIsValidated(false);
      }
    } catch (err) {
      toast.error('Error checking NIC');
      console.error(err);
      setIsValidated(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <input
        name="nic"
        placeholder="Enter NIC"
        value={visitorData.nic || ''}
        onChange={(e) => setVisitorData({ ...visitorData, nic: e.target.value })}
        className="input"
      />
      <button onClick={handleValidate} className="btn" disabled={loading}>
        {loading ? 'Validating...' : 'Validate NIC'}
      </button>

      {isValidated && (
        <div className="mt-6 bg-gray-50 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Visitor Details</h3>
          <p><strong>Name:</strong> {visitorData.fullName}</p>
          <p><strong>Email:</strong> {visitorData.email}</p>
          <p><strong>Phone:</strong> {visitorData.phone}</p>
          <p><strong>Company:</strong> {visitorData.company}</p>
          <button onClick={onValidated} className="mt-4 btn">Next</button>
        </div>
      )}
    </div>
  );
};

export default NICValidation;
