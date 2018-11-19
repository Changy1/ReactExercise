import React, { Component, Fragment } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'


const Index = () => <h2>Home</h2>;

const About = (props) => (
    <div>
        <h1>About</h1>
        <Link to = '/about/us'>us</Link>
        <Link to = '/about/you'>you</Link>
        <Switch>
            <Redirect from = '/' exact to='/about/us'/>
            <Route path = '/about/us' render = {() => <h3>This is Us</h3>} /> 
            <Route path = '/about/you' render = {() => <h3>This is You</h3>} />
        </Switch>
    </div>
)

const Users = () => <h2>Users</h2>;
const UsersA = () => <h2>Users-a</h2>;
const Login = () => <h2>login</h2>;
const NotFound = () => <h2>404 page</h2>;

class Root extends Component {
    render () {
        return (
            <div className = 'root'>
                <h1 className = "text-center">react-router example</h1>
                <Router>
                    <Fragment>
                        <Link to = '/'>Home</Link>
                        <Link to = '/about'>About</Link>
                        <Link to = '/users'>Users</Link>
                        <Switch>
                            {/* 这里多的可以匹配到少的，比如/home可以匹配到/,/users/a可以匹配到/users */}
                            <Route path = '/' exact render = {() =>{
                                let isLogin = true 
                                return isLogin ? <Redirect to = '/home'/> : <Login />
                            }}/>
                            <Route path = '/home' exact component = {Index}></Route>

                            <Route path = '/about' component = {About}></Route>
                            
                            <Route path = '/users/a' component = {UsersA}></Route>
                            <Route path = '/users' component = {Users}></Route>
                            <Route path = '/not-found' component = {NotFound}></Route>
                            <Redirect to = {{ pathname: '/not-found' }} />
                        </Switch>
                    </Fragment>
                </Router>
            </div>
        )
    }
}

export default Root