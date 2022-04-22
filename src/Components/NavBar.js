import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function NavBar(props) {
  console.log(props.modeBtnTxt)
  return (
    <>
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">{props.home}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.other}</Link>
            </li>
            
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a> 
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a> </li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/">Something else here</a> </li>
              </ul>
            </li> */}
            
          </ul>
          <div className="d-flex">
              <div className="bg-primary rounded mx-2" onClick={()=>{props.changeMode('primary')}} style={{height: '20px', width:'20px', cursor:'pointer'}}></div>
              <div className="bg-success rounded mx-2" onClick={()=>{props.changeMode('success')}} style={{height: '20px', width:'20px', cursor:'pointer'}}></div>
              <div className="bg-danger rounded mx-2" onClick={()=>{props.changeMode('danger')}} style={{height: '20px', width:'20px', cursor:'pointer'}}></div>
              <div className="bg-warning rounded mx-2" onClick={()=>{props.changeMode('warning')}} style={{height: '20px', width:'20px', cursor:'pointer'}}></div>
              <div className="bg-info rounded mx-2" onClick={()=>{props.changeMode('info')}} style={{height: '20px', width:'20px', cursor:'pointer'}}></div>
          </div>
          <form className="d-flex mx-4">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeBtnTxt}</label>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

NavBar.prototype = {title: PropTypes.string.isRequired,
                    home: PropTypes.string.isRequired,
                    other: PropTypes.string.isRequired
                    }

