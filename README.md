# 📰 PH Newspaper - Content Associate Task

Welcome to the **PH Newspaper** web application. This is a modern, high-performance news portal built with **Next.js 15+** and **Tailwind CSS 4**, designed to provide a premium reading experience with a focus on clean UI and interactive animations.

## 🚀 Tech Stack

- **Framework:** Next.js 15.1.2 (App Router)
- **Styling:** Tailwind CSS 4.0
- **Icons:** React Icons
- **Animations:** AOS (Animate On Scroll) & Framer Motion
- **Components:** Material UI (MUI) & Custom Tailwind Components
- **Maps:** React Leaflet (for Saradesh Map feature)

---

### Live Site Link

- [https://mrirakib-ph-content-associate-task-web.vercel.app/](https://mrirakib-ph-content-associate-task-web.vercel.app/)

### Client Repository

- [https://github.com/mrirakib04/ph-content-associate-task-web](https://github.com/mrirakib04/ph-content-associate-task-web)

### Server Repository

- [https://github.com/mrirakib04/ph-content-associate-task-server](https://github.com/mrirakib04/ph-content-associate-task-server)

---

## ✨ Key Features

- **Dynamic Category Tabs:** Explore news through multiple categories like Technology, Politics, Sports, and more with real-time API fetching.
- **Breaking News Ticker:** A fast-moving marquee for the latest headlines.
- **Interactive District Map:** "Saradesh" section to explore news based on specific districts using Leaflet maps.
- **Video Spotlight:** A cinema-style video gallery with a built-in modal player for immersive viewing.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.
- **Newsletter Integration:** Premium glassmorphic subscription section for daily updates.

## 🛠️ Installation & Setup

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/content-associate-web.git

```

2. **Install dependencies:**

```bash
npm install

```

3. **Install Type Definitions (Required for TypeScript):**

```bash
npm i --save-dev @types/aos

```

4. **Run the development server:**

```bash
npm run dev

```

5. **Build for production:**

```bash
npm run build

```

## 📁 Project Structure

- `/app`: Contains the main application routes and layouts.
- `/components/home`: Modular components like `HeroSection`, `CategoryTabs`, and `VideoGallery`.
- `/context`: Global state management via `MainContext`.
- `/public`: Static assets such as images and icons.

## 📝 Configuration

Ensure you have your environment variables set up (if any) in a `.env.local` file. This project uses a Vercel-hosted server for news data:
`https://mrirakib-ph-content-associate-task-server.vercel.app`.
