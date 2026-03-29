import React, { useState, useEffect } from 'react';
import { Save, User, Mail, Phone, MapPin, Github, Linkedin, FileText, Plus, Trash2, Globe } from 'lucide-react';
import axios from 'axios';

function ProfileEditor() {
  const [profile, setProfile] = useState({
    name: '',
    title: '',
    bio: '',
    email: '',
    phone: '',
    location: '',
    github: '',
    linkedin: '',
    resume: '',
    typingRoles: [],
    socials: []
  });
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [rolesInput, setRolesInput] = useState('');

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await axios.get('/profile');
      setProfile({
        ...response.data,
        socials: response.data.socials || []
      });
      setRolesInput(response.data.typingRoles?.join(', ') || '');
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSaved(false);

    try {
      const roles = rolesInput.split(',').map(r => r.trim()).filter(r => r);
      await axios.put('/profile', { ...profile, typingRoles: roles });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Failed to save profile');
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 bg-black border border-neutral-800 rounded-xl text-white placeholder-neutral-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all";

  // Social media management
  const addSocial = () => {
    setProfile({
      ...profile,
      socials: [...(profile.socials || []), { name: '', url: '', icon: 'Globe', color: 'sky' }]
    });
  };

  const updateSocial = (index, field, value) => {
    const updatedSocials = [...(profile.socials || [])];
    updatedSocials[index] = { ...updatedSocials[index], [field]: value };
    setProfile({ ...profile, socials: updatedSocials });
  };

  const removeSocial = (index) => {
    const updatedSocials = (profile.socials || []).filter((_, i) => i !== index);
    setProfile({ ...profile, socials: updatedSocials });
  };

  const availableIcons = ['Globe', 'Github', 'Linkedin', 'Twitter', 'Instagram', 'Facebook', 'Youtube', 'Mail', 'Phone'];
  const colorOptions = ['sky', 'cyan', 'blue', 'orange', 'purple', 'pink', 'green', 'red'];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Profile</h2>
          <p className="text-neutral-400">Manage your personal information</p>
        </div>
        {saved && (
          <div className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
            Saved successfully!
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-neutral-300">
              <User size={16} className="text-sky-400" /> Name
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className={inputClasses}
              placeholder="Your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-neutral-300">
              <FileText size={16} className="text-sky-400" /> Title
            </label>
            <input
              type="text"
              value={profile.title}
              onChange={(e) => setProfile({ ...profile, title: e.target.value })}
              className={inputClasses}
              placeholder="e.g. Full Stack Developer"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-neutral-300">
              <Mail size={16} className="text-sky-400" /> Email
            </label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className={inputClasses}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-neutral-300">
              <Phone size={16} className="text-sky-400" /> Phone
            </label>
            <input
              type="text"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              className={inputClasses}
              placeholder="+91 12345 67890"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-neutral-300">
              <MapPin size={16} className="text-sky-400" /> Location
            </label>
            <input
              type="text"
              value={profile.location}
              onChange={(e) => setProfile({ ...profile, location: e.target.value })}
              className={inputClasses}
              placeholder="City, Country"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-neutral-300">
              <FileText size={16} className="text-sky-400" /> Resume Link
            </label>
            <input
              type="url"
              value={profile.resume}
              onChange={(e) => setProfile({ ...profile, resume: e.target.value })}
              className={inputClasses}
              placeholder="https://..."
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-neutral-300">
              <Github size={16} className="text-sky-400" /> GitHub
            </label>
            <input
              type="url"
              value={profile.github}
              onChange={(e) => setProfile({ ...profile, github: e.target.value })}
              className={inputClasses}
              placeholder="https://github.com/..."
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-neutral-300">
              <Linkedin size={16} className="text-sky-400" /> LinkedIn
            </label>
            <input
              type="url"
              value={profile.linkedin}
              onChange={(e) => setProfile({ ...profile, linkedin: e.target.value })}
              className={inputClasses}
              placeholder="https://linkedin.com/in/..."
            />
          </div>
        </div>

        {/* Social Media Accounts Section */}
        <div className="space-y-4 pt-6 border-t border-neutral-800">
          <div className="flex items-center justify-between">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-neutral-300">
                <Globe size={16} className="text-sky-400" /> Additional Social Media Accounts
              </label>
              <p className="text-xs text-neutral-500 mt-1">Add more social media links (Twitter, Instagram, etc.)</p>
            </div>
            <button
              type="button"
              onClick={addSocial}
              className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg transition-all text-sm"
            >
              <Plus size={16} /> Add Account
            </button>
          </div>

          <div className="space-y-3">
            {(profile.socials || []).map((social, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-3 p-4 bg-neutral-900 rounded-xl border border-neutral-800">
                <input
                  type="text"
                  value={social.name}
                  onChange={(e) => updateSocial(index, 'name', e.target.value)}
                  className={`${inputClasses} text-sm`}
                  placeholder="Platform name (e.g. Twitter)"
                  required
                />
                <input
                  type="url"
                  value={social.url}
                  onChange={(e) => updateSocial(index, 'url', e.target.value)}
                  className={`${inputClasses} text-sm`}
                  placeholder="https://..."
                  required
                />
                <select
                  value={social.icon}
                  onChange={(e) => updateSocial(index, 'icon', e.target.value)}
                  className={`${inputClasses} text-sm`}
                >
                  {availableIcons.map(icon => (
                    <option key={icon} value={icon}>{icon}</option>
                  ))}
                </select>
                <div className="flex gap-2">
                  <select
                    value={social.color}
                    onChange={(e) => updateSocial(index, 'color', e.target.value)}
                    className={`${inputClasses} text-sm flex-1`}
                  >
                    {colorOptions.map(color => (
                      <option key={color} value={color}>{color}</option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={() => removeSocial(index)}
                    className="p-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-all"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-300">Typing Roles (comma separated)</label>
          <input
            type="text"
            value={rolesInput}
            onChange={(e) => setRolesInput(e.target.value)}
            className={inputClasses}
            placeholder="Full Stack Developer, MERN Stack Developer, React Developer"
          />
          <p className="text-xs text-neutral-500">These will rotate in the hero section typing animation</p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-300">Bio</label>
          <textarea
            value={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            className={`${inputClasses} min-h-[120px] resize-none`}
            placeholder="Write a short bio about yourself..."
            rows={4}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all disabled:opacity-50"
        >
          <Save size={18} />
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
}

export default ProfileEditor;
