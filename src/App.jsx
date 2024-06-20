import React, { useState } from 'react';
import './App.css';
import Projects from './projects.jsx'; // Import the Projects component
import Header from './Header.jsx';
import About from './About.jsx';
import Chatbot from './Chatbot.jsx';
import Contact from './Contact.jsx';

function App() {
  const [name] = useState('Sanjana Prabhakar');

  return (
    <div>
      <Header name={name} />
      <main role="main">
        <About />
        <Chatbot />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
