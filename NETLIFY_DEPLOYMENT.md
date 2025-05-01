# Netlify Deployment Guide

## Prerequisites
1. Netlify account (sign up at https://app.netlify.com/signup)
2. GitHub account with the project repository
3. Node.js installed (for local testing)

## Deployment Steps

### Method 1: Deploy from GitHub (Recommended)

1. Log in to your Netlify account
2. Click "New site from Git"
3. Choose "GitHub" as your Git provider
4. Select your repository: `Aayush-Ash/ecommerce`
5. Configure the build settings:
   - Build command: `echo 'No build step required'`
   - Publish directory: `src`
6. Click "Deploy site"

### Method 2: Deploy from Local Files

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Initialize Netlify in your project:
   ```bash
   netlify init
   ```

4. Deploy your site:
   ```bash
   netlify deploy --prod
   ```

## Configuration

### Environment Variables
If your application requires environment variables, add them in Netlify:
1. Go to Site settings > Build & deploy > Environment
2. Add your environment variables

### Custom Domain
To add a custom domain:
1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Follow the instructions to configure DNS

## Important Notes

1. This deployment is for the static version of your website
2. The PHP and MySQL components will not be available
3. For full functionality, you'll need to:
   - Use a separate hosting service for the backend
   - Update the frontend to point to the new backend URL
   - Consider using services like:
     - Heroku for PHP backend
     - Railway for MySQL database
     - Or other container hosting services

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check the build logs in Netlify
   - Verify the publish directory is correct
   - Ensure all required files are in the repository

2. **Site Not Loading**
   - Check the deployment logs
   - Verify the redirect rules
   - Clear browser cache

3. **Environment Variables**
   - Ensure all required variables are set
   - Check for typos in variable names
   - Verify variable values are correct

### Getting Help
- Netlify Documentation: https://docs.netlify.com/
- Netlify Support: https://www.netlify.com/support/
- GitHub Issues: https://github.com/Aayush-Ash/ecommerce/issues 