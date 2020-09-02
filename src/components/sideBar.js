import React from 'react'
import {useQuery} from '@apollo/client'
import {jobs} from '../queries/membersData'

export const SideBar = () => {

  const { data: work, error: workError, loading: workLoading} = useQuery(jobs)
  
    return (
        
        <nav id="sidebarMenu" className="d-md-block bg-gray sidebar collapse">
        <div className="sidebar-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <div>
                <h3>
                  Basic Info
                </h3>
              </div>
            
              <div className="form-group ">
              <label className="col-form-label">Gender</label> 
              <div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="Gender" id="inlineRadio1" value="option1"/>
                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="Gender" id="inlineRadio2" value="option2"/>
                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
              </div>
            </div>
            <label className="col-form-label">Marital Status</label> 
            <div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="Marital" id="inlineRadio1" value="option1"/>
                <label className="form-check-label" htmlFor="inlineRadio1">Single</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="Marital" id="inlineRadio2" value="option2"/>
                <label className="form-check-label" htmlFor="inlineRadio2">Married</label>
              </div>
            </div>
            
            <div className="mt-2 bg-gray">
              {/** 
            <div className="py-1">
              <select className="form-control">
                <option>Age Bracket</option>
                <option>10-20</option>
              </select>
              </div>

              <div className="py-1 form-row">
                <div className="col-md-4">
                <select className="form-control">
                  <option>City</option>
                  <option>Accra</option>
                </select>
              </div>
              <div className="col-md-8">
                <select className="form-control">
                  <option>Country</option>
                  <option>Ghana</option>
                </select>
              </div>
                </div>
            */}
              
              <div className="form-control form-row col-md-9 mb-3 p-2 ">
              <select className="custom-select border">
              <option defaultValue>Profession</option>
                { work ? 
                  work.Occupation.map( (job, index) => {
                    return(
                      <option key={index}>{job.occupation}</option>
                    )
                  }): <option>Loading</option>
                }                
              </select>
              </div>
            </div>

          {/*  <div className="mt-3">
              <h3>
                Other Info
              </h3>
            </div>
            <div className="mt-3 bg-gray">
              <div className="py-1">
              <select className="form-control">
                <option>Branch</option>
                <option>Kings</option>
                <option>AIT</option>
              </select>
              </div>
              <div className="py-1">
              <select className="form-control">
                    <option>Year Appointed</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2016</option>
                    <option>2013</option>
              </select>
              </div>
              </div>*/}
          </div>
          </li>
          </ul>
        </div>
      </nav>
        
    )
}
