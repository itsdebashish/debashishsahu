"use client"

import { motion } from "framer-motion"
import { GraduationCap, Code, Trophy, Heart, Target, Users } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/ui/section"

const journeyMilestones = [
  {
    year: "2024",
    title: "Started MCA & Software Engineering Journey",
    description:
      "Joined the Master of Computer Applications program at NIT Bhopal. Built a strong foundation in Data Structures, Algorithms, and full-stack web development while working on real-world projects.",
    icon: GraduationCap,
  },
  {
    year: "2025",
    title: "Mastered Java & Spring Boot",
    description:
      "Transitioned from full-stack development to backend engineering. Learned Java, Spring Boot, Spring Security, Hibernate, REST APIs, and built scalable backend systems following clean architecture principles.",
    icon: Code,
  },
  {
    year: "2026",
    title: "Built Production-Grade Backend Systems",
    description:
      "Engineered production-style applications including a Food Delivery Backend System and an AI Interview Assessment Platform using Redis, Docker, PostgreSQL, JWT, WebSockets, and modern backend design patterns.",
    icon: Trophy,
  },
  {
    year: "Present",
    title: "Backend Engineer & Continuous Learning",
    description:
      "Focused on backend engineering, system design, distributed systems, and solving 300+ LeetCode problems while continuously improving software architecture and problem-solving skills.",
    icon: Users,
  },
]

const values = [
  {
    title: "Clean Code",
    description: "I believe in writing maintainable, readable code that follows best practices and industry standards.",
    icon: Code,
  },
  {
    title: "Scalable Systems",
    description: "Designing applications that can grow and handle increased load efficiently.",
    icon: Target,
  },
  {
    title: "Continuous Learning",
    description: "Technology evolves rapidly, and I'm committed to staying updated with the latest trends and tools.",
    icon: Heart,
  },
  {
    title: "Community Driven",
    description: "Sharing knowledge through open-source contributions and helping fellow developers grow.",
    icon: Users,
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section>
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xl text-muted-foreground leading-relaxed">
              Passionate software engineer building the future, one line of code at a time.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Intro Section */}
      <Section animate={true}>
        <motion.div
          className="max-w-6xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Profile Photo */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                  <img
                    src="/profile.jpeg"
                    alt="Debashish Sahu - Software Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Code className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
            </motion.div>

            {/* Introduction Text */}
            <motion.div
              className="flex-1 space-y-6 text-center lg:text-left"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Hi! I'm <span className="font-semibold text-foreground">Debashish Sahu</span>, a dedicated software engineer currently pursuing my Master of Computer Applications (MCA) at NIT Bhopal.
                  My journey in technology began with a curiosity about how things work behind the scenes, which led me to fall in love with programming.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  I specialize in full-stack web development, with a strong focus on building scalable, user-centric applications.
                  My experience spans from creating responsive frontends with React and Next.js to developing robust backends with Node.js and databases like PostgreSQL.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  Beyond coding, I'm passionate about startups and real-world problem-solving. I believe technology should serve humanity,
                  and I'm always looking for opportunities to build products that make a positive impact.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* Journey Timeline */}
      <Section animate={true}>
        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold">My Journey</h2>
            <p className="text-muted-foreground mt-2">
              Key milestones in my software engineering journey
            </p>
          </div>

          <div className="space-y-8">
            {journeyMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col md:flex-row items-start gap-4"
              >
                <div className="flex items-center gap-4 md:w-32 flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <milestone.icon className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-semibold text-primary md:hidden">
                    {milestone.year}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-semibold">{milestone.title}</h3>
                    <div className="hidden md:block text-sm font-semibold text-primary">
                      {milestone.year}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Values & Focus */}
      <Section>
        <div className="max-w-6xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold">Values & Focus</h2>
            <p className="text-muted-foreground mt-2">
              Principles that guide my work and development philosophy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                        <value.icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section>
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold">Let's Build Something Together</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg text-muted-foreground">
              I'm always excited to work on interesting projects and collaborate with like-minded people.
              Whether it's a startup idea, an open-source contribution, or a challenging problem to solve,
              I'd love to hear from you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8 py-2"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
