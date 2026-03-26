import React from "react";

function Dashboard() {

  const scholar = {
    name: "Tejes",
    cgpa: "9.76",
    attendance: 92,
    dues: 12500,
    assignmentsCompleted: 7,
    totalAssignments: 10
  };

  const percentAssignments =
    Math.floor(
      (scholar.assignmentsCompleted /
      scholar.totalAssignments) * 100
    );


  return (

    <div className="dashboard-page">


      {/* HERO */}

      <div className="hero glass">

        <div>

          <h1>
            Welcome back, {scholar.name}
          </h1>

          <p>
            Here's your academic overview and system status.
          </p>

        </div>


        <div className="cgpa-card">

          <span>CGPA</span>

          <h2>{scholar.cgpa}</h2>

        </div>

      </div>



      {/* STATS */}

      <div className="stats-grid">


        {/* ATTENDANCE */}

        <div className="stat-card glass">

          <h3>Attendance</h3>

          <div
            className="circle"
            style={{
              background: `conic-gradient(
                #2563eb ${scholar.attendance * 3.6}deg,
                #e5e7eb 0deg
              )`
            }}
          >

            <div className="circle-inner">
              {scholar.attendance}%
            </div>

          </div>

        </div>



        {/* ASSIGNMENTS */}

        <div className="stat-card glass">

          <h3>Assignments</h3>

          <span className="big-number">

            {scholar.assignmentsCompleted}/{scholar.totalAssignments}

          </span>


          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width: percentAssignments + "%"
              }}
            ></div>

          </div>

          <span className="progress-text">
            {percentAssignments}% Completed
          </span>

        </div>



        {/* FEES */}

        <div className="stat-card glass">

          <h3>Fee Dues</h3>

          <span className="big-number red">

            ₹{scholar.dues.toLocaleString()}

          </span>

          <p>Due by March 15</p>

        </div>


      </div>



      {/* LOWER SECTION */}

      <div className="lower-grid">


        {/* SCHEDULE */}

        <div className="glass schedule">

          <h3>Today's Classes</h3>

          <div className="class">

            <span>Data Structures & Algorithms - I</span>

            <span>7:10 AM</span>

          </div>

          <div className="class">

            <span>Front End Development Frameworks & UI Engineering</span>

            <span>9:20 AM</span>

          </div>

          <div className="class">

            <span>Mathematics for AI</span>

            <span>11:00 AM</span>

          </div>

        </div>



        {/* ACTIVITY */}

        <div className="glass activity">

          <h3>Recent Activity</h3>

          <div className="activity-item">

            Assignment submitted

          </div>

          <div className="activity-item">

            Fee payment reminder

          </div>

          <div className="activity-item">

            Profile updated

          </div>

        </div>


      </div>



      {/* CSS */}

      <style>

        {`

        .dashboard-page {

          animation: fadeIn 0.6s ease;

        }


        .glass {

          background: rgba(255,255,255,0.7);

          backdrop-filter: blur(12px);

          border-radius: 18px;

          box-shadow: 0 10px 30px rgba(0,0,0,0.08);

        }


        .hero {

          display: flex;

          justify-content: space-between;

          align-items: center;

          padding: 30px;

          margin-bottom: 25px;

          background: linear-gradient(
            135deg,
            rgba(37,99,235,0.15),
            rgba(6,182,212,0.15)
          );

        }


        .hero h1 {

          font-size: 28px;

        }


        .hero p {

          color: #64748b;

        }


        .cgpa-card {

          text-align: center;

        }


        .cgpa-card h2 {

          font-size: 32px;

          color: #2563eb;

        }


        .stats-grid {

          display: grid;

          grid-template-columns:
          repeat(auto-fit,minmax(250px,1fr));

          gap: 20px;

          margin-bottom: 25px;

        }


        .stat-card {

          padding: 25px;

          text-align: center;

          transition: 0.3s;

        }


        .stat-card:hover {

          transform: translateY(-6px);

        }


        .big-number {

          font-size: 28px;

          font-weight: bold;

          color: #2563eb;

        }


        .red {

          color: #ef4444;

        }


        .circle {

          width: 120px;

          height: 120px;

          border-radius: 50%;

          display: flex;

          align-items: center;

          justify-content: center;

          margin: auto;

        }


        .circle-inner {

          width: 90px;

          height: 90px;

          background: white;

          border-radius: 50%;

          display: flex;

          align-items: center;

          justify-content: center;

          font-weight: bold;

        }


        .progress-bar {

          height: 10px;

          background: #e5e7eb;

          border-radius: 10px;

          margin-top: 10px;

        }


        .progress-fill {

          height: 100%;

          background: linear-gradient(
            90deg,
            #2563eb,
            #06b6d4
          );

          border-radius: 10px;

          animation: grow 1s ease;

        }


        .lower-grid {

          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 20px;

        }


        .schedule,
        .activity {

          padding: 25px;

        }


        .class,
        .activity-item {

          display: flex;

          justify-content: space-between;

          padding: 10px;

          margin-top: 10px;

          background: rgba(37,99,235,0.05);

          border-radius: 10px;

        }


        @keyframes grow {

          from {
            width: 0;
          }

        }


        @keyframes fadeIn {

          from {
            opacity: 0;
            transform: translateY(15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        `}

      </style>


    </div>

  );

}

export default Dashboard;