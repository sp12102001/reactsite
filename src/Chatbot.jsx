import React, { useState, useEffect } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [facts, setFacts] = useState([]);
  const [factIndex, setFactIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const workerUrl = 'https://moi.sp12.workers.dev/'; // Cloudflare Worker URL

  useEffect(() => {
    let isMounted = true;
    async function loadFacts() {
      try {
        const response = await fetch('https://raw.githubusercontent.com/sp12102001/facts.txt/main/facts.txt');
        if (!response.ok) throw new Error('Failed to load facts');
        const text = await response.text();
        const factArray = text.split('\n').filter(fact => fact.trim() !== '');
        if (isMounted) setFacts(factArray);
      } catch (error) {
        if (isMounted) console.error('Error loading facts:', error);
      }
    }
    loadFacts();
    return () => { isMounted = false };
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
    if (!question.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(workerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ question: question.trim() }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error: ${response.status} - ${errorText}`);
      }

      const responseData = await response.json();
      const validResponse = typeof responseData?.output === 'string'
        ? responseData.output
        : "I'm still learning! Please try rephrasing your question.";

      setResponse(validResponse);
      setQuestion('');

    } catch (error) {
      console.error('Chatbot error:', error);
      setError(error.message);
      setResponse('Sorry, there was an error processing your question. Please try again.');
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
          <div className="loading-bold">
            <span>Analyzing your question</span>
            <div className="dot-pulse" style={{ fontSize: '24px' }}>...</div>
            {facts.length > 0 && (
              <div id="fact-container">
                {facts[factIndex]}
              </div>
            )}
          </div>
        ) : (
          <>
            {response}
            {error && <div className="error-message">{error}</div>}
          </>
        )}
      </div>
    </section>
  );
}

export default Chatbot;
