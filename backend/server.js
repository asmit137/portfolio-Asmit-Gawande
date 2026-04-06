const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
const result = dotenv.config();
if (result.error) {
  console.log('No .env file found, using default values');
}

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://kunalgawande137:<db_password>@cluster0.mi3tcup.mongodb.net/portfolio?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Schemas
const profileSchema = new mongoose.Schema({
  name: { type: String, default: 'Asmit Gawande' },
  title: { type: String, default: 'Full Stack Developer' },
  bio: { type: String, default: '' },
  email: { type: String, default: 'asmitgawande137@gmail.com' },
  phone: { type: String, default: '+91 93257 99004' },
  location: { type: String, default: 'Maharashtra, India' },
  github: { type: String, default: 'https://github.com/asmit137' },
  linkedin: { type: String, default: 'https://www.linkedin.com/in/asmitgawandeofficial/' },
  resume: { type: String, default: '' },
  typingRoles: [{ type: String }],
  socials: [{
    name: String,
    url: String,
    icon: String,
    color: String
  }],
  updatedAt: { type: Date, default: Date.now }
});

const educationSchema = new mongoose.Schema({
  degree: String,
  institution: String,
  duration: String,
  grade: String,
  icon: String,
  color: String,
  order: { type: Number, default: 0 }
});

const experienceSchema = new mongoose.Schema({
  title: String,
  company: String,
  duration: String,
  location: String,
  description: String,
  technologies: [String],
  order: { type: Number, default: 0 }
});

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  technologies: [String],
  github: String,
  demo: String,
  gradient: String,
  glow: String,
  order: { type: Number, default: 0 }
});

const skillSchema = new mongoose.Schema({
  category: String,
  icon: String,
  gradient: String,
  skills: [String],
  order: { type: Number, default: 0 }
});

const serviceSchema = new mongoose.Schema({
  num: String,
  title: String,
  description: String,
  tags: [String],
  color: String,
  order: { type: Number, default: 0 }
});

const statSchema = new mongoose.Schema({
  value: String,
  label: String,
  icon: String,
  order: { type: Number, default: 0 }
});

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Models
const Profile = mongoose.model('Profile', profileSchema);
const Education = mongoose.model('Education', educationSchema);
const Experience = mongoose.model('Experience', experienceSchema);
const Project = mongoose.model('Project', projectSchema);
const Skill = mongoose.model('Skill', skillSchema);
const Service = mongoose.model('Service', serviceSchema);
const Stat = mongoose.model('Stat', statSchema);
const Admin = mongoose.model('Admin', adminSchema);

// Initialize default data
async function initializeData() {
  try {
    // Check if profile exists
    const profile = await Profile.findOne();
    if (!profile) {
      await Profile.create({
        name: 'Asmit Gawande',
        title: 'Full Stack Developer',
        bio: 'A passionate Computer Engineering student specializing in building modern web applications with React, Node.js, and the MERN stack.',
        email: 'asmitgawande137@gmail.com',
        phone: '+91 93257 99004',
        location: 'Maharashtra, India',
        github: 'https://github.com/asmit137',
        linkedin: 'https://www.linkedin.com/in/asmitgawandeofficial/',
        resume: 'https://drive.google.com/file/d/1Q23SXpZXRfBjpV0-iYpcyzogA7l--4_f/view?usp=drive_link',
        typingRoles: ['Full Stack Developer', 'MERN Stack Developer', 'React Developer', 'Node.js Developer']
      });
      console.log('Default profile created');
    }

    // Check if education exists
    const eduCount = await Education.countDocuments();
    if (eduCount === 0) {
      await Education.create([
        {
          degree: 'B.Tech Computer Engineering',
          institution: 'Government College of Engineering, Yavatmal',
          duration: '2021 - 2025',
          grade: 'CGPA: 7.55',
          icon: 'Terminal',
          color: 'cyan',
          order: 0
        },
        {
          degree: 'Higher Secondary (12th)',
          institution: 'Aadash Science College',
          duration: 'Science Stream',
          grade: '91.33%',
          icon: 'Cpu',
          color: 'blue',
          order: 1
        }
      ]);
      console.log('Default education created');
    }

    // Check if experience exists
    const expCount = await Experience.countDocuments();
    if (expCount === 0) {
      await Experience.create({
        title: 'Software Development Intern',
        company: 'HashedBit Innovation Pvt Ltd',
        duration: 'Sep 2024 - Nov 2024',
        location: 'Remote',
        description: 'Worked on full-stack web applications using the MERN stack, gaining hands-on experience in designing, developing, and maintaining dynamic web applications.',
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Jira', 'Git'],
        order: 0
      });
      console.log('Default experience created');
    }

    // Check if projects exist
    const projCount = await Project.countDocuments();
    if (projCount === 0) {
      await Project.create([
        {
          name: 'React Shopping Cart',
          description: 'Full-stack e-commerce application with product browsing, cart management, and checkout flow using React Context API.',
          technologies: ['React', 'Material UI', 'Context API'],
          github: 'https://github.com/asmit137/ReactJS-Shopping-Cart-Project.git',
          demo: 'https://asmit137.github.io/ReactJS-Shopping-Cart-Project/',
          gradient: 'from-blue-500 via-cyan-500 to-blue-600',
          glow: 'group-hover:shadow-blue-500/30',
          order: 0
        },
        {
          name: 'Spotify Clone',
          description: 'Music streaming platform replica with responsive layout, music player controls, and dynamic playlist navigation.',
          technologies: ['HTML5', 'CSS3', 'JavaScript'],
          github: 'https://github.com/asmit137/Spotify-website-clone.git',
          demo: 'https://asmit137.github.io/Spotify-website-clone/',
          gradient: 'from-cyan-500 via-blue-500 to-cyan-600',
          glow: 'group-hover:shadow-cyan-500/30',
          order: 1
        },
        {
          name: 'Netflix Home Page',
          description: 'Desktop-optimized Netflix homepage clone with carousels, hover effects, and responsive grid layouts.',
          technologies: ['HTML5', 'CSS3', 'Flexbox'],
          github: 'https://github.com/asmit137/Project-Netflix-Home-Page.git',
          demo: 'https://asmit137.github.io/Project-Netflix-Home-Page/',
          gradient: 'from-orange-500 via-cyan-500 to-orange-600',
          glow: 'group-hover:shadow-orange-500/30',
          order: 2
        },
        {
          name: 'BG Changer',
          description: 'Interactive React application for dynamic background color changes with real-time state updates.',
          technologies: ['React', 'State Management'],
          github: 'https://github.com/asmit137/BGChanger.git',
          demo: 'https://bg-changer-tau-pied.vercel.app/',
          gradient: 'from-blue-500 via-orange-500 to-cyan-600',
          glow: 'group-hover:shadow-blue-500/30',
          order: 3
        }
      ]);
      console.log('Default projects created');
    }

    // Check if skills exist
    const skillCount = await Skill.countDocuments();
    if (skillCount === 0) {
      await Skill.create([
        {
          category: 'Frontend',
          icon: 'Code2',
          gradient: 'from-blue-500 to-cyan-500',
          skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
          order: 0
        },
        {
          category: 'Backend',
          icon: 'Terminal',
          gradient: 'from-cyan-500 to-blue-500',
          skills: ['Node.js', 'Express.js', 'Java', 'Python'],
          order: 1
        },
        {
          category: 'Database',
          icon: 'Database',
          gradient: 'from-blue-500 to-cyan-500',
          skills: ['MongoDB', 'MySQL'],
          order: 2
        },
        {
          category: 'Tools',
          icon: 'Cpu',
          gradient: 'from-cyan-500 to-orange-500',
          skills: ['Git', 'GitHub', 'Jira', 'Vite'],
          order: 3
        }
      ]);
      console.log('Default skills created');
    }

    // Check if services exist
    const serviceCount = await Service.countDocuments();
    if (serviceCount === 0) {
      await Service.create([
        {
          num: '/01',
          title: 'MERN STACK',
          description: 'Architecting high-performance web ecosystems using React and Node.',
          tags: ['REACT', 'NODE', 'MONGODB'],
          color: 'cyan',
          order: 0
        },
        {
          num: '/02',
          title: 'WEB DESIGN',
          description: 'Creating visually captivating and user-friendly digital experiences.',
          tags: ['HTML5', 'TAILWIND', 'FIGMA', 'UI/UX'],
          color: 'blue',
          order: 1
        },
        {
          num: '/03',
          title: 'UI/UX DESIGN',
          description: 'Crafting modern interfaces that connect with users deeply.',
          tags: ['FIGMA', 'USER FLOW', 'CANVA'],
          color: 'orange',
          order: 2
        },
        {
          num: '/04',
          title: 'VIDEO EDITING',
          description: 'Transforming raw footage into professional cinematic stories.',
          tags: ['PREMIERE PRO', 'AFTER EFFECTS', 'FILMORA'],
          color: 'cyan',
          order: 3
        }
      ]);
      console.log('Default services created');
    }

    // Check if stats exist
    const statCount = await Stat.countDocuments();
    if (statCount === 0) {
      await Stat.create([
        { value: '5+', label: 'Projects', icon: 'Briefcase', order: 0 },
        { value: '3+', label: 'Years Coding', icon: 'Code2', order: 1 },
        { value: '7.55', label: 'CGPA', icon: 'GraduationCap', order: 2 },
        { value: '100%', label: 'Commitment', icon: 'Zap', order: 3 }
      ]);
      console.log('Default stats created');
    }

    // Check if admin exists
    const admin = await Admin.findOne({ username: 'admin' });
    if (!admin) {
      const bcrypt = require('bcryptjs');
      const hashedPassword = await bcrypt.hash('admin123', 10);
      await Admin.create({
        username: 'admin',
        password: hashedPassword
      });
      console.log('Default admin created (username: admin, password: admin123)');
    }

    console.log('Database initialization complete');
  } catch (error) {
    console.error('Error initializing data:', error);
  }
}

// Initialize data on startup
initializeData();

// API Routes

// Profile Routes
app.get('/api/profile', async (req, res) => {
  try {
    const profile = await Profile.findOne();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/profile', async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate(
      {},
      { ...req.body, updatedAt: Date.now() },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Education Routes
app.get('/api/education', async (req, res) => {
  try {
    const education = await Education.find().sort('order');
    res.json(education);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/education', async (req, res) => {
  try {
    const edu = await Education.create(req.body);
    res.json(edu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/education/:id', async (req, res) => {
  try {
    const edu = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(edu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/education/:id', async (req, res) => {
  try {
    await Education.findByIdAndDelete(req.params.id);
    res.json({ message: 'Education deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Experience Routes
app.get('/api/experience', async (req, res) => {
  try {
    const experience = await Experience.find().sort('order');
    res.json(experience);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/experience', async (req, res) => {
  try {
    const exp = await Experience.create(req.body);
    res.json(exp);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/experience/:id', async (req, res) => {
  try {
    const exp = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(exp);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/experience/:id', async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.params.id);
    res.json({ message: 'Experience deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Project Routes
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort('order');
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/projects', async (req, res) => {
  try {
    const proj = await Project.create(req.body);
    res.json(proj);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/projects/:id', async (req, res) => {
  try {
    const proj = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(proj);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/projects/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Skills Routes
app.get('/api/skills', async (req, res) => {
  try {
    const skills = await Skill.find().sort('order');
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/skills', async (req, res) => {
  try {
    const skill = await Skill.create(req.body);
    res.json(skill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/skills/:id', async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(skill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/skills/:id', async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.json({ message: 'Skill deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Services Routes
app.get('/api/services', async (req, res) => {
  try {
    const services = await Service.find().sort('order');
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/services', async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/services/:id', async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/services/:id', async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: 'Service deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Stats Routes
app.get('/api/stats', async (req, res) => {
  try {
    const stats = await Stat.find().sort('order');
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/stats', async (req, res) => {
  try {
    const stat = await Stat.create(req.body);
    res.json(stat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/stats/:id', async (req, res) => {
  try {
    const stat = await Stat.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(stat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/stats/:id', async (req, res) => {
  try {
    await Stat.findByIdAndDelete(req.params.id);
    res.json({ message: 'Stat deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin Login
app.post('/api/admin/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken');
    
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET || 'your-secret-key', { expiresIn: '24h' });
    res.json({ token, message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all data (public endpoint for portfolio)
app.get('/api/portfolio', async (req, res) => {
  try {
    const [profile, education, experience, projects, skills, services, stats] = await Promise.all([
      Profile.findOne(),
      Education.find().sort('order'),
      Experience.find().sort('order'),
      Project.find().sort('order'),
      Skill.find().sort('order'),
      Service.find().sort('order'),
      Stat.find().sort('order')
    ]);
    
    res.json({
      profile,
      education,
      experience,
      projects,
      skills,
      services,
      stats
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Only start the server if not running on Vercel (local development)
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`API available at http://localhost:${PORT}/api`);
  });
}

// Export the app for Vercel
module.exports = app;
