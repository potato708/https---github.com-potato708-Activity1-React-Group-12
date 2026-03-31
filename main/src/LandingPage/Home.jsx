import './Home.css';

const Home = () => {
  const members = [
    { name: "JOEMARIE G. VALENTINO", role: "Team Lead" },
    { name: "JUN MARK M. CABULONG", role: "Developer" },
    { name: "KATE S. COMONICAL", role: "Designer" }
  ];

  return (
    <div className="landing-container">
      <header className="hero-section">
        <h1>Activity 1: Group Overview</h1>
        <p>Welcome to our simple Home page. We are a dedicated team focused on building efficient React applications.</p>
      </header>

      <section className="members-section">
        <h2>Our Team Members</h2>
        <div className="members-grid">
          {members.map((member, index) => (
            <div key={index} className="member-card">
              <div className="avatar-placeholder">
                {member.name.charAt(0)}
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2026 Activity 1 - Group 6</p>
      </footer>
    </div>
  );
};

export default Home;