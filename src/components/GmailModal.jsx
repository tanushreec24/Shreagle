import React, { useState } from 'react'
import { X, Minus, Maximize2, Square } from 'lucide-react'
import emailjs from '@emailjs/browser'

const GmailModal = ({ onClose }) => {
  const [showCcBcc, setShowCcBcc] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const [message, setMessage] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const handleMinimize = () => {
    // If maximized, first restore to normal size, then minimize
    if (isMaximized) {
      setIsMaximized(false)
      // Small delay to allow the maximize transition to complete
      setTimeout(() => {
        setIsMinimized(true)
      }, 100)
    } else {
      setIsMinimized(!isMinimized)
    }
  }

  const handleMaximize = () => {
    // If minimized, first restore, then maximize
    if (isMinimized) {
      setIsMinimized(false)
      // Small delay to allow the minimize transition to complete
      setTimeout(() => {
        setIsMaximized(true)
      }, 100)
    } else {
      setIsMaximized(!isMaximized)
    }
  }

  const showNotification = (msg) => {
    setMessage(msg)
    setShowMessage(true)
    setTimeout(() => {
      setShowMessage(false)
      setTimeout(() => {
        onClose()
      }, 500)
    }, 3000)
  }

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSending(true)
    
    emailjs.sendForm(
      'service_hoyr6l8',     // Service ID
      'template_3oac60o',    // Template ID
      e.target,
      'rwolltzpl3-O3Nzk8'    // Public Key
    )
    .then(() => {
      showNotification("Message sent! She'll follow up shortly.")
      e.target.reset() // Reset the form
    })
    .catch((err) => {
      console.error("Failed to send email:", err)
      showNotification("There was a delivery issue. Sending it directly to tanushreec0724@gmail.com through email should work better.")
    })
    .finally(() => {
      setIsSending(false)
    })
  }

  // Dynamic classes based on state
  const modalClasses = `gmail-modal ${isMinimized ? 'minimized' : ''} ${isMaximized ? 'maximized' : ''}`

  return (
    <>
      <div className="gmail-overlay" onClick={onClose}></div>
      <div className={modalClasses}>
        <div className="gmail-header">
          <span className="gmail-title">New Message</span>
          <div className="gmail-controls">
            <button 
              className="gmail-control-btn" 
              onClick={handleMinimize}
              title={isMinimized ? "Restore" : "Minimize"}
            >
              <Minus size={16} />
            </button>
            <button 
              className="gmail-control-btn" 
              onClick={handleMaximize}
              title={isMaximized ? "Restore Down" : "Maximize"}
            >
              {isMaximized ? <Square size={14} /> : <Maximize2 size={16} />}
            </button>
            <button className="gmail-control-btn gmail-close" onClick={onClose} title="Close">
              <X size={16} />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <form id="contact-form" onSubmit={sendEmail} className="gmail-content">
            <div className="gmail-field">
              <label className="gmail-label">From</label>
              <input
                type="email"
                name="email"
                className="gmail-input"
                placeholder="Your Email*"
                required
              />
            </div>

            <div className="gmail-field">
              <label className="gmail-label">To</label>
              <input
                type="email"
                className="gmail-input"
                value="tanushreec0724@gmail.com"
                placeholder="Recipients"
                readOnly
              />
              <div className="gmail-field-actions">
                <button 
                  type="button"
                  className="gmail-cc-bcc-btn"
                  onClick={() => setShowCcBcc(!showCcBcc)}
                >
                  Cc Bcc
                </button>
              </div>
            </div>

            {showCcBcc && (
              <>
                <div className="gmail-field">
                  <label className="gmail-label">Cc</label>
                  <input
                    type="email"
                    className="gmail-input"
                    placeholder="Carbon copy"
                  />
                </div>
                <div className="gmail-field">
                  <label className="gmail-label">Bcc</label>
                  <input
                    type="email"
                    className="gmail-input"
                    placeholder="Blind carbon copy"
                  />
                </div>
              </>
            )}

            <div className="gmail-field">
              <label className="gmail-label">Subject</label>
              <input
                type="text"
                name="title"
                className="gmail-input"
                placeholder="Subject*"
                required
              />
            </div>

            <div className="gmail-body-container">
              <textarea
                name="message"
                className="gmail-textarea"
                placeholder="Compose email*"
                required
              />
            </div>

            <div className="gmail-footer">
              <button 
                type="submit"
                className="gmail-send-btn" 
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        )}

        {showMessage && (
          <div className="gmail-notification">
            {message}
          </div>
        )}
      </div>
    </>
  )
}

export default GmailModal