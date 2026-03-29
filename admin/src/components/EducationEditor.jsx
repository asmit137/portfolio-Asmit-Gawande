import React, { useState, useEffect } from 'react';
import { Plus, Trash2, GripVertical, Save, GraduationCap } from 'lucide-react';
import axios from 'axios';

function EducationEditor() {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetchEducation();
  }, []);

  const fetchEducation = async () => {
    try {
      const response = await axios.get('/education');
      setEducation(response.data);
    } catch (error) {
      console.error('Error fetching education:', error);
    }
  };

  const addEducation = () => {
    setEducation([...education, {
      degree: '',
      institution: '',
      duration: '',
      grade: '',
      icon: 'Terminal',
      color: 'cyan',
      order: education.length
    }]);
  };

  const updateEducation = (index, field, value) => {
    const updated = [...education];
    updated[index][field] = value;
    setEducation(updated);
  };

  const removeEducation = async (index, id) => {
    if (id) {
      try {
        await axios.delete(`/education/${id}`);
      } catch (error) {
        console.error('Error deleting education:', error);
      }
    }
    const updated = education.filter((_, i) => i !== index);
    setEducation(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSaved(false);

    try {
      for (const edu of education) {
        if (edu._id) {
          await axios.put(`/education/${edu._id}`, edu);
        } else {
          await axios.post('/education', edu);
        }
      }
      setSaved(true);
      fetchEducation();
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error('Error saving education:', error);
      alert('Failed to save education');
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = "w-full px-4 py-2 bg-black border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all text-sm";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Education</h2>
          <p className="text-neutral-400">Manage your educational background</p>
        </div>
        <div className="flex items-center gap-3">
          {saved && (
            <div className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
              Saved!
            </div>
          )}
          <button
            onClick={addEducation}
            className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg transition-all"
          >
            <Plus size={18} /> Add
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {education.map((edu, index) => (
          <div key={edu._id || index} className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="mt-2 text-neutral-600">
                <GripVertical size={20} />
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                  className={inputClasses}
                  placeholder="Degree (e.g. B.Tech Computer Engineering)"
                  required
                />
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                  className={inputClasses}
                  placeholder="Institution"
                  required
                />
                <input
                  type="text"
                  value={edu.duration}
                  onChange={(e) => updateEducation(index, 'duration', e.target.value)}
                  className={inputClasses}
                  placeholder="Duration (e.g. 2021 - 2025)"
                  required
                />
                <input
                  type="text"
                  value={edu.grade}
                  onChange={(e) => updateEducation(index, 'grade', e.target.value)}
                  className={inputClasses}
                  placeholder="Grade/CGPA"
                />
                <select
                  value={edu.color}
                  onChange={(e) => updateEducation(index, 'color', e.target.value)}
                  className={inputClasses}
                >
                  <option value="cyan">Cyan</option>
                  <option value="blue">Blue</option>
                  <option value="orange">Orange</option>
                  <option value="sky">Sky</option>
                </select>
              </div>
              <button
                type="button"
                onClick={() => removeEducation(index, edu._id)}
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

export default EducationEditor;
