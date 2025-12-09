# Backend - Full Stack Application

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

3. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Documentation

### Projects API

#### Get All Projects
- **URL**: `/api/projects`
- **Method**: GET
- **Response**: Array of project objects

#### Create Project
- **URL**: `/api/projects`
- **Method**: POST
- **Content-Type**: multipart/form-data
- **Body**:
  - name (string, required)
  - description (string, required)
  - image (file, required)
- **Response**: Created project object

#### Update Project
- **URL**: `/api/projects/:id`
- **Method**: PUT
- **Content-Type**: multipart/form-data
- **Body**:
  - name (string, optional)
  - description (string, optional)
  - image (file, optional)
- **Response**: Updated project object

#### Delete Project
- **URL**: `/api/projects/:id`
- **Method**: DELETE
- **Response**: Success message

### Clients API

Similar structure to Projects API with additional `designation` field.

### Contact Forms API

#### Get All Contacts
- **URL**: `/api/contacts`
- **Method**: GET

#### Create Contact
- **URL**: `/api/contacts`
- **Method**: POST
- **Body**:
  - fullName (string, required)
  - email (string, required)
  - mobile (string, required)
  - city (string, required)

### Newsletter API

#### Get All Subscriptions
- **URL**: `/api/newsletter`
- **Method**: GET

#### Create Subscription
- **URL**: `/api/newsletter`
- **Method**: POST
- **Body**:
  - email (string, required)

## Image Upload & Cropping

All uploaded images are automatically:
1. Validated (only image files allowed)
2. Cropped to 450x350 pixels
3. Stored in the `uploads` directory

## Environment Variables

- `MONGODB_URI`: MongoDB connection string
- `PORT`: Server port (default: 5000)

## Dependencies

- express: Web framework
- mongoose: MongoDB ODM
- multer: File upload handling
- sharp: Image processing
- cors: Cross-origin resource sharing
- dotenv: Environment variables

## Deployment

The backend can be deployed to:
- Heroku
- AWS EC2
- Google Cloud Platform
- Azure App Service
- Railway
- Render

Make sure to set environment variables on your deployment platform.
