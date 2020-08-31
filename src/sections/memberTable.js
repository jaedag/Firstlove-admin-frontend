import React, {useEffect, useState} from 'react'
import {useQuery} from '@apollo/client'
import {All_Members} from '../queries/membersData'

export const MemberTable = () => {

  const { data: member, error: memberError, loading: memberLoading} = useQuery(All_Members)
          
      if (memberLoading){          
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
        console.log(soul)
      
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
            <div className="row row-no-gutters">
            {member.Member.map((soul) => {
              return(
            <div className="col-sm-2">
            <div className="card mt-3">
              <div className="d-none d-sm-block pt-2">
                <img className="card-img-top img-fluid" src="./img/user.png" alt=""/>
              </div>
              <div className="card-body">
                <p className="card-title pt-2" key={soul.memberID}>{soul.firstName + " " + soul.lastName}</p>             
              </div>
            </div>
          </div>          
            
          )
        })}
        </div>
        </div>  
    )  
       
   


    

    
}
