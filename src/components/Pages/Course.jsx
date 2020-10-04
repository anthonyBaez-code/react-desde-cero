import Axios from "axios"
import React,{Component} from "react"



    
class Course extends Component{

    constructor(props){
      super(props)

      this.state = {
        cursoActual: {}
      }
    }

    componentDidMount(){
      Axios.get(`http://my-json-server.typicode.com/anthonybaez-code/json-db/cursos/${this.props.match.params.id}`)
      .then(resp => this.setState({
          cursoActual: resp.data
      }))
    }
    

    render(){
      return (
        <div className="ed-grid m-grid-3" >
       {
                this.state.cursoActual ?(

            <>
                <h1 className="m-cols-3">{this.state.cursoActual.title} </h1>
                <img className="m-cols-1" src={this.state.cursoActual.image} alt ={this.state.cursoActual.title}/>
                <p className="m-cols-2">Profesor: {this.state.cursoActual.profesor}</p>
            </>
             ) : 
             <h1>El curso no existe</h1>       
       }   
        </div>
     )
    }
  
}

export default Course