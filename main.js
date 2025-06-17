import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header class="header">
      <div class="header-left">
        <a href="#" class="about-link">About</a>
      </div>
      <div class="header-right">
        <a href="#" class="gmail-link">Gmail</a>
        <button class="apps-button">
          <div class="apps-icon">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
        <button class="profile-button">
          <svg class="profile-icon" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </button>
      </div>
    </header>

    <main class="main-content">
      <div class="logo">
        <span class="s1">S</span><span class="h">h</span><span class="r1">r</span><span class="e1">e</span><span class="a">a</span><span class="g">g</span><span class="l">l</span><span class="e2">e</span>
      </div>
      
      <div class="search-container">
        <svg class="search-icon" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
        <input type="text" class="search-box" placeholder="Search Shreagle">
        <div class="search-actions">
          <button class="search-action-btn">
            <svg viewBox="0 0 24 24">
              <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
            </svg>
          </button>
          <button class="search-action-btn">
            <svg viewBox="0 0 24 24">
              <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1.8c1.77 0 3.2-1.43 3.2-3.2 0-1.77-1.43-3.2-3.2-3.2S8.8 10.23 8.8 12c0 1.77 1.43 3.2 3.2 3.2z"/>
            </svg>
          </button>
        </div>
      </div>
    </main>

    <footer class="footer">
      <div class="footer-left">India</div>
      <div class="footer-right">2025</div>
    </footer>
  </div>
`

// Add search functionality
const searchBox = document.querySelector('.search-box');
const searchActions = document.querySelectorAll('.search-action-btn');

searchBox.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const query = searchBox.value.trim();
    if (query) {
      console.log('Searching for:', query);
      // Add your search logic here
    }
  }
});

// Add click handlers for voice and camera buttons
searchActions.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (index === 0) {
      console.log('Voice search clicked');
      // Add voice search logic
    } else {
      console.log('Camera search clicked');
      // Add camera search logic
    }
  });
});