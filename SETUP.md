# Portfolio Setup Guide - Node.js Backend

## Prerequisites
- Node.js (v14 or higher)
- npm
- Gmail account

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Gmail App Password
1. Go to your [Google Account](https://myaccount.google.com/)
2. Click **Security** in the left menu
3. Enable **2-Step Verification** if not already enabled
4. Go back to Security and find **App passwords**
5. Select **Mail** and **Windows Computer** (or your device)
6. Generate and copy the 16-character password
7. Create a `.env` file in the root directory and add:

```
EMAIL_USER=vedu9622@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
PORT=3000
```

### 3. Run the Server
```bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
```

The server will start at `http://localhost:3000`

## Features
- ✅ Contact form with validation
- ✅ Email notifications to your Gmail
- ✅ Automatic confirmation email to sender
- ✅ CORS enabled for frontend communication
- ✅ Error handling and logging

## Environment Variables
- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASSWORD`: Gmail App Password (not your regular password)
- `PORT`: Server port (default: 3000)

## Deployment
### Using Heroku:
1. Create a Heroku account and install Heroku CLI
2. Run:
```bash
heroku create your-app-name
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASSWORD=your-app-password
git push heroku main
```

### Using Railway, Render, or Netlify Functions:
Similar environment variable configuration required.

## Troubleshooting
- **"Less secure app access" error**: Use App Passwords instead of your Gmail password
- **Port already in use**: Change PORT in `.env` file
- **Emails not sending**: Check that 2FA is enabled and App Password is correct

## Support
For issues or questions, visit the [Nodemailer Documentation](https://nodemailer.com/)
