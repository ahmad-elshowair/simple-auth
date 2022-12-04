import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export const Dashboard = ({ setAuth }) => {

  const [userName, setUserName] = React.useState("")
  const getUserName = async () => {
    try {
      const response = await axios.get('http://localhost:5000/dashboard',
        {
          headers: { token: localStorage.token }
        }
      );
      setUserName(perv=> perv = response.data);
      console.log(response.data);
    } catch (error) {
      throw new Error(error.message)
    }
  };

  React.useEffect(() => {
    getUserName()
  });
  
  return (
    <>
      <section className='dashboard-section'>
        <div className="container">
          <h1>Dashboard</h1>
          <h3>
            {
              userName ? `Hi ${userName}`: "loading..."
            }
          </h3>
          <button className='btn btn-danger ' onClick={() => setAuth(false)}>Logout</button>
        </div>
      </section>
    </>
  )
}
