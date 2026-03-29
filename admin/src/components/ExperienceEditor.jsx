import React, { useState, useEffect } from 'react';
import { Plus, Trash2, GripVertical, Save, Briefcase } from 'lucide-react';
import axios from 'axios';

function ExperienceEditor() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const response = await axios.get('/experience');
      setExperiences(response.data);
    } catch (error) {
      console.error('Error fetching experiences:', error);
    }
  };

  const addExperience = () => {
    setExperiences([...experiences, {
      title: '',
      company: '',
      duration: '',
      location: 'Remote',
      description: '',
      technologies: [],
      order: experiences.length
    }]);
  };

  const updateExperience = (index, field, value) => {
    const updated = [...experiences];
    updated[index][field] = value;
    setExperiences(updated);
  };

  const removeExperience = async (index, id) => {
    if (id) {
      try {
        await axios.delete(`/experience/${id}`);
      } catch (error) {
        console.error('Error deleting experience:', error);
      }
    }
    const updated = experiences.filter((_, i) => i !== index);
    setExperiences(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSaved(false);

    try {
      for (const exp of experiences) {
        if (exp._id) {
          await axios.put(`/experience/${exp._id}`, exp);
        } else {
          await axios.post('/experience', exp);
        }
      }
      setSaved(true);
      fetchExperiences();
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error('Error saving experiences:', error);
      alert('Failed to save experiences');
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = "w-full px-4 py-2 bg-black border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all text-sm";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Experience</h2>
          <p className="text-neutral-400">Manage your work experience</p>
        </div>
        <div className="flex items-center gap-3">
          {saved && (
            <div className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
              Saved!
            </div>
          )}
          <button
            onClick={addExperience}
            className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg transition-all"
          >
            <Plus size={18} /> Add
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={exp._id || index} className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="mt-2 text-neutral-600">
                <GripVertical size={20} />
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={exp.title}
                  onChange={(e) => updateExperience(index, 'title', e.target.value)}
                  className={inputClasses}
                  placeholder="Job Title"
                  required
                />
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => updateExperience(index, 'company', e.target.value)}
                  className={inputClasses}
                  placeholder="Company"
                  required
                />
                <input
                  type="text"
                  value={exp.duration}
                  onChange={(e) => updateExperience(index, 'duration', e.target.value)}
                  className={inputClasses}
                  placeholder="Duration (e.g. Sep 2024 - Nov 2024)"
                  required
                />
                <input
                  type="text"
                  value={exp.location}
                  onChange={(e) => updateExperience(index, 'location', e.target.value)}
                  className={inputClasses}
                  placeholder="Location"
                />
                <textarea
                  value={exp.description}
                  onChange={(e) => updateExperience(index, 'description', e.target.value)}
                  className={`${inputClasses} min-h-[80px] resize-none`}
                  placeholder="Job description..."
                  rows={3}
                />
                <input
                  type="text"
                  value={exp.technologies?.join(', ') || ''}
                  onChange={(e) => updateExperience(index, 'technologies', e.target.value.split(',').map(t => t.trim()).filter(t => t))}
                  className={inputClasses}
                  placeholder="Technologies (comma separated)"
                />
              </div>
              <button
                type="button"
                onClick={() => removeExperience(index, exp._id)}
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

export default ExperienceEditor;
