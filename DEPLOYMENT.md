# Deployment Guide

## Pre-Deployment Checklist

- [ ] MongoDB Atlas account created and cluster set up
- [ ] Database connection string obtained
- [ ] All features tested locally
- [ ] Environment variables configured
- [ ] Code pushed to Git repository

## MongoDB Atlas Setup

1. **Create Account**
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up for a free account

2. **Create Cluster**
   - Create a new cluster (Free M0 tier is sufficient)
   - Choose a cloud provider and region
   - Wait for cluster to be created (2-5 minutes)

3. **Database Access**
   - Click "Database Access" in left sidebar
   - Add a new database user
   - Choose password authentication
   - Save username and password

4. **Network Access**
   - Click "Network Access" in left sidebar
   - Click "Add IP Address"
   - Allow access from anywhere: 0.0.0.0/0
   - (For production, restrict to specific IPs)

5. **Get Connection String**
   - Click "Database" in left sidebar
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password

## Backend Deployment (Heroku)

### Option 1: Heroku CLI

1. **Install Heroku CLI**
   ```bash
   # Windows (using Chocolatey)
   choco install heroku-cli
   
   # Or download from: https://devcenter.heroku.com/articles/heroku-cli
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku App**
   ```bash
   cd backend
   heroku create your-app-name-backend
   ```

4. **Set Environment Variables**
   ```bash
   heroku config:set MONGODB_URI="your_mongodb_connection_string"
   heroku config:set PORT=5000
   ```

5. **Deploy**
   ```bash
   git init
   git add .
   git commit -m "Deploy backend"
   heroku git:remote -a your-app-name-backend
   git push heroku main
   ```

6. **Verify Deployment**
   ```bash
   heroku open
   heroku logs --tail
   ```

### Option 2: Render.com (Alternative)

1. Go to https://render.com and sign up
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: your-app-name-backend
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Root Directory**: `backend`
5. Add environment variables:
   - `MONGODB_URI`
   - `PORT`
6. Click "Create Web Service"

### Option 3: Railway.app

1. Go to https://railway.app and sign up
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Configure:
   - Set root directory to `backend`
   - Add environment variables
5. Deploy automatically

## Frontend Deployment (Netlify)

### Option 1: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the Frontend**
   ```bash
   cd frontend
   npm run build
   ```

3. **Update API URL**
   Before building, update `.env` or `src/api/api.js`:
   ```javascript
   const API_URL = 'https://your-backend-url.herokuapp.com/api';
   ```

4. **Deploy**
   ```bash
   netlify login
   netlify deploy --prod --dir=build
   ```

### Option 2: Netlify Dashboard

1. Build the project:
   ```bash
   cd frontend
   npm run build
   ```

2. Go to https://app.netlify.com
3. Drag and drop the `build` folder
4. Your site is live!

### Option 3: Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Update API URL** in frontend code

3. **Deploy**
   ```bash
   cd frontend
   vercel --prod
   ```

### Option 4: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
PORT=5000
```

### Frontend (.env)
```
REACT_APP_API_URL=https://your-backend-url.com/api
```

## Post-Deployment Steps

1. **Test All Features**
   - Visit your deployed frontend URL
   - Test landing page loads correctly
   - Test admin panel
   - Add a project and client
   - Submit contact form
   - Subscribe to newsletter

2. **Update Repository**
   - Update README with live URLs
   - Add deployment status badges
   - Document any deployment-specific configurations

3. **Monitor**
   - Check logs for errors
   - Monitor database connections
   - Test API endpoints

## Troubleshooting

### Backend Issues

**App crashes on Heroku:**
```bash
heroku logs --tail
```
Check for:
- Missing environment variables
- MongoDB connection errors
- Port binding issues

**MongoDB Connection Failed:**
- Verify connection string
- Check IP whitelist (allow 0.0.0.0/0)
- Verify database user credentials

### Frontend Issues

**API calls failing:**
- Check CORS configuration in backend
- Verify API URL is correct
- Check browser console for errors

**Build fails:**
```bash
npm cache clean --force
rm -rf node_modules
npm install
npm run build
```

## Security Checklist

- [ ] Environment variables not committed to Git
- [ ] MongoDB connection string is secure
- [ ] CORS properly configured
- [ ] Input validation implemented
- [ ] File upload limits set
- [ ] Rate limiting considered

## Cost Considerations

### Free Tier Options:
- **MongoDB Atlas**: 512MB storage (M0)
- **Heroku**: 550-1000 dyno hours/month
- **Netlify**: 100GB bandwidth/month
- **Vercel**: Unlimited deployments
- **Render**: 750 hours/month

All free tiers are sufficient for this project and demonstration purposes.

## Alternative Deployment Options

### Backend:
- AWS Elastic Beanstalk
- Google Cloud Run
- Microsoft Azure App Service
- DigitalOcean App Platform
- Fly.io

### Frontend:
- AWS S3 + CloudFront
- Firebase Hosting
- Cloudflare Pages
- Surge.sh

## Continuous Deployment

### Setup GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Heroku
        uses: akhileshns/heroku-deploy@v3.12.12
        with:
          heroku_api_key: ${{secrets.HEROKU_API_KEY}}
          heroku_app_name: "your-app-name"
          heroku_email: "your-email@example.com"
```

---

**Note**: Remember to update the frontend API URL to point to your deployed backend after backend deployment is complete.
