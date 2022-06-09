import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login/Login'
import SignUp from './components/signup/Signup';
import Flights from './components/flights/Flights';
import Trip from './components/trip/Trips'
import { useAuth } from "./context/auth-context";


export function AuthenticatedRoutes() {
  const { logout } = useAuth();
     return (
        <Router>
            <div className="app">
              <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <div className="container">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <Link className="nav-link" to={'/Flights'}>
                         Flight
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={'/trip'}>
                         My trips
                    </Link>
                    </li>
                    <li><button onClick={logout}>log out</button></li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <Routes>
                        <Route path="/flights" element={<Flights />} />
                        <Route path="/trip" element={<Trip />} />
                    </Routes> 
                </div>
            </div>
            </div>
        </Router>
    );
}

export function UnauthenticatedRoutes() {
    return (
        <Router>
          <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <div className="container">
                <Link className="navbar-brand" to={'/sign-in'}>
                  Flight app
                </Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to={'/sign-in'}>
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/sign-up'}>
                        Sign up
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="auth-wrapper">
              <div className="auth-inner">
                <Routes>
                  <Route exact path="/" element={<Login />} />
                  <Route path="/sign-in" element={<Login />} />
                  <Route path="/sign-up" element={<SignUp />} />
                  <Route path="/trip" element={<Trip />} />
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      );
}