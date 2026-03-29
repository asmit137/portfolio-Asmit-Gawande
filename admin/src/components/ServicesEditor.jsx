import React, { useState, useEffect } from 'react';
import { Plus, Trash2, GripVertical, Save, Layers } from 'lucide-react';
import axios from 'axios';

function ServicesEditor() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('/services');
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const addService = () => {
    setServices([...services, {
      num: `/${String(services.length + 1).padStart(2, '0')}`,
      title: '',
      description: '',
      tags: [],
      color: 'cyan',
      order: services.length
    }]);
  };

  const updateService = (index, field, value) => {
    const updated = [...services];
    updated[index][field] = value;
    setServices(updated);
  };

  const removeService = async (index, id) => {
    if (id) {
      try {
        await axios.delete(`/services/${id}`);
      } catch (error) {
        console.error('Error deleting service:', error);
      }
    }
    const updated = services.filter((_, i) => i !== index);
    setServices(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSaved(false);

    try {
      for (const service of services) {
        if (service._id) {
          await axios.put(`/services/${service._id}`, service);
        } else {
          await axios.post('/services', service);
        }
      }
      setSaved(true);
      fetchServices();
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error('Error saving services:', error);
      alert('Failed to save services');
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = "w-full px-4 py-2 bg-black border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all text-sm";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Services</h2>
          <p className="text-neutral-400">Manage your services section</p>
        </div>
        <div className="flex items-center gap-3">
          {saved && (
            <div className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
              Saved!
            </div>
          )}
          <button
            onClick={addService}
            className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg transition-all"
          >
            <Plus size={18} /> Add
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {services.map((service, index) => (
          <div key={service._id || index} className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="mt-2 text-neutral-600">
                <GripVertical size={20} />
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={service.num}
                  onChange={(e) => updateService(index, 'num', e.target.value)}
                  className={inputClasses}
                  placeholder="Number (e.g. /01)"
                  required
                />
                <input
                  type="text"
                  value={service.title}
                  onChange={(e) => updateService(index, 'title', e.target.value)}
                  className={inputClasses}
                  placeholder="Service Title (e.g. MERN STACK)"
                  required
                />
                <textarea
                  value={service.description}
                  onChange={(e) => updateService(index, 'description', e.target.value)}
                  className={`${inputClasses} min-h-[80px] resize-none`}
                  placeholder="Service description..."
                  rows={3}
                />
                <div className="space-y-2">
                  <select
                    value={service.color}
                    onChange={(e) => updateService(index, 'color', e.target.value)}
                    className={inputClasses}
                  >
                    <option value="cyan">Cyan</option>
                    <option value="blue">Blue</option>
                    <option value="orange">Orange</option>
                    <option value="sky">Sky</option>
                  </select>
                  <input
                    type="text"
                    value={service.tags?.join(', ') || ''}
                    onChange={(e) => updateService(index, 'tags', e.target.value.split(',').map(t => t.trim()).filter(t => t))}
                    className={inputClasses}
                    placeholder="Tags (comma separated)"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeService(index, service._id)}
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

export default ServicesEditor;
