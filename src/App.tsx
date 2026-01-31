
import './App.css'
import { SiInstagram, SiGmail, SiTiktok } from "react-icons/si";

function App() {
  return (
    <div className="app">
      <div className="content-wrapper centered-layout">
        <div className="main-content">
          <h1 className="coming-soon gravitas-one-regular">Coming <br /> soon</h1>
          <div className="announcement">Mon Chéri team is <br /> working on it...</div>
          <div className="infinite-progress-bar-wrapper">
            <div className="infinite-progress-bar">
              <div className="infinite-progress-bar-inner"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-social">
        <a href="https://www.instagram.com/moncherisocial/" className="social-icon" aria-label="Instagram"><SiInstagram size={28} /></a>
        <a href="#" className="social-icon" aria-label="Gmail"><SiGmail size={28} /></a>
        <a href="https://www.tiktok.com/@moncherisocial" className="social-icon" aria-label="TikTok"><SiTiktok size={28} /></a>
      </div>
    </div>
  )
}

export default App
