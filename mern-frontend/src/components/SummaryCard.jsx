import PropTypes from 'prop-types';

const SummaryCard = ({ icon, label, value, color }) => {
  return (
    <div className={`flex items-center p-4 rounded-lg shadow-md bg-white border-l-4 ${color}`}>
      <div className="text-2xl mr-4">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-xl font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  );
};

SummaryCard.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  color: PropTypes.string, // e.g. 'border-blue-500'
};

export default SummaryCard;
