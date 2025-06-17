import React from 'react'
import { Github, Linkedin } from 'lucide-react'

const AppsMenu = ({ onClose }) => {
  const apps = [
    {
      name: 'Github',
      subtitle: 'Code',
      icon: <Github size={32} />,
      color: '#ffffff',
      url: 'https://github.com/tanushreec24'
    },
    {
      name: 'LinkedIn',
      subtitle: 'Connect',
      icon: <Linkedin size={32} />,
      color: '#0077b5',
      url: 'https://www.linkedin.com/in/tanushreec24/'
    },
    {
      name: 'X',
      subtitle: 'Stalk',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: '#ffffff',
      url: 'https://x.com/FlareNyx'
    },
    {
      name: 'Substack',
      subtitle: 'Thoughts',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
        </svg>
      ),
      color: '#FF6719',
      url: 'https://substack.com/@tanushreechowdhury'
    },
    {
      name: 'LeetCode',
      subtitle: 'Grind',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
        </svg>
      ),
      color: '#FFA116',
      url: 'https://leetcode.com/u/Cynister/'
    }
  ]

  const handleAppClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
    onClose()
  }

  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="apps-menu">
        <div className="apps-grid-menu">
          {apps.map((app, index) => (
            <div 
              key={index} 
              className="app-item"
              onClick={() => handleAppClick(app.url)}
            >
              <div className="app-icon" style={{ color: app.color }}>
                {app.icon}
              </div>
              <div className="app-name">{app.name}</div>
              <div className="app-subtitle">{app.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AppsMenu