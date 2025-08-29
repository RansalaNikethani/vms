import BackArrowIcon from '../iconset/BackArrowIcon';
import NextArrowIcon from '../iconset/NextArrowIcon';

const divisions = [
  { id: 1, name: 'Information Unit' },
  { id: 2, name: 'Finance Division' },
  { id: 3, name: 'Supply Unit' },
  { id: 4, name: 'Stores' },
  { id: 5, name: 'Human Resources' },
  { id: 6, name: 'Legal' },
  { id: 7, name: 'Advisory' },
  { id: 8, name: 'Industry Services' },
  { id: 9, name: 'Development Division' },
];

const SelectDivision = ({ visitorData, setVisitorData, onNext, onBack }) => {
  const handleSelect = (division) => {
    setVisitorData({ ...visitorData, divisionId: division.id, divisionName: division.name });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-gray-800">🏢 Select Division</h3>
      <p className="text-gray-600">Choose the division the visitor is referring to:</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {divisions.map((division) => (
          <button
            key={division.id}
            onClick={() => handleSelect(division)}
            className={`px-4 py-3 rounded-lg border transition-all duration-200 shadow-sm text-left ${
              visitorData.divisionId === division.id
                ? 'bg-blue-500 text-white border-blue-600'
                : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}
          >
            <span className="font-bold">#{division.id}</span> — {division.name}
          </button>
        ))}
      </div>

      {visitorData.divisionId && (
        <div className="mt-6 bg-gray-50 p-4 rounded shadow">
          <p className="text-gray-700">
            Selected Division: <strong>#{visitorData.divisionId} — {visitorData.divisionName}</strong>
          </p>
        </div>
      )}

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
        >
          {/* Back Arrow Icon */}
          <BackArrowIcon />
          Back
        </button>
        <button
          onClick={onNext}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Next
          {/* Next Arrow Icon */}
          <NextArrowIcon />

        </button>
      </div>
    </div>
  );
};

export default SelectDivision;
