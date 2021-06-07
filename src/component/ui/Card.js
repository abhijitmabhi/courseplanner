import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-header">
               Credit Complete: {props.creditCompleteBySemester}
            </div>
           {props.children}
        </div>
    )
}

export default Card
