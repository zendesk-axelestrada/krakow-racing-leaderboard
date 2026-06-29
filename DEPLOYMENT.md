# 🚀 Deployment Guide

## Quick Deploy to GitHub Pages

### Step 1: Initial Setup

1. **Create a new GitHub repository** (if you haven't already)
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Zendesk Kraków Karting Leaderboard"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/krakow-racing.git
   git push -u origin main
   ```

2. **Update the base path in `vite.config.js`**
   
   Open `vite.config.js` and update the `base` property to match your repository name:
   ```javascript
   base: '/krakow-racing/',  // Change this to your repo name
   ```

### Step 2: Deploy

#### Option A: Using npm script (Easiest)

```bash
npm run deploy
```

This single command will:
- Build the production version
- Create/update the `gh-pages` branch
- Push the built files to GitHub

#### Option B: Manual deployment

```bash
# Build the project
npm run build

# Install gh-pages globally (if not already installed)
npm install -g gh-pages

# Deploy the dist folder
gh-pages -d dist
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Click **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

Your site will be live at: `https://YOUR-USERNAME.github.io/krakow-racing/`

---

## Automatic Deployment with GitHub Actions

For automatic deployment on every push to main, we've included a GitHub Actions workflow.

The workflow file is located at `.github/workflows/deploy.yml`

It will automatically:
- Build your project when you push to the `main` branch
- Deploy to GitHub Pages

### Setup for GitHub Actions

1. **Enable GitHub Pages** (see Step 3 above)

2. **Grant workflow permissions**
   - Go to repository **Settings** → **Actions** → **General**
   - Scroll to "Workflow permissions"
   - Select "Read and write permissions"
   - Click **Save**

3. **Push your code**
   ```bash
   git add .
   git commit -m "Add deployment workflow"
   git push
   ```

4. **Monitor the deployment**
   - Go to the **Actions** tab in your repository
   - Watch the workflow run
   - Once complete, your site will be live!

---

## Alternative Hosting Options

### Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Connect your GitHub repository
4. Vercel will auto-detect Vite settings
5. Click "Deploy"

Your site will be live at: `https://krakow-racing.vercel.app`

### Netlify

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `dist/` folder
   
   OR connect your GitHub repository:
   - Build command: `npm run build`
   - Publish directory: `dist`

---

## Updating the Leaderboard

After updating `src/data/kartingData.js`:

```bash
# Commit your changes
git add src/data/kartingData.js
git commit -m "Update lap times for [date]"
git push

# If using npm deploy
npm run deploy
```

If you set up GitHub Actions, just push to main and it will auto-deploy!

---

## Troubleshooting

### Issue: Site shows blank page or 404 errors

**Solution**: Check that the `base` path in `vite.config.js` matches your repository name exactly.

```javascript
// If your repo is at: github.com/username/krakow-racing
base: '/krakow-racing/',

// If using a custom domain
base: '/',
```

### Issue: Images or styles not loading

**Solution**: Ensure all asset paths are relative and the `base` path is correctly set.

### Issue: GitHub Pages not updating

**Solution**: 
1. Check the Actions tab for build errors
2. Clear your browser cache
3. Wait a few minutes for GitHub's CDN to update

---

## Custom Domain (Optional)

To use a custom domain like `karting.zendesk-krakow.com`:

1. Add a `CNAME` file to the `public/` folder:
   ```
   karting.zendesk-krakow.com
   ```

2. Update `vite.config.js`:
   ```javascript
   base: '/',  // Use root path for custom domains
   ```

3. Configure DNS records with your domain provider:
   - Add a CNAME record pointing to `YOUR-USERNAME.github.io`

4. In GitHub Settings → Pages, enter your custom domain

---

**Need help?** Check the [main README](./README.md) or open an issue!
