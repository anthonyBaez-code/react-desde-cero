import { render } from "@testing-library/react"
import Axios from "axios"
import React,{Component}from "react"
import CourseGrip from "../Organisms/CourseGrip"



class Courses extends Component{

  constructor(props){
    super(props)

    this.state ={
      courses:[]
    }
  }

  componentDidMount(){
    Axios.get('http://my-json-server.typicode.com/anthonybaez-code/json-db/cursos')
    .then(resp => this.setState({
        courses: resp.data
    }))
  }

  render(){
    const {courses} = this.state

    return<CourseGrip courses={courses}/>

  }
}

export default Courses