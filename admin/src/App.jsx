import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  User, 
  GraduationCap, 
  Briefcase, 
  FolderGit2, 
  Wrench, 
  Layers,
  BarChart3,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import axios from 'axios';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProfileEditor from './components/ProfileEditor';
import EducationEditor from './components/EducationEditor';
import ExperienceEditor from './components/ExperienceEditor';
import ProjectsEditor from './components/ProjectsEditor';
import SkillsEditor from './components/SkillsEditor';
import ServicesEditor from './components/ServicesEditor';
import StatsEditor from './components/StatsEditor';

// API base URL
const API_URL = 'http://localhost:5000/api';

axios.defaults.baseURL = API_URL;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { id: 'profile', label: 'Profile', icon: User, path: '/profile' },
    { id: 'education', label: 'Education', icon: GraduationCap, path: '/education' },
    { id: 'experience', label: 'Experience', icon: Briefcase, path: '/experience' },
    { id: 'projects', label: 'Projects', icon: FolderGit2, path: '/projects' },
    { id: 'skills', label: 'Skills', icon: Wrench, path: '/skills' },
    { id: 'services', label: 'Services', icon: Layers, path: '/services' },
    { id: 'stats', label: 'Stats', icon: BarChart3, path: '/stats' },
  ];

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-black flex">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-sky-600 rounded-lg text-white"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside 
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-neutral-900 border-r border-neutral-800 transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-black bg-gradient-to-r from-sky-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent">
            Admin Panel
          </h1>
          <p className="text-neutral-500 text-sm mt-1">Portfolio Manager</p>
        </div>

        <nav className="px-4 pb-4">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              onClick={() => {
                setActiveTab(item.id);
                setIsSidebarOpen(false);
              }}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all mb-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-600 to-cyan-600 text-white'
                    : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'
                }`
              }
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-neutral-800">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-400 hover:bg-red-500/10 transition-all"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 min-h-screen overflow-y-auto">
        <div className="p-4 lg:p-8 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<ProfileEditor />} />
            <Route path="/education" element={<EducationEditor />} />
            <Route path="/experience" element={<ExperienceEditor />} />
            <Route path="/projects" element={<ProjectsEditor />} />
            <Route path="/skills" element={<SkillsEditor />} />
            <Route path="/services" element={<ServicesEditor />} />
            <Route path="/stats" element={<StatsEditor />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
