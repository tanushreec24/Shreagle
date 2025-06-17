// Search routing utility to handle all search-based navigation
export const handleSearchRouting = (query, setCurrentPage) => {
  const searchTerm = query.toLowerCase().trim()
  
  console.log('Search routing called with:', searchTerm) // Debug log
  
  // Define exact search patterns and their corresponding pages
  const searchRoutes = [
    {
      patterns: ["tanushree's projects", 'tanushree projects', 'projects'],
      page: 'projects-content'
    },
    {
      patterns: ['why hire a tanushree', 'why hire', 'hire tanushree', 'hire a tanushree'],
      page: 'why-hire-content'
    },
    {
      patterns: ['life lately', 'lately'],
      page: 'education-content'
    },
    {
      patterns: ['about', 'tanushree', 'about tanushree'],
      page: 'about'
    }
  ]
  
  // Find matching route - check for exact matches first, then partial matches
  for (const route of searchRoutes) {
    // Check for exact match first
    if (route.patterns.includes(searchTerm)) {
      console.log('Exact match found, navigating to:', route.page) // Debug log
      setCurrentPage(route.page)
      return true
    }
    
    // Then check for partial matches
    if (route.patterns.some(pattern => searchTerm.includes(pattern) || pattern.includes(searchTerm))) {
      console.log('Partial match found, navigating to:', route.page) // Debug log
      setCurrentPage(route.page)
      return true
    }
  }
  
  // No route found - could handle default search behavior here
  console.log('No specific route found for:', query)
  return false
}

// Get trending searches (consistent across all pages)
export const getTrendingSearches = () => [
  "tanushree's projects",
  "why hire a tanushree",
  "life lately"
]