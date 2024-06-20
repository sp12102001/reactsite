import React, { useState, useEffect } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [facts, setFacts] = useState([]);
  const [factIndex, setFactIndex] = useState(0);
  const [loading, setLoading] = useState(false);

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

    loadFacts();
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
      <div id="response-container" className={loading || response ? 'active' : ''}>
        {loading ? (
          <div>
            <span className="loading-bold">Loading... Here are some facts about Sanjana while you wait:</span><br />
            <span id="fact-container">{facts.length > 0 ? facts[factIndex] : 'Loading facts...'}</span>
          </div>
        ) : (
          <div>{response}</div>
        )}
      </div>
    </section>
  );
}

export default Chatbot;
