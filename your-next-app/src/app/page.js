export default function HomePage() {
  return (
      <div style={{ fontFamily: 'sans-serif' }}>
        <header style={{ padding: '2rem', backgroundColor: '#222', color: 'white' }}>
          <h1>Welcome to My Next.js Landing Page</h1>
        </header>

        <main style={{ padding: '2rem' }}>
          <section>
            <h2>Section One</h2>
            <p>This is some placeholder text for the first section.</p>
          </section>

          <section>
            <h2>Section Two</h2>
            <p>This is some placeholder text for the second section.</p>
          </section>

          <section>
            <h2>Section Three</h2>
            <p>This is some placeholder text for the third section.</p>
          </section>
        </main>

        <footer style={{ padding: '1rem', backgroundColor: '#eee', textAlign: 'center' }}>
          <p>&copy; 2025 My Landing Page</p>
        </footer>
      </div>
  );
}

