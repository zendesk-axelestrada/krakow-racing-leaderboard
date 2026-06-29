# 📂 Project Structure

## Overview

This document explains the structure and organization of the Zendesk Kraków Karting Leaderboard application.

```
krakow-racing/
│
├── 📁 .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions auto-deployment workflow
│
├── 📁 public/
│   └── racing-flag.svg             # Favicon (checkered flag)
│
├── 📁 src/
│   │
│   ├── 📁 components/              # React UI Components
│   │   ├── TrackSelector.jsx      # Dropdown to switch between tracks
│   │   ├── TrackInfoBanner.jsx    # Track info header with website link
│   │   ├── PodiumSection.jsx      # Top 3 drivers podium display
│   │   └── LeaderboardTable.jsx   # Main standings table
│   │
│   ├── 📁 data/
│   │   └── kartingData.js         # ⭐ MAIN DATA FILE (edit this!)
│   │
│   ├── App.jsx                     # Main application component
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Global styles with Tailwind
│
├── .gitignore                      # Git ignore rules
├── index.html                      # HTML entry point
├── package.json                    # Dependencies and scripts
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── vite.config.js                  # Vite build configuration
│
├── README.md                       # Main documentation
├── DEPLOYMENT.md                   # Deployment instructions
└── PROJECT_STRUCTURE.md            # This file
```

---

## 🎯 Key Files to Know

### `src/data/kartingData.js` ⭐
**The most important file!** This is where all leaderboard data lives:
- **Participants**: Driver information (name, email, department, avatar)
- **Tracks**: Karting locations and their events
- **Sessions**: Lap times for each event

### `src/App.jsx`
Main application component that orchestrates all other components.

### `src/components/`
Modular UI components:
- **TrackSelector**: Allows switching between different karting tracks
- **TrackInfoBanner**: Displays selected track information
- **PodiumSection**: Visual podium for top 3 fastest drivers
- **LeaderboardTable**: Comprehensive standings table

### `vite.config.js`
Build configuration. **Important**: Update the `base` property to match your GitHub repository name for correct asset paths in production.

### `.github/workflows/deploy.yml`
Automatic deployment configuration. Pushes to `main` branch will trigger automatic builds and deployments to GitHub Pages.

---

## 🎨 Component Architecture

```
App.jsx
│
├── <TrackSelector />
│   └── Dropdown to select track
│
├── <TrackInfoBanner />
│   └── Display track name, location, website link
│
├── <PodiumSection />
│   └── Top 3 drivers with podium stands
│
└── <LeaderboardTable />
    └── Full standings table with all drivers
```

---

## 🔄 Data Flow

```
kartingData.js
    │
    ├── participants[]        (Driver info)
    ├── tracks[]             (Track info + events)
    │
    ├── getBestLapsForTrack() ──→ Calculates best lap per driver
    ├── formatLapTime()       ──→ Formats seconds to "42.345s"
    └── formatDate()          ──→ Formats date to "Jun 15, 2026"
                                    │
                                    ↓
                                App.jsx
                                    │
                    ┌───────────────┼───────────────┐
                    ↓               ↓               ↓
            TrackInfoBanner  PodiumSection  LeaderboardTable
```

---

## 🚀 Development vs Production

### Development (`npm run dev`)
- Hot module replacement (instant updates)
- Source maps for debugging
- Development warnings enabled
- Runs on `http://localhost:5173/krakow-racing/`

### Production (`npm run build`)
- Minified and optimized code
- Tree-shaking (removes unused code)
- Asset hashing for cache busting
- Output to `dist/` folder

---

## 📦 Dependencies

### Production Dependencies
- **react**: UI library
- **react-dom**: React DOM renderer

### Development Dependencies
- **vite**: Build tool and dev server
- **@vitejs/plugin-react**: React plugin for Vite
- **tailwindcss**: Utility-first CSS framework
- **autoprefixer**: Adds vendor prefixes to CSS
- **postcss**: CSS transformation tool
- **gh-pages**: GitHub Pages deployment tool

---

## 🎨 Styling System

### Tailwind Custom Colors
Defined in `tailwind.config.js`:

```javascript
'racing-red'        #e10600   // Primary accent (F1 inspired)
'racing-dark'       #15151e   // Header background
'racing-darker'     #0d0d0f   // Page background
'racing-gray'       #38383f   // Card backgrounds
'racing-light-gray' #949498   // Secondary text
```

### Usage Example
```jsx
<div className="bg-racing-dark text-white border-racing-gray">
  Content
</div>
```

---

## 📝 How to Add Features

### Add a New Component
1. Create file in `src/components/NewComponent.jsx`
2. Import and use in `App.jsx`

### Add New Track
Edit `src/data/kartingData.js`:
```javascript
tracks.push({
  id: 'track2',
  name: 'New Track',
  website: 'https://example.com',
  location: 'City, Country',
  events: []
});
```

### Add New Driver
Edit `src/data/kartingData.js`:
```javascript
participants.push({
  id: 'p4',
  name: 'New Driver',
  email: 'new.driver@zendesk.com',
  department: 'Engineering',
  avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NewDriver'
});
```

### Add Lap Time
Edit the track's `events` array:
```javascript
events.push({
  date: '2026-07-01',
  results: {
    'p1': 41.234,
    'p2': 42.567
  }
});
```

---

## 🔧 Configuration Files Explained

### `package.json`
Defines project metadata, dependencies, and npm scripts:
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build locally
- `npm run deploy`: Build and deploy to GitHub Pages

### `vite.config.js`
- Configures the Vite build tool
- **Critical**: `base` path must match GitHub repo name

### `tailwind.config.js`
- Configures Tailwind CSS
- Defines custom colors and design tokens

### `postcss.config.js`
- Configures PostCSS (required for Tailwind)

---

## 🐛 Debugging Tips

### App shows blank page
- Check browser console for errors
- Verify `base` path in `vite.config.js`

### Components not rendering
- Check React DevTools
- Verify data structure in `kartingData.js`

### Styles not applying
- Ensure Tailwind classes are in `content` paths
- Check for typos in class names
- Verify PostCSS is running

---

**Questions?** Check [README.md](./README.md) or [DEPLOYMENT.md](./DEPLOYMENT.md)
