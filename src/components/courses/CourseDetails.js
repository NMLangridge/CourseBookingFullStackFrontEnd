import React from 'react'
import Course from './Course';
import {Link} from 'react-router-dom';

const CourseDetails = (props) => {

  if(!props.course){
    return "Loading..."
  }

  const handleDelete = () => {
    props.onDelete(props.course.id)
  }

  const customers = props.courses.customers.map((customer, index) => {
    return <li key={index}>{customer.name}</li>
  })

  const editUrl = "/course/edit/"+props.course.id

  return(
    <div className="component">
    <Course course={props.course}/>
    <p>Customers:</p>
    <ul>
    {customers}
    </ul>
    <button onClick={handleDelete}>Delete {props.course.name}</button>
    <Link to={editUrl}>
    <button type="button">Edit {props.course.name}
    </button>
    </Link>
    </div>
  )

}

export default CourseDetails;
