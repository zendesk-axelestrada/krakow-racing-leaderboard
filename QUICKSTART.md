# ⚡ Quick Start Guide

Get up and running in 3 minutes!

## 🎯 For the Impatient

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173/krakow-racing/
```

That's it! 🎉

---

## 📝 Quick Data Update

### Adding Lap Times After a Race

1. Open `src/data/kartingData.js`

2. Find the track (e.g., GO Karting Center)

3. Add a new event to the `events` array:

```javascript
{
  date: '2026-07-05',  // Race date
  results: {
    'p1': 42.123,      // Jan Kowalski: 42.123s
    'p2': 43.456,      // Anna Nowak: 43.456s
    'p3': 41.789       // Piotr Wiśniewski: 41.789s
  }
}
```

4. Save the file - the page updates automatically!

---

## 👤 Adding a New Driver

1. Open `src/data/kartingData.js`

2. Add to the `participants` array:

```javascript
{
  id: 'p4',                                    // New unique ID
  name: 'Maria Kowalska',
  email: 'maria.kowalska@zendesk.com',
  department: 'Customer Support',
  avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria'
}
```

3. Add their lap times in the track results using their ID (`'p4'`)

---

## 🏁 Adding a New Track

1. Open `src/data/kartingData.js`

2. Add to the `tracks` array:

```javascript
{
  id: 'track2',
  name: 'Speed Arena',
  website: 'https://speedarena.pl',
  location: 'Warsaw, Poland',
  events: [
    {
      date: '2026-07-10',
      results: {
        'p1': 38.567,
        'p2': 39.234
      }
    }
  ]
}
```

---

## 🚀 Deploy to GitHub Pages

### One-Time Setup

1. Create a GitHub repository

2. Update `vite.config.js`:
   ```javascript
   base: '/your-repo-name/',  // ← Change this!
   ```

3. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/your-repo-name.git
   git push -u origin main
   ```

### Deploy

```bash
npm run deploy
```

Your site will be live at:
`https://YOUR-USERNAME.github.io/your-repo-name/`

---

## 🎨 Customizing Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'racing-red': '#e10600',      // Change to your brand color
  'racing-dark': '#15151e',
  'racing-darker': '#0d0d0f',
  'racing-gray': '#38383f',
  'racing-light-gray': '#949498'
}
```

---

## 🔍 File Locations

| What                  | Where                           |
|-----------------------|---------------------------------|
| All data              | `src/data/kartingData.js`      |
| Main app              | `src/App.jsx`                  |
| Components            | `src/components/`              |
| Colors                | `tailwind.config.js`           |
| Build settings        | `vite.config.js`               |
| Deployment            | `npm run deploy`               |

---

## 🆘 Common Issues

### "Module not found" error
```bash
npm install
```

### Page is blank
- Check browser console for errors
- Verify `base` path in `vite.config.js`

### Changes not showing
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

### Port already in use
Vite will automatically find the next available port

---

## 📚 More Information

- [Full README](./README.md) - Complete documentation
- [Deployment Guide](./DEPLOYMENT.md) - Detailed deployment instructions
- [Project Structure](./PROJECT_STRUCTURE.md) - Understanding the codebase

---

**Ready to race! 🏎️💨**
