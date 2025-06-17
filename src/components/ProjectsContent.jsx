import React, { useState } from 'react'
import { Search, Mic, Camera, TrendingUp, Github, ExternalLink, X, ArrowRight, Layers } from 'lucide-react'
import AppsMenu from './AppsMenu'
import ProfileMenu from './ProfileMenu'
import GmailModal from './GmailModal'
import { getTrendingSearches } from '../utils/searchRouter'
import './ProjectsContent.css'

const ProjectsContent = ({ setCurrentPage, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("tanushree's projects")
  const [showMicTooltip, setShowMicTooltip] = useState(false)
  const [showCamTooltip, setShowCamTooltip] = useState(false)
  const [showTrending, setShowTrending] = useState(false)
  const [showAppsMenu, setShowAppsMenu] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showGmailModal, setShowGmailModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  // Only you can upload images
  const isOwner = true; // Set to false for public, true for you

  const trendingSearches = getTrendingSearches()

  const projects = [
    {
      id: 1,
      title: "Finova",
      date: "June 2025",
      description: "Hackathon project to outsmart cybercriminals with next gen banking security",
      subtitle: "A secure banking application that doesn't just check passwords... it checks your entire digital fingerprint",
      icon: "💰",
      color: "#ff6b35",
      tags: ["React Expo", "FastAPI", "JWT Authentication"],
      fullDescription: "Started in Nokia's AccelerateHer 2025, Finova is a secure banking application built to demonstrate advanced authentication and network fingerprinting (AANF) technology. Designed to combat identity spoofing and session hijacking, Finova uses SIM-based cryptographic signatures and network fingerprinting to verify user identity beyond traditional credentials. We built a React Native mobile app with Expo and a FastAPI backend, implementing both classic OTP-based flows and our AANF protocol. Transactions are cryptographically signed and verified end-to-end. Developed in under 48 hours, got first place.",
      github: "https://github.com/tanushreec24/Finova",
      demo: "https://drive.google.com/drive/folders/1GbKRkxoVfPOg6FjLTeA5wZ3y48gsNXRp",
      image: "/finovam.png"
    },
    {
      id: 2,
      title: "Mnemosyne",
      date: "June 2025",
      description: "Neurodivergent minds distill chaos into clarity with graph based journaling and just enough structure",
      subtitle: "We help you turn your spirals into organised thoughts",
      icon: "🕸",
      color: "#4285f4",
      tags: ["React", "ESLint", "ReactFlow"],
      fullDescription: "Mnemosyne is a Zettelkasten-inspired, graph-based note-taking application designed for nonlinear thinkers. It enables users to capture atomic notes, create semantic relationships through bidirectional links, and visualize their knowledge as an interactive graph.",
      github: "https://github.com/tanushreec24/Mnemosyne",
      demo: "https://example.com",
      image: "/menosyne .png"
    },
    {
      id: 3,
      title: "EduNest",
      date: "Feb 2025",
      description: "Student panic turns productive as EduNest becomes the accidental fix for studying, job hunting, and speaking anxiety",
      subtitle: "An AI powered platform to study smarter, speak better, and maybe land a job before losing your mind",
      icon: "📚",
      color: "#23c853",
      tags: ["Next.js", "OpenAI", "NLP"],
      fullDescription: "An AI platform designed to make learning and career prep less overwhelming and more effective. It brings together smart academic learning, interactive job interview practice through real time speaking feedback using natural language processing and speech analysis. Whether you're studying for exams, prepping for placements, or just trying to sound less awkward in presentations, it's a one-stop system for building the skills school forgot to teach. Built by someone who needs it just as much.",
      github: "https://github.com/tanushreec24/EduNest",
      demo: "https://example.com",
      image: "/edunest.png"
    },
    {
      id: 4,
      title: "Melodrift",
      date: "Nov 2024",
      description: "What began as a tired student needing a break turned into a music driven space for emotional reset",
      subtitle: "A web app that treats emotional burnout with algorithmic empathy, mood based playlists, and a chatbot that offers comfort",
      icon: "𝄞",
      color: "#8b5cf6",
      tags: ["JavaScript", "Rasa", "Express.js"],
      fullDescription: "Melodrift is a mood-aware music and mental wellness web app designed to deliver emotional support through personalized soundscapes and conversation. Using the Spotify API and emotion tagged user input, it generates curated playlists paired with calming visual environments via the Pexels API. A custom Rasa chatbot guides users through stress relief techniques, avoiding generic advice in favor of contextual support. Real time listening rooms, powered by Socket.io, allow shared experiences and chat among users feeling the same emotion.",
      github: "https://github.com/tanushreec24/Melodrift",
      demo: "https://example.com",
      image: "/melodrift.png"
    },
    {
      id: 5,
      title: "SIREN",
      date: "May 2024",
      description: "A group of students build a platform that maps disasters in real time using news and social data",
      subtitle: "When everything's on fire (literally), this software tells you where to run and who needs help most",
      icon: "🆘",
      color: "#10b981",
      tags: ["Python", "Flask", "NLP"],
      fullDescription: "Built a real-time disaster response platform using Python, Flask, and NLP to process breaking news and social media chatter. Visualized crisis zones based on severity and sentiment. Used A* pathfinding to generate optimal evacuation routes on the fly, and designed a dynamic resource distribution model to prioritize high-risk areas.",
      github: "https://github.com/tanushreec24/SIH1687-Disaster-Information-Aggregation-Software",
      demo: "https://example.com",
      image: "/siren.png"
    },
    {
      id: 6,
      title: "STEMinist",
      date: "Nov 2024",
      description: "Upcoming: Angry feminist gets her feelings hurt on the internet and builds a full stack emotional defense system to cope",
      subtitle: "A support mechanism disguised as a web app. Helping women in STEM go from 'sorry if this is stupid' to 'here's the GitHub link",
      icon: "🤖",
      color: "#34a853",
      tags: ["Redux", "OpenAI", "FastAPI"],
      fullDescription: "This project is currently under active development. Stay tuned for something   that speaks louder than your male colleagues.",
      github: "https://github.com/tanushreec24/STEMinist",
      demo: "https://example.com",
      image: "/fmn.png"
    }
  ]

  const techStack = {
    languages: [
      { name: "Jupyter", percentage: 46.37, color: "#f7df1e" },
      { name: "Python", percentage: 21.49, color: "#3776ab" },
      { name: "TypeScript", percentage: 13.92, color: "#3178c6" },
      { name: "JavaScript", percentage: 7.22, color: "#cc342d" },
      { name: "CSS", percentage: 6.71, color: "#e34f26" },
      { name: "PowerShell", percentage: 4.29, color: "#ed8b00" }
    ],
    frameworks: [
    "React", "React Native", "Flutter", "Node.js", "Express.js", "Next.js", "Flask", "Django",
    "Django REST", "Spring", "Tailwind CSS", "Bootstrap", "Firebase", "Netlify", "Render", 
    "Vercel", "Azure", "Google Cloud", "Heroku", "Postgres", "SQLite", "Microsoft SQL Server",
    "scikit-learn", "TensorFlow", "PyTorch", "Keras", "Anaconda"
    ],
    tools: [
    "Python", "Java", "C", "C++", "JavaScript", "TypeScript", "HTML5", "CSS3", "SQL",
    "MongoDB", "MySQL", "PostgreSQL", "Firebase", "Git", "Postman", "Linux",
    "NumPy", "Pandas"
    ]
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      onSearch(searchQuery)
    }
  }

  const handleTrendingClick = (search) => {
    console.log('ProjectsContent trending search clicked:', search) // Debug log
    setSearchQuery(search)
    setShowTrending(false)
    // Immediately trigger the search
    onSearch(search)
  }

  const handleLogoClick = () => {
    setCurrentPage('home')
  }

  const openProjectModal = (project) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  const handleWorkExperienceClick = () => {
    setCurrentPage('why-hire-content')
  }

  return (
    <>
      <div className="projects-content-page">
        {/* Header */}
        <div className="about-header">
          <button className="about-logo" onClick={handleLogoClick}>
            <span className="letter s1">S</span>
            <span className="letter h">h</span>
            <span className="letter r1">r</span>
            <span className="letter e1">e</span>
            <span className="letter a">a</span>
            <span className="letter g">g</span>
            <span className="letter l">l</span>
            <span className="letter e2">e</span>
          </button>
          
          <form onSubmit={handleSearch} className="about-search-form">
            <div className="about-search-container">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                className="about-search-input"
                placeholder="Search Shreagle"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowTrending(true)}
                onBlur={() => setTimeout(() => setShowTrending(false), 200)}
              />
              <div className="search-actions">
                <div className="search-action-container">
                  <button 
                    type="button" 
                    className="search-action-btn mic-btn" 
                    title="Voice search"
                    onMouseEnter={() => setShowMicTooltip(true)}
                    onMouseLeave={() => setShowMicTooltip(false)}
                  >
                    <Mic size={20} />
                  </button>
                  {showMicTooltip && (
                    <div className="search-tooltip">
                      couldn't resist including it
                    </div>
                  )}
                </div>
                <div className="search-action-container">
                  <button 
                    type="button" 
                    className="search-action-btn cam-btn" 
                    title="Search by image"
                    onMouseEnter={() => setShowCamTooltip(true)}
                    onMouseLeave={() => setShowCamTooltip(false)}
                  >
                    <Camera size={20} />
                  </button>
                  {showCamTooltip && (
                    <div className="search-tooltip">
                      this too
                    </div>
                  )}
                </div>
              </div>
              
              {showTrending && (
                <div className="trending-dropdown">
                  <div className="trending-header">
                    <span className="trending-title">Trending searches</span>
                  </div>
                  {trendingSearches.map((search, index) => (
                    <div 
                      key={index}
                      className="trending-item"
                      onMouseDown={(e) => {
                        e.preventDefault() // Prevent input blur
                        handleTrendingClick(search)
                      }}
                    >
                      <TrendingUp size={16} className="trending-icon" />
                      <span className="trending-text">{search}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </form>

          <div className="about-header-right">
            <button 
              className="header-link"
              onClick={() => setShowGmailModal(true)}
            >
              Gmail
            </button>
            <div className="apps-container">
              <button 
                className="apps-button"
                onClick={() => setShowAppsMenu(!showAppsMenu)}
              >
                <div className="apps-grid">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </button>
              {showAppsMenu && (
                <AppsMenu onClose={() => setShowAppsMenu(false)} />
              )}
            </div>
            <div className="profile-container">
              <button 
                className="profile-button"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              >
                <img 
                  src="/image.png" 
                  alt="Profile" 
                  className="profile-image"
                />
              </button>
              {showProfileMenu && (
                <ProfileMenu onClose={() => setShowProfileMenu(false)} />
              )}
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="projects-container">
          {/* Left Side - Projects List */}
          <div className="projects-left">
            <div className="projects-list">
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-header">
                    <div className="project-icon">
                      <Layers size={16} />
                    </div>
                    <div className="project-meta">
                      <div className="project-title">{project.title}</div>
                      <div className="project-date">{project.date}</div>
                    </div>
                  </div>
                  <div className="project-content-wrapper">
                    <div className="project-content">
                      <h3
                        className="project-description"
                        onClick={() => openProjectModal(project)}
                        style={{ margin: 0 }}
                      >
                        {project.description}
                      </h3>
                      <p className="project-subtitle">{project.subtitle}</p>
                    </div>
                    <div className="project-side-image">
                      {project.image ? (
                        <img src={project.image} alt="Project" />
                      ) : (
                        <span className="project-placeholder">No image</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Work Experience Button */}
            <div className="projects-cta">
              <button className="projects-button" onClick={handleWorkExperienceClick}>
                <span>Work Experience</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
          
          {/* Right Side - Tech Stack */}
          <div className="projects-right">
            <div className="tech-stack-section">
              <h2 className="tech-stack-title">Most Used Languages</h2>
              <div className="language-bar">
                {techStack.languages.map((lang, index) => (
                  <div 
                    key={index}
                    className="language-segment"
                    style={{ 
                      width: `${lang.percentage}%`, 
                      backgroundColor: lang.color 
                    }}
                  />
                ))}
              </div>
              <div className="language-list">
                {techStack.languages.map((lang, index) => (
                  <div key={index} className="language-item">
                    <div className="language-dot" style={{ backgroundColor: lang.color }}></div>
                    <span className="language-name">{lang.name}</span>
                    <span className="language-percentage">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
              <div className="tech-description">
                <p>Developer, and an aspiring Software Engineer who crafts experiences.</p>
                <p>Currently, I'm focusing on learning data structures and algorithms to develop beyond intermediate problem solving skills.</p>
              </div>
              <div className="tech-categories">
                <div className="tech-category">
                  <h3>LANGUAGES</h3>
                  <div className="tech-tags">
                    {techStack.tools.map((tool, index) => (
                      <span key={index} className="tech-tag">{tool}</span>
                    ))}
                  </div>
                </div>
                <div className="tech-category">
                  <h3>FRAMEWORKS & LIBRARIES</h3>
                  <div className="tech-tags">
                    {techStack.frameworks.map((framework, index) => (
                      <span key={index} className="tech-tag">{framework}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-left">India</div>
          <div className="footer-right">2025</div>
        </footer>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProjectModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <div className="project-modal-header">
              <div className="project-modal-title">
                <div className="project-icon" style={{ backgroundColor: selectedProject.color }}>
                  <span>{selectedProject.icon}</span>
                </div>
                <div>
                  <h2>{selectedProject.title}</h2>
                  <span className="project-date">{selectedProject.date}</span>
                </div>
              </div>
              <button className="project-modal-close" onClick={closeProjectModal}>
                <X size={20} />
              </button>
            </div>
            
            <div className="project-modal-content">
              <div className="project-modal-image">
                <div className="project-preview">
                  <div className="browser-mockup">
                    <div className="browser-header">
                      <div className="browser-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <div className="browser-content">
                      {selectedProject.image ? (
                        <img src={selectedProject.image} alt="Project Screenshot" style={{maxWidth: '100%', maxHeight: '100%'}} />
                      ) : (
                        <span className="project-placeholder">Project Screenshot Placeholder</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="project-modal-details">
                <div className="project-modal-actions">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="project-action-btn">
                    <Github size={16} />
                    <span>github</span>
                  </a>
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="project-action-btn">
                    <ExternalLink size={16} />
                    <span>check it out</span>
                  </a>
                </div>
                
                <div className="project-modal-description">
                  <p>{selectedProject.fullDescription}</p>
                </div>
                
                <div className="project-modal-tags">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showGmailModal && (
        <GmailModal onClose={() => setShowGmailModal(false)} />
      )}
    </>
  )
}

export default ProjectsContent