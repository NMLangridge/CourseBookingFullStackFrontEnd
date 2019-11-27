import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>
    <ul>

    <li className="navLink">
    <Link to="/courses">Courses</Link>
    </li>

    <li className="navLink">
    <Link to="/courses/new">Create Course</Link>
    </li>

    <li className="navLink">
    <Link to="/bookings">Bookings</Link>
    </li>

    <li className="navLink">
    <Link to="/bookings/new">Create Booking</Link>
    </li>

    <li className="navLink">
    <Link to="/customers">Customers</Link>
    </li>

    <li className="navLink">
    <Link to="/customers/new">Create Customer</Link>
    </li>

    </ul>
    </header>
  )
}

export default NavBar;
