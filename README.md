# Full Stack Application - Development Assignment

A complete full-stack web application featuring a landing page with project showcase, client testimonials, contact form, and newsletter subscription, along with a comprehensive admin panel for content management.

## 🚀 Features

### Landing Page
- **Our Projects Section**: Displays all projects fetched from the backend with images, names, descriptions, and a "Read More" button
- **Happy Clients Section**: Shows client testimonials with images, names, designations, and descriptions
- **Contact Form**: Allows users to submit inquiries with full name, email, mobile number, and city
- **Newsletter Subscription**: Users can subscribe with their email address

### Admin Panel
- **Project Management**: Add, view, and delete projects with image upload
- **Client Management**: Add, view, and delete client testimonials with image upload
- **Contact Form Viewer**: View all contact form submissions with full details
- **Newsletter Viewer**: View all newsletter subscriptions

### Bonus Features
- **Image Cropping**: All uploaded images are automatically cropped to 450x350 pixels for consistent display

## 🛠️ Technology Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **Multer** for file uploads
- **Sharp** for image processing and cropping
- **CORS** for cross-origin resource sharing

### Frontend
- **React** 18.x
- **React Router** for navigation
- **Axios** for API calls
- **CSS3** for styling

## 📁 Project Structure

```
property-hub-fullstack/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── upload.js
│   ├── models/
│   │   ├── Project.js
│   │   ├── Client.js
│   │   ├── ContactForm.js
│   │   └── Newsletter.js
│   ├── routes/
│   │   ├── projects.js
│   │   ├── clients.js
│   │   ├── contacts.js
│   │   └── newsletter.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   └── api.js
│   │   ├── components/
│   │   │   ├── admin/
│   │   │   │   ├── ProjectManagement.js
│   │   │   │   ├── ClientManagement.js
│   │   │   │   ├── ContactList.js
│   │   │   │   ├── NewsletterList.js
│   │   │   │   └── AdminComponents.css
│   │   │   ├── Projects.js
│   │   │   ├── Clients.js
│   │   │   ├── ContactForm.js
│   │   │   └── Newsletter.js
│   │   ├── pages/
│   │   │   ├── LandingPage.js
│   │   │   └── AdminPanel.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update the `.env` file with your MongoDB connection string:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

5. Start the backend server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## 🔌 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create new project (multipart/form-data)
- `PUT /api/projects/:id` - Update project (multipart/form-data)
- `DELETE /api/projects/:id` - Delete project

### Clients
- `GET /api/clients` - Get all clients
- `GET /api/clients/:id` - Get single client
- `POST /api/clients` - Create new client (multipart/form-data)
- `PUT /api/clients/:id` - Update client (multipart/form-data)
- `DELETE /api/clients/:id` - Delete client

### Contact Forms
- `GET /api/contacts` - Get all contact submissions
- `POST /api/contacts` - Create contact submission
- `DELETE /api/contacts/:id` - Delete contact submission

### Newsletter
- `GET /api/newsletter` - Get all subscriptions
- `POST /api/newsletter` - Create subscription
- `DELETE /api/newsletter/:id` - Delete subscription

## 🌐 Deployment

### MongoDB Setup
1. Create a free account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create a database user
4. Whitelist your IP address (or use 0.0.0.0/0 for all IPs)
5. Get your connection string and update the `.env` file

### Backend Deployment (Heroku Example)

1. Install Heroku CLI and login:
```bash
heroku login
```

2. Create a new Heroku app:
```bash
cd backend
heroku create your-app-name-backend
```

3. Set environment variables:
```bash
heroku config:set MONGODB_URI=your_mongodb_connection_string
```

4. Deploy:
```bash
git init
git add .
git commit -m "Initial commit"
git push heroku main
```

### Frontend Deployment (Netlify/Vercel)

#### Using Netlify:
1. Build the production version:
```bash
cd frontend
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod --dir=build
```

#### Using Vercel:
1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd frontend
vercel --prod
```

**Important**: Update the API URL in the frontend code to point to your deployed backend.

### Alternative Deployment Platforms
- **Backend**: AWS EC2, Google Cloud Run, Microsoft Azure App Service, Railway, Render
- **Frontend**: AWS S3 + CloudFront, GitHub Pages, Firebase Hosting
- **Database**: MongoDB Atlas (recommended), AWS DocumentDB

## 🎨 Features Implemented

✅ Landing page with all required sections  
✅ Projects section displaying data from backend  
✅ Happy Clients section with testimonials  
✅ Contact form with validation  
✅ Newsletter subscription  
✅ Admin panel with tab navigation  
✅ Project management (CRUD operations)  
✅ Client management (CRUD operations)  
✅ Contact form submissions viewer  
✅ Newsletter subscriptions viewer  
✅ Image upload with automatic cropping to 450x350  
✅ Responsive design for mobile and desktop  
✅ Error handling and loading states  
✅ Clean and organized code structure  

## 📝 Usage

### Accessing the Application
1. **Landing Page**: Visit `http://localhost:3000`
2. **Admin Panel**: Visit `http://localhost:3000/admin`

### Adding Content via Admin Panel
1. Navigate to the Admin Panel
2. Use the tabs to switch between different management sections
3. Fill in the forms to add new projects or clients
4. Upload images (they will be automatically cropped to 450x350)
5. View and manage contact form submissions and newsletter subscriptions

## 🔒 Security Notes

For production deployment:
- Add authentication to the admin panel
- Implement rate limiting on API endpoints
- Add input validation and sanitization
- Use HTTPS for all communications
- Secure your MongoDB connection string
- Add CORS restrictions

## 🐛 Troubleshooting

**Backend not connecting to MongoDB:**
- Check your MongoDB connection string in `.env`
- Ensure your IP is whitelisted in MongoDB Atlas
- Verify database user credentials

**Frontend not fetching data:**
- Ensure backend is running on port 5000
- Check browser console for CORS errors
- Verify API URLs in frontend code

**Images not displaying:**
- Check that the uploads directory exists
- Ensure proper file permissions
- Verify image paths in API responses

## 📄 License

This project is created for educational purposes as part of a development assignment.

## 👨‍💻 Development

To contribute or modify:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Note**: This application was developed as part of a full-stack development task. The code is clean, well-organized, and follows best practices for both frontend and backend development.
