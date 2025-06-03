"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
  ChevronUp,
} from "lucide-react"

import Link from "next/link"
import Image from "next/image"
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiFirebase,
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiGit,
  SiGithub,
} from "react-icons/si"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const skills = [
    { name: "MongoDB", icon: SiMongodb },
    { name: "ExpressJS", icon: SiExpress },
    { name: "ReactJS", icon: SiReact },
    { name: "NodeJS", icon: SiNodedotjs },
    { name: "MySQL", icon: SiMysql },
    { name: "Firebase", icon: SiFirebase },
    { name: "C", icon: SiC },
    { name: "C++", icon: SiCplusplus },
    { name: "Python", icon: SiPython },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
  ]

  const education = [
    {
      degree: "Bachelor of Technology",
      school: "Indian Institute of Technology Patna",
      year: "2021-2025",
      description: "Computer Science Engineering",
    },
    {
      degree: "Intermediate Education",
      school: "Sasi Junior College",
      year: "2019-2021",
      description: "Maths Physics Chemistry",
    },
    {
      degree: "Secondary Education",
      school: "St.Ann's EM School",
      year: "2018-2019",
      description: "Languages and Social Sciences",
    },
  ]

  const projects = [
    {
      title: "Chat App",
      description: " A user friendly full-stack multi-user web chat application",
      image: "/images/2.png",
      technologies: ["React", "Node.js", "MongoDB", "Socket.IO"],
      github: "https://github.com/vivekrayudu/Chat-App",
      live: "https://chat-app-e67k.onrender.com/login",
    },
    {
      title: "Lost and Found App",
      description: "Community platform to report and retrieve lost and found items",
      image: "/images/3.png",
      technologies: ["React", "Express", "Material UI", "Firebase"],
      github: "https://github.com/vivekrayudu/LostAndFoundApp",
      live: "https://lostandfoundapp-c3ot.onrender.com/",
    },
    {
      title: "Placement Portal",
      description: "A web-based Placement Portal that streamlines student registrations, job postings.",
      image: "/images/4.jpg",
      technologies: ["PHP", "HTML", "CSS"],
      github: "https://github.com/vivekrayudu/CS260_Mini_Project",
      live: "https://github.com/vivekrayudu/CS260_Mini_Project",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "education", "projects"]
      const scrollPosition = window.scrollY + 100

      // Show scroll-to-top button when scrolled down 300px
      setShowScrollTop(window.scrollY > 300)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Vivek
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "education", "projects"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {["home", "about", "skills", "education", "projects"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize text-gray-600 hover:text-blue-600"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="mb-8">
              <Image
                src="/images/1.jpg"
                alt="Profile"
                width={150}
                height={150}
                className="rounded-full mx-auto border-4 border-white shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Vivek Rayudu
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Full-Stack Developer passionate about creating beautiful, functional web experiences that make a
              difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild>
                <a
                  href="https://drive.google.com/file/d/1-d_aqMhLobWR1hsbbYJla_UjOGaWsi3Y/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("projects")}>
                View My Work
              </Button>
            </div>
            <div className="flex justify-center space-x-6 mt-8">
              <a
                href="https://github.com/vivekrayudu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/vivek-rayudu-352082267/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>

              <a href="mailto:vivekrayudu79@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 bg-white" style={{ scrollMarginTop: "50px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">About Me</h2>
            <p className="text-xl text-gray-600">Get to know me better</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">I&apos;m Vivek</h3>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                I am a Computer Science and Engineering undergraduate student from IIT Patna (2021-25), passionate about
                full stack development and software engineering. I am actively looking for opportunities.
              </p>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying a good cup of coffee while sketching out my next big idea.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600 text-sm">vivekrayudu79@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600 text-sm">+91 9511159998</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600 text-sm">Andhra Pradesh</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600 text-sm">Available for hire</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Image
                src="/images/1.jpg"
                alt="About me"
                width={300}
                height={300}
                className="rounded-lg shadow-lg object-cover max-w-full max-h-100 mr-20"
              />
            </div>
            {/*
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">4+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600">Technologies I work with</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 border rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <IconComponent className="h-10 w-10 text-blue-600 mb-2" />
                  <p className="text-base font-medium text-gray-800">{skill.name}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-xl text-gray-600">My academic journey</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                {index !== education.length - 1 && (
                  <div className="absolute left-2 top-4 w-0.5 h-full bg-gray-200"></div>
                )}
                <Card className="ml-6 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <Badge variant="secondary">{edu.year}</Badge>
                    </div>
                    <CardDescription className="text-lg font-medium text-blue-600">{edu.school}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{edu.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Some of my recent work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <Link href={project.github} target="_blank" className="text-white hover:text-blue-300">
                      <Github className="h-6 w-6" />
                    </Link>
                    <Link href={project.live} target="_blank" className="text-white hover:text-blue-300">
                      <ExternalLink className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Let&apos;s Work Together</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and exciting projects. Let&apos;s connect and create something amazing
            together!
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/vivekrayudu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/vivek-rayudu-352082267/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>

            <a href="mailto:vivekrayudu79@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-400">© {new Date().getFullYear()} Vivek Rayudu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
