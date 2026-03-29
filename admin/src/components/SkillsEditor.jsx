import React, { useState, useEffect } from 'react';
import { Plus, Trash2, GripVertical, Save, Wrench } from 'lucide-react';
import axios from 'axios';

function SkillsEditor() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await axios.get('/skills');
      setSkills(response.data);
    } catch (error) {
      console.error('Error fetching skills:', error);
    }
  };

  const addSkill = () => {
    setSkills([...skills, {
      category: '',
      icon: 'Code2',
      gradient: 'from-sky-500 to-cyan-500',
      skills: [],
      order: skills.length
    }]);
  };

  const updateSkill = (index, field, value) => {
    const updated = [...skills];
    updated[index][field] = value;
    setSkills(updated);
  };

  const removeSkill = async (index, id) => {
    if (id) {
      try {
        await axios.delete(`/skills/${id}`);
      } catch (error) {
        console.error('Error deleting skill:', error);
      }
    }
    const updated = skills.filter((_, i) => i !== index);
    setSkills(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSaved(false);

    try {
      for (const skill of skills) {
        if (skill._id) {
          await axios.put(`/skills/${skill._id}`, skill);
        } else {
          await axios.post('/skills', skill);
        }
      }
      setSaved(true);
      fetchSkills();
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error('Error saving skills:', error);
      alert('Failed to save skills');
    } finally {
      setLoading(false);
    }
  };

  const gradients = [
    { value: 'from-sky-500 to-cyan-500', label: 'Sky to Cyan' },
    { value: 'from-cyan-500 to-sky-500', label: 'Cyan to Sky' },
    { value: 'from-cyan-500 to-blue-500', label: 'Cyan to Blue' },
    { value: 'from-blue-500 to-sky-500', label: 'Blue to Sky' },
    { value: 'from-sky-500 to-orange-500', label: 'Sky to Orange' },
    { value: 'from-cyan-500 to-orange-500', label: 'Cyan to Orange' },
    { value: 'from-orange-500 to-sky-500', label: 'Orange to Sky' },
  ];

  const icons = ['Code2', 'Terminal', 'Database', 'Cpu', 'Globe', 'Smartphone', 'Monitor', 'Server'];

  const inputClasses = "w-full px-4 py-2 bg-black border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all text-sm";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Skills</h2>
          <p className="text-neutral-400">Manage your skills and technologies</p>
        </div>
        <div className="flex items-center gap-3">
          {saved && (
            <div className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
              Saved!
            </div>
          )}
          <button
            onClick={addSkill}
            className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg transition-all"
          >
            <Plus size={18} /> Add
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {skills.map((skill, index) => (
          <div key={skill._id || index} className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="mt-2 text-neutral-600">
                <GripVertical size={20} />
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={skill.category}
                  onChange={(e) => updateSkill(index, 'category', e.target.value)}
                  className={inputClasses}
                  placeholder="Category (e.g. Frontend)"
                  required
                />
                <select
                  value={skill.icon}
                  onChange={(e) => updateSkill(index, 'icon', e.target.value)}
                  className={inputClasses}
                >
                  {icons.map(icon => (
                    <option key={icon} value={icon}>{icon}</option>
                  ))}
                </select>
                <select
                  value={skill.gradient}
                  onChange={(e) => updateSkill(index, 'gradient', e.target.value)}
                  className={inputClasses}
                >
                  {gradients.map(g => (
                    <option key={g.value} value={g.value}>{g.label}</option>
                  ))}
                </select>
                <input
                  type="text"
                  value={skill.skills?.join(', ') || ''}
                  onChange={(e) => updateSkill(index, 'skills', e.target.value.split(',').map(s => s.trim()).filter(s => s))}
                  className={inputClasses}
                  placeholder="Skills (comma separated)"
                />
              </div>
              <button
                type="button"
                onClick={() => removeSkill(index, skill._id)}
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

export default SkillsEditor;
