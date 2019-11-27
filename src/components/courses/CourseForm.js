import React from 'react';

const CourseForm = (props) => {

  const options = props.bookings.map((booking, index) => {
    return <option key={index} value={booking._links.self.href}>{booking.date}</option>
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    const course={
      "name": event.target.name.value,
      "town": event.target.town.value,
      "starRating": event.target.starRating.value,
      "booking": event.target.booking.value
    }
    props.handleCoursePost(course);
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Name" name="name"/>
    <input type="text" placeholder="Town" name="town"/>
    <input type="number" placeholder="Star Rating" name="starRating"/>
    <select name="booking">
    {options}
    </select>
    <button type="submit">Save</button>
    </form>
    </div>
  )

}

export default CourseForm;
