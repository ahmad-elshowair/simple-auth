import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import user from '../Api/user';
import { Link } from 'react-router-dom'


export const Login = ({ setAuth }) => {
  const [loginInputs, setLoginInputs] = React.useState({
    userEmail: '',
    userPassword: ''
  });

  const handleOnChangeLogin = (event) => {
    const { name, value } = event.target;
    setLoginInputs(perv => {
      return {
        ...perv,
        [name]: value
      }
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await user.post("/login", {
        email: loginInputs.userEmail,
        password: loginInputs.userPassword
      });
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      setAuth(true);
    } catch (error) {
      throw new Error(error.message);
    } 
  }
  return (
    <>
      <section className="login-section">
        <article className="container">
          <h1 className='mb-5 text-center'>Login</h1>
          <form action="" onSubmit={handleLogin}>
            <div className="mb-3">
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                className="form-control"
                placeholder='email ...'
                value={loginInputs.userEmail}
                onChange={(event)=> handleOnChangeLogin(event)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="userPassword"
                id="userPassword"
                className="form-control"
                placeholder='password ...'
                value={loginInputs.userPassword}
                onChange={(event)=> handleOnChangeLogin(event)}
              />
            </div>
            <div className="d-flex justify-content-between">
              <button
                className='btn btn-primary'
              >
                Login
              </button>
              <Link to='/register'>Register</Link>
            </div>
          </form>
        </article>
      </section>
    </>
  )
}
