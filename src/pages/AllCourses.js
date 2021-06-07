import React from 'react'
import CourseList from '../component/CourseList';

const DEMO_COURSES = [
    {
        id: 1,
        courseCode: 'CS101',
        courseTitle: 'Foundation of Software Engineering',
        credit: 4,
        status: 'Passed',
        examDate: '08/12/2021',
        semester: 'SoSe 20'
    },
    {
        id: 2,
        courseCode: 'CS105',
        courseTitle: 'Automotive Software Engineering',
        credit: 8,
        status: 'Passed',
        examDate: '08/03/2021',
        semester: 'SoSe 20'
    }
]

const AllCourses = () => {
    return (
        <div>
            <CourseList courses={DEMO_COURSES} />
        </div>
    )
}

export default AllCourses
