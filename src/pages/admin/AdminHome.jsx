import React from "react";

function AdminHome() {

  const stats = [
    { label: "Total Scholars", value: "12,458", icon: "🎓" },
    { label: "Active Teachers", value: "842", icon: "👩‍🏫" },
    { label: "Courses Running", value: "120", icon: "📚" },
    { label: "System Alerts", value: "3", icon: "⚠️" }
  ];

  const activities = [
    "New scholar registered in Computer Science",
    "Teacher assigned to Mathematics",
    "Course 'Data Structures' updated",
    "System backup completed successfully",
    "Parent account linked to scholar"
  ];

  const registrations = [
    { name: "Arjun Reddy", role: "Scholar", time: "2 mins ago" },
    { name: "Dr. Suneetha Bulla", role: "Educator", time: "10 mins ago" },
    { name: "Tejes J", role: "Scholar", time: "25 mins ago" },
    { name: "Veera Raju", role: "Parent", time: "1 hour ago" }
  ];

  return (
    <div className="admin-home">

      {/* HEADER */}
      <div className="overview-header">
        <h1>System Overview</h1>
        <p>Real-time platform insights and academic statistics</p>
      </div>


      {/* STATS */}
      <div className="stats-grid">

        {stats.map((item, index) => (

          <div key={index} className="stat-card">

            <div className="stat-icon">
              {item.icon}
            </div>

            <div className="stat-info">

              <span className="stat-label">
                {item.label}
              </span>

              <span className="stat-value">
                {item.value}
              </span>

            </div>

          </div>

        ))}

      </div>


      {/* LOWER GRID */}
      <div className="lower-grid">

        {/* ACTIVITY */}
        <div className="panel">

          <div className="panel-title">
            Recent Activity
          </div>

          <div className="panel-body">

            {activities.map((item, index) => (

              <div key={index} className="activity-item">
                <span className="activity-dot"></span>
                {item}
              </div>

            ))}

          </div>

        </div>


        {/* HEALTH */}
        <div className="panel">

          <div className="panel-title">
            System Health
          </div>

          <div className="panel-body">

            <div className="health-item">
              Server Status:
              <span className="healthy"> Operational</span>
            </div>

            <div className="health-item">
              Database:
              <span className="healthy"> Stable</span>
            </div>

            <div className="health-item">
              Security:
              <span className="healthy"> Secure</span>
            </div>

            <div className="health-item">
              Backup:
              <span className="healthy"> Active</span>
            </div>

          </div>

        </div>

      </div>


      {/* TABLE */}
      <div className="panel full-width">

        <div className="panel-title">
          Recent Registrations
        </div>

        <div className="panel-body">

          <table className="table">

            <thead>

              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Time</th>
              </tr>

            </thead>

            <tbody>

              {registrations.map((user, index) => (

                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.time}</td>
                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>



      {/* CSS */}
      <style>{`

.admin-home {
  display: flex;
  flex-direction: column;
  gap: 28px;
  animation: fadeIn 0.35s ease;
}


/* HEADER */

.overview-header {

  padding: 28px 30px;

  border-radius: 22px;

  background: linear-gradient(
    135deg,
    rgba(37,99,235,0.08),
    rgba(6,182,212,0.08)
  );

  backdrop-filter: blur(10px);

  border: 1px solid rgba(37,99,235,0.15);

}

.overview-header h1 {

  font-size: 30px;
  font-weight: 600;

  color: #1e3a8a;

  margin-bottom: 6px;

}

.overview-header p {

  color: #64748b;
  font-size: 14px;

}


/* STATS */

.stats-grid {

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

  gap: 28px;

}

.stat-card {

  position: relative;

  display: flex;
  align-items: center;

  gap: 20px;

  padding: 26px;

  border-radius: 24px;

  background: rgba(255,255,255,0.85);

  backdrop-filter: blur(14px);

  border: 1px solid rgba(0,0,0,0.05);

  box-shadow: 0 15px 35px rgba(0,0,0,0.06);

  transition: all 0.25s ease;

  overflow: hidden; /* FIXES LINE ALIGNMENT */

}

.stat-card:hover {
  transform: translateY(-5px);
}


/* PERFECTLY ALIGNED ACCENT LINE */

.stat-card::before {

  content: "";

  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 4px;

  border-radius: 24px 24px 0 0;

  background: linear-gradient(
    90deg,
    #2563eb,
    #06b6d4
  );

}


.stat-icon {

  width: 60px;
  height: 60px;

  border-radius: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;

  background: linear-gradient(
    135deg,
    #2563eb,
    #06b6d4
  );

  box-shadow: 0 10px 25px rgba(37,99,235,0.35);

}

.stat-label {

  font-size: 14px;
  color: #64748b;

}

.stat-value {

  font-size: 28px;
  font-weight: 700;

  color: #1e3a8a;

}


/* PANELS */

.lower-grid {

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

  gap: 28px;

}

.panel {

  background: rgba(255,255,255,0.85);

  backdrop-filter: blur(14px);

  border-radius: 22px;

  border: 1px solid rgba(0,0,0,0.05);

  box-shadow: 0 15px 35px rgba(0,0,0,0.06);

}

.full-width {
  width: 100%;
}

.panel-title {

  padding: 18px 24px;

  font-size: 18px;

  font-weight: 600;

  color: #1e3a8a;

  border-bottom: 1px solid rgba(0,0,0,0.05);

}

.panel-body {
  padding: 20px 24px;
}


/* ACTIVITY */

.activity-item {

  padding: 8px 0;

  font-size: 14px;

  color: #334155;

}

.activity-dot {

  width: 8px;
  height: 8px;

  border-radius: 50%;

  display: inline-block;

  margin-right: 10px;

  background: linear-gradient(90deg,#2563eb,#06b6d4);

}


/* HEALTH */

.health-item {
  padding: 8px 0;
}

.healthy {
  color: #22c55e;
  font-weight: 600;
}


/* TABLE */

.table {

  width: 100%;

  border-collapse: collapse;

}

.table th {

  text-align: left;

  padding: 12px 10px;

  color: #64748b;

}

.table td {

  padding: 12px 10px;

  border-top: 1px solid rgba(0,0,0,0.05);

}


/* ANIMATION */

@keyframes fadeIn {

  from {
    opacity: 0;
    transform: translateY(6px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }

}

      `}</style>

    </div>
  );
}

export default AdminHome;