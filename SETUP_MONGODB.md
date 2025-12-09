# ⚠️ IMPORTANT: MongoDB Setup Required

## Current Status
✅ Frontend is running on http://localhost:3000  
⚠️ Backend needs MongoDB connection  

## Quick Fix - Option 1: Use MongoDB Atlas (Recommended - Free)

### Step-by-step:

1. **Create MongoDB Atlas Account** (2 minutes)
   - Go to: https://www.mongodb.com/cloud/atlas/register
   - Sign up with your email or Google account

2. **Create a Free Cluster** (5 minutes)
   - Click "Build a Database"
   - Select "FREE" (M0 Sandbox)
   - Choose AWS, any region close to you
   - Click "Create Cluster"
   - Wait 2-5 minutes for cluster creation

3. **Create Database User**
   - Click "Database Access" (left sidebar)
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Username: `flipruser` (or any name you want)
   - Password: Click "Autogenerate Secure Password" or create your own
   - **IMPORTANT**: Save this password somewhere!
   - User Privileges: Select "Read and write to any database"
   - Click "Add User"

4. **Allow Network Access**
   - Click "Network Access" (left sidebar)
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development)
   - This adds `0.0.0.0/0`
   - Click "Confirm"

5. **Get Connection String**
   - Click "Database" (left sidebar)
   - Click "Connect" on your cluster
   - Click "Connect your application"
   - Copy the connection string (looks like):
     ```
     mongodb+srv://flipruser:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
     ```
   - Replace `<password>` with your actual password from step 3

6. **Update .env File**
   - Open: `backend\.env`
   - Replace the MONGODB_URI line with your connection string
   - Add a database name before the `?`:
     ```
     MONGODB_URI=mongodb+srv://flipruser:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/fliprdb?retryWrites=true&w=majority
     ```

7. **Restart Backend**
   - In the PowerShell terminal running backend, press `Ctrl+C`
   - Run: `npm start`

---

## Option 2: Use Local MongoDB (If you have it installed)

If you have MongoDB installed locally:

1. Open `backend\.env`
2. Change MONGODB_URI to:
   ```
   MONGODB_URI=mongodb://localhost:27017/fliprdb
   ```
3. Make sure MongoDB service is running
4. Restart backend: `npm start`

---

## Verify It's Working

Once MongoDB is connected, you should see:
```
Server is running on port 5000
MongoDB Connected: cluster0-shard-00-01.xxxxx.mongodb.net
```

Then your app is fully functional! 🎉

---

## Test the Application

1. Open http://localhost:3000
2. Go to Admin Panel: http://localhost:3000/admin
3. Add a sample project with an image
4. Go back to home page and see it displayed!

---

## Need Help?

Common issues:
- **"querySrv ENOTFOUND"**: Wrong connection string or network access not configured
- **"Authentication failed"**: Wrong password in connection string
- **"Connection timed out"**: IP address not whitelisted in MongoDB Atlas

For more details, see `QUICKSTART.md` in the project root.
