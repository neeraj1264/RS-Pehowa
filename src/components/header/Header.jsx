import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-dark fixed-top ">
  <div className="container-fluid ">
    <Link to="/" className="navbar-brand text-white ">Radha Swami Ji</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-light"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active text-white" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/Satsang" className="nav-link  text-white" aria-disabled="true">Satsang</Link>
        </li>
        <li className="nav-item">
          <Link to="/shabad" className="nav-link  text-white" aria-disabled="true">Shabad</Link>
        </li>
        <li className="nav-item">
          <Link to="/sakhi" className="nav-link  text-white" aria-disabled="true">Sakhi</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header