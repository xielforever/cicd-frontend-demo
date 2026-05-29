import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="container">
    <h1>CI/CD Frontend Demo</h1>
    <p class="subtitle">A minimal frontend project with CI/CD pipeline</p>
    <div class="card">
      <h2>Tech Stack</h2>
      <ul>
        <li><strong>Build Tool:</strong> Vite</li>
        <li><strong>Language:</strong> JavaScript (ES Modules)</li>
      </ul>
    </div>
    <div class="card">
      <h2>Quick Start</h2>
      <pre><code>npm install
npm run dev</code></pre>
    </div>
  </div>
';
