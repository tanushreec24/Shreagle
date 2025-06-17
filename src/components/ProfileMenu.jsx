import React from 'react'
import { X } from 'lucide-react'

const ProfileMenu = ({ onClose }) => {
  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="profile-menu">
        <button className="close-button" onClick={onClose}>
          <X size={20} />
        </button>
        <div className="profile-header">
          <img 
            src="/slay.jpg" 
            alt="Profile" 
            className="profile-menu-image"
          />
          <h3 className="profile-name">Hi, I'm Tanushree</h3>
          <p className="profile-email">tanushreec0724@gmail.com</p>
          <p className="profile-welcome">Welcome to my personal site :)</p>
        </div>
        <div className="profile-content">
          <h4 className="how-to-use">HOW TO USE</h4>
          <div className="usage-instructions">
            <p>Explore my projects and journey using <strong>Search</strong></p>
            <p>Send me a message using <strong>Gmail</strong></p>
            <p>View more of my work using the <strong>Dot-Menu</strong></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileMenu