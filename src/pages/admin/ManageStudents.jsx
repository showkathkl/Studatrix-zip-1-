import React, { useState } from "react";

function ManageStudents() {

  const [students, setStudents] = useState([
    { id: 1, name: "Rahul Kumar", email: "rahul@gmail.com", course: "CSE" },
    { id: 2, name: "Ananya Reddy", email: "ananya@gmail.com", course: "ECE" }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddOrUpdate = () => {

    if (editingId) {

      setStudents(
        students.map((s) =>
          s.id === editingId ? { ...s, ...formData } : s
        )
      );

    } else {

      const newStudent = {
        id: Date.now(),
        ...formData
      };

      setStudents([...students, newStudent]);

    }

    setShowForm(false);
    setEditingId(null);

    setFormData({
      name: "",
      email: "",
      course: ""
    });

  };

  const handleEdit = (student) => {
    setEditingId(student.id);
    setFormData(student);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };


  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.course.toLowerCase().includes(search.toLowerCase())
  );


  const courseCount = {};

  students.forEach((s) => {
    courseCount[s.course] = (courseCount[s.course] || 0) + 1;
  });


  return (
    <div className="manage-page">

      {/* HEADER */}
      <div className="page-header">

        <h1>Manage Students</h1>

        <button
          className="primary-btn"
          onClick={() => setShowForm(true)}
        >
          + Add Student
        </button>

      </div>


      {/* STATS */}
      <div className="stats-grid">

        <div className="stat-card glass">
          <span>Total Students</span>
          <strong>1,242</strong>
        </div>

        <div className="stat-card glass">
          <span>CSE Students</span>
          <strong>789</strong>
        </div>

        <div className="stat-card glass">
          <span>ECE Students</span>
          <strong>453</strong>
        </div>

        <div className="stat-card glass">
          <span>Courses</span>
          <strong>{Object.keys(courseCount).length}</strong>
        </div>

      </div>


      {/* SEARCH */}
      <div className="glass search-card">

        <input
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>


      {/* TABLE */}
      <div className="table-card glass">

        <table>

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredStudents.map((student) => (

              <tr key={student.id}>

                <td>{student.name}</td>

                <td>{student.email}</td>

                <td>{student.course}</td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(student)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(student.id)}
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

        <div className="glass panel">

          <h3>Recent Activity</h3>

          <div className="activity-item">
            Student added to CSE
          </div>

          <div className="activity-item">
            Student profile updated
          </div>

          <div className="activity-item">
            Student removed from system
          </div>

        </div>


        <div className="glass panel">

          <h3>Course Distribution</h3>

          {Object.entries(courseCount).map(([course, count]) => (

            <div key={course} className="activity-item">

              {course}: <strong>{count}</strong>

            </div>

          ))}

        </div>

      </div>


      {/* MODAL */}
      {showForm && (

        <div className="modal">

          <div className="modal-content glass">

            <h2>
              {editingId ? "Edit Student" : "Add Student"}
            </h2>

            <input
              name="name"
              placeholder="Student Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              name="course"
              placeholder="Course"
              value={formData.course}
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

export default ManageStudents;