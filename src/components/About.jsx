import React, { useState } from 'react'
import { Search, Mic, Camera, TrendingUp, ArrowRight } from 'lucide-react'
import AppsMenu from './AppsMenu'
import ProfileMenu from './ProfileMenu'
import GmailModal from './GmailModal'
import { getTrendingSearches } from '../utils/searchRouter'

const About = ({ setCurrentPage, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [showMicTooltip, setShowMicTooltip] = useState(false)
  const [showCamTooltip, setShowCamTooltip] = useState(false)
  const [showTrending, setShowTrending] = useState(false)
  const [showAppsMenu, setShowAppsMenu] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showGmailModal, setShowGmailModal] = useState(false)

  const trendingSearches = getTrendingSearches()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      onSearch(searchQuery)
    }
  }

  const handleTrendingClick = (search) => {
    console.log('About trending search clicked:', search) // Debug log
    setSearchQuery(search)
    setShowTrending(false)
    // Immediately trigger the search
    onSearch(search)
  }

  const handleLogoClick = () => {
    setCurrentPage('home')
  }

  const handleProjectsClick = () => {
    setCurrentPage('projects-content')
  }

  return (
    <>
      <div className="about-page">
        {/* About Page Header */}
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
                  src="/slay.jpg" 
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

        {/* About Content */}
        <div className="about-container">
          <div className="about-left">
            <div className="profile-section">
              <img 
                src="/slay.jpg" 
                alt="Tanushree Chowdhury" 
                className="about-profile-image"
              />
              <div className="profile-info">
                <h1 className="profile-name">TANUSHREE CHOWDHURY</h1>
                <p className="profile-email">tanushreec0724@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="about-right">
            <div className="about-content">
              <h2 className="about-headline">
                An aspiring software engineer, building solutions that don't just work, but make a difference.
              </h2>
              
              <div className="about-text">
                <p>
                  I'm a developer who works where code meets creativity and purpose. My roots are in software and languages, but I move freely across platforms, adapting to new technologies and frameworks to bring ideas to life- ideas that scale, that matter, that leave a mark. My work stretches across machine learning, cloud infrastructure, and DevOps, but at its heart, it's guided by curiosity and a drive to build with meaning. I'm most inspired at the edges of the familiar, where ambition reaches toward the unknown, and where bold ideas begin to breathe through code.
                </p>
                
                <p>
                  Right now, I'm a Project Intern at the Indian Institute of Technology, Ropar, where I'm building GeneTrust—a precision agriculture platform weaving together AI, quantum-accelerated CRISPR, and blockchain to enable real-time gene editing and smarter crop optimization. Before this, I worked as a Data Analyst at Gajraj Hyundai, where I automated dashboards, streamlined ETL workflows, and helped make data-driven decisions faster and more reliable across the company.
                </p>
                
                <p>
                  Among my proudest moments was winning Nokia's Accelerate Her in Tech hackathon, standing out from over 23,000 participants. I've been a finalist in three of the seven hackathons I've joined, each one a chance to stretch myself further. I've also had the privilege of learning and growing through tech mentorship programs like Codess Cafe and Code; Against Barriers, spaces that have helped me thrive within inclusive, empowering communities across Asia.
                </p>
                
                <p>
                  Beyond technical aspects, I've always found comfort in creative writing. It's often where my ideas begin, quiet, formless, and full of possibilities — before they take shape as experiences or solutions. For me, technology is a kind of freedom. It lets me contribute to challenges that matter, to voices that deserve to be heard, and to causes larger than myself. I care deeply about equity, and I'm passionate about using innovation in service of causes that matter to me.
                </p>
                
                <p>
                  Even when I'm not solving a problem, I don't just see myself as an engineer. I see myself as a storyteller, a builder, or a changemaker: someone who codes with conscience and purpose.
                </p>
                
                <div className="about-summary">
                  <p>If I had to sum myself up in three words?</p>
                  <p className="summary-words">Creator. Developer. Imaginist.</p>
                  <p className="summary-note">(Though if I'm being honest, caffeinedict might be the fourth.)</p>
                </div>

                <div className="projects-cta">
                  <button className="projects-button" onClick={handleProjectsClick}>
                    <span>Check My Projects Out</span>
                    <ArrowRight size={16} />
                  </button>
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

      {showGmailModal && (
        <GmailModal onClose={() => setShowGmailModal(false)} />
      )}
    </>
  )
}

export default About