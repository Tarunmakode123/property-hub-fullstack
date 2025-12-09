# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies

Open two terminal windows.

**Terminal 1 - Backend:**
```powershell
cd backend
npm install
```

**Terminal 2 - Frontend:**
```powershell
cd frontend
npm install
```

### Step 2: Set Up MongoDB

1. Create a free MongoDB Atlas account: https://www.mongodb.com/cloud/atlas
2. Create a new cluster (takes 2-5 minutes)
3. Create a database user with username and password
4. Whitelist all IPs (0.0.0.0/0) under Network Access
5. Get your connection string (looks like: `mongodb+srv://username:password@cluster...`)

### Step 3: Configure Environment Variables

**Backend (.env):**
```powershell
cd backend
# Edit .env file and add your MongoDB connection string
```

```
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/your-database
PORT=5000
```

### Step 4: Start the Application

**Terminal 1 - Start Backend:**
```powershell
cd backend
npm start
```

You should see: `Server is running on port 5000` and `MongoDB Connected`

**Terminal 2 - Start Frontend:**
```powershell
cd frontend
npm start
```

The app will automatically open at http://localhost:3000

### Step 5: Test the Application

1. **View Landing Page**: http://localhost:3000
2. **Open Admin Panel**: http://localhost:3000/admin
3. **Add a Project**:
   - Go to Admin Panel → Projects tab
   - Fill in project name and description
   - Upload an image
   - Click "Add Project"
4. **Add a Client**:
   - Go to Clients tab
   - Fill in client details
   - Upload an image
   - Click "Add Client"
5. **Test Contact Form**:
   - Go back to home page
   - Scroll to Contact Us section
   - Fill and submit the form
   - Check Admin Panel → Contact Forms to see the submission
6. **Test Newsletter**:
   - Scroll to Newsletter section
   - Enter an email and subscribe
   - Check Admin Panel → Newsletter to see the subscription

## 📝 Sample Data to Add

### Sample Project 1:
- **Name**: E-Commerce Website
- **Description**: A fully responsive e-commerce platform with shopping cart, payment gateway integration, and user authentication
- **Image**: Any project screenshot or placeholder

### Sample Project 2:
- **Name**: Mobile Banking App
- **Description**: Secure mobile banking application with real-time transactions, bill payments, and account management features

### Sample Client 1:
- **Name**: John Smith
- **Designation**: CEO, Tech Corp
- **Description**: Working with this team has been an absolute pleasure. They delivered our project on time and exceeded all expectations!

### Sample Client 2:
- **Name**: Sarah Johnson
- **Designation**: Product Manager, StartupXYZ
- **Description**: Professional, creative, and highly skilled. Our website looks amazing and functions perfectly!

## 🎯 What You Should See

### Landing Page Sections:
1. **Hero Section**: Welcome message with navigation
2. **Our Projects**: Grid of project cards
3. **Happy Clients**: Client testimonial cards
4. **Contact Form**: Form with name, email, mobile, city
5. **Newsletter**: Subscription section
6. **Footer**: Copyright information

### Admin Panel Tabs:
1. **Projects**: Add/manage projects
2. **Clients**: Add/manage clients
3. **Contact Forms**: View submissions
4. **Newsletter**: View subscriptions

## 🔧 Common Issues & Solutions

### Backend won't start:
- **Error**: `Cannot connect to MongoDB`
  - **Solution**: Check your MongoDB connection string in `.env`
  - Verify IP whitelist in MongoDB Atlas
  - Ensure database user credentials are correct

### Frontend shows "Failed to load":
- **Solution**: Make sure backend is running on port 5000
- Check browser console for error messages
- Verify `http://localhost:5000/api/health` returns OK

### Images not uploading:
- **Solution**: Backend will automatically create `uploads` folder
- Check file size (max 5MB)
- Only image files are allowed (jpg, png, gif, webp)

### Port already in use:
```powershell
# Backend (Windows)
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Frontend (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

## 📱 Features to Test

- [x] Add project with image
- [x] Add client with image  
- [x] Submit contact form
- [x] Subscribe to newsletter
- [x] View contact submissions in admin
- [x] View newsletter subscriptions in admin
- [x] Delete project
- [x] Delete client
- [x] Image auto-cropping to 450x350
- [x] Responsive design (resize browser window)

## 🌐 Ready to Deploy?

Once everything works locally, see `DEPLOYMENT.md` for detailed deployment instructions to:
- Heroku (Backend)
- Netlify (Frontend)
- MongoDB Atlas (Database)

## 💡 Tips

1. **Add multiple projects and clients** to see how the grid layout works
2. **Test on mobile** by resizing your browser window
3. **Check the console** for any error messages if something doesn't work
4. **Backend API** can be tested at: http://localhost:5000/api/health

## 🆘 Need Help?

If you encounter issues:
1. Check the browser console (F12)
2. Check the backend terminal for errors
3. Verify all dependencies are installed
4. Ensure MongoDB is connected
5. Check README.md for detailed documentation

---

**You're all set! Enjoy building your full-stack application! 🎉**
