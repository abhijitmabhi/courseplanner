import React from 'react'

const CourseItem = (props) => {
    return (
        <div>
            <li>{props.courseCode} {props.courseTitle}</li>
        </div>
    )
}

export default CourseItem
