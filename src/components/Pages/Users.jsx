import React, {Component} from "react"
import UserCard from "../Molecules/UserCard"
import axios from "axios"
import UsersGrip from "../Organisms/UsersGrip"

class Users extends Component {

    constructor(props){
      super(props)

      this.state = {
          users: []
      }

    }
    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users',{method: 'get'})
    //     .then(response => response.json())
    //     .then(response2 => {
    //         this.setState({
    //             users: response2
    //         })
    //     })
    // }

        componentDidMount(){
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(resp => {
                this.setState({
                    users: resp.data
                })
            })
        }

    render(){
        const {users} = this.state
        return <UsersGrip users={users}/>
          
        
    }
}
export default Users