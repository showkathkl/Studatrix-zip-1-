import React from "react";

function Fee() {

  const summary = [
    {
      label: "Total Fees",
      value: "₹1,20,000",
      color: "#2563eb"
    },
    {
      label: "Paid",
      value: "₹90,000",
      color: "#22c55e"
    },
    {
      label: "Pending",
      value: "₹30,000",
      color: "#ef4444"
    },
    {
      label: "Next Due",
      value: "15 Mar 2026",
      color: "#f59e0b"
    }
  ];


  const payments = [
    {
      id: "TXN84392",
      date: "12 Feb 2026",
      amount: "₹30,000",
      status: "Paid",
      method: "UPI"
    },
    {
      id: "TXN73291",
      date: "10 Jan 2026",
      amount: "₹30,000",
      status: "Paid",
      method: "Card"
    },
    {
      id: "TXN61822",
      date: "12 Dec 2025",
      amount: "₹30,000",
      status: "Paid",
      method: "Net Banking"
    },
    {
      id: "TXN00000",
      date: "15 Mar 2026",
      amount: "₹30,000",
      status: "Pending",
      method: "-"
    }
  ];


  const upcoming = [
    {
      title: "Semester 2 Fee",
      amount: "₹30,000",
      due: "15 Mar 2026"
    },
    {
      title: "Library Fee",
      amount: "₹2,000",
      due: "01 Apr 2026"
    }
  ];


  return (

    <div className="fee-page">


      {/* HEADER */}

      <div className="page-header glass">

        <div>

          <h1>Fee Management</h1>

          <p>Track payments, pending dues, and transaction history</p>

        </div>

      </div>



      {/* SUMMARY CARDS */}

      <div className="summary-grid">

        {summary.map((item, index) => (

          <div key={index} className="summary-card glass">

            <span className="summary-label">
              {item.label}
            </span>

            <span
              className="summary-value"
              style={{ color: item.color }}
            >
              {item.value}
            </span>

          </div>

        ))}

      </div>



      {/* LOWER GRID */}

      <div className="lower-grid">


        {/* PAYMENT HISTORY */}

        <div className="panel glass">

          <h2>Payment History</h2>

          <table className="table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {payments.map((p, index) => (

                <tr key={index}>

                  <td>{p.id}</td>

                  <td>{p.date}</td>

                  <td>{p.amount}</td>

                  <td>{p.method}</td>

                  <td>

                    <span
                      className={
                        p.status === "Paid"
                          ? "status paid"
                          : "status pending"
                      }
                    >
                      {p.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>



        {/* UPCOMING PAYMENTS */}

        <div className="panel glass">

          <h2>Upcoming Payments</h2>

          {upcoming.map((item, index) => (

            <div key={index} className="upcoming-item">

              <div>

                <strong>{item.title}</strong>

                <div className="due">
                  Due: {item.due}
                </div>

              </div>

              <div className="amount-section">

                <span className="amount">
                  {item.amount}
                </span>

                <button className="pay-btn">
                  Pay Now
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>



      {/* CSS */}

      <style>{`

.fee-page{
animation:fadeIn .5s ease;
}


/* GLASS */

.glass{
background:rgba(255,255,255,.8);
backdrop-filter:blur(10px);
border-radius:18px;
box-shadow:0 10px 30px rgba(0,0,0,.06);
}


/* HEADER */

.page-header{
padding:25px;
margin-bottom:25px;
}

.page-header h1{
font-size:26px;
color:#1e3a8a;
margin-bottom:5px;
}

.page-header p{
color:#64748b;
font-size:14px;
}


/* SUMMARY */

.summary-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:20px;
margin-bottom:25px;
}

.summary-card{
padding:20px;
display:flex;
flex-direction:column;
}

.summary-label{
color:#64748b;
font-size:14px;
}

.summary-value{
font-size:26px;
font-weight:700;
}


/* LOWER GRID */

.lower-grid{
display:grid;
grid-template-columns:2fr 1fr;
gap:20px;
}


/* TABLE */

.table{
width:100%;
border-collapse:collapse;
}

.table th{
text-align:left;
padding:12px;
color:#64748b;
}

.table td{
padding:12px;
border-top:1px solid #e5e7eb;
}


/* STATUS */

.status{
padding:4px 10px;
border-radius:10px;
font-size:12px;
}

.paid{
background:#dcfce7;
color:#22c55e;
}

.pending{
background:#fee2e2;
color:#ef4444;
}


/* UPCOMING */

.upcoming-item{
display:flex;
justify-content:space-between;
align-items:center;
padding:15px 0;
border-bottom:1px solid #e5e7eb;
}

.due{
font-size:12px;
color:#64748b;
}

.amount-section{
display:flex;
align-items:center;
gap:10px;
}

.amount{
font-weight:600;
}

.pay-btn{
padding:8px 14px;
border:none;
border-radius:8px;
background:linear-gradient(135deg,#2563eb,#06b6d4);
color:white;
cursor:pointer;
}


/* ANIMATION */

@keyframes fadeIn{
from{opacity:0;transform:translateY(10px);}
to{opacity:1;transform:translateY(0);}
}

      `}</style>

    </div>

  );

}

export default Fee;