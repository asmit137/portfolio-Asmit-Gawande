# Portfolio Admin Panel

A full-featured admin panel to manage your portfolio website content with MongoDB backend.

## Features

- **Dashboard** - Overview of all portfolio sections with statistics
- **Profile Editor** - Manage personal information, bio, social links
- **Education Editor** - Add/edit educational background
- **Experience Editor** - Manage work experience
- **Projects Editor** - Add/edit portfolio projects
- **Skills Editor** - Manage skills and technologies
- **Services Editor** - Manage services section
- **Stats Editor** - Update statistics display

## Color Scheme

The portfolio now uses a **Blue/Black/Cyan/Orange** color scheme:
- Primary: Blue (#3b82f6)
- Secondary: Cyan (#06b6d4)
- Accent: Orange (#f97316)
- Background: Black/Dark

## Setup Instructions

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:
```env
MONGODB_URI=mongodb+srv://kunalgawande137:<db_password>@cluster0.mi3tcup.mongodb.net/portfolio?retryWrites=true&w=majority
JWT_SECRET=your-secret-key-here
PORT=5000
```

**Important:** Replace `<db_password>` with your actual MongoDB password!

Start the backend:
```bash
npm start
# or
npm run dev
```

The API will be available at `http://localhost:5000/api`

### 2. Admin Panel Setup

```bash
cd admin
npm install
```

Start the admin panel:
```bash
npm run dev
```

The admin panel will be available at `http://localhost:5174`

### 3. Default Login

- **Username:** `admin`
- **Password:** `admin123`

You can change this in the backend after first login.

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/profile` | GET/PUT | Profile management |
| `/api/education` | GET/POST/PUT/DELETE | Education CRUD |
| `/api/experience` | GET/POST/PUT/DELETE | Experience CRUD |
| `/api/projects` | GET/POST/PUT/DELETE | Projects CRUD |
| `/api/skills` | GET/POST/PUT/DELETE | Skills CRUD |
| `/api/services` | GET/POST/PUT/DELETE | Services CRUD |
| `/api/stats` | GET/POST/PUT/DELETE | Stats CRUD |
| `/api/admin/login` | POST | Admin authentication |
| `/api/portfolio` | GET | Public portfolio data |

## Mobile Responsive

The admin panel is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## File Structure

```
portfolio-Asmit-Gawande/
├── backend/
│   ├── server.js          # Main server file
│   └── package.json
├── admin/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── ProfileEditor.jsx
│   │   │   ├── EducationEditor.jsx
│   │   │   ├── ExperienceEditor.jsx
│   │   │   ├── ProjectsEditor.jsx
│   │   │   ├── SkillsEditor.jsx
│   │   │   ├── ServicesEditor.jsx
│   │   │   └── StatsEditor.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
└── src/
    └── App.jsx            # Updated portfolio with new colors
```

## Troubleshooting

### MongoDB Connection Error
- Check your connection string in `.env`
- Ensure your IP is whitelisted in MongoDB Atlas
- Verify your database password

### Admin Panel Won't Connect
- Make sure backend is running on port 5000
- Check CORS settings in backend
- Verify the proxy in `admin/vite.config.js`

## Next Steps

1. Connect your portfolio frontend to fetch data from the backend API
2. Add image upload functionality
3. Implement rich text editor for descriptions
4. Add preview mode before publishing changes
