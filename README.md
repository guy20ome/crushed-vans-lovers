# Crushed Vans Lovers

A community website for van enthusiasts who walk without heels. Features articles, a forum, and a modern UI built with Next.js and Tailwind CSS.

## 📁 Project Structure

```
crushed-vans-lovers/
├── public/
│   ├── images/
│   │   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── (main)/
│   │   │   ├── articles/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── forum/
│   │   │   │   └── page.tsx
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ArticleCard.tsx
│   │   └── ForumThread.tsx
│   ├── data/
│   │   ├── articles.ts
│   │   └── forumThreads.ts
│   └── lib/
│       └── utils.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Features

- 12 pre-loaded articles about van life, modifications, and travel.
- Forum integration (Discourse/Flarum).
- Responsive design with Tailwind CSS.

## 💬 Forum Integration

The forum is integrated using **Discourse** or **Flarum**. You can embed the forum in the `/forum` page or link to an external instance.

## 🎨 Customization

- **Styling**: Edit `src/app/globals.css` for global styles.
- **Layout**: Modify `src/app/layout.tsx` for the root layout.
- **Content**: Update `src/data/articles.ts` and `src/data/forumThreads.ts` for new content.

## 📄 License

Open-source and free to use for the **Crushed Vans Lovers** community.