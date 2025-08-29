// components/NavTabs.jsx
import { NavLink } from 'react-router-dom';

const NavTabs = () => (
  <nav className="flex space-x-4 mb-6 bg-white p-4 rounded ">
    <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>Dashboard</NavLink>
    <NavLink to="/IssueTokenPage" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>Issue Token</NavLink>
    <NavLink to="/active" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>Active Visitors</NavLink>
    <NavLink to="/reports" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>Reports</NavLink>
    <NavLink to="/RegisteredVisitors" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>Registered Visitors</NavLink>
  </nav>
);

export default NavTabs;