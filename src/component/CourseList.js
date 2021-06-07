import React from 'react'
import CourseItem from './CourseItem'
import Card from '../component/ui/Card'
import { useState } from 'react'

const CourseList = (props) => {
    const [creditCompleteBySemester, setcreditCompleteBySemester] = useState(0);
    let totalCreditBySmester = 0;
    function creditCompletionHandlerBySemester(credit){
        totalCreditBySmester += credit;
        setcreditCompleteBySemester(totalCreditBySmester);
    }
    return (
        <div>
            
            <Card creditCompleteBySemester={creditCompleteBySemester}>
                <ul className="list-group list-group-flush">
                    {props.courses.map((course) => {
                        return <CourseItem creditComplete={creditCompletionHandlerBySemester}
                            key={course.id}
                            courseCode={course.courseCode}
                            courseTitle={course.courseTitle}
                            credit={course.credit}
                        />
                    })}
                </ul>
            </Card>
        </div>
    )
}

export default CourseList
