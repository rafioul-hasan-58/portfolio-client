# Minimalist Personal Portfolio Website

A clean, minimal, text-focused personal portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, designed after [tamimehsan.github.io](https://tamimehsan.github.io/).

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js 18+** installed on your system.

### 2. Installation
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
```bash
npm run build
npm run start
```

---

## 🗂️ Project Structure

All website content is cleanly decoupled into `/data`. Components only render data imported from `/data`.

```
/
├── app/
│   ├── layout.tsx         # Root layout with Poppins font, SEO metadata & theme
│   ├── page.tsx           # Home page (Hero, Skills, Contact)
│   ├── academics/page.tsx # Academics page (Education & Achievements)
│   ├── experience/page.tsx# Experience page (Roles & Timeline)
│   └── projects/page.tsx  # Projects page
├── components/
│   ├── layout/            # Navbar, Footer, ThemeToggle, MobileMenu
│   ├── home/              # Hero, SkillsSection, ContactSection
│   ├── sections/          # TimelineItem, ExperienceItem, ProjectCard, AchievementItem
│   └── ui/                # Container, SectionTitle, Tag, Button, Link
├── data/                  # ALL editable content lives here!
│   ├── site.ts            # Name, title, bio, photo path, location, SEO metadata
│   ├── navigation.ts      # Top navbar navigation items
│   ├── socials.ts         # Social links (LinkedIn, GitHub, etc.)
│   ├── skills.ts          # Categorized skills list
│   ├── education.ts       # Degrees and coursework
│   ├── achievements.ts    # Awards, honors, competitions
│   ├── experience.ts      # Work and research positions
│   └── projects.ts        # Projects, stack, and demo links
├── lib/                   # Utility helpers (date formatting, class merger)
├── types/                 # Shared TypeScript interfaces for all data files
├── styles/
│   └── theme.ts           # Centralized theme tokens and color constants
├── public/
│   └── images/            # Profile avatar and images
└── README.md
```

---

## ✏️ How to Edit Content

To customize your portfolio with your own details, edit the files in the `data/` directory. **You do not need to touch any React components.**

| Section | File to Edit | Description |
| :--- | :--- | :--- |
| **Name, Title, Bio, SEO** | `data/site.ts` | Edit your full name, headline, bio paragraphs, avatar path, and SEO tags. |
| **Profile Photo** | `public/images/` & `data/site.ts` | Put your image in `public/images/` and update `avatar: "/images/your-photo.png"` in `data/site.ts`. |
| **Navbar Links** | `data/navigation.ts` | Add or reorder top navigation links. |
| **Social Links** | `data/socials.ts` | Update your LinkedIn, GitHub, Codeforces, X/Twitter, or email. |
| **Skills** | `data/skills.ts` | Grouped categories (Languages, Backend, Frontend, Cloud, etc.). |
| **Education** | `data/education.ts` | University, degrees, dates, thesis, GPA, and highlights. |
| **Achievements** | `data/achievements.ts` | Contests, scholarships, awards, and hackathon ranks. |
| **Experience** | `data/experience.ts` | Companies, research institutions, roles, dates, and responsibilities. |
| **Projects** | `data/projects.ts` | Project titles, tech stacks, GitHub URLs, live demos, and descriptions. |

---

## ➕ How to Add New Entries

Every data file is strictly typed. Adding an entry requires adding just **one object** to the corresponding array:

### Adding a New Project (`data/projects.ts`)
```ts
{
  id: "my-new-app",
  title: "My New Application",
  description: "A high-performance web tool built for real-time collaboration.",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  year: "2025",
  githubUrl: "https://github.com/your-username/my-new-app",
  liveUrl: "https://my-new-app.vercel.app",
  featured: true
}
```

### Adding a New Experience Entry (`data/experience.ts`)
```ts
{
  id: "exp-new",
  role: "Senior Software Engineer",
  company: "Tech Corp",
  companyUrl: "https://techcorp.example.com",
  location: "San Francisco, CA",
  period: "Oct 2024 – Present",
  summary: "Leading backend infrastructure and distributed database engineering.",
  bulletPoints: [
    "Scaled streaming services to handle 100k requests/sec.",
    "Mentored junior engineers and designed internal APIs."
  ],
  skills: ["Go", "Kafka", "PostgreSQL", "Docker"]
}
```

### Adding a New Page & Navigation Item
1. Create a new folder under `app/`, e.g. `app/publications/page.tsx`.
2. Add a new item in `data/navigation.ts`:
```ts
{
  title: "Publications",
  href: "/publications"
}
```

---

## 🎨 Changing Colors and Fonts

All colors, fonts, and theme tokens are defined in **one place**:

- **CSS Variables & Base Styling**: `app/globals.css`
- **Theme Configuration Tokens**: `styles/theme.ts`

### Customizing Colors
To change the light mode or dark mode palette, edit the CSS variables in `app/globals.css`:
```css
:root {
  --link-color: #0066cc; /* Accent link color in light mode */
  --bg-primary: #ffffff; /* Background in light mode */
  --text-primary: #333333;
}

html.dark {
  --link-color: #38bdf8; /* Accent link color in dark mode */
  --bg-primary: #121212; /* Background in dark mode */
  --text-primary: #d4d4d8;
}
```

### Customizing the Font
The site uses Google's **Poppins** font via `next/font/google`. To change fonts:
1. Open `app/layout.tsx`.
2. Replace `import { Poppins } from "next/font/google"` with your font of choice (e.g. `Inter`, `Geist`, `Roboto`).

---

## 🌗 Dark / Light Mode

- Automatically defaults to the user's **system preference** (`prefers-color-scheme`).
- Users can click the theme toggle button in the navbar to switch between dark and light modes.
- Selected preference is preserved across sessions using `localStorage`.
- Zero flash of unstyled theme on page load.

---

## 🚢 Deploying to Vercel

This portfolio is fully static and zero-backend, making it fast and free to deploy on [Vercel](https://vercel.com):

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: portfolio ready"
   git push origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio-client` repository.
4. Framework preset will automatically be detected as **Next.js**.
5. Click **"Deploy"**.
6. Your portfolio is live with free automatic SSL and global CDN!
