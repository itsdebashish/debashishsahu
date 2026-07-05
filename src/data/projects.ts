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
    id: "food-delivery-backend",
    title: "Scalable Food Delivery Backend System",
    description:
      "Production-style backend inspired by Swiggy/Zomato with JWT authentication, Redis caching, Docker deployment, and scalable architecture.",
    longDescription:
      "Designed and implemented a production-style food delivery backend using Java and Spring Boot. The system follows a modular monolith architecture with clean separation of concerns. Features include JWT authentication, role-based authorization, Redis caching, Docker containerization, optimized MySQL schema design, and an order lifecycle state machine capable of handling concurrent transitions and failure scenarios.",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "MySQL",
      "Redis",
      "JWT",
      "Docker",
      "Hibernate",
      "JPA"
    ],
    githubUrl: "https://github.com/your-username/food-delivery-backend",
    category: "backend",
    featured: true,
  },

  {
    id: "ai-interview-platform",
    title: "AI Interview Assessment Platform",
    description:
      "Real-time coding interview platform with WebSocket communication, JWT authentication, and concurrent interview sessions.",
    longDescription:
      "Built a scalable interview assessment platform supporting real-time coding interviews and automated evaluation workflows. Implemented secure authentication with JWT, role-based authorization, WebSocket-based live synchronization, structured question bank management, concurrent interview session handling, and an extensible evaluation pipeline.",
    techStack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "WebSocket",
      "JWT",
      "Docker",
      "Spring Security"
    ],
    githubUrl: "https://github.com/your-username/ai-interview-platform",
    category: "backend",
    featured: true,
  },

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
