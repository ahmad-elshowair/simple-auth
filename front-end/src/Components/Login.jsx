import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


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
  return (
    <>
      <section className="login-section">
        <article className="container">
          <h1 className='mb-5 text-center'>Login</h1>
          <form action="">
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
            <div className="d-grid gap-2">
              <button
                className='btn btn-primary'
              >
                Login
              </button>
            </div>
          </form>
        </article>
      </section>
    </>
  )
}
