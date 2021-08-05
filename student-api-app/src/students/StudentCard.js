import React from 'react';

const StudentCard = props => {
    console.log('grades', props.student)
    return (
        <div>
            <li key={props.id}>
                <div className="student-section">
                    <img className="student-image" alt="student avatar" src={props.pic}/>
                <div className="student-info">
                    <h1 className="h1">{props.name}</h1>
                    <p>Email: {props.email}</p>
                    <p>Company: {props.company}</p>
                    <p>Skill: {props.skill}</p>
                    <p>Average: {props.average}</p>
                </div>
                </div>
            </li>
        </div>
    )
}

export default StudentCard;