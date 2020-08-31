import React from 'react'
import {useQuery} from '@apollo/client'
import {members, communityCount, sontaCount} from '../queries/dashboardData'
import { NavBar } from '../components/NavBar'
import { DasboardCard } from '../components/dasboardCard'

 const Dashboard = () => {
    
    const { data: member, error: memberCountError, loading: memberCountLoading} = useQuery(members)
    const { data: community, error: communityCountError, loading: communityCountLoading} = useQuery(communityCount)
    const { data: sonta, error: sontaCountError, loading: sontaCountLoading} = useQuery(sontaCount)
    // console.log(community)
     if(memberCountLoading || communityCountLoading || sontaCountLoading){
            return(
                <div className='app_body'>
                <NavBar/>
                <main>
                <div className=" justify-content-center">
                <div className="card-deck">
                <DasboardCard 
                    name="Member"
                    number='Loading'/>
                    <DasboardCard 
                    name="Communities"
                    number='Loading'/>
                    <DasboardCard 
                    name="Ministries"
                    number='Loading'/>
                    </div>
                </div>
                </main>
            </div>
            )
        } 
        if(memberCountError || communityCountError || sontaCountError){
            console.log(memberCountError, communityCountError, sontaCountError)
            return(
                <div className='app_body'>
            <NavBar/>
            <main>
            <div className=" justify-content-center">
            <div className="card-deck">
            <DasboardCard 
                name="Member"
                />
                <DasboardCard 
                name="Communities"
                />
                <DasboardCard 
                name="Ministries"
                />
                </div>
            </div>
            </main>
        </div>
            )
        }

    return (
        <div className='app_body'>
            <NavBar/>
            <main>
            <div className=" justify-content-center">
            <div className="card-deck">
            <DasboardCard 
                name="Member"
                number={member.memberCount}/>
                <DasboardCard 
                name="Communities"
                number={community.communityCount}
                />
                <DasboardCard 
                name="Ministries"
                number={sonta.sontaCount}
                />
                </div>
            </div>
            </main>
        </div>
    )


   
    
        
}
export default Dashboard