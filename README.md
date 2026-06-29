# 🏎️ Zendesk Kraków - Karting Leaderboard

A beautifully polished, modern karting leaderboard application for the Zendesk Kraków office team. Inspired by the official Formula 1 Drivers' Standings design, featuring clean typography, strong grid alignment, and a sleek dark theme.

## 🎨 Features

- **Track Selection**: Switch between different karting tracks with a sleek dropdown selector
- **Dynamic Track Info**: View track details and direct links to track websites
- **Podium Highlights**: Visual podium section showcasing the top 3 fastest drivers
- **Comprehensive Leaderboard**: Full standings table with driver info, departments, best lap times, and dates
- **Responsive Design**: Fully responsive layout that works on all devices
- **Easy Data Management**: All data stored in a single, easy-to-update configuration file

## 🛠️ Tech Stack

- **Vite**: Lightning-fast build tool and dev server
- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Dicebear Avatars**: Dynamic avatar generation for drivers

## 📁 Project Structure

```
krakow-racing/
├── src/
│   ├── components/           # React components
│   │   ├── TrackSelector.jsx
│   │   ├── TrackInfoBanner.jsx
│   │   ├── PodiumSection.jsx
│   │   └── LeaderboardTable.jsx
│   ├── data/
│   │   └── kartingData.js    # ⭐ MAIN DATA FILE - Edit this to update leaderboard
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles with Tailwind
├── index.html
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd krakow-racing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the app running locally.

## 📝 Updating the Leaderboard Data

All leaderboard data is stored in `src/data/kartingData.js`. This file is designed to be incredibly easy to update.

### Adding a New Driver

Edit the `participants` array in `src/data/kartingData.js`:

```javascript
{
  id: 'p4',                                    // Unique ID
  name: 'Your Name',
  email: 'your.name@zendesk.com',
  department: 'Your Department',
  avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=YourName'
}
```

### Adding a New Track

Edit the `tracks` array in `src/data/kartingData.js`:

```javascript
{
  id: 'track2',
  name: 'New Karting Track',
  website: 'https://example.com',
  location: 'Warsaw, Poland',
  events: []
}
```

### Adding Lap Times (Results)

Add a new event to the `events` array of a track:

```javascript
{
  date: '2026-07-01',
  results: {
    'p1': 41.234,    // Participant ID: lap time in seconds
    'p2': 42.567,
    'p3': 40.890
  }
}
```

The app automatically:
- Calculates each driver's best lap time across all events
- Sorts the leaderboard from fastest to slowest
- Displays the top 3 in the podium section

## 🌐 Deployment to GitHub Pages

### Option 1: Using the npm script (Recommended)

1. **Update the base path in `vite.config.js`**
   
   Change the `base` property to match your GitHub repository name:
   ```javascript
   base: '/your-repo-name/',
   ```

2. **Build and deploy**
   ```bash
   npm run deploy
   ```

   This command will:
   - Build the production version
   - Push it to the `gh-pages` branch
   - Make it available at `https://<your-username>.github.io/<your-repo-name>/`

### Option 2: Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **The built files will be in the `dist/` directory**

3. **Deploy the `dist/` folder to your hosting service**
   - GitHub Pages: Push to `gh-pages` branch
   - Netlify: Drag and drop the `dist` folder
   - Vercel: Connect your repository

### GitHub Pages Setup

1. Go to your repository settings on GitHub
2. Navigate to **Pages** in the left sidebar
3. Under **Source**, select the `gh-pages` branch
4. Click **Save**
5. Your site will be live at `https://<your-username>.github.io/<your-repo-name>/`

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  'racing-red': '#e10600',      // Primary accent color
  'racing-dark': '#15151e',      // Header background
  'racing-darker': '#0d0d0f',    // Page background
  'racing-gray': '#38383f',      // Card backgrounds
  'racing-light-gray': '#949498' // Text color
}
```

### Modifying the Layout

All components are in the `src/components/` directory:
- `TrackSelector.jsx`: Track dropdown selector
- `TrackInfoBanner.jsx`: Track info header with website link
- `PodiumSection.jsx`: Top 3 drivers podium display
- `LeaderboardTable.jsx`: Main standings table

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to add your lap times and new tracks! Just update `src/data/kartingData.js` and submit a pull request.

## 📄 License

Internal use for Zendesk Kraków office team.

---

Made with ❤️ by Zendesk Kraków • Powered by React + Vite + Tailwind CSS
