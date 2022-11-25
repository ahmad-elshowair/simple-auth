import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Dashboard = ({ setAuth }) => {
  return (
    <>
      <section className='dashboard-section'>
        <div className="container">
          <h1>Dashboard</h1>
          <button className='btn btn-danger' onClick={() => setAuth(false)}>Logout</button>
        </div>
      </section>
    </>
  )
}
