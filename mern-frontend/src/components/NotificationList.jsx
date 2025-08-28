const NotificationList = ({ notifications }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Notifications</h3>
    <ul className="space-y-2">
      {notifications.map((note, idx) => (
        <li key={idx} className="text-gray-700">
          <span className="font-medium">{note.message}</span>
          <span className="block text-sm text-gray-500">{note.time}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default NotificationList;