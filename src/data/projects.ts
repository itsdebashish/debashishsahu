export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  category: "web" | "backend" | "startup" | "open-source"
  featured: boolean
  image?: string
}

export const projects: Project[] = [
  {
    id: "debt-desk",
    title: "Debt Desk",
    description: "A personal finance management application to track borrowed and lent money on a per-person basis with transaction history and balance management.",
    longDescription: "Debt Desk is a personal finance management application designed to help users track, manage, and analyze borrowed and lent money on a per-person basis. The platform provides a clear financial overview by maintaining transaction history, balances, and notes, helping users avoid confusion, missed repayments, and informal record-keeping issues.",
    techStack: ["React Native", "TypeScript", "Async Storage", "NativeWind"],
    githubUrl: "https://github.com/itsdebashish/DebtDesk",
    category: "web",
    featured: true,
  },
  {
    id: "vendue",
    title: "Vendue",
    description: "A college-focused online marketplace with bidding system, secure chat, and campus verification for students to buy and sell products.",
    longDescription: "Vendue is a college-focused online marketplace where students can list products, place bids, chat securely, and finalize transactions within their campus ecosystem. It is designed to make buying and selling among students safe, transparent, and community-driven with college verification, bidding system, and in-app chat features.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Express.js", "Prisma", "Socket.IO", "WebSockets"],
    githubUrl: "https://github.com/itsdebashish/Vendue",
    liveUrl: "https://vendue.in",
    category: "web",
    featured: true,
  },
  {
    id: "databiz-website",
    title: "DataBiz Website",
    description: "Official website for DataBiz club at NIT Bhopal showcasing events, workshops, team members, and community activities.",
    longDescription: "The DataBiz Website is the official digital presence of the DataBiz club, designed to showcase the club's vision, events, activities, and community in a modern, engaging, and informative way. The website acts as a central hub for students to explore DataBiz initiatives, register for events, and stay updated with the club's latest announcements.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/itsdebashish/databiz-nitb",
    liveUrl: "https://databiz.in",
    category: "web",
    featured: true,
  },
]

export const featuredProjects = projects.filter(project => project.featured)
export const allProjects = projects
