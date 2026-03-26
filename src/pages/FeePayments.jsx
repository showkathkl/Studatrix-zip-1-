import React from "react";

function FeePayments() {

  const totalFee = 60000;
  const paid = 47500;
  const due = totalFee - paid;
  const percentPaid = Math.floor((paid / totalFee) * 100);

  const payments = [
    { date: "12 Jan 2026", amount: 20000, method: "UPI", status: "Successful" },
    { date: "10 Oct 2025", amount: 15000, method: "Card", status: "Successful" },
    { date: "15 Jul 2025", amount: 12500, method: "Net Banking", status: "Successful" },
  ];


  return (

    <div className="fee-page">


      {/* HERO CARD */}

      <div className="fee-hero">

        <h2>Fee Status</h2>

        <div className="fee-amount">

          ₹{due.toLocaleString()}

        </div>

        <p>Outstanding Balance</p>


        {/* PROGRESS */}

        <div className="progress-container">

          <div
            className="progress-bar"
            style={{ width: `${percentPaid}%` }}
          ></div>

        </div>

        <span className="progress-text">
          {percentPaid}% Paid
        </span>


        {/* BUTTON */}

        <button className="pay-button">

          Pay Now

        </button>

      </div>



      {/* SUMMARY CARDS */}

      <div className="summary-grid">


        <div className="summary-card">

          <h3>Total Fee</h3>
          <span>₹{totalFee.toLocaleString()}</span>

        </div>


        <div className="summary-card">

          <h3>Amount Paid</h3>
          <span className="paid">
            ₹{paid.toLocaleString()}
          </span>

        </div>


        <div className="summary-card">

          <h3>Remaining Due</h3>
          <span className="due">
            ₹{due.toLocaleString()}
          </span>

        </div>


      </div>



      {/* PAYMENT HISTORY */}

      <div className="history-card">

        <h2>Payment History</h2>

        <table>

          <thead>

            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            {payments.map((payment, index) => (

              <tr key={index}>

                <td>{payment.date}</td>

                <td>₹{payment.amount.toLocaleString()}</td>

                <td>{payment.method}</td>

                <td className="success">
                  {payment.status}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>



      {/* CSS */}

      <style>

        {`

        .fee-page {

          animation: fadeIn 0.5s ease;

        }


        .fee-hero {

          background: linear-gradient(
            135deg,
            #2563eb,
            #06b6d4
          );

          color: white;

          padding: 30px;

          border-radius: 18px;

          margin-bottom: 25px;

          box-shadow: 0 15px 40px rgba(37,99,235,0.3);

        }


        .fee-amount {

          font-size: 42px;

          font-weight: bold;

          margin: 10px 0;

        }


        .progress-container {

          background: rgba(255,255,255,0.3);

          height: 12px;

          border-radius: 10px;

          margin: 15px 0;

          overflow: hidden;

        }


        .progress-bar {

          height: 100%;

          background: white;

          border-radius: 10px;

          animation: grow 1s ease;

        }


        .progress-text {

          font-size: 14px;

        }


        .pay-button {

          margin-top: 15px;

          background: white;

          color: #2563eb;

          border: none;

          padding: 12px 24px;

          border-radius: 12px;

          cursor: pointer;

          font-weight: 600;

          transition: 0.3s;

        }


        .pay-button:hover {

          transform: scale(1.05);

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

          border-radius: 16px;

          box-shadow: 0 10px 25px rgba(0,0,0,0.05);

          transition: 0.3s;

        }


        .summary-card:hover {

          transform: translateY(-5px);

        }


        .paid {

          color: #22c55e;

          font-weight: bold;

        }


        .due {

          color: #ef4444;

          font-weight: bold;

        }


        .history-card {

          background: white;

          padding: 25px;

          border-radius: 16px;

          box-shadow: 0 10px 25px rgba(0,0,0,0.05);

        }


        table {

          width: 100%;

          border-collapse: collapse;

          margin-top: 15px;

        }


        th, td {

          padding: 12px;

          text-align: left;

          border-bottom: 1px solid #e5e7eb;

        }


        .success {

          color: #22c55e;

          font-weight: 500;

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

export default FeePayments;