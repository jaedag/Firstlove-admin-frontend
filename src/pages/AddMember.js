import React from 'react'
import { AddMemberDetails } from '../components/addMemberDetails'
import { NavBar } from '../components/NavBar'

export const AddMember = () => {
    return (
        <div>
            <title>Add Member</title>
            <div className='app_body'>
                <NavBar/>
                <AddMemberDetails/>
            </div>
        </div>
    )
}
