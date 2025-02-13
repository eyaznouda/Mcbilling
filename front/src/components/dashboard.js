import React from "react";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>MCBILLING</h2>
        <ul>
          <li className="active">Dashboard</li>
          <li>Elements</li>
          <li>Widgets</li>
          <li>Tables</li>
          <li>Charts</li>
          <li>Maps</li>
        </ul>
      </aside>

      <main className="content">
        <header>
          <h1>Default</h1>
          <button className="details-btn">View details</button>
        </header>

        <section className="stats">
          <div className="card black">
            <h3>New Accounts</h3>
            <p className="value">586,356</p>
            <p className="positive">+15.4% increase this month</p>
          </div>
          <div className="card blue">
            <h3>Sales</h3>
            <p className="value">23,274</p>
            <p className="negative">-7.4% same as before</p>
          </div>
          <div className="card purple">
            <h3>Orders</h3>
            <p className="value">345</p>
            <p className="negative">-15.4% less orders</p>
          </div>
        </section>

        <section className="charts">
          <div className="chart">
            <h3>Users & Clicks</h3>
            <p>2,345 users | 3,568 clicks | $9,693 revenue</p>
            <div className="graph-placeholder">📈</div>
          </div>
          <div className="chart">
            <h3>Sales Performance</h3>
            <p className="negative">15.4% new sales today</p>
            <div className="graph-placeholder">📊</div>
          </div>
        </section>

        <section className="employees">
          <h3>Employees Status</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Shanelle Wynn</td>
                <td>PENDING</td>
                <td>
                  <div className="progress">
                    <div className="fill" style={{ width: "55%" }}></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Regan Norris</td>
                <td>FAILED</td>
                <td>
                  <div className="progress">
                    <div className="fill failed" style={{ width: "87%" }}></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}