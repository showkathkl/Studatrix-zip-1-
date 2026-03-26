import React from "react";

function Courses() {

  const courses = [

    {
      name: "Data Structures & Algorithms - I",
      instructor: "Dr. Surya Kiran Chebrolu",
      credits: 4,
      progress: 85,
      status: "Active",
      color: "#2563eb"
    },

    {
      name: "Frontend Development Frameworks and UI Engineering",
      instructor: "Dr. Suneetha Bulla",
      credits: 3,
      progress: 72,
      status: "Active",
      color: "#06b6d4"
    },

    {
      name: "Mathematics for AI",
      instructor: "Prof. Ankita Tiwari",
      credits: 4,
      progress: 90,
      status: "Active",
      color: "#22c55e"
    },

    {
      name: "Digital Design and Computer Architecture",
      instructor: "Prof. Lakshmana Kumar",
      credits: 3,
      progress: 100,
      status: "Completed",
      color: "#8b5cf6"
    },

  ];


  return (

    <div className="courses-page">


      {/* HEADER */}

      <div className="header">

        <h1>My Courses</h1>

        <p>Manage and track your enrolled courses</p>

      </div>



      {/* COURSE GRID */}

      <div className="course-grid">

        {courses.map((course, index) => (

          <div key={index} className="course-card">


            {/* COURSE HEADER */}

            <div className="course-top">

              <h3>{course.name}</h3>

              <span
                className="status"
                style={{
                  background: course.status === "Completed"
                    ? "#22c55e"
                    : "#2563eb"
                }}
              >
                {course.status}
              </span>

            </div>


            {/* INFO */}

            <p className="instructor">
              Instructor: {course.instructor}
            </p>

            <p className="credits">
              Credits: {course.credits}
            </p>


            {/* PROGRESS */}

            <div className="progress-container">

              <div
                className="progress-bar"
                style={{
                  width: `${course.progress}%`,
                  background: course.color
                }}
              ></div>

            </div>

            <span className="progress-text">
              {course.progress}% Complete
            </span>


            {/* BUTTON */}

            <button className="view-button">

              View Course

            </button>


          </div>

        ))}

      </div>



      {/* CSS */}

      <style>

        {`

        .courses-page {

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


        .course-grid {

          display: grid;

          grid-template-columns: repeat(auto-fit,minmax(300px,1fr));

          gap: 20px;

        }


        .course-card {

          background: white;

          padding: 20px;

          border-radius: 16px;

          box-shadow: 0 10px 25px rgba(0,0,0,0.05);

          transition: 0.3s;

        }


        .course-card:hover {

          transform: translateY(-8px);

          box-shadow: 0 20px 40px rgba(0,0,0,0.08);

        }


        .course-top {

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


        .instructor,
        .credits {

          margin-top: 8px;

          color: #64748b;

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


        .view-button {

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


        .view-button:hover {

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

export default Courses;