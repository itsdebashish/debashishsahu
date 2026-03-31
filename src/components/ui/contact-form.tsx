"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Github, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const socialLinks = [
  {
    name: "Email",
    href: "mailto:sahudeba03@gmail.com",
    icon: Mail,
    description: "contact@debashishsahu.in",
  },
  {
    name: "GitHub",
    href: "https://github.com/itsdebashish",
    icon: Github,
    description: "@itsdebashish",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/debashishtest",
    icon: Linkedin,
    description: "/in/debashishtest",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/its_developr",
    icon: Twitter,
    description: "@its_developr",
  },
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Send me a message</CardTitle>
            <CardDescription>
              I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="text-green-600 dark:text-green-400 mb-2">
                  <Send className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Message sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-6"
      >
        <div>
          <h3 className="text-2xl font-bold mb-4">Let's connect</h3>
          <p className="text-muted-foreground mb-6">
            Feel free to reach out through any of these platforms. I'm always open to discussing
            new opportunities, collaborations, or just having a chat about technology.
          </p>
        </div>

        <div className="space-y-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-lg border hover:bg-accent hover:text-accent-foreground transition-colors group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <link.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium">{link.name}</div>
                <div className="text-sm text-muted-foreground">{link.description}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 p-6 bg-secondary/50 rounded-lg">
          <h4 className="font-semibold mb-2">Quick Response</h4>
          <p className="text-sm text-muted-foreground">
            I typically respond to messages within 24 hours. For urgent inquiries,
            feel free to call or send a direct message on LinkedIn.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
