# Frontend - Full Stack Application

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

3. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── api/
│   └── api.js           # API service layer
├── components/
│   ├── admin/           # Admin panel components
│   │   ├── ProjectManagement.js
│   │   ├── ClientManagement.js
│   │   ├── ContactList.js
│   │   └── NewsletterList.js
│   ├── Projects.js      # Projects display component
│   ├── Clients.js       # Clients display component
│   ├── ContactForm.js   # Contact form component
│   └── Newsletter.js    # Newsletter subscription component
├── pages/
│   ├── LandingPage.js   # Main landing page
│   └── AdminPanel.js    # Admin panel page
├── App.js               # Main app component with routing
└── index.js             # Entry point
```

## Routes

- `/` - Landing page with all sections
- `/admin` - Admin panel for content management

## Environment Variables

Create a `.env` file (optional):
```
REACT_APP_API_URL=http://localhost:5000/api
```

If not set, it defaults to `http://localhost:5000/api`

## Components

### Landing Page Components

1. **Projects**: Displays all projects in a grid layout
2. **Clients**: Shows client testimonials in cards
3. **ContactForm**: Contact form with validation
4. **Newsletter**: Newsletter subscription section

### Admin Panel Components

1. **ProjectManagement**: Add and manage projects
2. **ClientManagement**: Add and manage clients
3. **ContactList**: View contact form submissions
4. **NewsletterList**: View newsletter subscriptions

## Styling

- Responsive design works on all screen sizes
- Modern gradient colors and smooth animations
- Clean card-based layouts
- Professional table views in admin panel

## Deployment

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `build` folder to Netlify

### Vercel

```bash
npm install -g vercel
vercel --prod
```

### Manual Deployment

1. Build: `npm run build`
2. Upload the `build` folder to your hosting service
3. Configure your web server to serve `index.html` for all routes

## API Integration

The app uses Axios to communicate with the backend API. All API calls are centralized in `src/api/api.js`.

Update the API URL for production in the environment variables or directly in the API file.

## Features

- ✅ Responsive design
- ✅ Loading states
- ✅ Error handling
- ✅ Form validation
- ✅ Image upload preview
- ✅ Success/error messages
- ✅ Smooth animations
- ✅ Clean UI/UX
