// components/NavTabs.jsx
import { NavLink } from 'react-router-dom';
import RegisterVisitor from '../pages/RegisterVisitor';

const NavTabs = () => (
  <nav className="flex space-x-4 mb-6">
    <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>Dashboard</NavLink>
    <NavLink to="/register" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>Register Visitor</NavLink>
    <NavLink to="/active" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>Active Visitors</NavLink>
    <NavLink to="/reports" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>Reports</NavLink>
  </nav>
);

export default NavTabs;
