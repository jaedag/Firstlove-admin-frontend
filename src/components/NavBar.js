import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { memberContext } from "../context/MemberContext";

export const NavBar = () => {
  // const searchData = useContext(memberContext)

  // const handleInput = (e) => {
  // 	searchData.setMemberData({
  // 		...searchData.memberData,
  // 		searchKey: e.target.value
  // 	})
  // 	// console.log(searchData.memberData.searchKey)
  // }

  return (
    <nav className="navbar navbar-dark navbar-expand fixed-top">
      <a className="btn nav-button btn-outline-light">
        <i className="fas fa-bars fa-2x icon-color" />
      </a>

      <div className="navbar-nav">
        <Link
          className="nav-item nav-link d-flex align-items-center flex-column active"
          to="/"
        >
          <span className="fas fa-home fa-2x  px-1" />
          <span className="d-none d-md-inline">Dashboard</span>
        </Link>
        <Link
          className="nav-item nav-link d-flex align-items-center flex-column"
          to="/members"
        >
          <span className="fas fa-users fa-2x px-1" />
          <span className="d-none d-md-inline">Members</span>
        </Link>
        <Link
          className="nav-item nav-link d-flex align-items-center flex-column"
          to="/centre/addcentre"
        >
          <span className="fas fa-landmark fa-2x px-1" />
          <span className="d-none d-md-inline">Communities</span>
        </Link>
        <Link
          className="nav-item nav-link d-flex align-items-center flex-column"
          to="#"
        >
          <span className="fas fa-church fa-2x px-1" />
          <span className="d-none d-md-inline">Ministries</span>
        </Link>
        <Link
          className="nav-item nav-link d-flex align-items-center flex-column"
          to="#"
        >
          <i className="fas fa-search fa-2x d-md-none icon-color px-1" />
        </Link>
      </div>
      <div className="container d-flex justify-content-end">
        <form className=" form-inline  d-none d-md-block">
          <input
            className="form-control nav-search-box"
            type="text"
            placeholder="Search"
          />

          <button className="btn btn-primary nav-search-button" type="submit">
            <i className="fas fa-search icon-color" />
          </button>
        </form>
        <Link
          className="nav-item nav-link d-flex align-items-center flex-column"
          to="#"
        >
          <span className="fas fa-user-circle fa-2x px-2" />
          <span className="d-none d-sm-inline">Admin</span>
        </Link>
      </div>
    </nav>
  );
};
