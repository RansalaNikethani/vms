import InputField from "../InputField";
import { toast } from 'react-toastify';
import axios from 'axios';

const PersonalDetails = ({ visitorData, setVisitorData, onNext }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVisitorData({ ...visitorData, [name]: value });
  };

  const handleRegister = async () => {
    const { fullName, phone, nic, company, email } = visitorData;

    if (!fullName || !phone || !nic || !company || !email) {
      toast.error('Please fill in all required fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/visitors', visitorData);
      toast.success('Visitor registered successfully!');
      setVisitorData(response.data); // update with saved visitor from backend
      onNext(); // ✅ Navigate to Visiting Purpose
    } catch (error) {
      console.error(error);
      toast.error('Failed to register visitor. Please try again.');
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-gray-800">📝 Register New Visitor</h3>
      <p className="text-gray-600">Please enter the visitor's personal details:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          type="text"
          id="fullName"
          name="fullName"
          label="Full Name"
          placeholder="Enter full name"
          value={visitorData.fullName || ''}
          onChange={handleChange}
        />
        <InputField
          type="text"
          id="phone"
          name="phone"
          label="Contact Number"
          placeholder="Enter phone number"
          value={visitorData.phone || ''}
          onChange={handleChange}
        />
        <InputField
          type="text"
          id="nic"
          name="nic"
          label="NIC"
          placeholder="Enter NIC number"
          value={visitorData.nic || ''}
          onChange={handleChange}
        />
        <InputField
          type="text"
          id="company"
          name="company"
          label="Company Name"
          placeholder="Enter company name"
          value={visitorData.company || ''}
          onChange={handleChange}
        />
        <InputField
          type="email"
          id="email"
          name="email"
          label="Email Address"
          placeholder="Enter email address"
          value={visitorData.email || ''}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={handleRegister}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          ✅ Register Visitor
        </button>
      </div>
    </div>
  );
};

export default PersonalDetails;
