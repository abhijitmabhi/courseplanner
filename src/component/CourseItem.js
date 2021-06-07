import React from 'react'
import { useEffect } from 'react';

const CourseItem = (props) => {
    useEffect(() => {
        const creditCompleteHandler = () => {
            props.creditComplete(props.credit);
        }
        creditCompleteHandler();
    })
    
    return (
        <div>
            <li className="list-group-item">
                {props.courseCode} 
                {props.courseTitle} ({props.credit})
            </li>
        </div>
    )
}

export default CourseItem
