import React from "react";

function Schedule() {

  const schedule = [

    {
      day: "Monday",
      classes: [
        { subject: "Data Structures & Algorithms - I", time: "7:00 AM - 8:50 AM", room: "Room C301" },
        { subject: "Frontend Development Frameworks and UI Engineering", time: "9:20 AM - 11:00 AM", room: "Room C301" }
      ]
    },

    {
      day: "Tuesday",
      classes: [
        { subject: "Database Systems", time: "10:00 AM - 11:30 AM", room: "Room C301" },
        { subject: "Computer Networks", time: "2:00 PM - 3:30 PM", room: "Room C301" }
      ]
    },

    {
      day: "Wednesday",
      classes: [
        { subject: "Software Engineering", time: "9:00 AM - 10:30 AM", room: "Room C301" }
      ]
    },

    {
      day: "Thursday",
      classes: [
        { subject: "Operating Systems Lab", time: "1:00 PM - 3:00 PM", room: "Lab 3" }
      ]
    },

    {
      day: "Friday",
      classes: [
        { subject: "Database Lab", time: "10:00 AM - 12:00 PM", room: "Lab 1" }
      ]
    }

  ];


  return (

    <div className="schedule-page">


      {/* HEADER */}

      <div className="header">

        <h1>Weekly Schedule</h1>

        <p>Manage and view your academic timetable</p>

      </div>



      {/* TODAY HIGHLIGHT */}

      <div className="today-card">

        <h3>Next Class</h3>

        <div className="today-info">

          <span className="subject">
            Data Structures
          </span>

          <span className="time">
            Today — 9:00 AM
          </span>

        </div>

      </div>



      {/* WEEK GRID */}

      <div className="week-grid">

        {schedule.map((day, index) => (

          <div key={index} className="day-card">

            <h3 className="day-title">
              {day.day}
            </h3>


            {day.classes.map((cls, i) => (

              <div key={i} className="class-card">

                <span className="class-subject">
                  {cls.subject}
                </span>

                <span className="class-time">
                  {cls.time}
                </span>

                <span className="class-room">
                  {cls.room}
                </span>

              </div>

            ))}

          </div>

        ))}

      </div>



      {/* CSS */}

      <style>

        {`

        .schedule-page {

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


        .today-card {

          background: linear-gradient(
            135deg,
            #2563eb,
            #06b6d4
          );

          color: white;

          padding: 20px;

          border-radius: 16px;

          margin-bottom: 25px;

          box-shadow: 0 10px 30px rgba(37,99,235,0.3);

          animation: glow 2s infinite alternate;

        }


        .today-info {

          display: flex;

          justify-content: space-between;

          margin-top: 10px;

        }


        .subject {

          font-weight: 600;

          font-size: 18px;

        }


        .time {

          opacity: 0.9;

        }


        .week-grid {

          display: grid;

          grid-template-columns: repeat(auto-fit,minmax(250px,1fr));

          gap: 20px;

        }


        .day-card {

          background: white;

          padding: 20px;

          border-radius: 16px;

          box-shadow: 0 10px 25px rgba(0,0,0,0.05);

          transition: 0.3s;

        }


        .day-card:hover {

          transform: translateY(-6px);

          box-shadow: 0 20px 40px rgba(0,0,0,0.08);

        }


        .day-title {

          margin-bottom: 15px;

          color: #2563eb;

        }


        .class-card {

          background: #f1f5f9;

          padding: 12px;

          border-radius: 10px;

          margin-bottom: 10px;

          display: flex;

          flex-direction: column;

          transition: 0.3s;

        }


        .class-card:hover {

          background: #e0ecff;

          transform: scale(1.02);

        }


        .class-subject {

          font-weight: 600;

        }


        .class-time {

          font-size: 14px;

          color: #64748b;

        }


        .class-room {

          font-size: 13px;

          color: #94a3b8;

        }


        @keyframes glow {

          from {

            box-shadow: 0 10px 30px rgba(37,99,235,0.3);

          }

          to {

            box-shadow: 0 15px 40px rgba(6,182,212,0.5);

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

export default Schedule;