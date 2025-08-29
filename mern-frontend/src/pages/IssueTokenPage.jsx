import { useState } from 'react';
import NavTabs from '../components/NavTabs';
import VisitorTypeSelector from '../components/VisitorTypeSelector';
import PersonalDetails from '../components/steps/PersonalDetails';
import NICValidation from '../components/NICValidation';
import VisitingPurpose from '../components/steps/VisitingPurpose';
import SelectDivision from '../components/steps/SelectDivision';
import IssueToken from '../components/steps/IssueToken';
import NotifyEmployee from '../components/steps/NotifyEmployee';
import CheckCircleIcon from '../components/iconset/CheckCircleIcon';
import { toast } from 'react-toastify';

const steps = [
  { id: 1, label: 'Personal Details' },
  { id: 2, label: 'Visiting Purpose' },
  { id: 3, label: 'Select Division' },
  { id: 4, label: 'Issue Token' },
  { id: 5, label: 'Notify Employee' },
];


const IssueTokenPage = () => {
  const [step, setStep] = useState(1);
  const [visitorType, setVisitorType] = useState(null); // 'new' or 'pre'
  const [visitorData, setVisitorData] = useState({});
  const [completedSteps, setCompletedSteps] = useState([]);

  const markStepComplete = (stepId) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps((prev) => [...prev, stepId]);
    }
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const renderStepComponent = () => {
    if (!visitorType) return null;

    if (visitorType === 'new' && step === 1) {
      return (
        <PersonalDetails
          visitorData={visitorData}
          setVisitorData={setVisitorData}
          onNext={() => {
            markStepComplete(1);
            nextStep();
          }}
        />
      );
    }

    if (visitorType === 'pre' && step === 1) {
      return (
        <NICValidation
          visitorData={visitorData}
          setVisitorData={setVisitorData}
          onValidated={() => {
            markStepComplete(1);
            nextStep();
          }}
        />
      );
    }

    if (step === 2) {
      return (
        <VisitingPurpose
          visitorData={visitorData}
          setVisitorData={setVisitorData}
          onNext={() => {
            markStepComplete(2);
            nextStep();
          }}
          onBack={prevStep}
        />
      );
    }

    if (step === 3) {
      return (
        <SelectDivision
          visitorData={visitorData}
          setVisitorData={setVisitorData}
          onNext={() => {
            markStepComplete(3);
            nextStep();
          }}
          onBack={prevStep}
        />
      );
    }

    if (step === 4) {
      return (
        <IssueToken
          visitorData={visitorData}
          onNext={() => {
            markStepComplete(4);
            nextStep(); // ✅ This moves to step 5
          }}
          onBack={prevStep}
        />
      );
    }

    if (step === 5) {
      return (
        <NotifyEmployee
          visitorData={visitorData}
          onBack={prevStep}
        />
      );
    }

    return null;
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen rounded-2xl">
      {/* Visitor Type Selector */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Visitor Type</h2>

        {!visitorType ? (
          <VisitorTypeSelector
            onSelect={(type) => {
              setVisitorType(type);
              setStep(1);
              setCompletedSteps([]);
              setVisitorData({});
              toast.success(`Selected: ${type === 'new' ? 'New Visitor' : 'Pre-Registered Visitor'}`);
            }}
          />
        ) : (
          <div className="flex items-center justify-between bg-white p-4 rounded shadow">
            <p className="text-gray-700">
              Selected: <strong>{visitorType === 'new' ? 'New Visitor' : 'Pre-Registered Visitor'}</strong>
            </p>
            <button
              onClick={() => {
                setVisitorType(null);
                setStep(1);
                setCompletedSteps([]);
                setVisitorData({});
                toast.info('Visitor type reset');
              }}
              className="text-sm text-blue-500 hover:underline"
            >
              Change Visitor Type
            </button>
          </div>
        )}
      </div>

      {/* Step Tabs */}
      {visitorType && (
        <div className="flex space-x-2 mb-6">
          {steps.map((s) => {
            const isCompleted = completedSteps.includes(s.id);
            const isAccessible = s.id === step || completedSteps.includes(s.id);


            return (
              <button
                key={s.id}
                onClick={() => isAccessible && setStep(s.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 ${
                  step === s.id
                    ? 'bg-blue-500 text-white'
                    : isAccessible
                    ? 'bg-white text-gray-700 border hover:bg-blue-50'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
                disabled={!isAccessible}
              >
                {s.label}
                {isCompleted && <span className="text-green-500">
                  <CheckCircleIcon />
                </span>}
              </button>
            );
          })}
        </div>
      )}

      {/* Step Content */}
      <div className="bg-white p-4 rounded-lg shadow">{renderStepComponent()}</div>
    </div>
  );
};

export default IssueTokenPage;
