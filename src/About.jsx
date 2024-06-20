import React from 'react';
import './About.css';

function About() {
  return (
    <section id="portfolio" className="container">
      <h2>About Me</h2>
      <p>Highly motivated individual with a MSc Health Psychology degree and a keen interest in applied technological innovation, fortified by independent initiatives developing and deploying Artificial Intelligence and Machine Learning solutions for diverse uses.</p>
      <ul className="profile-links" aria-label="Profile links">
        <li>
          <a href="https://www.cochrane.org/search/all/sanjana%20prabhakar" target="_blank" tabIndex="0">
            <img src="https://www.cochrane.org/sites/default/files/public/uploads/join/badge_member.png" alt="Cochrane" />
          </a>
        </li>
        <li>
          <a href="https://orcid.org/0000-0003-4840-7371" target="_blank" tabIndex="0">
            <img src="https://orcid.org/sites/default/files/images/orcid_16x16.png" alt="ORCID" />
          </a>
        </li>
        <li>
          <a href="https://www.researchgate.net/profile/S-Prabhakar" target="_blank" tabIndex="0">
            <img src="https://theme.zdassets.com/theme_assets/11199769/02b935144b9a19c226cc526d6a8c452493d2bca1.png" alt="ResearchGate" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sanjana-sp" target="_blank" tabIndex="0">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://www.canva.com/design/DAGFtZn32A8/Q746clk3DSci-xuC-F-39w/view?utm_content=DAGFtZn32A8&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" tabIndex="0">
            <img src="https://cdn-icons-png.flaticon.com/512/2099/2099107.png" alt="Download My Resume" />
          </a>
        </li>
      </ul>
    </section>
  );
}
export default About;
