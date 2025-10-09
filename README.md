# 📰 Static News System

A clean and simple static news system that automatically extracts metadata from URLs and displays them as professional news cards.

## 🚀 Quick Start

### 1. Add URLs to news.json

Edit `data/news.json` and add your article URLs:

```json
[
  {
    "id": 1,
    "url": "https://www.huffpost.com/entry/your-article"
  },
  {
    "id": 2,
    "url": "https://example.com/another-article"
  }
]
```

### 2. Generate metadata

```bash
npm run generate-news
```

### 3. Build & deploy

```bash
npm run build
npm run start
```

## 📁 File Structure

```
├── app/
│   └── news/
│       └── page.tsx          # News page component
├── data/
│   ├── news.json            # Your URLs (edit this)
│   └── enriched-news.json   # Generated metadata (auto-created)
├── scripts/
│   └── generate-news.js     # URL metadata extraction script
└── components/              # UI components
```

## 🎯 What It Does

1. **Reads URLs** from `data/news.json`
2. **Extracts metadata** (title, description, image) from each URL
3. **Saves enriched data** to `data/enriched-news.json`
4. **Displays beautiful cards** on the news page

## 🔧 Commands

```bash
npm run dev              # Start development server
npm run generate-news    # Extract metadata from URLs
npm run build           # Build for production (auto-generates news)
npm run start           # Start production server
```

## ✨ Features

- ✅ **Automatic metadata extraction** from any URL
- ✅ **Beautiful responsive cards** with images
- ✅ **Static generation** - super fast loading
- ✅ **Professional design** with hover effects
- ✅ **Mobile responsive** layout
- ✅ **SEO friendly** with proper meta tags

## 🛠️ Built With

- **Next.js 13** - React framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Shadcn/UI** - UI components
- **TypeScript** - Type safety

---

**Perfect for static websites that need professional news/article displays!** 🎉
