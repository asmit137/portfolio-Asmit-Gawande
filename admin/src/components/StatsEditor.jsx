import React, { useState, useEffect } from 'react';
import { Plus, Trash2, GripVertical, Save, BarChart3 } from 'lucide-react';
import axios from 'axios';

function StatsEditor() {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await axios.get('/stats');
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const addStat = () => {
    setStats([...stats, {
      value: '',
      label: '',
      icon: 'Briefcase',
      order: stats.length
    }]);
  };

  const updateStat = (index, field, value) => {
    const updated = [...stats];
    updated[index][field] = value;
    setStats(updated);
  };

  const removeStat = async (index, id) => {
    if (id) {
      try {
        await axios.delete(`/stats/${id}`);
      } catch (error) {
        console.error('Error deleting stat:', error);
      }
    }
    const updated = stats.filter((_, i) => i !== index);
    setStats(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSaved(false);

    try {
      for (const stat of stats) {
        if (stat._id) {
          await axios.put(`/stats/${stat._id}`, stat);
        } else {
          await axios.post('/stats', stat);
        }
      }
      setSaved(true);
      fetchStats();
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error('Error saving stats:', error);
      alert('Failed to save stats');
    } finally {
      setLoading(false);
    }
  };

  const icons = ['Briefcase', 'Code2', 'GraduationCap', 'Zap', 'Award', 'Star', 'Heart', 'Calendar', 'Clock'];

  const inputClasses = "w-full px-4 py-2 bg-black border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all text-sm";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Stats</h2>
          <p className="text-neutral-400">Manage your statistics section</p>
        </div>
        <div className="flex items-center gap-3">
          {saved && (
            <div className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
              Saved!
            </div>
          )}
          <button
            onClick={addStat}
            className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg transition-all"
          >
            <Plus size={18} /> Add
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {stats.map((stat, index) => (
          <div key={stat._id || index} className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="mt-2 text-neutral-600">
                <GripVertical size={20} />
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  value={stat.value}
                  onChange={(e) => updateStat(index, 'value', e.target.value)}
                  className={inputClasses}
                  placeholder="Value (e.g. 5+)"
                  required
                />
                <input
                  type="text"
                  value={stat.label}
                  onChange={(e) => updateStat(index, 'label', e.target.value)}
                  className={inputClasses}
                  placeholder="Label (e.g. Projects)"
                  required
                />
                <select
                  value={stat.icon}
                  onChange={(e) => updateStat(index, 'icon', e.target.value)}
                  className={inputClasses}
                >
                  {icons.map(icon => (
                    <option key={icon} value={icon}>{icon}</option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                onClick={() => removeStat(index, stat._id)}
                className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}

        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all disabled:opacity-50"
        >
          <Save size={18} />
          {loading ? 'Saving...' : 'Save All Changes'}
        </button>
      </form>
    </div>
  );
}

export default StatsEditor;
