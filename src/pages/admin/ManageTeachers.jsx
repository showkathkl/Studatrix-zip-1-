import React, { useState } from "react";

function ManageTeachers() {

  const [teachers, setTeachers] = useState([
    { id: 3, name: "Dr. Surya Kiran", email: "surya@studatrix.com", subject: "Data Structures" },
    { id: 2, name: "Prof. Ankita Tiwari", email: "ankita@studatrix.com", subject: "Mathematics for AI" },
    {id: 1, name: "Dr. Suneetha Bulla", email: "suneetha@studatrix.com", subject: "Frontend Frameworks"}
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: ""
  });


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleAddOrUpdate = () => {

    if (editingId) {

      setTeachers(
        teachers.map((t) =>
          t.id === editingId ? { ...t, ...formData } : t
        )
      );

    } else {

      const newTeacher = {
        id: Date.now(),
        ...formData
      };

      setTeachers([...teachers, newTeacher]);

    }

    setShowForm(false);
    setEditingId(null);

    setFormData({
      name: "",
      email: "",
      subject: ""
    });

  };


  const handleEdit = (teacher) => {

    setEditingId(teacher.id);
    setFormData(teacher);
    setShowForm(true);

  };


  const handleDelete = (id) => {

    setTeachers(
      teachers.filter((t) => t.id !== id)
    );

  };


  const filteredTeachers = teachers.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.subject.toLowerCase().includes(search.toLowerCase())
  );


  const subjectCount = {};

  teachers.forEach((t) => {
    subjectCount[t.subject] = (subjectCount[t.subject] || 0) + 1;
  });



  return (
    <div className="manage-page">

      {/* HEADER */}
      <div className="page-header">

        <h1>Manage Teachers</h1>

        <button
          className="primary-btn"
          onClick={() => setShowForm(true)}
        >
          + Add Teacher
        </button>

      </div>



      {/* STATS */}
      <div className="stats-grid">

        <div className="stat-card glass">
          <span>Total Teachers</span>
          <strong>632</strong>
        </div>

        <div className="stat-card glass">
          <span>Total Subjects</span>
          <strong>32</strong>
        </div>

        <div className="stat-card glass">
          <span>Most Popular Subject</span>
          <strong>
            Frontend Frameworks
          </strong>
        </div>

        <div className="stat-card glass">
          <span>Active Faculty</span>
          <strong>429</strong>
        </div>

      </div>



      {/* SEARCH */}
      <div className="glass search-card">

        <input
          placeholder="Search teachers..."
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
              <th>Subject</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredTeachers.map((teacher) => (

              <tr key={teacher.id}>

                <td>{teacher.name}</td>

                <td>{teacher.email}</td>

                <td>{teacher.subject}</td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(teacher)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(teacher.id)}
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
            Teacher assigned to Data Structures
          </div>

          <div className="activity-item">
            Faculty profile updated
          </div>

          <div className="activity-item">
            New faculty added to Mathematics
          </div>

        </div>



        <div className="panel glass">

          <h3>Subject Distribution</h3>

          {Object.entries(subjectCount).map(([subject, count]) => (

            <div key={subject} className="activity-item">

              {subject} — <strong>{count}</strong>

            </div>

          ))}

        </div>


      </div>



      {/* MODAL */}
      {showForm && (

        <div className="modal">

          <div className="modal-content glass">

            <h2>
              {editingId ? "Edit Teacher" : "Add Teacher"}
            </h2>

            <input
              name="name"
              placeholder="Teacher Name"
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
              name="subject"
              placeholder="Subject"
              value={formData.subject}
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

export default ManageTeachers;