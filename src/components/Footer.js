import React from "react"

import Facebook from 'assets/svg/facebook.svg';
import Instagram from 'assets/svg/instagram.svg';
import Youtube from 'assets/svg/youtube.svg';
import Linkedin from 'assets/svg/linkedin.svg';
import Twitter from 'assets/svg/twitter.svg';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <div className="has-text-centered has-text-light">
            <p>Affect Technologies</p>
            <p>P.O. Box 88661</p>
            <p>Office #1112, Oynx Tower 2, The Greens, Dubai, UAE</p>
          </div>
        </div>

        <nav className="level">
          <div className="level-left has-text-light">
            © Affect Technologies.
          </div>
          <div className="level-right icon-links">
            <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank"><Facebook/></a>
            <a href="https://www.instagram.com" rel="noopener noreferrer" target="_blank"><Instagram/></a>
            <a href="https://www.linkedin.com" rel="noopener noreferrer" target="_blank"><Linkedin/></a>
          </div>
        </nav>
      </div>
    </footer>
  )
}
