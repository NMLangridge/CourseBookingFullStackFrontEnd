import React, {Component} from 'react';
import Request from '../../helpers/request'
import CourseForm from '../../components/courses/CourseForm'

class CourseFormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleCoursePost = this.handleCoursePost.bind(this);
  }

  handleCoursePost(course){
    const request = new Request();
    request.post('/api/courses', course).then(() => {
      window.location = '/courses'
    })
  }

  render(){
    return <CourseForm bookings={this.props.bookings} handleCoursePost={this.handleCoursePost}/>
  }
}

export default CourseFormContainer;
