# Summarix

Summarix is an AI-powered web app that transforms PDF documents into concise, engaging summaries using contextual emojis and markdown formatting. Built with [Next.js](https://nextjs.org), Clerk authentication, Stripe payments, and LangChain for PDF parsing.

## Features

- Upload PDF documents and receive AI-generated summaries.
- Summaries are formatted for easy reading and include relevant emojis.
- User authentication via Clerk.
- Dashboard to manage your summaries.
- Stripe integration for payments and subscription management.
- Responsive UI with Tailwind CSS.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Set up environment variables:**
   - Copy `.env.example` to `.env` and fill in your API keys (Stripe, Clerk, Gemini, NeonDB, etc).

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Usage

- Sign up or sign in.
- Upload a PDF via the dashboard or upload page.
- View, download, or delete your summaries.
- Upgrade your plan for unlimited uploads.

## Project Structure

- `app/` – Next.js app routes and pages.
- `components/` – UI and feature components.
- `lib/` – Database, payments, and AI integration logic.
- `actions/` – Server actions for uploads and summaries.
- `types/` – TypeScript types.
- `utils/` – Utility functions.

## Technologies

- Next.js 15
- React 19
- Clerk (authentication)
- Stripe (payments)
- LangChain (PDF parsing)
- Google Gemini AI (summary generation)
- NeonDB (Postgres serverless)
- Tailwind CSS

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or your preferred platform.

## License

MIT

---

Made by
