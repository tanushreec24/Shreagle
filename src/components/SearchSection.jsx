import React, { useState } from 'react'
import { Search, Mic, Camera, TrendingUp } from 'lucide-react'
import { getTrendingSearches } from '../utils/searchRouter'

const SearchSection = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [showMicTooltip, setShowMicTooltip] = useState(false)
  const [showCamTooltip, setShowCamTooltip] = useState(false)
  const [showTrending, setShowTrending] = useState(false)

  const trendingSearches = getTrendingSearches()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      onSearch(searchQuery)
    }
  }

  const handleTrendingClick = (search) => {
    console.log('Trending search clicked:', search) // Debug log
    setSearchQuery(search)
    setShowTrending(false)
    // Immediately trigger the search
    onSearch(search)
  }

  return (
    <main className="search-section">
      <div className="logo">
        <span className="letter s1">S</span>
        <span className="letter h">h</span>
        <span className="letter r1">r</span>
        <span className="letter e1">e</span>
        <span className="letter a">a</span>
        <span className="letter g">g</span>
        <span className="letter l">l</span>
        <span className="letter e2">e</span>
      </div>
      
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-container">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            className="search-input"
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
    </main>
  )
}

export default SearchSection