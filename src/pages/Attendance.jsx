import React from "react";

function Attendance() {

  const overallAttendance = 92;

  const subjects = [
    { name: "Data Structures", attendance: 95 },
    { name: "Operating Systems", attendance: 89 },
    { name: "Database Systems", attendance: 93 },
    { name: "Computer Networks", attendance: 87 },
    { name: "Software Engineering", attendance: 96 },
  ];


  const getStatus = (value) => {
    if (value >= 90) return "Excellent";
    if (value >= 75) return "Good";
    return "Low";
  };


  const getColor = (value) => {
    if (value >= 90) return "#22c55e";
    if (value >= 75) return "#f59e0b";
    return "#ef4444";
  };


  return (

    <div className="attendance-page">


      {/* OVERALL ATTENDANCE */}

      <div className="overall-card">

        <h2>Overall Attendance</h2>

        <div className="circle-wrapper">

          <div
            className="circle"
            style={{
              background: `conic-gradient(
                #2563eb ${overallAttendance * 3.6}deg,
                #e5e7eb 0deg
              )`
            }}
          >

            <div className="circle-inner">
              {overallAttendance}%
            </div>

          </div>

        </div>

        <p className="status-text">
          Excellent Attendance Record
        </p>

      </div>



      {/* SUBJECT ATTENDANCE */}

      <div className="card">

        <h2>Subject-wise Attendance</h2>

        {subjects.map((subject, index) => (

          <div key={index} className="subject-row">

            <div className="subject-info">

              <span className="subject-name">
                {subject.name}
              </span>

              <span
                className="subject-status"
                style={{
                  color: getColor(subject.attendance)
                }}
              >
                {getStatus(subject.attendance)}
              </span>

            </div>


            <div className="progress-container">

              <div
                className="progress-bar"
                style={{
                  width: `${subject.attendance}%`,
                  background: getColor(subject.attendance)
                }}
              ></div>

            </div>


            <span className="percentage">
              {subject.attendance}%
            </span>

          </div>

        ))}

      </div>



      {/* SUMMARY */}

      <div className="summary-card">

        <h3>Attendance Summary</h3>

        <p>Total Classes Attended: 276</p>

        <p>Total Classes Conducted: 300</p>

        <p>Minimum Required: 75%</p>

      </div>



      {/* CSS */}

      <style>

        {`

        .attendance-page {

          animation: fadeIn 0.5s ease;

        }


        .overall-card {

          background: linear-gradient(
            135deg,
            #2563eb,
            #06b6d4
          );

          color: white;

          padding: 30px;

          border-radius: 18px;

          margin-bottom: 25px;

          text-align: center;

          box-shadow: 0 15px 40px rgba(37,99,235,0.3);

        }


        .circle-wrapper {

          display: flex;

          justify-content: center;

          margin: 20px 0;

        }


        .circle {

          width: 140px;

          height: 140px;

          border-radius: 50%;

          display: flex;

          align-items: center;

          justify-content: center;

          animation: rotateIn 1s ease;

        }


        .circle-inner {

          width: 110px;

          height: 110px;

          background: white;

          color: #2563eb;

          border-radius: 50%;

          display: flex;

          align-items: center;

          justify-content: center;

          font-size: 24px;

          font-weight: bold;

        }


        .status-text {

          font-weight: 500;

        }


        .card {

          background: white;

          padding: 25px;

          border-radius: 16px;

          margin-bottom: 25px;

          box-shadow: 0 10px 25px rgba(0,0,0,0.05);

        }


        .subject-row {

          display: grid;

          grid-template-columns: 200px 1fr 60px;

          align-items: center;

          gap: 15px;

          padding: 12px 0;

        }


        .subject-info {

          display: flex;

          flex-direction: column;

        }


        .subject-name {

          font-weight: 500;

        }


        .subject-status {

          font-size: 12px;

        }


        .progress-container {

          background: #e5e7eb;

          height: 10px;

          border-radius: 10px;

          overflow: hidden;

        }


        .progress-bar {

          height: 100%;

          border-radius: 10px;

          animation: grow 1s ease;

        }


        .percentage {

          font-weight: 600;

        }


        .summary-card {

          background: white;

          padding: 20px;

          border-radius: 16px;

          box-shadow: 0 10px 25px rgba(0,0,0,0.05);

        }


        @keyframes grow {

          from {
            width: 0;
          }

        }


        @keyframes rotateIn {

          from {
            transform: rotate(-90deg);
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

export default Attendance;