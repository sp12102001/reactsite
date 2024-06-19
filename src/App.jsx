import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Sanjana Prabhakar');
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [facts, setFacts] = useState([]);
  const [factIndex, setFactIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentCharacteristic, setCurrentCharacteristic] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [characteristics, setCharacteristics] = useState([]);
  

  const workerUrl = 'https://moi.sp12.workers.dev/'; // Cloudflare Worker URL

  useEffect(() => {
    async function loadFacts() {
      try {
        const response = await fetch('https://raw.githubusercontent.com/sp12102001/facts.txt/main/facts.txt');
        const text = await response.text();
        const factArray = text.split('\n').filter(fact => fact.trim() !== '');
        setFacts(factArray);
      } catch (error) {
        console.error('Error loading facts:', error);
      }
    }

    async function loadCharacteristics() {
      try {
        const response = await fetch('https://raw.githubusercontent.com/sp12102001/facts.txt/main/characteristics.txt');
        const text = await response.text();
        const characteristicArray = text.split('\n').filter(char => char.trim() !== '');
        setCharacteristics(characteristicArray);
      } catch (error) {
        console.error('Error loading characteristics:', error);
      }
    }

    loadFacts();
    loadCharacteristics();
  }, []);

  useEffect(() => {
    let factInterval;
    if (loading) {
      factInterval = setInterval(() => {
        setFactIndex(prevIndex => (prevIndex + 1) % facts.length);
      }, 2000);
    } else {
      clearInterval(factInterval);
    }
    return () => clearInterval(factInterval);
  }, [loading, facts.length]);

  useEffect(() => {
    if (characteristics.length === 0) return;

    const handleTyping = () => {
      const current = charIndex % characteristics.length;
      const fullText = characteristics[current];

      setCurrentCharacteristic((prev) => 
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && currentCharacteristic === fullText) {
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && currentCharacteristic === '') {
        setIsDeleting(false);
        setCharIndex((prev) => prev + 1);
      }

      setTypingSpeed(isDeleting ? 30 : 150);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentCharacteristic, isDeleting, typingSpeed, characteristics, charIndex]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(workerUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const responseData = await response.json();
      setResponse(responseData.output ? responseData.output : "No answer available.");
    } catch (error) {
      if (error.message.includes('Failed to fetch')) {
        setResponse('Failed to fetch response. Please ensure third-party cookies are enabled in your browser settings.');
      } else {
        setResponse(`Unexpected error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
     <header role="banner">
      <h1>{name}</h1>
      <p id="contactInfo">
        <span className="static-text">Is...</span>
        <span className="characteristic typing">{currentCharacteristic}</span>
      </p>
    </header>
      <main role="main">
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
                <img src="https://cdn-icons-png.flaticon.com/512/2099/2099107.png" alt="CV" />
              </a>
            </li>
          </ul>
        </section>
        <section id="chatbot" className="container">
          <h2>Meet My Chatbot</h2>
          <p>Feel free to ask any questions about my qualifications, experience, or skills. The chatbot is here to provide instant responses.</p>
          <form id="chatbot-form" onSubmit={handleSubmit}>
            <input
              type="text"
              id="question"
              name="question"
              placeholder="Ask me a question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button type="submit">Ask</button>
          </form>
          <div id="response-container">
            {loading ? (
              <div>
                <span className="loading-bold">Loading... Here are some facts about Sanjana while you wait:</span><br />
                <span id="fact-container">{facts.length > 0 ? facts[factIndex] : 'Loading facts...'}</span>
              </div>
            ) : (
              <div>{response}</div>
            )}
          </div>
          <div className="questions-container mt-3">
            <p className="ask-me">Example Questions</p>
            <ul className="list-style">
              <li>Why should I hire Sanjana over other candidates for a [NAME OF ROLE] position?</li>
              <li>What is Sanjana's experience with [SPECIFIC SKILL]?</li>
            </ul>
          </div>
        </section>
        <section id="service-iframe" className="container">
          <h2>My Projects</h2>
          <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '56.25%', paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
            <iframe 
              loading="lazy" 
              style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }} 
              src="https://www.canva.com/design/DAGIgjISdQ4/C9e2_hiSv115KyB7dnWT8A/view?embed" 
              allowFullScreen="allowfullscreen" 
              allow="fullscreen"
            ></iframe>
          </div>
          <a href="https://www.canva.com/design/DAGIgjISdQ4/C9e2_hiSv115KyB7dnWT8A/view?utm_content=DAGIgjISdQ4&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener noreferrer">
            Projects by Sanjana Prabhakar
          </a>
        </section>
        <section id="contact" className="container">
          <h2>Get in Touch</h2>
          <p>Reach out to discuss potential collaborations or opportunities</p>
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
