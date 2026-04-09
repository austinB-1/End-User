* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body {
  background: #0f172a;
  color: #e5e7eb;
  line-height: 1.6;
}

.hero {
  background: linear-gradient(135deg, #1d4ed8, #22c55e);
  padding: 2.5rem 1.5rem;
  text-align: center;
  color: #f9fafb;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

main {
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1.5rem 3rem;
}

section {
  margin-bottom: 2rem;
  background: #020617;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #1f2937;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #bfdbfe;
}

ul {
  margin-left: 1.25rem;
}

li {
  margin-bottom: 0.5rem;
}

.example {
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

.example.safe {
  border: 1px solid #22c55e;
  background: rgba(34, 197, 94, 0.1);
}

.example.risky {
  border: 1px solid #f97316;
  background: rgba(249, 115, 22, 0.1);
}

#quiz-container {
  margin-top: 1rem;
}

.question {
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: #020617;
  border: 1px solid #1f2937;
}

.question h3 {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

button#submit-quiz {
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  border: none;
  background: #22c55e;
  color: #022c22;
  font-weight: 600;
  cursor: pointer;
}

button#submit-quiz:hover {
  background: #16a34a;
}

#result {
  margin-top: 0.75rem;
  font-weight: 600;
}

footer {
  text-align: center;
  padding: 1rem;
  font-size: 0.85rem;
  color: #9ca3af;
}
