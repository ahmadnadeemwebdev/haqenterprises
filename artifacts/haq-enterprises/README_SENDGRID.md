SendGrid serverless setup

1) Purpose
- Provides a serverless endpoint at `/api/send-email` that sends contact form submissions to your inbox using SendGrid.

2) Required environment variables (set these on Vercel or your host)
- `SENDGRID_API_KEY` — the SendGrid API key (required).
- `SENDGRID_FROM_EMAIL` — optional, e.g. `no-reply@yourdomain.com` (defaults to `no-reply@haqenterprises.online`).
- `CONTACT_TO_EMAIL` — optional override for destination email (defaults to `ahmadnadeemwebdev@gmail.com`).

3) Deploy
- Add the variables above to your Vercel project (or other host) environment settings.
- Deploy the `artifacts/haq-enterprises` site to Vercel — the `/api/send-email` function will be available automatically.

4) Local testing
- Use `vercel dev` or set the env vars locally and run your dev server. You can also test with curl:

```
curl -X POST http://localhost:3000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","company":"X","message":"Hello"}'
```

5) Notes
- SendGrid may require you to verify the sending identity (`SENDGRID_FROM_EMAIL`) depending on your account.
- This approach avoids FormSubmit verification for the recipient mailbox; you'll still need to supply the SendGrid API key.
