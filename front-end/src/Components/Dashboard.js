import React from 'react'

export const Dashboard = ({ setAuth }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => setAuth(false)}>Logout</button>
    </div>
  )
}
