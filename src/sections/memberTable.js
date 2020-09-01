import React from 'react'
import {Link} from 'react-router-dom'
import {useQuery} from '@apollo/client'
import {All_Members} from '../queries/membersData'

export const MemberTable = () => {

  const { data: member, error: memberError, loading: memberLoading} = useQuery(All_Members)
          
      if (memberLoading || memberError){          
            return(
              <div className="container col-lg-9 col-md-9">
              <div className="row row-no-gutters">
              <div className="col-sm-2 m-3">
              <div className="card">
                <div className="d-none d-sm-block pt-2">
                  <img className="card-img-top img-fluid" src="./img/user.png" alt=""/>
                </div>
                <div className="card-body">
                  <p className="card-title pt-2">Loading</p>             
                </div>
              </div>
            </div>
              </div>
              </div>
            )
      }
      member.Member.map((soul)=>{
             
      return(
        <div className="container col-lg-9 col-md-9">
            <div className="row row-no-gutters">
            <div className="col-sm-2 m-3">
            <div className="card mt-3">
              <div className="d-none d-sm-block t-2">
                <img className="card-img-top img-fluid" src="./img/user.png" alt=""/>
              </div>
              <div className="card-body">
                <p className="card-title pt-2">data</p>             
              </div>
            </div>
          </div>
            </div>
            </div>
      )
    })
    return(
          <div className="container col-lg-9 col-md-12"> 
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h3 className="h3">Search Results</h3>
      <div className="btn-toolbar mb-2 mb-md-0">
        <div className="btn-group mr-2">
          <div className="file-field btn btn-sm btn-primary">
          {/*<span>Import CSV</span>*/}
          <input type='file'/>
          </div>
          
        </div>
        <Link to='/member/addMember' type="button" className="btn btn-sm btn-primary" >
          
          Add Member
        </Link>        
      </div>
    </div>

            <div className="row row-no-gutters">
            {member.Member.map((soul, index) => {
              return(
            <div className="col-sm-2" key={index}>
            <div className="card mt-3">
              <div className="d-none d-sm-block pt-2">
                <img className="card-img-top img-fluid" src="./img/user.png" alt=""/>
              </div>
              <div className="card-body">
                <p className="card-title pt-2">{soul.firstName + " " + soul.lastName}</p>             
              </div>
            </div>
          </div>          
            
          )
        })}
        </div>
        </div>  
        
    )  
       
   


    

    
}
