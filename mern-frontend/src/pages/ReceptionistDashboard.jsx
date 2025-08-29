import DashboardCard from '../components/DashboardCard';
import NavTabs from '../components/NavTabs';
import NotificationList from '../components/NotificationList';


const ReceptionistDashboard = () => {
  

  return (
    <div className="min-h-screen bg-gray-100 p-6 rounded-2xl">
  

    


      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <DashboardCard title="Today's Visitors" value="2" />
        <DashboardCard title="Active Visitors" value="1" />
        <DashboardCard title="Notifications" value="1" />
        <DashboardCard title="Avg. Visit Time" value="2.5h" />
      </div>

      <NotificationList
        notifications={[
          {
            message: 'Sarah Johnson has been notified about visitor: John Doe',
            time: '8:11:09 AM',
          },
        ]}
      />
    </div>
  );
};

export default ReceptionistDashboard;