import React, { useState, useEffect } from 'react';
import { Plus, Trash2, GripVertical, Save, FolderGit2 } from 'lucide-react';
import axios from 'axios';

function ProjectsEditor() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const addProject = () => {
    setProjects([...projects, {
      name: '',
      description: '',
      technologies: [],
      github: '',
      demo: '',
      gradient: 'from-sky-500 to-cyan-500',
      glow: 'group-hover:shadow-sky-500/30',
      order: projects.length
    }]);
  };

  const updateProject = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);
  };

  const removeProject = async (index, id) => {
    if (id) {
      try {
        await axios.delete(`/projects/${id}`);
      } catch (error) {
        console.error('Error deleting project:', error);
      }
    }
    const updated = projects.filter((_, i) => i !== index);
    setProjects(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSaved(false);

    try {
      for (const proj of projects) {
        if (proj._id) {
          await axios.put(`/projects/${proj._id}`, proj);
        } else {
          await axios.post('/projects', proj);
        }
      }
      setSaved(true);
      fetchProjects();
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error('Error saving projects:', error);
      alert('Failed to save projects');
    } finally {
      setLoading(false);
    }
  };

  const gradients = [
    { value: 'from-sky-500 to-cyan-500', label: 'Sky to Cyan' },
    { value: 'from-cyan-500 to-blue-500', label: 'Cyan to Blue' },
    { value: 'from-blue-500 to-sky-500', label: 'Blue to Sky' },
    { value: 'from-sky-500 to-orange-500', label: 'Sky to Orange' },
    { value: 'from-cyan-500 to-orange-500', label: 'Cyan to Orange' },
    { value: 'from-orange-500 to-sky-500', label: 'Orange to Sky' },
  ];

  const inputClasses = "w-full px-4 py-2 bg-black border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all text-sm";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
          <p className="text-neutral-400">Manage your portfolio projects</p>
        </div>
        <div className="flex items-center gap-3">
          {saved && (
            <div className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
              Saved!
            </div>
          )}
          <button
            onClick={addProject}
            className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg transition-all"
          >
            <Plus size={18} /> Add
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {projects.map((proj, index) => (
          <div key={proj._id || index} className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="mt-2 text-neutral-600">
                <GripVertical size={20} />
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={proj.name}
                  onChange={(e) => updateProject(index, 'name', e.target.value)}
                  className={inputClasses}
                  placeholder="Project Name"
                  required
                />
                <select
                  value={proj.gradient}
                  onChange={(e) => updateProject(index, 'gradient', e.target.value)}
                  className={inputClasses}
                >
                  {gradients.map(g => (
                    <option key={g.value} value={g.value}>{g.label}</option>
                  ))}
                </select>
                <input
                  type="url"
                  value={proj.github}
                  onChange={(e) => updateProject(index, 'github', e.target.value)}
                  className={inputClasses}
                  placeholder="GitHub URL"
                />
                <input
                  type="url"
                  value={proj.demo}
                  onChange={(e) => updateProject(index, 'demo', e.target.value)}
                  className={inputClasses}
                  placeholder="Live Demo URL"
                />
                <textarea
                  value={proj.description}
                  onChange={(e) => updateProject(index, 'description', e.target.value)}
                  className={`${inputClasses} min-h-[80px] resize-none`}
                  placeholder="Project description..."
                  rows={3}
                />
                <input
                  type="text"
                  value={proj.technologies?.join(', ') || ''}
                  onChange={(e) => updateProject(index, 'technologies', e.target.value.split(',').map(t => t.trim()).filter(t => t))}
                  className={inputClasses}
                  placeholder="Technologies (comma separated)"
                />
              </div>
              <button
                type="button"
                onClick={() => removeProject(index, proj._id)}
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

export default ProjectsEditor;
