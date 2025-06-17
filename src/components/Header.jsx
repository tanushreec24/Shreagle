import React, { useState } from 'react'
import AppsMenu from './AppsMenu'
import ProfileMenu from './ProfileMenu'
import GmailModal from './GmailModal'

const Header = ({ currentPage, setCurrentPage }) => {
  const [showAppsMenu, setShowAppsMenu] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showGmailModal, setShowGmailModal] = useState(false)

  return (
    <>
      <header className="header">
        <div className="header-left">
          <button 
            className="header-link"
            onClick={() => setCurrentPage(currentPage === 'about' ? 'home' : 'about')}
          >
            {currentPage === 'about' ? 'Home' : 'About'}
          </button>
        </div>
        <div className="header-right">
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
      </header>

      {showGmailModal && (
        <GmailModal onClose={() => setShowGmailModal(false)} />
      )}
    </>
  )
}

export default Header