import React, { useState } from 'react'

const Footer = () => {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <footer className="footer">
      <div 
        className="footer-left"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        India
        {showTooltip && (
          <div className="tooltip">
            Open to global opportunities as well
          </div>
        )}
      </div>
      <div className="footer-right">2025</div>
    </footer>
  )
}

export default Footer