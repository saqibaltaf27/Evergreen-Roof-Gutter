# EverGreen Roof & Gutter
## Lead-to-Discord Webhook Integrator

A lightweight, production grade middleware service that captures incoming website leads and instantly posts structured job alerts into a Discord channel for field technicians.

This solution ensures urgent leak repairs are seen immediately by the crew, eliminating delays caused by manual email monitoring.

## Features
- Serverless webhook listener
- Strict payload validation
- Google Maps link auto-generation from address
- Color-coded Discord Embed Notifications
- Retry Mechanism for reliability
- Structured Logging
- Environment variable protection
- Production Safe deployment

## API Endpoint
POST -> /api/webhook

## Production & Testing
1. Open Postman 
2. Create a new POST request
3. Enter this link (https://evergreen-roof-gutter.vercel.app/api/webhook)
4. In Body Paste the code Below and Select (raw JSON)
{
    "Name": "Saqib Altaf",
    "Phone": "+92 335-05000-78",
    "ServiceType": "Emergency Leak Repair",
    "Address": "street 10 I10/3 I10, Islamabad, Pakistan",
    "UrgencyLevel": "High"
}
5. After Clicking Send this will appear 
{
    "message": "Lead Successfully sent to Discord."
}

## Discord Webhook & Environment Variable
1. Go to discord
2. Create a new Channel.
3. Click on Settings Icon on the channel
4. Go to Channel Settings and Find "Integrations".
5. Click on Integrations.
6. Click on the Option "Create a Webhook".
7. It will create webhook then Copy it
8. In project root create ".env"
9. Paste the webhook url in the env variable 
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/1473599759339229307/VlwJcunFYfi8eV1gl_Yfzrqib8NVYUohqGyoyNTw6P5LA8L83obXHZVH84ZYAk6nd7gG
10. Add it to .gitignore and push to github

## Local Testing
1. npm install
2. vercel dev
3. Test on http://localhost:3000/api/webhook
