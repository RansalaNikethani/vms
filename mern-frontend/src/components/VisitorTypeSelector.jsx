const VisitorTypeSelector = ({ onSelect }) => (
  <div className="space-y-4">
    
    <button onClick={() => onSelect('new')} className="btn">New Visitor</button>
    <button onClick={() => onSelect('pre')} className="btn">Pre-Registered Visitor</button>
  </div>
);

export default VisitorTypeSelector;
