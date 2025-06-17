import React, { useState } from 'react'
import Header from './components/Header'
import SearchSection from './components/SearchSection'
import About from './components/About'
import ProjectsContent from './components/ProjectsContent'
import WhyHire from './components/WhyHire'
import WhyHireContent from './components/WhyHireContent'
import EducationContent from './components/EducationContent'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import { handleSearchRouting } from './utils/searchRouter'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [lastSearchQuery, setLastSearchQuery] = useState('')

  const handleSearch = (query) => {
    console.log('App handleSearch called with:', query)
    setLastSearchQuery(query) // Store the search query for 404 page
    
    // Always use the search router for consistency
    const routeHandled = handleSearchRouting(query, setCurrentPage)
    
    if (!routeHandled) {
      console.log('No route handled, showing 404 page')
      setCurrentPage('404')
    }
  }

  const renderPage = () => {
    console.log('Rendering page:', currentPage)
    
    switch(currentPage) {
      case 'about':
        return <About setCurrentPage={setCurrentPage} onSearch={handleSearch} />
      case 'projects-content':
        return <ProjectsContent setCurrentPage={setCurrentPage} onSearch={handleSearch} />
      case 'why-hire':
        return <WhyHire setCurrentPage={setCurrentPage} onSearch={handleSearch} />
      case 'why-hire-content':
        return <WhyHireContent setCurrentPage={setCurrentPage} onSearch={handleSearch} />
      case 'education-content':
        return <EducationContent setCurrentPage={setCurrentPage} onSearch={handleSearch} />
      case '404':
        return <NotFound setCurrentPage={setCurrentPage} onSearch={handleSearch} searchQuery={lastSearchQuery} />
      default:
        return <SearchSection onSearch={handleSearch} />
    }
  }

  return (
    <div className="app">
      {currentPage === 'home' && <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />}
      {renderPage()}
      {currentPage === 'home' && <Footer />}
    </div>
  )
}

export default App