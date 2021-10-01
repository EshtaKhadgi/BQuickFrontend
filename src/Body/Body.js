import {Component} from 'react'
import Register from './Register'
import Login from './Login'
import {Container,Row,Col} from 'react-bootstrap'
import {Route} from 'react-router-dom';
import CardItem from './CardItem'
import Cards from './Cards'
class Body extends Component{
    render(){
        return(
            <Container>     
                    <Route path='/register' component={Register}/>
                    <Route path='/login' component={Login} />
   
            </Container>
        )
    }
}
export default Body;