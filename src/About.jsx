import React from 'react';
import './About.css';

function About() {
  return (
    <section id="portfolio" className="container">
      <h2>About Me</h2>
      <p>
        I am a highly motivated professional with a background in research, data analysis, as well as technical development and programming. 
        My passion lies in harnessing emerging technologies to drive innovation and efficiency. I bring diverse 
        experience in developing and implementing technology-driven solutions both independently and collaboratively. 
      </p>
      <ul className="profile-links" aria-label="Profile links">
        <li>
          <a 
            href="https://www.cochrane.org/search/all/sanjana%20prabhakar" 
            target="_blank" 
            rel="noopener noreferrer" 
            tabIndex="0"
          >
            <img 
              src="https://www.cochrane.org/sites/default/files/public/uploads/join/badge_member.png" 
              alt="Cochrane" 
            />
          </a>
        </li>
        <li>
          <a 
            href="https://orcid.org/0000-0003-4840-7371" 
            target="_blank" 
            rel="noopener noreferrer" 
            tabIndex="0"
          >
            <img 
              src="https://orcid.org/sites/default/files/images/orcid_16x16.png" 
              alt="ORCID" 
            />
          </a>
        </li>
        <li>
          <a 
            href="https://www.researchgate.net/profile/S-Prabhakar" 
            target="_blank" 
            rel="noopener noreferrer" 
            tabIndex="0"
          >
            <img 
              src="https://theme.zdassets.com/theme_assets/11199769/02b935144b9a19c226cc526d6a8c452493d2bca1.png" 
              alt="ResearchGate" 
            />
          </a>
        </li>
        <li>
          <a 
            href="https://www.linkedin.com/in/sanjana-sp" 
            target="_blank" 
            rel="noopener noreferrer" 
            tabIndex="0"
          >
            <img 
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
              alt="LinkedIn" 
            />
          </a>
        </li>
        <li>
          <a 
            href="https://sanjanap.tiiny.site/" 
            target="_blank" 
            rel="noopener noreferrer" 
            tabIndex="0"
          >
            <img 
              src="https://cdn-icons-png.flaticon.com/512/909/909212.png" 
              alt="Download My Resume" 
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default About;
