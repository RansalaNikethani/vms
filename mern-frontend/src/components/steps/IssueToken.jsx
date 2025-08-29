import { useRef } from 'react';
import { toast } from 'react-toastify';
import BackArrowIcon from '../iconset/BackArrowIcon';
import PersonIcon from '../iconset/PersonIcon';
import PrintIcon from '../iconset/PrintIcon';
import CheckCircleIcon from '../iconset/CheckCircleIcon';

const IssueToken = ({ visitorData, onNext, onBack }) => {
  const printRef = useRef();

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Visitor Token</title>');
    printWindow.document.write('<style>body{font-family:sans-serif;padding:20px;} h2{margin-bottom:10px;} p{margin:4px 0;}</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(printContents);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  const currentTime = new Date().toLocaleString();

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-gray-800">🎟️ Issue Visitor Token</h3>
      <p className="text-gray-600">Review the visitor details before issuing the token:</p>

      {/* Printable Section */}
      <div ref={printRef} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div>
          <h4 className="text-lg font-semibold text-gray-700 mb-2">
            {/* person icon */}
            <PersonIcon />
          Visitor Information</h4>
          <p><strong>Name:</strong> {visitorData.fullName}</p>
          <p><strong>NIC:</strong> {visitorData.nic || '—'}</p>
          <p><strong>Phone:</strong> {visitorData.phone}</p>
          <p><strong>Email:</strong> {visitorData.email}</p>
          <p><strong>Company:</strong> {visitorData.company}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-700 mb-2">
            {/*info icon*/}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
          Visit Details</h4>
          <p><strong>Purpose:</strong> {visitorData.purpose}</p>
          <p><strong>Division:</strong> #{visitorData.divisionId} — {visitorData.divisionName}</p>
          <p><strong>Issued At:</strong> {currentTime}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
        >
          {/* back arrow svg */}
          <BackArrowIcon />
          Back
        </button>
        <div className="flex space-x-4">
          <button
            onClick={handlePrint}
            className="px-6 py-2 bg-yellow-500 text-gray-800 rounded-md hover:bg-yellow-600 transition "
          >
          {/* printer icon */}
          <PrintIcon />
           Print Token
          </button>
          <button
            onClick={() => {
              toast.success('Token issued successfully!');
              onNext();
            }}
            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition align-center"
          >
            <CheckCircleIcon />
            Issue Token
          </button>
          
        </div>
      </div>
    </div>
    
  );
};

export default IssueToken;
