import React from "react";

function Profile() {

  const scholar = {
    name: "Tejes J",
    id: "2500030159",
    role: "Day Scholar",
    program: "B.Tech Computer Science",
    institution: "KL University",
    year: "1st Year",
    cgpa: "9.76",
    email: "jujjavaraputejes@gmail.com",
    phone: "+91 78936 23583",
    status: "Active"
  };

  const stats = [
    { label: "Attendance", value: "94%" },
    { label: "Assignments", value: "32/35" },
    { label: "Courses Enrolled", value: "6" },
    { label: "Rank", value: "#12" }
  ];

  const activities = [
    "Logged into dashboard",
    "Viewed academic records",
    "Submitted Data Structures assignment",
    "Checked attendance report",
    "Updated profile information"
  ];

  const achievements = [
    "Top 20 Rank Holder",
    "Excellence in Programming",
    "Hackathon Finalist",
    "Academic Merit Scholarship"
  ];

  return (

    <div className="profile-page">


      {/* PROFILE HERO */}

      <div className="profile-hero glass">

        <div className="avatar-ring">
          <div className="avatar">TJ</div>
        </div>

        <div className="hero-info">

          <h1>{scholar.name}</h1>

          <p className="hero-sub">
            {scholar.program}
          </p>

          <div className="hero-meta">

            <span className="badge id">
              ID: {scholar.id}
            </span>

            <span className="badge status">
              ● {scholar.status}
            </span>

          </div>

        </div>

        <button className="edit-btn">
          Edit Profile
        </button>

      </div>


      {/* STATS SECTION */}

      <div className="stats-grid">

        {stats.map((item, index) => (

          <div key={index} className="stat-card glass">

            <span className="stat-label">
              {item.label}
            </span>

            <span className="stat-value">
              {item.value}
            </span>

          </div>

        ))}

      </div>



      {/* INFO GRID */}

      <div className="info-grid">


        {/* ACADEMIC */}

        <div className="info-card glass">

          <h2>Academic Information</h2>

          <div className="info-row">
            <span>Institution</span>
            <span>{scholar.institution}</span>
          </div>

          <div className="info-row">
            <span>Program</span>
            <span>{scholar.program}</span>
          </div>

          <div className="info-row">
            <span>Year</span>
            <span>{scholar.year}</span>
          </div>

          <div className="info-row highlight">
            <span>CGPA</span>
            <span>{scholar.cgpa}</span>
          </div>

        </div>


        {/* CONTACT */}

        <div className="info-card glass">

          <h2>Contact Information</h2>

          <div className="info-row">
            <span>Email</span>
            <span>{scholar.email}</span>
          </div>

          <div className="info-row">
            <span>Phone</span>
            <span>{scholar.phone}</span>
          </div>

          <div className="info-row">
            <span>Role</span>
            <span>{scholar.role}</span>
          </div>

        </div>


        {/* SYSTEM */}

        <div className="info-card glass">

          <h2>System Status</h2>

          <div className="info-row">
            <span>Account Status</span>
            <span className="status-active">
              Active
            </span>
          </div>

          <div className="info-row">
            <span>Last Login</span>
            <span>Today, 09:42 AM</span>
          </div>

          <div className="info-row">
            <span>Platform</span>
            <span>Studatrix v1.0</span>
          </div>

        </div>

      </div>



      {/* LOWER GRID */}

      <div className="lower-grid">


        {/* ACTIVITY */}

        <div className="panel glass">

          <h2>Recent Activity</h2>

          {activities.map((item, index) => (
            <div key={index} className="activity-item">
              <span className="dot"></span>
              {item}
            </div>
          ))}

        </div>


        {/* ACHIEVEMENTS */}

        <div className="panel glass">

          <h2>Achievements</h2>

          {achievements.map((item, index) => (
            <div key={index} className="achievement">
              🏆 {item}
            </div>
          ))}

        </div>

      </div>



      {/* QUICK ACTIONS */}

      <div className="panel glass">

        <h2>Quick Actions</h2>

        <div className="actions">

          <button className="action-btn">
            View Academic Records
          </button>

          <button className="action-btn">
            Check Attendance
          </button>

          <button className="action-btn">
            Update Profile
          </button>

          <button className="action-btn">
            Contact Support
          </button>

        </div>

      </div>



      {/* CSS */}

      <style>{`

.profile-page {
  animation: fadeIn 0.6s ease;
}

.glass {
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(12px);
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

/* HERO */

.profile-hero {
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 30px;
  margin-bottom: 25px;
  position: relative;
}

.avatar-ring {
  padding: 3px;
  border-radius: 50%;
  background: linear-gradient(135deg,#2563eb,#06b6d4,#2563eb);
  animation: rotate 6s linear infinite;
}

.avatar {
  width: 90px;
  height: 90px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
  color: #2563eb;
}

.edit-btn {
  position: absolute;
  right: 25px;
  top: 25px;
  background: linear-gradient(90deg,#2563eb,#06b6d4);
  border: none;
  color: white;
  padding: 10px 18px;
  border-radius: 10px;
}

/* STATS */

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  gap: 15px;
  margin-bottom: 25px;
}

.stat-card {
  padding: 18px;
  text-align: center;
}

.stat-label {
  color: #64748b;
  font-size: 13px;
}

.stat-value {
  font-size: 24px;
  font-weight: bold;
  color: #2563eb;
}

/* INFO */

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
  gap: 20px;
  margin-bottom: 25px;
}

.info-card {
  padding: 25px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}

/* LOWER */

.lower-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 25px;
}

.panel {
  padding: 25px;
}

.activity-item {
  padding: 8px 0;
}

.dot {
  width: 8px;
  height: 8px;
  background: #2563eb;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}

.achievement {
  padding: 8px 0;
}

/* ACTIONS */

.actions {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  gap: 15px;
}

.action-btn {
  padding: 12px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg,#2563eb,#06b6d4);
  color: white;
}

/* ANIMATIONS */

@keyframes fadeIn {
  from {opacity:0;transform:translateY(15px);}
  to {opacity:1;transform:translateY(0);}
}

@keyframes rotate {
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
}

      `}</style>

    </div>

  );

}

export default Profile;