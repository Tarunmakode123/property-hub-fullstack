# 🔒 Security & Environment Variables Guide

## ⚠️ Important: Never Commit Secrets!

**Never** commit sensitive information to GitHub:
- ❌ API Keys
- ❌ Database passwords
- ❌ Connection strings with credentials
- ❌ Private tokens

## ✅ How We Handle Secrets Securely

### 1. `.env` File (Not Committed)
- Contains actual credentials
- Lives ONLY on your computer
- Ignored by Git (listed in `.gitignore`)
- Never pushed to GitHub

**Example `.env`:**
```
MONGODB_URI=mongodb+srv://propertyuser:YOUR_PASSWORD@cluster.mongodb.net/database
PORT=5000
```

### 2. `.env.example` (Committed)
- Shows structure but NO secrets
- Tells developers what variables they need
- Safe to commit to GitHub

**Example `.env.example`:**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
PORT=5000
```

---

## 🚀 For Deployment (Render, Vercel)

**DO NOT put credentials in code or documentation.**

Instead, use the platform's environment variable UI:

### Render.com
1. Go to your Web Service
2. Click "Environment"
3. Add environment variables there
4. They won't be in source code ✅

### Vercel
1. Go to your Project Settings
2. Click "Environment Variables"
3. Add variables there
4. They won't be in source code ✅

---

## ✅ Our Setup is Now Secure

- ✅ `.env` is in `.gitignore` (not committed)
- ✅ `.env.example` shows the structure (safe to share)
- ✅ Credentials removed from documentation
- ✅ Using environment variables on deployment platforms

---

## 📋 Checklist for Each Deployment

- [ ] Add `MONGODB_URI` to deployment platform's environment variables
- [ ] Do NOT put credentials in code files
- [ ] Do NOT mention credentials in README or docs
- [ ] Use `.env.example` to show structure only

---

## 🔑 Getting Your MongoDB URI Safely

1. Go to MongoDB Atlas: https://cloud.mongodb.com
2. Click "Connect"
3. Choose "Drivers"
4. Copy your connection string
5. Replace `<password>` with your actual password
6. Keep this string ONLY in your local `.env` file
7. Never share it or commit it

---

**Remember: Treat your credentials like your password - NEVER share them!** 🔐
