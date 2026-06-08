// ==================== Static data for the portfolio =====================

export const services = [
  {
    icon: "/icon-design.svg",
    alt: "design icon",
    title: "Web Design",
    text: "Modern and user-friendly designs focused on great user experiences.",
  },
  {
    icon: "/icon-design.svg",
    alt: "design icon",
    title: "Frontend Development",
    text: "Responsive and interactive websites built with modern technologies.",
  },
  {
    icon: "/icon-dev.svg",
    alt: "web development icon",
    title: "Backend Development",
    text: "Scalable and secure server-side solutions for web applications.",
  },
  {
    icon: "/icon-dev.svg",
    alt: "web development icon",
    title: "Smart Contract Development",
    text: "Secure and efficient smart contracts for blockchain applications.",
  },
];
export interface Testimonial {
  name: string;
  avatar: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
name: "Haga Matsya",
avatar: "/logo-1-color.jpeg",
text: "Excellent service from start to finish. The website was delivered quickly, the pricing was reasonable, and every design request was handled professionally. The final news portal website exceeded my expectations with its clean design, smooth performance, and overall quality.",
},
  {
  name: "Sugiarto Halim",
  avatar: "/gpi.jpg",
  text: "I was impressed by how quickly the project was completed. I expected the company profile and property listing website to take two to three weeks, but it was fully delivered in just two days. The quality, communication, and attention to detail were outstanding.",
  },
  {
  name: "Trahwidhi",
  avatar: "/logo-4-color.png",
  text: "Working together was a great experience. Communication was always responsive and transparent throughout the project. The website was built with excellent responsiveness across all devices, and the final result for ChainDox exceeded expectations.",
},
];

export const clients = [
  { src: "/logo-4-color.png", alt: "client logo" },
  { src: "/logo-3-color.png", alt: "client logo" },
  { src: "/logo-2-color.png", alt: "client logo" },
  { src: "/logo-1-color.jpeg", alt: "client logo" },
];

export const education = [
  {
    title: "Bachelor of Information Technology",
    period: "2024 - Present",
    text: "Currently pursuing a degree in Information Technology while actively building fullstack web and blockchain applications through professional work and hackathons.",
  },
];

export const experience = [
  {
    title: "Web Developer — Palm Game Studio",
    period: "Jun 2026 - Present",
    text: "Developing and maintaining web applications with a focus on performance, scalability, and user experience.",
  },
  {
    title: "Web Developer — Bali Blockchain Weeks",
    period: "Jan 2026 - Apr 2026",
    text: "Developed and maintained the event website, implemented form submission systems, and optimized performance and user experience.",
  },
  {
    title: "Web Developer — VN Software House",
    period: "2025 - Present",
    text: "Built SEO-friendly business websites using Next.js and Tailwind CSS for local businesses and clients.",
  },
];

export const competitions = [
  {
    title: "🏆 Cursor Hackathon Winner",
    period: "May 2026",
    text: "Won the Cursor Hackathon by developing a macOS application in Swift that detects user posture in real time and provides corrective feedback to promote healthier workstation habits.",
  },
  {
    title: "Fullstack Developer — Solana Colosseum Hackathon",
    period: "2026",
    text: "Built a fullstack Solana application with wallet integration, Rust smart contracts, and Prisma-powered backend services.",
  },
  {
    title: "Frontend Developer — Aptos & Lisk Hackathon",
    period: "2025",
    text: "Developed responsive Web3 interfaces and integrated frontend applications with blockchain smart contracts.",
  },
  {
    title: "Fullstack Developer — Nirmala Finance (Techsoft Competition)",
    period: "2026",
    text: "Built a crypto price tracker with API integrations, real-time features, and responsive user interfaces.",
  },
];

export const skills = [
  { name: "Web design", value: 90 },
  { name: "Frontend Development", value: 100 },
  { name: "Backend Development", value: 85 },
  { name: "Smart Contract Development", value: 70 },
];

export const filterCategories = [
  "All",
  "Web 2",
  "Web 3",
];

export const projects = [
  { title: "Soldoway", category: "web 3", img: "/project-7.png", links: "https://soldoway-v2.vercel.app/" },
  { title: "Multos", category: "web 3", img: "/project-6.png", links: "https://multos.vercel.app/" },
  {
    title: "Bali Blockchain Weeks",
    category: "web 3",
    img: "/project-5.png",
    links: "https://baliblockchainweeks.com/"
  },
  { title: "Nirmala Finance", category: "web 3", img: "/project-4.png", links: "https://nirmala-finance.vercel.app/" },
  { title: "Chaindox", category: "web 3", img: "/project-3.png", links: "https://chaindox.com/" },
  {
    title: "Lensa Berita Bali",
    category: "web 2",
    img: "/project-2.png",
    links: "https://lensaberitabali.com/"
  },
  {
    title: "Global Property Innovation",
    category: "web 2",
    img: "/project-1.png",
    links: "https://www.pt-gpi.com/"
  },


];

export const blogPosts = [
  {
    title: "Design conferences in 2022",
    category: "Design",
    date: "Feb 23, 2024",
    datetime: "2024-02-23",
    img: "/blog-1.jpg",
    text: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
  },
  {
    title: "Best fonts every designer",
    category: "Design",
    date: "Feb 23, 2024",
    datetime: "2024-02-23",
    img: "/blog-2.jpg",
    text: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
  },
  {
    title: "Design digest #80",
    category: "Design",
    date: "Feb 23, 2024",
    datetime: "2024-02-23",
    img: "/blog-3.jpg",
    text: "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
  },
  {
    title: "UI interactions of the week",
    category: "Design",
    date: "Feb 23, 2024",
    datetime: "2024-02-23",
    img: "/blog-4.jpg",
    text: "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
  },
  {
    title: "The forgotten art of spacing",
    category: "Design",
    date: "Feb 23, 2024",
    datetime: "2024-02-23",
    img: "/blog-5.jpg",
    text: "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Design digest #79",
    category: "Design",
    date: "Feb 23, 2024",
    datetime: "2024-02-23",
    img: "/blog-6.jpg",
    text: "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.",
  },
];
