import { useState } from 'react';

export default function Login() {
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("your email is"+email +" and password is"+password)
    
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log("email= "+email)  
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    console.log("pass= "+password)  
  }


  return (
      <form
      onSubmit={handleSubmit}
      >
        <h3>Sign In</h3>
        <div className="mb-3">
          <label name="email">Email</label>
          <input
            value={email}
            type="email"
            className="form-control"
            placeholder="Enter username"
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-3">
          <label name="password">Password</label>
          <input 
            value={password}
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={handlePasswordChange}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        {/* <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p> */}
      </form>
    )
}