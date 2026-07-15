# GynoGuide AI

GynoGuide AI is a polished React + Vite web application focused on women’s health education. It includes a learning assistant, disease encyclopedia, medicines explorer, video library, notes, about and contact pages, and a future-ready AI integration architecture for OpenRouter.

## Features

- Responsive landing page with animated sections
- AI study assistant with mock responses and local chat history
- Disease cards with detailed educational information
- Medicine education cards with safety notes
- YouTube learning center using React Player
- Student notes and study resources
- Accessible, SEO-friendly structure for Vercel deployment

## Tech Stack

- React
- Vite
- React Router DOM
- Bootstrap
- Framer Motion
- React Icons
- Axios
- React Markdown
- React Player
- Context API
- Local Storage

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Deployment on Vercel

1. Create a Vercel project.
2. Connect this repository.
3. Set the build command to `npm run build`.
4. Deploy.

## AI Integration

The AI service is modular and ready for OpenRouter integration. Replace the placeholder values in `src/services/aiService.js`:

```js
const API_KEY = ''
const MODEL = ''
```
