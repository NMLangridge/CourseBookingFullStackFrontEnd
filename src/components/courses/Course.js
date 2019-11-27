import React, {Fragment}  from 'react';
import {Link} from 'react-router-dom';

const Course = ({course}) => {
  if(!course){
    return "Loading..."
  }

  const url = "/courses/" +course.id;

  return (
    <Fragment>
    <Link to={url} className="name">{course.name} {course.town}</Link>

    <p>Star Rating: {course.starRating}</p>


    </Fragment>
  )

}

export default Course;
