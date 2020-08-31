import React from 'react'

export const DasboardCard = (props) => {
    return (
        <div className="col-md-4">
                  <div className="card card-body big-card justify-content-center my-2">
                   <h1 className="h2">{props.name}<br/></h1>
                   <h6 className="text-muted">{props.number}</h6>
                   
                 </div>
            </div>
    )

    }
