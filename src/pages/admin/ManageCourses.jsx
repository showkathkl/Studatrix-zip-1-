import React, { useState } from "react";

function ManageCourses() {

  const [courses, setCourses] = useState([
    { id: 1, name: "Data Structures", code: "CS201", credits: 4 },
    { id: 2, name: "Operating Systems", code: "CS301", credits: 3 }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    code: "",
    credits: ""
  });


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleAddOrUpdate = () => {

    if (editingId) {

      setCourses(
        courses.map((c) =>
          c.id === editingId ? { ...c, ...formData } : c
        )
      );

    } else {

      const newCourse = {
        id: Date.now(),
        ...formData
      };

      setCourses([...courses, newCourse]);

    }

    setShowForm(false);
    setEditingId(null);

    setFormData({
      name: "",
      code: "",
      credits: ""
    });

  };


  const handleEdit = (course) => {

    setEditingId(course.id);
    setFormData(course);
    setShowForm(true);

  };


  const handleDelete = (id) => {

    setCourses(
      courses.filter((c) => c.id !== id)
    );

  };


  const filteredCourses = courses.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase())
  );


  const totalCredits = courses.reduce(
    (sum, c) => sum + Number(c.credits),
    0
  );


  const avgCredits =
    courses.length > 0
      ? (totalCredits / courses.length).toFixed(1)
      : 0;



  return (
    <div className="manage-page">


      {/* HEADER */}
      <div className="page-header">

        <h1>Manage Courses</h1>

        <button
          className="primary-btn"
          onClick={() => setShowForm(true)}
        >
          + Add Course
        </button>

      </div>



      {/* STATS */}
      <div className="stats-grid">

        <div className="stat-card glass">
          <span>Total Courses</span>
          <strong>32</strong>
        </div>

        <div className="stat-card glass">
          <span>Total Credits</span>
          <strong>537</strong>
        </div>

        <div className="stat-card glass">
          <span>Average Credits</span>
          <strong>334</strong>
        </div>

        <div className="stat-card glass">
          <span>Latest Course</span>
          <strong>
            {courses[courses.length - 1]?.code || "None"}
          </strong>
        </div>

      </div>



      {/* SEARCH */}
      <div className="glass search-card">

        <input
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>



      {/* TABLE */}
      <div className="table-card glass">

        <table>

          <thead>

            <tr>
              <th>Course Name</th>
              <th>Code</th>
              <th>Credits</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {filteredCourses.map((course) => (

              <tr key={course.id}>

                <td>{course.name}</td>

                <td>{course.code}</td>

                <td>{course.credits}</td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(course)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(course.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>



      {/* LOWER PANELS */}
      <div className="lower-grid">


        <div className="panel glass">

          <h3>Recent Activity</h3>

          <div className="activity-item">
            Course added to system
          </div>

          <div className="activity-item">
            Course credits updated
          </div>

          <div className="activity-item">
            Course removed from catalog
          </div>

        </div>



        <div className="panel glass">

          <h3>Course Insights</h3>

          <div className="activity-item">
            Highest Credits:
            <strong>
              {" "}
              {Math.max(...courses.map(c => c.credits), 0)}
            </strong>
          </div>

          <div className="activity-item">
            Lowest Credits:
            <strong>
              {" "}
              {Math.min(...courses.map(c => c.credits), 0)}
            </strong>
          </div>

          <div className="activity-item">
            Total Catalog Size:
            <strong> {courses.length}</strong>
          </div>

        </div>


      </div>



      {/* MODAL */}
      {showForm && (

        <div className="modal">

          <div className="modal-content glass">

            <h2>
              {editingId ? "Edit Course" : "Add Course"}
            </h2>

            <input
              name="name"
              placeholder="Course Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              name="code"
              placeholder="Course Code"
              value={formData.code}
              onChange={handleChange}
            />

            <input
              name="credits"
              placeholder="Credits"
              value={formData.credits}
              onChange={handleChange}
            />

            <div className="modal-buttons">

              <button
                className="primary-btn"
                onClick={handleAddOrUpdate}
              >
                Save
              </button>

              <button
                className="cancel-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      )}



      {/* CSS */}
      <style>{`

.manage-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.glass {
  backdrop-filter: blur(10px);
  background: rgba(255,255,255,0.75);
  border-radius: 18px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}


/* HEADER */

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  font-size: 24px;
  color: #1e3a8a;
}


/* SEARCH */

.search-card {
  padding: 15px;
}

.search-card input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}


/* TABLE */

.table-card {
  padding: 20px;
}

table {
  width: 100%;
}

th, td {
  padding: 12px;
}


/* LOWER GRID */

.lower-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.panel {
  padding: 20px;
}

.activity-item {
  padding: 8px 0;
}


/* BUTTONS */

.primary-btn {
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg,#2563eb,#06b6d4);
  color: white;
  cursor: pointer;
}

.edit-btn {
  background: #06b6d4;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
}

.delete-btn {
  background: #ef4444;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  padding: 30px;
  width: 350px;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
}

.cancel-btn {
  padding: 10px 18px;
}

      `}</style>

    </div>
  );
}

export default ManageCourses;