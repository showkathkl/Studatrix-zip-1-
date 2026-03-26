import React from "react";

function Profile() {

  const teacher = {
    name: "Dr. Surya Kiran",
    subject: "Data Structures and Algorithms",
    employeeId: "TCH-2048",
    department: "Computer Science",
    email: "surya.kiran@studatrix.com",
    phone: "+91 98765 43210",
    experience: "12 Years",
    qualification: "Ph.D. Computer Science",
    status: "Active"
  };

  const stats = [
    { label: "Students", value: "120" },
    { label: "Classes", value: "5" },
    { label: "Reports Pending", value: "8" },
    { label: "Attendance Avg", value: "93%" }
  ];

  const activities = [
    "Uploaded assignment for DSA",
    "Updated student attendance",
    "Reviewed student reports",
    "Conducted live lecture",
    "Published course material"
  ];

  return (

    <div className="profile-page">


      {/* HERO */}

      <div className="profile-hero glass">

        <div className="avatar-ring">
          <div className="avatar">
            SK
          </div>
        </div>

        <div className="hero-info">

          <h1>{teacher.name}</h1>

          <p className="hero-sub">
            {teacher.subject}
          </p>

          <div className="hero-meta">

            <span className="badge id">
              ID: {teacher.employeeId}
            </span>

            <span className="badge status">
              ● {teacher.status}
            </span>

          </div>

        </div>

        <button className="edit-btn">
          Edit Profile
        </button>

      </div>



      {/* STATS */}

      <div className="stats-grid">

        {stats.map((stat, index) => (

          <div key={index} className="stat-card glass">

            <span className="stat-label">
              {stat.label}
            </span>

            <span className="stat-value">
              {stat.value}
            </span>

          </div>

        ))}

      </div>



      {/* INFO GRID */}

      <div className="info-grid">


        {/* PROFESSIONAL */}

        <div className="info-card glass">

          <h2>Professional Information</h2>

          <div className="info-row">
            <span>Subject</span>
            <span>{teacher.subject}</span>
          </div>

          <div className="info-row">
            <span>Department</span>
            <span>{teacher.department}</span>
          </div>

          <div className="info-row">
            <span>Experience</span>
            <span>{teacher.experience}</span>
          </div>

          <div className="info-row">
            <span>Qualification</span>
            <span>{teacher.qualification}</span>
          </div>

        </div>



        {/* CONTACT */}

        <div className="info-card glass">

          <h2>Contact Information</h2>

          <div className="info-row">
            <span>Email</span>
            <span>{teacher.email}</span>
          </div>

          <div className="info-row">
            <span>Phone</span>
            <span>{teacher.phone}</span>
          </div>

          <div className="info-row">
            <span>Status</span>
            <span className="active">
              Active
            </span>
          </div>

        </div>



      </div>



      {/* ACTIVITY */}

      <div className="panel glass">

        <h2>Recent Activity</h2>

        {activities.map((activity, index) => (

          <div key={index} className="activity-item">

            <span className="dot"></span>

            {activity}

          </div>

        ))}

      </div>



      {/* QUICK ACTIONS */}

      <div className="panel glass">

        <h2>Quick Actions</h2>

        <div className="actions">

          <button className="action-btn">
            Manage Classes
          </button>

          <button className="action-btn">
            View Students
          </button>

          <button className="action-btn">
            Upload Materials
          </button>

          <button className="action-btn">
            Generate Reports
          </button>

        </div>

      </div>



      {/* CSS */}

      <style>{`

.profile-page{
animation:fadeIn .5s ease;
}


.glass{
background:rgba(255,255,255,.75);
backdrop-filter:blur(12px);
border-radius:18px;
box-shadow:0 10px 30px rgba(0,0,0,.08);
}


/* HERO */

.profile-hero{
display:flex;
align-items:center;
gap:25px;
padding:30px;
margin-bottom:25px;
position:relative;
}

.avatar-ring{
padding:3px;
border-radius:50%;
background:linear-gradient(135deg,#2563eb,#06b6d4,#2563eb);
animation:rotate 6s linear infinite;
}

.avatar{
width:90px;
height:90px;
background:white;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-size:28px;
font-weight:bold;
color:#2563eb;
}

.hero-sub{
color:#64748b;
}

.hero-meta{
display:flex;
gap:10px;
margin-top:5px;
}

.badge{
padding:4px 10px;
border-radius:10px;
font-size:12px;
}

.id{
background:#e0ecff;
color:#2563eb;
}

.status{
background:#dcfce7;
color:#22c55e;
}

.edit-btn{
position:absolute;
right:25px;
top:25px;
background:linear-gradient(135deg,#2563eb,#06b6d4);
border:none;
color:white;
padding:10px 18px;
border-radius:10px;
cursor:pointer;
}


/* STATS */

.stats-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:15px;
margin-bottom:25px;
}

.stat-card{
padding:18px;
text-align:center;
}

.stat-label{
color:#64748b;
}

.stat-value{
font-size:22px;
font-weight:bold;
color:#2563eb;
}


/* INFO */

.info-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
gap:20px;
margin-bottom:25px;
}

.info-card{
padding:25px;
}

.info-row{
display:flex;
justify-content:space-between;
padding:10px 0;
border-bottom:1px solid #e5e7eb;
}

.active{
color:#22c55e;
font-weight:600;
}


/* PANEL */

.panel{
padding:25px;
margin-bottom:25px;
}

.activity-item{
padding:8px 0;
}

.dot{
width:8px;
height:8px;
background:#2563eb;
border-radius:50%;
display:inline-block;
margin-right:8px;
}


/* ACTIONS */

.actions{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:15px;
}

.action-btn{
padding:12px;
border-radius:10px;
border:none;
background:linear-gradient(135deg,#2563eb,#06b6d4);
color:white;
cursor:pointer;
}


/* ANIMATIONS */

@keyframes fadeIn{
from{opacity:0;transform:translateY(10px);}
to{opacity:1;transform:translateY(0);}
}

@keyframes rotate{
from{transform:rotate(0deg);}
to{transform:rotate(360deg);}
}

      `}</style>


    </div>

  );

}

export default Profile;