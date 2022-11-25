import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import userApi from '../Api/user';


export const Register = ({setAuth}) => {
  const [userInputs, setUserInputs] = React.useState({
    userName: '',
    userEmail: '',
    userPassword: ''
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUserInputs((prev) => {
      return {
        ...prev,
        [name]: value
      }
    });
  };
  const submitUser = async (event) => {
    event.preventDefault();
    try {
      const response = await userApi.post('register', {
        name: userInputs.userName,
        email: userInputs.userEmail,
        password: userInputs.userPassword
      });

      localStorage.setItem('token', response.data.token);
      setAuth(true);
      // empty the user inputs
      setUserInputs({
        userName: '',
        userEmail: '',
        userPassword: ''
      });

    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <>
      <section className=''>
        <div className="container">
          <h1 className='mb-3 text-center'>Register</h1>
          <form onSubmit={submitUser}>
            <div className="mb-3">
              <input
                type="text"
                name="userName"
                id="userName"
                className="form-control"
                placeholder='user name ...'
                value={userInputs.userName}
                onChange={(e)=>(handleOnChange(e))}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                className="form-control"
                placeholder='user email ...'
                value={userInputs.userEmail}
                onChange={(e)=>(handleOnChange(e))}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="userPassword"
                id="userPassword"
                className="form-control"
                placeholder='user password ...'
                value={userInputs.userPassword}
                onChange={(e)=>(handleOnChange(e))}
              />
            </div>
            <div className="d-grid gap-2">
              <button className='btn btn-primary' type="submit">Register</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}