# Deployment Guide

## 🚀 Quick Deployment Steps

### Option 1: Deploy on Vercel (Recommended for Frontend)

#### Frontend Deployment
1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Build Frontend**
   ```bash
   cd frontend
   npm run build
   ```

3. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

4. **Or use Vercel Dashboard**
   - Go to https://vercel.com
   - Import your Git repository
   - Set build command: `cd frontend && npm run build`
   - Set output directory: `frontend/build`
   - Deploy

### Option 2: Deploy Backend on Render.com (Free)

1. **Go to** https://render.com
2. **Create New Web Service**
3. **Connect your Git repository**
4. **Configure:**
   - Name: property-hub-backend
   - Environment: Node
   - Build Command: `cd backend && npm install`
   - Start Command: `cd backend && node server.js`
   - Add Environment Variable: `MONGODB_URI` (your connection string)
5. **Deploy**

### Option 3: Deploy Backend on Railway.app (Free)

1. **Go to** https://railway.app
2. **New Project → Deploy from GitHub**
3. **Select your repository**
4. **Configure:**
   - Root Directory: `backend`
   - Start Command: `node server.js`
   - Add Environment Variable: `MONGODB_URI`
5. **Deploy**

### Option 4: Deploy Backend on Heroku

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku App**
   ```bash
   heroku create your-app-name
   ```

4. **Add Environment Variables**
   ```bash
   heroku config:set MONGODB_URI="your-mongodb-connection-string"
   ```

5. **Deploy**
   ```bash
   git push heroku master
   ```

### Option 5: Full-Stack on Netlify

#### Frontend
1. Go to https://netlify.com
2. New site from Git
3. Build command: `cd frontend && npm run build`
4. Publish directory: `frontend/build`

#### Backend
Use Netlify Functions or deploy backend separately on Render/Railway

---

## 📋 Pre-Deployment Checklist

### ✅ Code Preparation
- [x] All "Flipr" references removed
- [x] Professional branding (PropertyHub) in place
- [x] No Lorem ipsum placeholder text
- [x] Clean code without revealing comments
- [x] Environment variables configured
- [x] .gitignore properly set up

### ✅ Testing
- [ ] Test all API endpoints locally
- [ ] Test contact form submission
- [ ] Test newsletter subscription
- [ ] Test admin panel (add/delete projects and clients)
- [ ] Test image uploads and cropping
- [ ] Test on different browsers

### ✅ Environment Variables
**Backend (.env)**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
PORT=5000
```

### ✅ Update API URLs After Deployment

**frontend/src/api/api.js**
```javascript
// Change from:
const API_BASE_URL = 'http://localhost:5000/api';

// To your deployed backend URL:
const API_BASE_URL = 'https://your-backend-url.com/api';
```

---

## 🔗 After Deployment

1. **Test Live Application**
   - Visit your frontend URL
   - Test all forms
   - Test admin panel
   - Upload images

2. **Update Repository**
   ```bash
   git add .
   git commit -m "Update API URLs for production"
   git push
   ```

3. **Submit Links**
   - Frontend URL: `https://your-app.vercel.app`
   - Backend URL: `https://your-backend.onrender.com`
   - GitHub Repo: `https://github.com/username/repo-name`

---

## 🐛 Troubleshooting

### CORS Errors
Make sure your backend has CORS enabled:
```javascript
app.use(cors({
  origin: 'https://your-frontend-url.com'
}));
```

### Image Upload Issues
Ensure upload directory exists and has write permissions.

### MongoDB Connection Issues
- Check if IP whitelist includes 0.0.0.0/0
- Verify connection string is correct
- Ensure database user has proper permissions

### Build Failures
- Clear node_modules: `rm -rf node_modules && npm install`
- Check for missing dependencies
- Verify Node version compatibility

---

## 📞 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Render Docs**: https://render.com/docs
- **Railway Docs**: https://docs.railway.app
- **Heroku Docs**: https://devcenter.heroku.com
- **MongoDB Atlas**: https://www.mongodb.com/docs/atlas
