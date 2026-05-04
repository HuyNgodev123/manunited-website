This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# 🔴 Manchester United Website

Website chính thức về lịch sử, video store và xu hướng TikTok của Manchester United được xây dựng bằng **Next.js 16**, **React 19**, **Framer Motion** và **Tailwind CSS**.

---

## 📑 Mục Lục

- [Tính Năng](#tính-năng)
- [Yêu Cầu Hệ Thống](#yêu-cầu-hệ-thống)
- [Cài Đặt](#cài-đặt)
- [Cấu Trúc Thư Mục](#cấu-trúc-thư-mục)
- [Hướng Dẫn Sử Dụng](#hướng-dẫn-sử-dụng)
- [Config & Constants](#config--constants)
- [Components](#components)
- [Hooks](#hooks)
- [Pages](#pages)
- [Styling](#styling)
- [Deployment](#deployment)

---

## ✨ Tính Năng

✅ **Responsive Design** - Mobile, Tablet, Desktop  
✅ **Smooth Animations** - Powered by Framer Motion  
✅ **Dark Theme** - Manchester United Red + Gray  
✅ **Video Store** - Embed YouTube videos  
✅ **Lịch Sử Đội** - Timeline interactif  
✅ **TikTok Trends** - Xu hướng hot  
✅ **SEO Optimized** - Meta tags, Open Graph  
✅ **Performance** - Image optimization, Code splitting  

---

## 🖥️ Yêu Cầu Hệ Thống

```bash
Node.js: >= 16.0.0
pnpm: >= 8.0.0 (hoặc yarn, ppnpm)
```

---

## 🚀 Cài Đặt

### 1. Clone Project
```bash
git clone <repository-url>
cd manunited-website
```

### 2. Cài Dependencies
```bash
pnpm install
```

### 3. Chạy Dev Server
```bash
pnpm run dev
```

Truy cập: **http://localhost:3000**

### 4. Build Production
```bash
pnpm run build
pnpm start
```

---

## 📁 Cấu Trúc Thư Mục

```
manunited-website/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (Header, Footer)
│   ├── page.tsx                  # Trang chủ
│   ├── globals.css               # Global styles
│   ├── history/
│   │   └── page.tsx              # Trang lịch sử đội
│   └── tiktok-trends/
│       └── page.tsx              # Trang TikTok trends
│
├── components/                   # Reusable Components
│   ├── Header.tsx                # Navigation header
│   ├── Footer.tsx                # Footer
│   ├── Hero.tsx                  # Hero section (trang chủ)
│   ├── VideoStore.tsx            # Video store section
│   ├── TrendCard.tsx             # Card cho mỗi trend
│   └── TrendPlayer.tsx           # Video player cho trend
|   |__ TikTokTrends.tsx          # page chính cho TrendCard và TrendPlayer
|   |__ HistoryPage.tsx           # Trang lịch sử
│
├── config/                       # Configuration & Constants
│   ├── navigation.ts             # Menu links & social links
│   ├── animations.ts             # Animation variants & configs
│   ├── colors.ts                 # Color scheme
│   ├── tiktok.ts                 # TikTok trends data
│   └── index.ts                  # Export hub (import từ @/config)
│
├── hooks/                        # Custom React Hooks
│   ├── useNavigation.ts          # Menu state management
│   └── useAnimationOnScroll.ts   # Scroll animation hook
│
├── public/                       # Static assets
│   ├── logomanu.jpg              # Logo ảnh
│   └── images/                   # Folder ảnh khác
|
|__ share/                      
│   ├── NavLink.tsx                # Navigation link component
│   └── AnimatedSection.tsx        # Animation wrapper (dùng config)
│
├── package.json                  # Dependencies & scripts
├── tailwind.config.js            # Tailwind configuration
├── next.config.js                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # File này

```

---

## 🛠️ Hướng Dẫn Sử Dụng

### Chạy Các Lệnh Chính

```bash
# Dev mode (auto reload)
pnpm run dev

# Build production
pnpm run build

# Start production server
pnpm start

# Lint code
pnpm run lint
```

### Thêm Page Mới

1. **Tạo folder:** `app/new-page/`
2. **Tạo file:** `page.tsx`
3. **Code:**
```typescript
'use client';
import AnimatedSection from '@/components/AnimatedSection';

export default function NewPage() {
  return (
    <main className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection variant="slideUp">
          <h1 className="text-5xl font-bold text-white">New Page</h1>
        </AnimatedSection>
      </div>
    </main>
  );
}
```

### Thêm Component Mới

1. **Tạo file:** `components/MyComponent.tsx`
2. **Code:**
```typescript
'use client';
import { motion } from 'framer-motion';

export default function MyComponent() {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      {/* Content */}
    </motion.div>
  );
}
```

---

## ⚙️ Config & Constants

### `config/navigation.ts`
**Quản lý:** Menu links, Social links, Footer links

```typescript
export const navLinks = [
  { label: 'Trang Chủ', href: '/' },
  { label: 'Lịch Sử', href: '/history' },
  { label: 'TikTok Trends', href: '/tiktok-trends' },
  { label: 'Video Store', href: '/#video-store' },
];

export const socialLinks = [
  { name: 'Facebook', url: '...', icon: 'FaFacebook' },
  // ...
];
```

**Dùng để:** Header, Footer, Mobile menu

---

### `config/animations.ts`
**Quản lý:** Tất cả animation variants

```typescript
export const animationVariants = {
  fadeIn: { initial: {...}, animate: {...}, transition: {...} },
  slideUp: { initial: {...}, animate: {...}, transition: {...} },
  scale: { initial: {...}, animate: {...}, transition: {...} },
  // ... 8+ animation types
};

export const animationDelays = {
  xs: 0.1,
  sm: 0.2,
  md: 0.3,
  lg: 0.5,
  xl: 0.7,
};

export const floatingAnimation = {
  animate: { y: [0, 20, 0] },
  transition: { duration: 3, repeat: Infinity },
};
```

**Dùng để:** `<AnimatedSection>`, `<motion.div>`

---

### `config/colors.ts`
**Quản lý:** Color scheme

```typescript
export const colors = {
  primary: '#dc2626',        // Red
  primaryDark: '#b91c1c',    // Dark Red
  bg: { dark: '#0f172a', card: '#1f2937' },
  text: { primary: '#ffffff', secondary: '#d1d5db' },
};
```

**Dùng để:** Styling tùy chỉnh

---

### `config/tiktok.ts`
**Quản lý:** TikTok trends data

```typescript
export const tiktokTrends = [
  {
    id: 1,
    title: '#ManUnited Best Goals',
    views: '5.2M',
    likes: '120K',
    creator: '@manunited.official',
  },
  // ... 4 trends
];

export const tiktokCtaText = {
  title: 'Tạo Xu Hướng Của Riêng Bạn',
  description: '...',
  buttonText: 'Bắt Đầu Ngay',
};
```

**Dùng để:** `app/tiktok-trends/page.tsx`

---

### `config/index.ts`
**Lý Do Tồn Tại:** Export hub - nhập tất cả config từ 1 file

```typescript
// ✅ Cách mới
import { navLinks, animationVariants, colors } from '@/config';

// ❌ Cách cũ
import { navLinks } from '@/config/navigation';
import { animationVariants } from '@/config/animations';
```

---

## 🧩 Components

### `Header.tsx`
**Chức Năng:** Navigation bar với logo, menu desktop, mobile menu

**Props:** None (dùng config)

**Dùng:** `app/layout.tsx`

```typescript
<Header />
```

**Features:**
- ✅ Logo + Text responsive
- ✅ Desktop menu (hidden trên mobile)
- ✅ Mobile hamburger menu
- ✅ Dùng `NavLink` component
- ✅ Dùng `useNavigation` hook

---

### `Footer.tsx`
**Chức Năng:** Footer với about, links, social media

**Props:** None (dùng config)

**Dùng:** `app/layout.tsx`

```typescript
<Footer />
```

**Features:**
- ✅ About section
- ✅ Quick links
- ✅ Social media links
- ✅ Copyright text

---

### `Hero.tsx`
**Chức Năng:** Hero section trang chủ với animation

**Props:** None

**Dùng:** `app/page.tsx`

```typescript
<Hero />
```

**Features:**
- ✅ Animated logo (scale)
- ✅ Animated title (slideUp)
- ✅ CTA button
- ✅ Floating arrow
- ✅ Dùng `AnimatedSection`
- ✅ Dùng `floatingAnimation` config

---

### `VideoStore.tsx`
**Chức Năng:** Video player với playlist

**Props:** None

**Dùng:** `app/page.tsx`

```typescript
<VideoStore />
```

**Features:**
- ✅ YouTube embed player
- ✅ Video list (select để chọn)
- ✅ Smooth animation
- ✅ Dùng `AnimatedSection`

---

### `AnimatedSection.tsx`
**Chức Năng:** Wrapper component cho animation tái sử dụng

**Props:**
```typescript
interface AnimatedSectionProps {
  children: React.ReactNode;
  variant?: 'fadeIn' | 'slideUp' | 'slideDown' | 'scale' | ...;
  delay?: number;
  className?: string;
  id?: string;
}
```

**Dùng:**
```typescript
<AnimatedSection variant="slideUp" delay={0.3}>
  <h1>Content</h1>
</AnimatedSection>
```

**Features:**
- ✅ Auto load animation từ config
- ✅ Support all animation variants
- ✅ Custom delay
- ✅ Viewport trigger (once: true)

---

### `NavLink.tsx`
**Chức Năng:** Link component với hover animation

**Props:**
```typescript
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  mobile?: boolean;
}
```

**Dùng:**
```typescript
<NavLink href="/history">Lịch Sử</NavLink>
```

**Features:**
- ✅ Responsive (mobile & desktop)
- ✅ Hover animation
- ✅ Next.js Link optimization

---

### `TrendCard.tsx`
**Chức Năng:** Card cho mỗi TikTok trend

**Props:**
```typescript
interface TrendCardProps {
  trend: Trend;
  isSelected: boolean;
  onSelect: () => void;
  index: number;
}
```

**Dùng:**
```typescript
<TrendCard
  trend={trend}
  isSelected={true}
  onSelect={() => setSelectedTrend(trend)}
  index={0}
/>
```

---

### `TrendPlayer.tsx`
**Chức Năng:** Hiển thị video player + info trend

**Props:**
```typescript
interface TrendPlayerProps {
  trend: Trend;
}
```

**Dùng:**
```typescript
<TrendPlayer trend={selectedTrend} />
```

---

## 🪝 Hooks

### `useNavigation()`
**Chức Năng:** Quản lý trạng thái menu

**Dùng:**
```typescript
const { isMenuOpen, toggleMenu, closeMenu } = useNavigation();
```

**Return:**
```typescript
{
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  openMenu: () => void;
}
```

**Nơi Dùng:** `Header.tsx`

---

### `useAnimationOnScroll()`
**Chức Năng:** Trigger animation khi scroll vào view

**Dùng:**
```typescript
const { ref, isVisible } = useAnimationOnScroll(0.1);

<div ref={ref}>
  {isVisible && <animated-content />}
</div>
```

**Return:**
```typescript
{
  ref: RefObject<HTMLDivElement>;
  isVisible: boolean;
}
```

---

## 📄 Pages

### `app/page.tsx` - Trang Chủ
**Layout:**
1. `<Hero />` - Hero section
2. `<VideoStore />` - Video store section

```typescript
import Hero from '@/components/Hero';
import VideoStore from '@/components/VideoStore';

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoStore />
    </main>
  );
}
```

---

### `app/history/page.tsx` - Trang Lịch Sử
**Features:**
- ✅ Timeline lịch sử từ 1878
- ✅ Milestone cards
- ✅ Statistics
- ✅ Animated sections

**Key Data:**
```typescript
const milestones = [
  { year: 1878, title: 'Thành Lập', description: '...' },
  // ... 6 milestones
];
```

---

### `app/tiktok-trends/page.tsx` - TikTok Trends
**Layout:**
1. Header - Title
2. Main Content Grid:
   - `<TrendPlayer />` (2/3 width)
   - `<TrendCard />` list (1/3 width)
3. CTA Section - "Tạo Xu Hướng"

**Features:**
- ✅ Select trend → Update player
- ✅ Animated components
- ✅ Dùng `tiktokTrends` config
- ✅ NavLink đến TikTok

---

### `app/layout.tsx` - Root Layout
**Chứa:**
```typescript
<html>
  <body>
    <Header />
    {children}
    <Footer />
  </body>
</html>
```

**Global Metadata:**
```typescript
export const metadata: Metadata = {
  title: 'Manchester United | Lịch Sử Và Xu Hướng',
  description: 'Website chính thức...',
};
```

---

## 🎨 Styling

### Tailwind CSS v3.4.1

**Global Styles** (`app/globals.css`):
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom scrollbar */
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-thumb { background: #dc2626; }
```

**Color Palette:**
- Primary: `red-700` (#dc2626)
- Dark BG: `gray-900` (#111827)
- Card BG: `gray-800` (#1f2937)
- Text: `white` (#ffffff)

**Responsive Breakpoints:**
```
sm: 640px   (Mobile)
md: 768px   (Tablet)
lg: 1024px  (Desktop)
xl: 1280px  (Large Desktop)
```

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "next": "16.2.4",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "framer-motion": "^12.38.0",
    "react-icons": "^5.6.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.1",
    "typescript": "^5",
    "autoprefixer": "^10.5.0",
    "postcss": "^8.5.10"
  }
}
```

---

## 🚀 Deployment

### Deploy Lên Vercel (Recommended)

1. **Push code lên GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect Vercel:**
   - Vào https://vercel.com
   - Click "New Project"
   - Import GitHub repo
   - Click "Deploy"

3. **Automatic deploys:**
   - Mỗi push tới `main` → auto deploy

### Deploy Lên Heroku

1. **Install Heroku CLI**
2. **Login:**
```bash
heroku login
heroku create manunited-website
git push heroku main
```

---

## 🐛 Troubleshooting

### Lỗi: `motion is not defined`
**Sửa:** Import `import { motion } from 'framer-motion'`

### Lỗi: `Cannot find module '@/config'`
**Sửa:** Check `tsconfig.json` có `"baseUrl": "."` và `"@/*": ["./*"]`

### Lỗi: Tailwind CSS không apply
**Sửa:**
```bash
rm -rf .next
pnpm run dev
```

### Lỗi: Image không hiển thị
**Sửa:** Check ảnh có trong `public/` folder

---

## 📚 Tài Liệu Tham Khảo

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

---

## 🤝 Contribution

1. Fork project
2. Tạo feature branch: `git checkout -b feature/xyz`
3. Commit changes: `git commit -am 'Add xyz'`
4. Push: `git push origin feature/xyz`
5. Pull Request

---

## 📝 License

MIT License - Bạn có thể dùng code này tự do!

---

## 👨‍💻 Author

**Manchester United Website** - Made with ❤️

Được xây dựng bởi một fan hâm mộ MU!

**Glory Glory Man United** 🔴

---

## 📞 Contact & Support

- 📧 Email: support@manunited.local
- 🐛 Report Issues: [GitHub Issues]
- 💬 Discussions: [GitHub Discussions]

---

**Last Updated:** May 2024  
**Version:** 1.0.0  
**Status:** ✅ Production Ready
