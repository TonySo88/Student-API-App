import React, {useState, useEffect } from 'react';
import axios from 'axios';
import StudentCard from './StudentCard'

const StudentList = props => {
    const [studentList, setStudentList] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
      axios
        .get("https://api.hatchways.io/assessment/students")
        .then(response => {
            console.log("response", response)
            setStudentList(response.data.students)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    function getAvg(grades) {
        let total = 0;
        for(let i = 0; i < grades.length; i++) {
            total += Number(grades[i]);
        }
        let avg = total / grades.length;
        console.log('average', avg)
        console.log('total', total)
        console.log('length', grades.length)
        return avg
    }

    function upperCase(name) {
        let bigName = name.toUpperCase()
        return bigName
    }

    return (
        <div>
            <div>
                <input 
                    className="search-form"
                    type="text"
                    placeholder="Search..."
                    onChange={event => {
                        setSearchTerm(event.target.value)
                    }}
                />
                {studentList.filter((student) => {
                    if (searchTerm == "") {
                        return student
                    } else if (student.firstName.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return student
                    }
                }).map(student => {
                    return (
                        <StudentCard 
                            student={student}
                            id={student.id}
                            pic={student.pic}
                            name={upperCase(student.firstName + " " + student.lastName)}
                            email={student.email}
                            company={student.company}
                            skill={student.skill}
                            average={getAvg(student.grades)}
                            grades={student.grades}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default StudentList;