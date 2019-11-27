import React from 'react';
import Course from './Course.js';

const CourseList = (props) => {

  const courses = props.courses.map((course, index) => {
    return(
      <li key={index} className="component-item">
      <div className="component">
      <Course course={course}/>
      </div>
      </li>
    )
  })

  return (
    <ul className="component-list">
    {courses}
    </ul>
  )

}

export default CourseList;
