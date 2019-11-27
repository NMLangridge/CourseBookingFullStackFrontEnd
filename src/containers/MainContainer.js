import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import Request from '../helpers/request';
import CourseDetails from '../components/courses/CourseDetails';
import CourseFormContainer from './courses/CourseFormContainer';
import CourseList from '../components/courses/CourseList';

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      courses: [],
      bookings: [],
      customers: []
    }
    this.findCourseById = this.findCourseById.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount(){
    const request = new Request()

    const promise1 = request.get('/api/courses');
    const promise2 = request.get('/api/bookings');
    const promise3 = request.get('/api/customers');
    const promises = [promise1, promise2, promise3]

    Promise.all(promises).then((data) => {
      this.setState({
        courses: data[0]._embedded.courses,
        bookings: data[1]._embedded.bookings,
        customers: data[2]._embedded.customers,
      })
    })
  }

  findCourseById(){
    // const course = this.state.courses.find((course) => {
    //   return course.id === parseInt(id)
    // })
    // return course;
  }

  handleDelete(id){
    const request = new Request()
    const url = '/api/courses/' +id;
    request.delete(url).then(() => {
      window.location ='/courses';
    });
  }

  render(){
    return(
      <div>
      <Router>
      <React.Fragment>
      <NavBar/>
      <Switch>

      <Route exact path="/courses" render={(props) => {
        return <CourseList courses={this.state.courses}/>
      }}/>

      <Route exact path="/courses/new" render={(props) =>{
        return <CourseFormContainer bookings={this.state.bookings}/>
      }}/>

      <Route exact path="/course/:id" render={(props) => {
        const id = props.match.params.id;
        const course = this.findCourseById(id);
        return <CourseDetails course={course} onDelete={this.handleDelete}/>
      }}/>

      </Switch>
      </React.Fragment>
      </Router>
      </div>
    )
  }

}

export default MainContainer;
