# EmailJS Setup Guide

This guide will help you set up EmailJS to send contact form submissions to your email address.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS website](https://www.emailjs.com/) and sign up for a free account
2. The free plan allows 200 emails per month, which should be sufficient for most portfolio websites

## Step 2: Create an Email Service

1. After signing in, go to the "Email Services" tab
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Name your service (e.g., "portfolio_contact")
6. Note down the Service ID (you'll need it later)

## Step 3: Create an Email Template

1. Go to the "Email Templates" tab
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{from_name}}` - The name of the person contacting you
   - `{{from_email}}` - The email address of the person contacting you
   - `{{subject}}` - The subject of the message
   - `{{message}}` - The message content
4. Example template:

```
From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}
```

5. Save the template and note down the Template ID

## Step 4: Update Your Code

1. Open the `js/contact.js` file
2. Replace `"YOUR_PUBLIC_KEY"` with your actual EmailJS public key (found in Account > API Keys)
3. Replace `"default_service"` with your Service ID
4. Replace `"template_id"` with your Template ID

```javascript
// Initialize EmailJS with your public key
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key

// ...

// Send email using EmailJS
emailjs
  .send("default_service", "template_id", templateParams) // Replace with your service ID and template ID
  .then(function (response) {
    // ...
  })
```

## Step 5: Test Your Form

1. Fill out the contact form on your website
2. Submit the form
3. Check your email to make sure you received the message
4. If you encounter any issues, check the browser console for error messages

## Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS API Reference](https://www.emailjs.com/docs/api/)
