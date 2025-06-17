import React, { useState } from 'react'
import { Search, Mic, Camera, TrendingUp } from 'lucide-react'
import AppsMenu from './AppsMenu'
import ProfileMenu from './ProfileMenu'
import GmailModal from './GmailModal'
import { getTrendingSearches } from '../utils/searchRouter'

const WhyHire = ({ setCurrentPage, onSearch }) => {
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
    console.log('WhyHire trending search clicked:', search) // Debug log
    setSearchQuery(search)
    setShowTrending(false)
    // Immediately trigger the search
    onSearch(search)
  }

  const handleLogoClick = () => {
    setCurrentPage('home')
  }

  return (
    <>
      <div className="about-page">
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

        {/* Why Hire Content */}
        <div className="about-container">
          <div className="about-left">
            <div className="profile-section">
              <img 
                src="/image.png" 
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
                Why hire a Tanushree? Because some problems need more than just code—they need vision.
              </h2>
              
              <div className="about-text">
                <p>
                  [Content will be added here - this is the Why Hire a Tanushree page]
                </p>
                
                <p>
                  This page will showcase why hiring Tanushree would be a great decision, highlighting her unique skills, achievements, and what she brings to the table.
                </p>
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

export default WhyHire