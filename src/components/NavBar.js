import React from 'react'
import {Link} from 'react-router-dom'

export const NavBar = () => {
    return (
        <div>
        <nav className="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow border border-gray">
        
        <div className="container col">
          <button className="navbar-toggler navbar-dark d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav mr-auto navbar navbar-expand  mr-0 px-1">
            <li className="nav-item px-2">
              <Link to='/' className="nav-link d-flex flex-column">
                <span className="fas fa-home fa-2x "></span>
                <span className="d-none d-sm-inline">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link to='/member' className="nav-link d-flex flex-column">
                <span className="fas fa-users fa-2x "></span>
                <span className="d-none d-sm-inline">Members</span>
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link to='/' className="nav-link d-flex flex-column" >
                <span className="fas fa-landmark fa-2x "></span>
                <span className="d-none d-sm-inline">Communities</span>
              </Link>
              </li>
              <li className="nav-item px-2">
                <Link to='/' className="nav-link d-flex flex-column">
                  <span className="fas fa-church fa-2x "></span>
                  <span className="d-none d-sm-inline">Ministries</span>
                </Link>
              </li>
           </ul> 
  
           <ul className="navbar-nav"> 
             <li className="nav-item d-none  d-md-block ">  
            <div className="input-group">
            <input className="form-control form-control-dark w-50 border border-gray" type="text" placeholder="Search" aria-label="Search-big"/>
            <span className="input-group-append"> 
              <button className="btn btn-primary border border-gray" type="button">
                <i className="fas fa-search"></i>
              </button>
            </span> 
          </div>
    </li>
    </ul> 
  
  
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <div className="nav-link d-flex align-items-center" >
              <span className="fas fa-user-circle fa-2x px-2"></span>
              <span className="d-none d-sm-inline">Admin</span>
            </div>
          </li>
        </ul>
  
        <ul className="navbar-nav d-none d-block d-sm-block d-md-none pb-2"> 
          <li className="nav-item ">  
        <div className="input-group form-control-dark">
        <input className="form-control w-75 border border-gray" type="text" placeholder="Search" aria-label="Search-small"/>
        <span className="input-group-append"> 
          <button className="btn btn-primary border border-gray" type="button">
            <i className="fas fa-search"></i>
          </button>
        </span> 
        </div>
          </li>
        </ul>
        
    </div>
      </nav>
        </div>
    )
}
