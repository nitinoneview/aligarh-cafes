# ☕ Aligarh Cafes

**Aligarh Cafes** is a hyperlocal cafe discovery platform built for the city of Aligarh, Uttar Pradesh, India.  
Live at 👉 [aligarhcafes.in](https://aligarhcafes.in)

## 🌟 About the Project

Finding a good cafe in Aligarh used to mean asking around or scrolling through generic apps.  
**Aligarh Cafes** solves that — it's a dedicated platform where locals can explore cafes by area,  
discover active deals and offers, and get real information about each cafe.

Built as a full-stack web application by a solo developer, this project is production-deployed  
and actively maintained.

## 🚀 Features

- 📍 **Browse by Area** — Filter cafes by locality (Civil Lines, Marris Road, etc.)
- 🏷️ **Active Offers** — See current deals and discounts from cafes
- 🔍 **Cafe Detail Pages** — Individual pages for each cafe with photos, info, and features
- 📧 **Email Notifications** — Automated emails via Resend API when new cafes are added
- 🛡️ **Admin Panel** — Password-protected dashboard to manage cafes and content
- ⚡ **Fast & SEO-Optimized** — Meta tags, Open Graph, Google Search Console verified
- 📱 **Responsive Design** — Works on mobile and desktop

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14 (App Router), TypeScript, Tailwind CSS |
| Backend | Next.js API Routes, Supabase (PostgreSQL) |
| Auth | Middleware-based admin authentication |
| Email | Resend API + Supabase Webhooks |
| Hosting | Vercel |
| Domain | GoDaddy (custom domain) |

## 📁 Project Highlights

- Uses **Next.js App Router** with Route Groups to separate public and admin layouts
- **ISR (Incremental Static Regeneration)** with `revalidate = 60` for performance
- **Supabase webhooks** trigger email alerts on database changes
- **Google Search Console** verified via GoDaddy DNS for SEO indexing

## 👨‍💻 Author

Built by **Nitin** — Production Support Engineer & Full-Stack Learner  
📌 Aligarh, Uttar Pradesh, India
