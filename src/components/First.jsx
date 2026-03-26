import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/studatrix.png";

import adminIcon from "../assets/admin_logo.avif";
import scholarLogo from "../assets/scholar_logo.jpg";
import teacherLogo from "../assets/teacher_logo_1.jpg";
import parentLogo from "../assets/parent_logo.png";

import "./First.css";

function First() {

  const navigate = useNavigate();
  const user = null;

  return (

    <div className="home">

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="nav-left">

          <div className="logo-block">
            <img src={logo} alt="Studatrix" className="logo-img" />
            <span className="logo-tagline">
              Academic Intelligence Platform
            </span>
          </div>

        </div>

        <div className="nav-right">

          <div className="user-status">
            <span className="status-dot"></span>
            <span>{user ? "User Online" : "Guest Online"}</span>
          </div>

          <button
            className="register-button"
            onClick={() => navigate("/register")}
          >
            Get Started
          </button>

          <button
            className="login-button"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

        </div>

      </nav>



      {/* HERO */}

      <section className="hero">

        <h1>The Future of Academic Management</h1>

        <p>
          Studatrix connects institutions, educators, scholars, and parents
          through a unified academic intelligence platform.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-button"
            onClick={() => navigate("/register")}
          >
            Start Using Studatrix
          </button>

          <button
            className="secondary-button"
            onClick={() => navigate("/login")}
          >
            Open Dashboard
          </button>

        </div>

      </section>



      {/* TRUSTED */}

      <section className="trusted-section">

        <h2>Trusted by Educational Institutions</h2>

        <div className="trusted-grid">
          <div className="trusted-card">Global Public School</div>
          <div className="trusted-card">BrightPath Institute</div>
          <div className="trusted-card">Future Scholars Academy</div>
          <div className="trusted-card">National Learning Center</div>
        </div>

      </section>



      {/* FEATURES */}

      <section className="features-section">

        <h2>Platform Capabilities</h2>

        <div className="features-grid">

          <div className="feature-card">
            <h3>Academic Tracking</h3>
            <p>Track scholar progress and performance.</p>
          </div>

          <div className="feature-card">
            <h3>Institution Intelligence</h3>
            <p>Gain powerful insights into institutional data.</p>
          </div>

          <div className="feature-card">
            <h3>Parent Connectivity</h3>
            <p>Parents stay connected with student progress.</p>
          </div>

          <div className="feature-card">
            <h3>Educator Tools</h3>
            <p>Manage assessments and scholar performance.</p>
          </div>

        </div>

      </section>



      {/* WORKFLOW */}

      <section className="workflow-section">

        <h2>How Studatrix Works</h2>

        <div className="workflow-grid">

          <div className="workflow-step">
            <h3>1. Register Institution</h3>
            <p>Integrate academic infrastructure.</p>
          </div>

          <div className="workflow-step">
            <h3>2. Connect Users</h3>
            <p>Scholars, educators, and parents join.</p>
          </div>

          <div className="workflow-step">
            <h3>3. Track Progress</h3>
            <p>Monitor academic growth continuously.</p>
          </div>

          <div className="workflow-step">
            <h3>4. Institutional Insights</h3>
            <p>Administrators gain full visibility.</p>
          </div>

        </div>

      </section>



      {/* MODULES */}

      <section className="modules-section">

        <h2>Core Platform Modules</h2>

        <div className="modules-grid">

          <div className="module-card">
            <h3>Scholar Records</h3>
            <p>Complete academic profiles.</p>
          </div>

          <div className="module-card">
            <h3>Academic Analytics</h3>
            <p>Understand performance trends.</p>
          </div>

          <div className="module-card">
            <h3>Institution Dashboard</h3>
            <p>Centralized institutional insights.</p>
          </div>

          <div className="module-card">
            <h3>Parent Communication</h3>
            <p>Transparent academic communication.</p>
          </div>

        </div>

      </section>



      {/* STATS */}

      <section className="stats-section">

        <div className="stat-card">
          <h2>12,458</h2>
          <p>Scholars Registered</p>
        </div>

        <div className="stat-card">
          <h2>842</h2>
          <p>Educators Active</p>
        </div>

        <div className="stat-card">
          <h2>9,126</h2>
          <p>Parents Connected</p>
        </div>

        <div className="stat-card">
          <h2>32</h2>
          <p>Institutions Integrated</p>
        </div>

      </section>



      {/* WHY */}

      <section className="why-section">

        <h2>Why Institutions Choose Studatrix</h2>

        <div className="why-grid">

          <div className="why-card">
            <h3>Unified System</h3>
            <p>Replace fragmented academic tools.</p>
          </div>

          <div className="why-card">
            <h3>Real-Time Insights</h3>
            <p>Monitor scholar progress instantly.</p>
          </div>

          <div className="why-card">
            <h3>Secure Infrastructure</h3>
            <p>Enterprise-grade academic security.</p>
          </div>

          <div className="why-card">
            <h3>Scalable Platform</h3>
            <p>Supports institutions of all sizes.</p>
          </div>

        </div>

      </section>



      {/* PORTALS */}

      <section className="portal-section">

        <h2>Access Your Platform</h2>

        <div className="portal-grid">

          <div className="portal-card">
            <img src={adminIcon} alt="Admin" className="portal-icon"/>
            <h3>Administrator</h3>
            <p>Manage system and institution structure.</p>
            <button onClick={() => navigate("/login")}>Open Portal</button>
          </div>

          <div className="portal-card">
            <img src={scholarLogo} alt="Scholar" className="portal-icon"/>
            <h3>Scholar</h3>
            <p>View academic progress and records.</p>
            <button onClick={() => navigate("/login")}>Open Portal</button>
          </div>

          <div className="portal-card">
            <img src={teacherLogo} alt="Educator" className="portal-icon"/>
            <h3>Educator</h3>
            <p>Manage scholar academic development.</p>
            <button onClick={() => navigate("/login")}>Open Portal</button>
          </div>

          <div className="portal-card">
            <img src={parentLogo} alt="Parent" className="portal-icon"/>
            <h3>Parent</h3>
            <p>Monitor scholar academic performance.</p>
            <button onClick={() => navigate("/login")}>Open Portal</button>
          </div>

        </div>

      </section>



      {/* TESTIMONIALS */}

      <section className="testimonial-section">

        <h2>What Institutions Say</h2>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            <p>"Studatrix transformed our academic management."</p>
            <span>— Academic Director</span>
          </div>

          <div className="testimonial-card">
            <p>"Parents are now fully connected with student progress."</p>
            <span>— School Administrator</span>
          </div>

          <div className="testimonial-card">
            <p>"A powerful system for modern institutions."</p>
            <span>— Education Consultant</span>
          </div>

        </div>

      </section>



      {/* FAQ */}

      <section className="faq-section">

        <h2>Frequently Asked Questions</h2>

        <div className="faq-grid">

          <div className="faq-card">
            <h3>Who can use Studatrix?</h3>
            <p>Scholars, parents, educators, and institutions.</p>
          </div>

          <div className="faq-card">
            <h3>Is the platform secure?</h3>
            <p>Yes, with secure authentication and encryption.</p>
          </div>

          <div className="faq-card">
            <h3>Can institutions integrate it?</h3>
            <p>Yes, institutions can fully integrate their ecosystem.</p>
          </div>

        </div>

      </section>



      {/* CTA */}

      <section className="cta-section">

        <h2>Start Building Your Academic Intelligence System</h2>

        <p>Join institutions transforming their academic management.</p>

        <div className="cta-buttons">

          <button
            className="primary-button"
            onClick={() => navigate("/register")}
          >
            Get Started
          </button>

          <button
            className="secondary-button"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

        </div>

      </section>



      {/* SUPPORT */}

      <section className="support-section">

        <h2>Help & Support</h2>

        <div className="support-grid">

          <div className="support-card">
            <h3>📞 Helpline</h3>
            <p>+91 78936 23583</p>
          </div>

          <div className="support-card">
            <h3>📧 Email</h3>
            <p>studatrixsupport@gmail.com</p>
          </div>

          <div className="support-card">
            <h3>🏢 Headquarters</h3>
            <p>Vijayawada, India</p>
          </div>

          <div className="support-card">
            <h3>🔐 Security</h3>
            <p>security@studatrix.com</p>
          </div>

        </div>

      </section>



      <footer className="footer">
        © 2026 Studatrix — Academic Intelligence Platform
      </footer>

    </div>
  );
}

export default First;