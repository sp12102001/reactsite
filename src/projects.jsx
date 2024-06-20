import React from 'react';
import './projects.css'; // Assuming you have a CSS file for Projects-specific styles

function Projects() {
  const projectData = [
    {
      name: 'Systematic-Synthesizer',
      description: 'Automates the systematic review process using NLP, ML, and data extraction techniques.',
      repoUrl: 'https://github.com/sp12102001/Systematic-Synthesizer',
      imageUrl: 'https://github.com/sp12102001/Systematic-Synthesizer/raw/main/systematic-synthesizer.gif',
      builtWith: 'JavaScript, HTML, CSS, jQuery, Bootstrap, Node'
    },
    {
      name: 'Tax-Questions-Bot',
      description: 'A web-based tool to help individuals in Singapore with tax-related queries.',
      repoUrl: 'https://github.com/sp12102001/Tax-Questions-Bot',
      imageUrl: 'https://github.com/sp12102001/Tax-Questions-Bot/raw/main/preview.png',
      builtWith: 'JavaScript'
    },
    {
      name: 'API Query Framework',
      description: 'Framework for creating a static website that makes API queries using JavaScript and integrates ChatGPT.',
      repoUrl: 'https://github.com/sp12102001/api-query-framework',
      imageUrl: 'https://github.com/sp12102001/api-query-framework/raw/main/preview.png',
      builtWith: 'JavaScript, HTML, CSS'
    },
    {
      name: 'Network Me',
      description: 'Starting framework for an auth-included social media application.',
      repoUrl: 'https://github.com/sp12102001/network-me',
      imageUrl: 'https://github.com/sp12102001/network-me/raw/main/preview.png',
      builtWith: 'JavaScript, HTML, CSS, jQuery, Bootstrap, Node'
    },
    {
      name: 'Research Agent AI',
      description: 'Autonomously conducts research to write systematic review structured scientific papers.',
      repoUrl: 'https://github.com/sp12102001/research-agent-ai',
      imageUrl: 'https://github.com/sp12102001/research-agent-ai/raw/main/preview.png',
      builtWith: 'JavaScript, HTML, CSS, jQuery, Bootstrap, Node'
    },
    {
      name: 'AI-Powered Email Marketing Platform',
      description: 'AI optimizes email campaigns with features like subject line generation and content personalization.',
      repoUrl: 'https://github.com/sp12102001/ai-email-marketing',
      imageUrl: 'https://github.com/sp12102001/ai-email-marketing/raw/main/preview.png',
      builtWith: 'JavaScript, HTML, CSS, jQuery, Bootstrap, Node'
    },
    {
      name: 'Python Game',
      description: 'A Python-based interactive maths game where the human plays against the computer.',
      repoUrl: 'https://github.com/sp12102001/python-game',
      imageUrl: 'https://github.com/sp12102001/python-game/raw/main/preview.png',
      builtWith: 'Python'
    },
    {
      name: 'Apology-Support-AI',
      description: 'A satirical initiative generating personalized gift ideas based on parameters like the cause of an argument, age, budget, and severity.',
      repoUrl: 'https://github.com/sp12102001/Apology-Support-AI',
      imageUrl: 'https://github.com/sp12102001/Apology-Support-AI/raw/main/preview.png',
      builtWith: 'JavaScript, HTML, CSS, Node'
    }
  ];

  return (
    <section id="projects" className="container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="card">
            <img src={project.imageUrl} alt={`${project.name} preview`} className="project-image" />
            <div className="card-content">
              <h3>{project.name}</h3>
              <p className="description">{project.description}</p>
              <p className="built-with"><strong>Built With:</strong> {project.builtWith}</p>
              <a href={project.repoUrl} className="btn" target="_blank" rel="noopener noreferrer">View Project on GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
