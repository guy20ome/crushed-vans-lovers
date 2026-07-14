# 🚐 Crushed Vans Lovers

**A Next.js Community Website for Van Enthusiasts Who Walk Without Heels**

[![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=crushed-vans-lovers)](https://vercel.com)
[![GitHub Stars](https://img.shields.io/github/stars/guy20ome/crushed-vans-lovers?style=social)](https://github.com/guy20ome/crushed-vans-lovers/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/guy20ome/crushed-vans-lovers?style=social)](https://github.com/guy20ome/crushed-vans-lovers/network/members)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🌟 **About the Project**

**Crushed Vans Lovers** is a **modern, responsive community website** built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**. It’s designed for van enthusiasts who embrace the freedom of the open road—**without heels**.

This project is perfect for:
- **Van lifers** who want to share their adventures, tips, and modifications.
- **Travelers** looking for inspiration, routes, and community.
- **Developers** who want a **ready-to-deploy** Next.js template for niche communities.

---

## ✨ **Features**

### 📝 **12 Pre-loaded Articles**
Explore a variety of topics, including:
- **Van Modifications** (DIY upgrades, insulation, electrical systems)
- **Travel Stories** (epic road trips, scenic routes)
- **Culture** (van life values, community, and lifestyle)
- **Maintenance** (tips to keep your van in top shape)
- **Safety** (essential advice for secure travels)
- **Budget Travel** (how to explore the world affordably)
- **Van Models** (reviews and comparisons)
- **Events** (upcoming gatherings and meetups)

### 💬 **Forum Integration**
- **Discourse/Flarum-ready** structure for community discussions.
- Sample threads included for inspiration.
- Easy to connect to external forum instances.

### 🎨 **Modern UI with Tailwind CSS**
- **Fully responsive** (mobile, tablet, desktop).
- **Clean, minimalist design** with a focus on readability.
- **Customizable** colors, fonts, and layouts.

### 🚀 **Ready to Deploy**
- **Vercel-optimized** (one-click deploy).
- **Netlify-compatible** (static site hosting).
- **GitHub Codespaces** support for cloud development.

---

## 🛠 **Tech Stack**

| Technology       | Purpose                          | Version       |
|------------------|----------------------------------|---------------|
| **Next.js**      | React framework for SSR/SSG      | 14.2.3        |
| **React**        | UI library                       | 18.3.1        |
| **TypeScript**   | Type-safe JavaScript             | 5.4.5         |
| **Tailwind CSS** | Utility-first CSS framework      | 3.4.3         |
| **PostCSS**      | CSS post-processor               | 8.4.38        |
| **Autoprefixer** | Add vendor prefixes to CSS       | 10.4.19       |

---

## 📦 **Project Structure**

```
crushed-vans-lovers/
├── public/                  # Static files (images, favicon)
│   └── images/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (main)/          # Main pages
│   │   │   ├── articles/    # Articles listing & single article pages
│   │   │   ├── forum/       # Forum page
│   │   │   ├── about/       # About page
│   │   │   ├── contact/     # Contact page
│   │   │   └── page.tsx     # Homepage
│   │   ├── layout.tsx       # Root layout
│   │   └── globals.css      # Global styles
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Footer.tsx       # Footer
│   │   ├── ArticleCard.tsx  # Article card
│   │   └── ForumThread.tsx  # Forum thread component
│   ├── data/                # Static data
│   │   ├── articles.ts      # 12 pre-loaded articles
│   │   └── forumThreads.ts  # Sample forum threads
│   └── lib/                 # Utility functions
│       └── utils.ts
├── .gitignore               # Git ignore rules
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies & scripts
└── README.md                # Project documentation
```

---

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js (v18 or later)
- npm or yarn
- Git

### **1. Clone the Repository**
```bash
git clone https://github.com/guy20ome/crushed-vans-lovers.git
cd crushed-vans-lovers
```

### **2. Install Dependencies**
```bash
npm install
# or
yarn install
```

### **3. Run the Development Server**
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### **4. Build for Production**
```bash
npm run build
# or
yarn build
```

### **5. Start the Production Server**
```bash
npm start
# or
yarn start
```

---

## 🌐 **Deploy to the Cloud**

### **Option 1: Vercel (Recommended)**
1. Sign up at [vercel.com](https://vercel.com).
2. Click **"Add New Project"** and import your `crushed-vans-lovers` repository.
3. Vercel will automatically detect Next.js and deploy your site.
4. **Done!** Your site will be live at `crushed-vans-lovers.vercel.app`.

### **Option 2: Netlify**
1. Sign up at [netlify.com](https://www.netlify.com).
2. Click **"New site from Git"** and select your repository.
3. Set the **build command** to `npm run build` and the **publish directory** to `.next`.
4. **Done!** Your site will be live at `crushed-vans-lovers.netlify.app`.

### **Option 3: GitHub Codespaces (Cloud IDE)**
1. Go to your [GitHub repository](https://github.com/guy20ome/crushed-vans-lovers).
2. Click the **"Code"** button and select the **"Codespaces"** tab.
3. Click **"New codespace"** to launch a cloud-based VS Code environment.
4. Run `npm install` and `npm run dev` in the terminal.
5. **Done!** You’ll get a live URL for your development server.

---

## 🎨 **Customization**

### **Change the Design**
- Edit `src/app/globals.css` for global styles.
- Modify `tailwind.config.js` to customize colors, fonts, and more.

### **Add New Articles**
1. Open `src/data/articles.ts`.
2. Add a new article object to the `articles` array:
   ```typescript
   {
     slug: "your-article-slug",
     title: "Your Article Title",
     excerpt: "A brief description of your article.",
     content: "Your full article content in Markdown or HTML.",
     author: "Your Name",
     date: "July 14, 2026",
     category: "Category Name",
     readTime: 5,
     image: "https://example.com/your-image.jpg",
   }
   ```
3. The new article will automatically appear on the **Articles** page.

### **Add Forum Functionality**
- Replace the sample data in `src/data/forumThreads.ts` with real forum data.
- Integrate with **Discourse** or **Flarum** by embedding their widgets in `src/app/forum/page.tsx`.

### **Update Metadata**
- Edit the `metadata` object in `src/app/layout.tsx` to change the site title, description, and favicon.

---

## 🤝 **Contributing**

Contributions are welcome! Here’s how you can help:

1. **Fork the repository** and create a new branch.
2. **Make your changes** (e.g., add articles, improve UI, fix bugs).
3. **Commit your changes** with a clear message.
4. **Push to your fork** and submit a pull request.

### **Contribution Guidelines**
- Follow the existing code style.
- Add tests for new features (if applicable).
- Update the `README.md` if you add new features.

---

## 📜 **License**

This project is **open-source** and licensed under the **[MIT License](https://opensource.org/licenses/MIT)**. You are free to:
- Use, copy, and distribute the code.
- Modify the code for your own projects.
- Use it commercially or non-commercially.

See the [LICENSE](LICENSE) file for details.

---

## 🙏 **Acknowledgments**

- **Next.js** for the incredible React framework.
- **Tailwind CSS** for making styling a breeze.
- **Vercel** for seamless deployments.
- **Unsplash** for beautiful placeholder images.
- **All van lifers** who inspire this community!

---

## 📬 **Contact**

Have questions or feedback? Reach out:
- **GitHub**: [guy20ome](https://github.com/guy20ome)
- **Project Link**: [Crushed Vans Lovers](https://github.com/guy20ome/crushed-vans-lovers)

---

**Happy travels, and may the road always rise to meet you! 🚐✨**
