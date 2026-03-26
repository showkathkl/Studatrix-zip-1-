import React from "react";

function AcademicRecords() {

  const semesters = [
    { sem: "Semester 1", gpa: 9.76 },
    { sem: "Semester 2", gpa: 8.45 },
    { sem: "Semester 3", gpa: 8.62 },
    { sem: "Semester 4", gpa: 8.74 },
  ];

  const subjects = [
    { name: "Data Structures", marks: 91 },
    { name: "Operating Systems", marks: 84 },
    { name: "Database Systems", marks: 91 },
    { name: "Computer Networks", marks: 79 },
    { name: "Software Engineering", marks: 86 },
  ];

  const cgpa = 9.76;

  return (

    <div className="records-page">


      {/* HEADER */}

      <div className="cgpa-card">

        <h2>Current CGPA</h2>

        <div className="cgpa-number">
          {cgpa}
        </div>

        <p>Excellent Academic Standing</p>

      </div>



      {/* SEMESTER GRID */}

      <div className="semester-grid">

        {semesters.map((s, index) => (

          <div key={index} className="semester-card">

            <h3>{s.sem}</h3>

            <div className="semester-gpa">
              {s.gpa}
            </div>

          </div>

        ))}

      </div>



      {/* SUBJECT TABLE */}

      <div className="card">

        <h2>Subject Performance</h2>

        {subjects.map((sub, index) => (

          <div key={index} className="subject-row">

            <span>{sub.name}</span>

            <div className="progress-container">

              <div
                className="progress-bar"
                style={{ width: `${sub.marks}%` }}
              ></div>

            </div>

            <span className="marks">
              {sub.marks}%
            </span>

          </div>

        ))}

      </div>



      {/* SUMMARY */}

      <div className="summary-card">

        <h3>Academic Summary</h3>

        <p>Total Credits Earned: 96</p>

        <p>Academic Standing: Excellent</p>

        <p>Last Semester GPA: 8.74</p>

      </div>



      {/* CSS */}

      <style>

        {`

        .records-page {

          animation: fadeIn 0.5s ease;

        }


        .cgpa-card {

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


        .cgpa-number {

          font-size: 48px;

          font-weight: bold;

          margin: 10px 0;

        }


        .semester-grid {

          display: grid;

          grid-template-columns: repeat(auto-fit,minmax(200px,1fr));

          gap: 20px;

          margin-bottom: 25px;

        }


        .semester-card {

          background: white;

          padding: 20px;

          border-radius: 14px;

          text-align: center;

          box-shadow: 0 10px 25px rgba(0,0,0,0.05);

          transition: 0.3s;

        }


        .semester-card:hover {

          transform: translateY(-5px);

          box-shadow: 0 20px 40px rgba(0,0,0,0.08);

        }


        .semester-gpa {

          font-size: 28px;

          font-weight: bold;

          color: #2563eb;

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

          padding: 10px 0;

        }


        .progress-container {

          background: #e5e7eb;

          height: 10px;

          border-radius: 10px;

          overflow: hidden;

        }


        .progress-bar {

          height: 100%;

          background: linear-gradient(
            90deg,
            #2563eb,
            #06b6d4
          );

          border-radius: 10px;

          animation: grow 1s ease;

        }


        .marks {

          font-weight: 600;

          color: #2563eb;

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

export default AcademicRecords;