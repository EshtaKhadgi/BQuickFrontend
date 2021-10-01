// import { Component,state,submitUser} from "react";
// import axios from "axios"

// class Register extends Component{
//     state={
//         first_name: "",
//         last_name : "",
//         email : "",
//         password: "",
//         country :"",
//         phone_number:"",
//         userType:"",
//         username:""

//     }
//     submitUser=(e)=>{
       
//         e.preventDefault();
//         const userdata={
//             first_name:this.state.first_name,
//             last_name:this.state.last_name,
//             email:this.state.email,
//             password:this.state.password,
//             country:this.state.country,
//             phone_number:this.state.phone_number,
//             userType:this.state.userType,
//             username:this.state.username
//         }
//         axios.post("http://localhost:90/user/insert",userdata)
//     }
//    render(){
//        return(
//         <form>
//         <h3>Sign Up</h3>

//         <div className="form-group">
//             <input type="text" className="form-control" placeholder="first name" value={this.state.first_name}
//             onChange={(event)=>this.setState({first_name:event.target.value})} />
//         </div>

//         <div className="form-group">
//             <input type="text" className="form-control" placeholder="Last name" value={this.state.last_name}
//             onChange={(event)=>this.setState({last_name:event.target.value})} />
//         </div>

//         <div className="form-group">
//             <input type="email" className="form-control" placeholder="Enter email" value={this.state.email} 
//              onChange={(event)=>this.setState({email:event.target.value})}/>
//         </div>
//         <div className="form-group">
//             <input type="text" className="form-control" placeholder="username" value={this.state.username}
//             onChange={(event)=>this.setState({username:event.target.value})}/>
//         </div>
//         <div className="form-group">
//             <input type="password" className="form-control" placeholder="Password" value={this.state.password}
//             onChange={(event)=>this.setState({password:event.target.value})} />
//         </div>

//         <div className="form-group">
//             <input type="text" className="form-control" placeholder="country" value={this.state.country} 
//             onChange={(event)=>this.setState({country:event.target.value})}/>
//         </div>
//         <div className="form-group">
//             <input type="number" className="form-control" placeholder="Phone number" value={this.state.phone_number}
//             onChange={(event)=>this.setState({phone_number:event.target.value})} />
//         </div>
//         <div className="form-group">
//             <input type="text" className="form-control" placeholder="userType" value={this.state.userType}
//             onChange={(event)=>this.setState({userType:event.target.value})} />
//         </div>

//         <button onClick={this.submitUser} type="submit" className="btn btn-primary btn-block">Sign Up</button>
//         <p className="forgot-password text-right">
//             Already registered <a href="/login">sign in?</a>
//         </p>
//     </form>
//        )
//    }
// }
// export default Register;