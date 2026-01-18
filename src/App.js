import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1>Dhruv's React Website</h1>
        <p>Built with React by a beginner</p>
      </header>

      {/* About Section */}
      <section className="section about">
        <h2>About</h2>
        <p>
          This is a simple React website built from scratch. It demonstrates basic component structure and styling.
        </p>
      </section>

      {/* Features Section */}
      <section className="section features">
        <h2>Features</h2>
        <ul>
          <li>Fast</li>
          <li>Responsive</li>
          <li>Simple Design</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="section contact">
        <h2>Contact</h2>
        <p>Email: ochadesu@example.com</p>
        <p>GitHub: <a href="https://github.com/" target="_blank" rel="noopener noreferrer">https://github.com/</a></p>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2026 Dhruv's React Website
      </footer>
    </div>
  );
}

export default App;

