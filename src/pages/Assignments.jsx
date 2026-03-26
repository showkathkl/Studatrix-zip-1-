import React from "react";

function Assignments() {

  const assignments = [

    {
      title: "Data Structures Assignment 4",
      course: "Data Structures",
      deadline: "28 Feb 2026",
      status: "Pending",
      progress: 60
    },

    {
      title: "Mathematics for AI Problem Set 2",
      course: "Mathematics for AI",
      deadline: "20 Feb 2026",
      status: "Submitted",
      progress: 100
    },

    {
      title: "Digital Design Lab Exercise 3",
      course: "Digital Design and Computer Architecture",
      deadline: "15 Feb 2026",
      status: "Overdue",
      progress: 40
    },

    {
      title: "React Project Milestone 1",
      course: "Frontend Development Frameworks and UI Engineering",
      deadline: "5 Mar 2026",
      status: "Pending",
      progress: 25
    }

  ];


  const getStatusColor = (status) => {

    if (status === "Submitted") return "#22c55e";
    if (status === "Pending") return "#f59e0b";
    if (status === "Overdue") return "#ef4444";

  };


  return (

    <div className="assignments-page">


      {/* HEADER */}

      <div className="header">

        <h1>Assignments</h1>

        <p>Track, manage, and submit your academic assignments</p>

      </div>



      {/* SUMMARY */}

      <div className="summary-grid">

        <div className="summary-card">

          <span>Pending</span>
          <h2>2</h2>

        </div>

        <div className="summary-card">

          <span>Submitted</span>
          <h2>1</h2>

        </div>

        <div className="summary-card">

          <span>Overdue</span>
          <h2>1</h2>

        </div>

      </div>



      {/* ASSIGNMENT LIST */}

      <div className="assignment-grid">

        {assignments.map((assignment, index) => (

          <div key={index} className="assignment-card">


            {/* TOP */}

            <div className="card-top">

              <h3>{assignment.title}</h3>

              <span
                className="status"
                style={{
                  background: getStatusColor(assignment.status)
                }}
              >
                {assignment.status}
              </span>

            </div>


            {/* INFO */}

            <p className="course">
              {assignment.course}
            </p>

            <p className="deadline">
              Deadline: {assignment.deadline}
            </p>


            {/* PROGRESS */}

            <div className="progress-container">

              <div
                className="progress-bar"
                style={{
                  width: `${assignment.progress}%`,
                  background: getStatusColor(assignment.status)
                }}
              ></div>

            </div>

            <span className="progress-text">
              {assignment.progress}% Ready
            </span>


            {/* ACTION */}

            <button className="action-button">

              {assignment.status === "Submitted"
                ? "View Submission"
                : "Submit Assignment"}

            </button>


          </div>

        ))}

      </div>



      {/* CSS */}

      <style>

        {`

        .assignments-page {

          animation: fadeIn 0.5s ease;

        }


        .header {

          margin-bottom: 25px;

        }


        .header h1 {

          font-size: 32px;

          background: linear-gradient(
            90deg,
            #2563eb,
            #06b6d4
          );

          -webkit-background-clip: text;

          -webkit-text-fill-color: transparent;

        }


        .header p {

          color: #64748b;

        }


        .summary-grid {

          display: grid;

          grid-template-columns: repeat(auto-fit,minmax(200px,1fr));

          gap: 20px;

          margin-bottom: 25px;

        }


        .summary-card {

          background: white;

          padding: 20px;

          border-radius: 14px;

          text-align: center;

          box-shadow: 0 10px 25px rgba(0,0,0,0.05);

          transition: 0.3s;

        }


        .summary-card:hover {

          transform: translateY(-5px);

        }


        .assignment-grid {

          display: grid;

          grid-template-columns: repeat(auto-fit,minmax(300px,1fr));

          gap: 20px;

        }


        .assignment-card {

          background: white;

          padding: 20px;

          border-radius: 16px;

          box-shadow: 0 10px 25px rgba(0,0,0,0.05);

          transition: 0.3s;

        }


        .assignment-card:hover {

          transform: translateY(-8px);

          box-shadow: 0 20px 40px rgba(0,0,0,0.08);

        }


        .card-top {

          display: flex;

          justify-content: space-between;

          align-items: center;

        }


        .status {

          color: white;

          padding: 4px 10px;

          border-radius: 8px;

          font-size: 12px;

        }


        .course {

          margin-top: 10px;

          color: #64748b;

        }


        .deadline {

          font-size: 14px;

          margin-top: 5px;

        }


        .progress-container {

          background: #e5e7eb;

          height: 10px;

          border-radius: 10px;

          margin-top: 15px;

          overflow: hidden;

        }


        .progress-bar {

          height: 100%;

          border-radius: 10px;

          animation: grow 1s ease;

        }


        .progress-text {

          font-size: 14px;

          margin-top: 5px;

          display: block;

        }


        .action-button {

          margin-top: 15px;

          width: 100%;

          background: linear-gradient(
            90deg,
            #2563eb,
            #06b6d4
          );

          border: none;

          color: white;

          padding: 10px;

          border-radius: 10px;

          cursor: pointer;

          font-weight: 500;

          transition: 0.3s;

        }


        .action-button:hover {

          transform: scale(1.03);

        }


        @keyframes grow {

          from {
            width: 0;
          }

        }


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

        `}

      </style>


    </div>

  );

}

export default Assignments;