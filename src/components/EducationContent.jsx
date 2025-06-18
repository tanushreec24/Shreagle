import React, { useState } from 'react'
import { Search, Mic, Camera, TrendingUp, X } from 'lucide-react'
import AppsMenu from './AppsMenu'
import ProfileMenu from './ProfileMenu'
import GmailModal from './GmailModal'
import { getTrendingSearches } from '../utils/searchRouter'
import './EducationContent.css'

const EducationContent = ({ setCurrentPage, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('life lately')
  const [showMicTooltip, setShowMicTooltip] = useState(false)
  const [showCamTooltip, setShowCamTooltip] = useState(false)
  const [showTrending, setShowTrending] = useState(false)
  const [showAppsMenu, setShowAppsMenu] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showGmailModal, setShowGmailModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  const trendingSearches = getTrendingSearches()

  const lifeEvents = [
    {
      id: 1,
      type: "Travel",
      date: "Sept 28 2024",
      title: "Randomly booking tickets to Vellore a week before exams to attend a hackathon",
      subtitle: "Impromptu plans will never not be fun",
      sideImage: "/id1.jpg", // Side image for the event item
      modalImage: "/id1.jpg", // Separate image for modal
      fullContent: `I had no real plans when I decided to travel to Vellore. I just knew I needed a break from assignments, submissions, and the same academic loop. What I didn’t expect was to stumble into one of the most memorable weekends I’ve had in a while.

                    Vellore’s main campus was in the middle of its annual fest, and as part of the lineup, they were hosting a hackathon. I haven't planned on participating, but the theme caught my attention because it was different from the usual, which was building an extension to solve a internet problem. It felt like something I could work on so me being a code junkie, I took the leap. It wasn’t just about building for the sake of it, but building something I will remember to work on a larger scale post hackathon.

                    I joined a team on the spot, and we ended up creating a browser extension that detects and blocks hate speech in real time. It felt good to work on something that addressed a real problem, something that went beyond code. We didn't really have a top 3 because of last minute issues in the codebase (terrible luck), but me and my teammate bonded over the whole process and now we have larger plans with the idea.

                    Outside the hackathon, exploring the campus was a whole experience in itself. It was full of life with people everywhere, events in every corner, music, energy AND the food. Also met parent VIT undergrads who I enjoyed socialising with, had long conversations about everything from tech to how our college lives could be more fulfilling because again, vit. All I remember was that I felt mentally lighter than I had in weeks.

                    I went there expecting a break. What I got was a reminder, that sometimes the most unexpected detours are exactly what you need to feel productive again.
`
    },
    {
      id: 2,
      type: "Event",
      date: "Aug 29 2024",
      title: "Led a team of newcomers while organizing the biggest college event of the year",
      subtitle: "I represented my college's first ever E Summit, Voyage '24 alongside fellow team leads",
      sideImage: "/2 id.jpg",
      modalImage: "/2 id.jpg",
      fullContent: `When our college hosted its very first Entrepreneurship Summit, I had the opportunity to be the content team head and work with marketing and outreach teams for overall brand communication. It wasn’t just about getting the word out, but rather about shaping how people would remember this landmark three day event.
                    
                    From designing messaging strategies to coordinating closely with the outreach team, we worked to attract the right sponsors and build a strong network of support. Every word that went out, whether in posters, emails, social media, or presentations, had to reflect the energy and intent behind the summit. And it had to stand out. Branding wasn't just a task, it was a mission. Alongside content, I was deeply involved in ensuring the visual and verbal identity of the event stayed consistent, clear, and compelling across platforms.
                    
                    One of the most exciting wins for the entire Voyage team was getting Ankur Warikoo on board as a speaker. Seeing the audience engage with his insights was a surreal payoff to all the backend hustle. A full fledged hackathon also ran under the summit's umbrella, ironically which means I couldn’t participate myself because I was an organiser, but I wouldn’t have had it any other way for this one. 
                    
                    Looking back, the E Summit wasn’t just another college event. It felt like building something from the ground up from scratch, with people who genuinely cared about making it work. There were long hours, last minute changes, and a lot of figuring things out on the go. But being part of the core team that pulled it off — that made it real and was easily one of the most challenging and rewarding things I’ve been part of. This event will always hold a special place in my heart, since I watched it grow from late night meetings and play an integral role in securing established sponsors, and eventually seeing it all come together as a grand success.`
    }
  ]

  const education = [
    {
      institution: "Vellore Institute Of Technology",
      degree: "B.Tech in Electronics and Computer Engineering",
      duration: "2022 - 2026",
      image: "/vit.png"
    },
    {
      institution: "Atomic Energy Central School",
      degree: "PCMB, Class 12 CBSE Boards",
      grade: "Grade: 95.8%",
      duration: "2019 - 2021",
      image: "/aec.png"
    }
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      onSearch(searchQuery)
    }
  }

  const handleTrendingClick = (search) => {
    console.log('EducationContent trending search clicked:', search) // Debug log
    setSearchQuery(search)
    setShowTrending(false)
    // Immediately trigger the search
    onSearch(search)
  }

  const handleLogoClick = () => {
    setCurrentPage('home')
  }

  const openEventModal = (event) => {
    setSelectedEvent(event)
  }

  const closeEventModal = () => {
    setSelectedEvent(null)
  }

  return (
    <>
      <div className="education-content-page">
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
        <div className="education-container">
          {/* Left Side - Life Events Timeline */}
          <div className="education-left">
            <div className="life-events-timeline">
              {lifeEvents.map((event) => (
                <div 
                  key={event.id} 
                  className="life-event-item"
                  onClick={() => openEventModal(event)}
                >
                  <div className="event-header">
                    <div className="event-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                        <path d="M2 17l10 5 10-5"/>
                        <path d="M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                    <div className="event-meta">
                      <div className="event-type">{event.type}</div>
                      <div className="event-date">{event.date}</div>
                    </div>
                  </div>
                  <div className="event-content-wrapper">
                    <div className="event-content">
                      <h3 className="event-title">{event.title}</h3>
                      <p className="event-subtitle">{event.subtitle}</p>
                    </div>
                    <div className="event-side-image">
                      <img src={event.sideImage} alt={event.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Education */}
          <div className="education-right">
            <div className="education-section">
              <h2 className="education-title">Education</h2>
              
              <div className="education-timeline">
                {education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <div className="education-header">
                      <div className="education-circle">
                        <img 
                          src={edu.image} 
                          alt={edu.institution}
                          className="education-image"
                        />
                      </div>
                      <div className="education-content">
                        <div className="education-institution">{edu.institution}</div>
                        <div className="education-degree">{edu.degree}</div>
                        <div className="education-grade">{edu.grade}</div>
                        <div className="education-duration">{edu.duration}</div>
                        <div className="education-location">{edu.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
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

      {/* Event Modal */}
      {selectedEvent && (
        <div className="event-modal-overlay" onClick={closeEventModal}>
          <div className="event-modal" onClick={(e) => e.stopPropagation()}>
            <div className="event-modal-header">
              <div className="event-modal-meta">
                <div className="event-modal-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <div className="event-modal-type">{selectedEvent.type}</div>
                  <div className="event-modal-date">{selectedEvent.date}</div>
                </div>
              </div>
              <button className="event-modal-close" onClick={closeEventModal}>
                <X size={20} />
              </button>
            </div>
            
            <div className="event-modal-content">
              <div className="event-modal-image">
                <img src={selectedEvent.modalImage} alt={selectedEvent.title} />
              </div>
              
              <div className="event-modal-details">
                <h2 className="event-modal-title">{selectedEvent.title}</h2>
                <div className="event-modal-text">
                  <p>{selectedEvent.fullContent}</p>
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

export default EducationContent
