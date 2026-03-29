import React, { useState, useEffect } from 'react';
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  FolderGit2, 
  Wrench, 
  Layers,
  BarChart3,
  ExternalLink,
  RefreshCw
} from 'lucide-react';
import axios from 'axios';

function Dashboard() {
  const [stats, setStats] = useState({
    education: 0,
    experience: 0,
    projects: 0,
    skills: 0,
    services: 0,
    stats: 0
  });
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [profileRes, eduRes, expRes, projRes, skillRes, servRes, statRes] = await Promise.all([
        axios.get('/profile'),
        axios.get('/education'),
        axios.get('/experience'),
        axios.get('/projects'),
        axios.get('/skills'),
        axios.get('/services'),
        axios.get('/stats')
      ]);

      setProfile(profileRes.data);
      setStats({
        education: eduRes.data.length,
        experience: expRes.data.length,
        projects: projRes.data.length,
        skills: skillRes.data.length,
        services: servRes.data.length,
        stats: statRes.data.length
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const cards = [
    { label: 'Education', count: stats.education, icon: GraduationCap, color: 'from-sky-500 to-cyan-500' },
    { label: 'Experience', count: stats.experience, icon: Briefcase, color: 'from-cyan-500 to-blue-500' },
    { label: 'Projects', count: stats.projects, icon: FolderGit2, color: 'from-blue-500 to-sky-500' },
    { label: 'Skills', count: stats.skills, icon: Wrench, color: 'from-sky-500 to-cyan-500' },
    { label: 'Services', count: stats.services, icon: Layers, color: 'from-cyan-500 to-orange-500' },
    { label: 'Stats', count: stats.stats, icon: BarChart3, color: 'from-orange-500 to-sky-500' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Dashboard</h2>
          <p className="text-neutral-400">Manage your portfolio content</p>
        </div>
        <button
          onClick={fetchData}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-all disabled:opacity-50"
        >
          <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
          Refresh
        </button>
      </div>

      {/* Profile Summary */}
      {profile && (
        <div className="bg-gradient-to-r from-sky-900/30 to-cyan-900/30 border border-sky-500/30 rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-2xl flex items-center justify-center">
              <User size={32} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
              <p className="text-sky-400">{profile.title}</p>
            </div>
            <a
              href="http://localhost:5173"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg transition-all"
            >
              View Portfolio <ExternalLink size={16} />
            </a>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-all"
          >
            <div className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-4`}>
              <card.icon size={24} className="text-white" />
            </div>
            <p className="text-3xl font-black text-white">{card.count}</p>
            <p className="text-neutral-400 text-sm">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <QuickLink 
            title="Edit Profile" 
            description="Update your personal information" 
            href="/profile"
            color="sky"
          />
          <QuickLink 
            title="Add Project" 
            description="Showcase your latest work" 
            href="/projects"
            color="cyan"
          />
          <QuickLink 
            title="Update Skills" 
            description="Keep your tech stack current" 
            href="/skills"
            color="blue"
          />
        </div>
      </div>
    </div>
  );
}

function QuickLink({ title, description, href, color }) {
  const colorClasses = {
    sky: 'from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400',
    cyan: 'from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400',
    blue: 'from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400',
    orange: 'from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400',
  };

  return (
    <a
      href={href}
      className={`block p-4 bg-gradient-to-r ${colorClasses[color]} rounded-xl text-white transition-all`}
    >
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-sm opacity-80">{description}</p>
    </a>
  );
}

export default Dashboard;
