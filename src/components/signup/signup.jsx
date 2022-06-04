import React, { useState } from 'react'
export default function SignUp() {
  const[firstName, setFirstname] = useState("")
  const[lastName, setlastname] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")

  function handlefirstNameChange(e) {
    setFirstname(e.target.value)
  }

  function handleLastNameChange(e) {
    setlastname(e.target.value)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleSubmit() {

  }
  console.log(`fname ${firstName} lname ${lastName} email: ${email} password ${password}`)

    return (
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input type="text" className="form-control" placeholder="First name" value={firstName} 
           onChange={handlefirstNameChange}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" value={lastName} onChange={handleLastNameChange} />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="text" className="form-control" placeholder="Enter Email" value={email} onChange={handleEmailChange}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" value={password}
          onChange={handlePasswordChange}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
}   