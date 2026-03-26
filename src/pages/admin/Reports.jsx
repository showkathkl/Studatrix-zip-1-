import React from "react";

function Reports() {

  const reports = [
    {
      label: "Overall Attendance",
      value: "92%",
      progress: 92,
      color: "#2563eb"
    },
    {
      label: "Assignment Completion",
      value: "85%",
      progress: 85,
      color: "#06b6d4"
    },
    {
      label: "Fee Collection",
      value: "78%",
      progress: 78,
      color: "#7c3aed"
    },
    {
      label: "System Performance",
      value: "99%",
      progress: 99,
      color: "#22c55e"
    }
  ];


  const activities = [
    "Attendance report generated",
    "Course performance analyzed",
    "Fee analytics updated",
    "System diagnostics completed"
  ];


  return (
    <div className="reports-page">


      {/* HEADER */}
      <h1 className="page-title">
        System Reports & Analytics
      </h1>



      {/* SUMMARY STATS */}
      <div className="stats-grid">

        <div className="stat-card glass">
          <span>Total Reports</span>
          <strong>24</strong>
        </div>

        <div className="stat-card glass">
          <span>Generated Today</span>
          <strong>6</strong>
        </div>

        <div className="stat-card glass">
          <span>System Status</span>
          <strong className="green">Healthy</strong>
        </div>

        <div className="stat-card glass">
          <span>Last Update</span>
          <strong>2 mins ago</strong>
        </div>

      </div>



      {/* REPORT CARDS */}
      <div className="reports-grid">

        {reports.map((item, index) => (

          <div key={index} className="report-card glass">

            <h3>{item.label}</h3>

            <div
              className="report-value"
              style={{ color: item.color }}
            >
              {item.value}
            </div>

            <div className="progress-container">

              <div
                className="progress-bar"
                style={{
                  width: `${item.progress}%`,
                  background: item.color
                }}
              />

            </div>

          </div>

        ))}

      </div>



      {/* LOWER PANELS */}
      <div className="lower-grid">


        {/* RECENT ACTIVITY */}
        <div className="panel glass">

          <h3>Recent Activity</h3>

          {activities.map((item, index) => (

            <div key={index} className="activity-item">
              {item}
            </div>

          ))}

        </div>



        {/* PERFORMANCE INSIGHTS */}
        <div className="panel glass">

          <h3>Performance Insights</h3>

          <div className="activity-item">
            Average Attendance: <strong>91%</strong>
          </div>

          <div className="activity-item">
            Assignment Completion Rate: <strong>85%</strong>
          </div>

          <div className="activity-item">
            Fee Recovery Efficiency: <strong>78%</strong>
          </div>

          <div className="activity-item">
            System Reliability Score: <strong>99%</strong>
          </div>

        </div>


      </div>



      {/* SYSTEM HEALTH */}
      <div className="panel glass full-width">

        <h3>System Health</h3>

        <div className="health-grid">

          <div className="health-card">
            Server Status
            <span className="green">Operational</span>
          </div>

          <div className="health-card">
            Database
            <span className="green">Stable</span>
          </div>

          <div className="health-card">
            Security
            <span className="green">Secure</span>
          </div>

          <div className="health-card">
            Backup
            <span className="green">Active</span>
          </div>

        </div>

      </div>



      <style>{`

.reports-page {
  display: flex;
  flex-direction: column;
  gap: 25px;
  animation: fadeIn 0.4s ease;
}


/* TITLE */

.page-title {
  font-size: 26px;
  font-weight: 600;
  color: #1e3a8a;
}


/* GLASS */

.glass {
  backdrop-filter: blur(10px);
  background: rgba(255,255,255,0.75);
  border-radius: 18px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}


/* STATS */

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  gap: 20px;
}

.stat-card {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.stat-card strong {
  font-size: 22px;
  color: #1e3a8a;
}


/* REPORT CARDS */

.reports-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(260px,1fr));
  gap: 25px;
}

.report-card {
  padding: 25px;
  transition: 0.3s;
}

.report-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(0,0,0,0.08);
}

.report-card h3 {
  font-size: 15px;
  color: #64748b;
  margin-bottom: 15px;
}

.report-value {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
}


/* PROGRESS */

.progress-container {
  height: 10px;
  background: #e5e7eb;
  border-radius: 10px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  border-radius: 10px;
}


/* PANELS */

.lower-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.panel {
  padding: 20px;
}

.full-width {
  width: 100%;
}


/* ACTIVITY */

.activity-item {
  padding: 8px 0;
}


/* HEALTH */

.health-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(180px,1fr));
  gap: 15px;
}

.health-card {
  padding: 15px;
  background: rgba(37,99,235,0.05);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.green {
  color: #22c55e;
  font-weight: 600;
}


/* ANIMATION */

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
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

export default Reports;