import React, { useState } from 'react'
import { Search, Mic, Camera, TrendingUp, ChevronDown, ChevronUp, Sparkles, ArrowRight } from 'lucide-react'
import AppsMenu from './AppsMenu'
import ProfileMenu from './ProfileMenu'
import GmailModal from './GmailModal'
import { getTrendingSearches } from '../utils/searchRouter'
import './WhyHireContent.css'

const WhyHireContent = ({ setCurrentPage, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('why hire a tanushree')
  const [showMicTooltip, setShowMicTooltip] = useState(false)
  const [showCamTooltip, setShowCamTooltip] = useState(false)
  const [showTrending, setShowTrending] = useState(false)
  const [showAppsMenu, setShowAppsMenu] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showGmailModal, setShowGmailModal] = useState(false)
  const [showMore, setShowMore] = useState(false)

  const trendingSearches = getTrendingSearches()

  const workExperience = [
    {
      company: "Indian Institute Of Technology, Ropar",
      position: "Project Intern",
      duration: "May 25 - Jul 25",
      location: "Punjab, India",
      icon: "/ropar.jpg", // Custom icon space - replace later
      description: [
        "Conceptualized and developing GeneTrust, a precision agri-platform using AI, quantum-accelerated CRISPR (10,000× faster), and blockchain IP to enable real-time gene editing and optimize crops across vertical, and aquaponic systems.",
        "Simulated AgroTwin Intelligence with IoT-based disease detection (95% accuracy), ML yield prediction (+30%), and soil profiling over 20+ variables for soil and controlled-environment farming."
      ]
    },
    {
      company: "Outlier",
      position: "AI Training (Remote)",
      duration: "Jun 24 - Jun 25",
      location: "San Francisco, California, United States",
      icon: "/out.jpg", // Custom icon space - replace later
      description: [
        "Refined AI models, enhancing accuracy and optimizing training with 42% faster times. Collaborated cross-functionally to reduce deployment time by 40%.",
        "Developed advanced deep learning techniques and improved model performance through parameter tuning and protocol enhancements."
      ]
    },
    {
      company: "Gajraj Hyundai",
      position: "Data Analyst",
      duration: "May 24 - Jul 24",
      location: "Kolkata, India",
      icon: "/hyun.jpg", // Custom icon space - replace later
      description: [
        "Analyzed sales data and optimized customer satisfaction insights using Python and SQL. Developed automated Power BI dashboards for real-time reporting.",
        "Streamlined ETL processes, reducing reporting time by 30% and improving data accuracy across the organization."
      ]
    }
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      onSearch(searchQuery)
    }
  }

  const handleTrendingClick = (search) => {
    console.log('WhyHireContent trending search clicked:', search) // Debug log
    setSearchQuery(search)
    setShowTrending(false)
    // Immediately trigger the search
    onSearch(search)
  }

  const handleLogoClick = () => {
    setCurrentPage('home')
  }

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  const handleEducationClick = () => {
    setCurrentPage('education-content')
  }

  return (
    <>
      <div className="why-hire-content-page">
        {/* Header - Match other pages exactly */}
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
        <div className="why-hire-container">
          {/* Left Side - AI Overview */}
          <div className="why-hire-left">
            <div className="ai-overview-section">
              <div className="ai-overview-header">
                <Sparkles size={20} className="ai-icon" />
                <span className="ai-title">AI Overview</span>
              </div>
              
              <div className="ai-overview-content">
                {!showMore && (
                  <>
                    <div className="highlighted-text">
                      I transform environments,
                    </div>
                    
                    <div className="highlighted-text-secondary">
                      seeking global opportunities to specialize in emerging technologies, with a focus on software development, data analysis or machine learning.
                    </div>
                  </>
                )}
                
                <div className="ai-overview-text">
                  <p>
                    Driven by deep curiosity and a learner’s mindset, I see technology not just as code and logic, but as a canvas to shape the world with intention. 
                    From writing my first lines of code to leading full scale projects, I’ve come to value not just technical precision but thoughtful impact. 
                    I meet each challenge with clarity, creativity, and the quiet conviction to build what truly matters...not just what works.
                  </p>
                  
                  {showMore && (
                    <div className="expanded-content">
                      <p>
                        In every project, I’ve sought opportunities that challenge conventional approaches and offer space for meaningful innovation. 
                        At IIT Ropar, I’ve been contributing to the development of GeneTrust, an agri tech platform combining AI, blockchain IP, and 
                        quantum accelerated CRISPR to enable smarter, faster gene editing. I worked on streamlining internal analytics processes in my 
                        previous internship at Gajraj Hyundai. By integrating Python based automation with Power BI dashboards and improving ETL workflows, 
                        I helped the team uncover deeper insights into sales and customer satisfaction and ultimately contributing to faster, 
                        more data informed decisions across the organization.
                      </p>
                      
                      <p>
                        Ideas I’ve presented at national hackathons like Smart India Hackathon, DevsHouse, and Woodpecker have been considered for implementation, 
                        a reflection of my ability to identify critical gaps, design practical solutions, and deliver value where it counts.
                      </p>
                      
                      <p>
                        While my technical experiences are vast, I deeply value opportunities to broaden my 
                        exposure to the challenges and perspectives of diverse communities worldwide. I am 
                        seeking global opportunities to specialize in emerging technologies and apply my skills in 
                        software, project management, and design thinking to improve lives while broadening my 
                        understanding of how people around the world navigate and overcome challenges.
                      </p>
                    </div>
                  )}
                </div>
                
                <button className="show-more-btn" onClick={toggleShowMore}>
                  <span>Show {showMore ? 'Less' : 'More'}</span>
                  {showMore ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>
            </div>

            {/* Search Documents Section - Only show in shorter version */}
            {!showMore && (
              <div className="search-documents-section">
                <div className="search-documents-header">
                  <span className="search-query">Your search - <strong>why hire a tanushree</strong> - did not match any documents</span>
                </div>
                
                <div className="suggestions">
                  <p><strong>Suggestions:</strong></p>
                  <ul>
                    <li>Some things don’t need searching (everyone needs a Tanushree) </li>
                    <li>Contact Tanushree to learn more</li>
                  </ul>
                </div>

                {/* Education Button - Below suggestions */}
                <div className="education-cta">
                  <button className="education-button" onClick={handleEducationClick}>
                    <span>Education</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Education Button - At bottom when expanded */}
            {showMore && (
              <div className="education-cta">
                <button className="education-button" onClick={handleEducationClick}>
                  <span>Education</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Right Side - Work Experience */}
          <div className="why-hire-right">
            <div className="work-experience-section">
              <h2 className="work-experience-title">Work Experience</h2>
              
              <div className="experience-timeline">
                {workExperience.map((job, index) => (
                  <div key={index} className="experience-item">
                    <div className="experience-header">
                      <div className="experience-icon">
                        <img 
                          src={job.icon} 
                          alt={job.company}
                          className="experience-icon-image"
                        />
                      </div>
                      <div className="experience-content">
                        <div className="experience-company">{job.company}</div>
                        <div className="experience-duration">{job.duration}</div>
                      </div>
                    </div>
                    <div className="experience-position">{job.position}</div>
                    <div className="experience-location">{job.location}</div>
                    <div className="experience-description">
                      {job.description.map((desc, descIndex) => (
                        <p key={descIndex}>• {desc}</p>
                      ))}
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

      {showGmailModal && (
        <GmailModal onClose={() => setShowGmailModal(false)} />
      )}
    </>
  )
}

export default WhyHireContent