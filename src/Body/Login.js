// import { Component } from "react";
// import axios from 'axios'
// import {Redirect} from 'react-router-dom';

// class Login extends Component{
//     state={
//         username: "",
//         password: "",
//         chkLogin: false
//     }
//     changeHandler =(e)=>{
//         this.setState({
//             [e.target.name] : e.target.value
//         })
//     }
//     sendLoginData =(e) =>{
//         e.preventDefault();
//         axios.post("http://localhost:90/user/login", this.state)
//         .then((response)=>{
//             console.log(response);
//             localStorage.setItem('token', response.data.token)
//             this.setState({
//                 chkLogin: true
//             })
//         })
//         .catch((err)=>{
//             console.log(err.response);
//         })
       
//     }
//     render(){
//         if(this.state.chkLogin ===true){
//             //if login is true redirect to dashboard
//             return <Redirect to ='/home'/>
//         }
//         return(
//             <div className="container-fluid containerMargin row">
//                 <div className="col-md-4"></div>
//                 <div className="col-md-3 regFormWrap">  
//                     <div className="container">
//                         <form>
//                         <h2>Login here</h2>
//                         <p><input type="text" name = "username" placeholder="Enter Username" value={this.state.username}
//                             onChange={this.changeHandler}/></p>

//                             <p><input type="password" name = "password" placeholder="Enter Password" value={this.state.password}
//                             onChange={this.changeHandler}/></p>
//                             <button onClick={this.sendLoginData} type="submit" className="btn btn-primary" >Login</button>
//                         </form>
//                         <p >or Login with</p>
//                         <img src="/googleLogin.jpg" className="google-btn"/>
//                     </div>
//                 </div>   
//                 <div className="col-md-4"></div>            
//            </div>
            
//         )
//     }
// }
// export default Login;