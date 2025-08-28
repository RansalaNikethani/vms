// components/DashboardLayout.jsx
import NavTabs from './NavTabs';

const DashboardLayout = ({ children }) => {
  const currentDate = new Date().toLocaleString();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Visitor Management System</h1>
          <p className="text-gray-600 text-lg">Receptionist Dashboard</p>
        </div>
        <div className="text-sm text-gray-600">{currentDate}</div>
      </header>

      <NavTabs />

      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
