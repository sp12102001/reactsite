import './Projects.css'; // Assuming you have a CSS file for Projects-specific styles

function Projects() {
  const projectData = [
    {
      name: 'Systematic-Synthesizer',
      description: 'An innovative platform that revolutionizes systematic review processes through advanced NLP and machine learning. Streamlines research synthesis with automated data extraction and analysis.',
      repoUrl: 'https://github.com/sp12102001/Systematic-Synthesizer',
      imageUrl: 'https://github.com/sp12102001/Systematic-Synthesizer/raw/main/systematic-synthesizer.gif',
      builtWith: 'Node.js, React, NLP Libraries, Machine Learning'
    },
    {
      name: 'Tax-Questions-Bot',
      description: 'Intelligent chatbot system designed specifically for Singapore tax inquiries. Provides instant, accurate responses to complex tax-related questions using advanced NLP.',
      repoUrl: 'https://github.com/sp12102001/Tax-Questions-Bot',
      imageUrl: 'https://github.com/sp12102001/Tax-Questions-Bot/raw/main/preview.png',
      builtWith: 'JavaScript, Natural Language Processing, AI/ML'
    },
    {
      name: 'API Query Framework',
      description: 'Modern framework integrating ChatGPT capabilities for dynamic API interactions. Features seamless static site generation with intelligent query handling.',
      repoUrl: 'https://github.com/sp12102001/api-query-framework',
      imageUrl: 'https://github.com/sp12102001/api-query-framework/raw/main/preview.png',
      builtWith: 'React, OpenAI API, RESTful Services'
    },
    {
      name: 'Network Me',
      description: 'Sophisticated social networking platform with built-in authentication and real-time features. Emphasizes secure user connections and seamless interaction.',
      repoUrl: 'https://github.com/sp12102001/network-me',
      imageUrl: 'https://github.com/sp12102001/network-me/raw/main/network-me.gif',
      builtWith: 'Node.js, Express, MongoDB, WebSocket'
    },
    {
      name: 'Research Agent AI',
      description: 'Cutting-edge AI system that autonomously conducts comprehensive research and generates structured scientific papers. Revolutionizes the academic writing process.',
      repoUrl: 'https://github.com/sp12102001/research-agent-ai',
      imageUrl: 'https://github.com/sp12102001/facts.txt/raw/main/research-agent-ai.gif',
      builtWith: 'Python, TensorFlow, NLP, Scientific Libraries'
    },
    {
      name: 'Intellimail',
      description: 'Advanced AI-powered email marketing platform that optimizes campaigns through sophisticated customer behavior analysis and intelligent content personalization.',
      repoUrl: 'https://github.com/sp12102001/ai-email-marketing',
      imageUrl: 'https://github.com/sp12102001/ai-email-marketing/raw/main/intellimail.gif',
      builtWith: 'React, Node.js, Machine Learning, Analytics'
    },
    {
      name: 'AI Quiz Challenge',
      description: 'Interactive educational game that pits human knowledge against AI in an engaging quiz format. Features dynamic difficulty adjustment and learning analytics.',
      repoUrl: 'https://github.com/sp12102001/python-game',
      imageUrl: 'https://github.com/sp12102001/python-game/raw/main/preview.png',
      builtWith: 'Python, AI Algorithms, Game Development'
    },
    {
      name: 'Apology-Support-AI',
      description: 'Innovative AI system that generates personalized reconciliation suggestions based on relationship dynamics, context analysis, and psychological factors.',
      repoUrl: 'https://github.com/sp12102001/Apology-Support-AI',
      imageUrl: 'https://github.com/sp12102001/Apology-Support-AI/raw/main/preview.png',
      builtWith: 'Node.js, NLP, Sentiment Analysis'
    }
  ];

  return (
    <section id="projects" className="container">
      <h2>Featured Projects</h2>
      <div className="projects-carousel">
        {projectData.map((project, index) => (
          <div key={index} className="card">
            <img
              src={project.imageUrl}
              alt={`${project.name} preview`}
              className="project-image"
              loading="lazy"
            />
            <div className="card-content">
              <div>
                <h3>{project.name}</h3>
                <p className="description">{project.description}</p>
              </div>
              <div>
                <div className="overlay">
                  <p className="built-with">
                    <strong>Built With:</strong> {project.builtWith}
                  </p>
                </div>
                <a
                  href={project.repoUrl}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
