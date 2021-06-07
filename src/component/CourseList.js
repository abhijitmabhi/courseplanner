import React from 'react'
import CourseItem from './CourseItem'

const CourseList = (props) => {
    return (
        <div>
            <ul>
                {props.courses.map((course) => {
                    return <CourseItem
                        key={course.id}
                        courseCode={course.courseCode}
                        courseTitle={course.courseTitle}
                    />
                })}
            </ul>
        </div>
    )
}

export default CourseList
