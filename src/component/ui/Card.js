import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                1st Semester
            </div>
           {props.children}
        </div>
    )
}

export default Card
