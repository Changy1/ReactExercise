import React, { Component } from 'react'
import { Route, Link, NavLink, Switch, Redirect} from 'react-router-dom'
import qs from 'querystring'
import urlObj from 'url'

const Index = () => <h2>Home</h2>;
//这里在match上有url的各种信息可以直接拿，这样改路由的时候就可以直接改变主路由的路径
const About = ({match}) => (
    <div>
        <h1>About</h1>
        <Link to = {`${match.path}/us`}>us</Link>
        <Link to = {`${match.path}/you`}>you</Link>
        <Switch>
            <Redirect from = '/' exact to={`${match.path}/us`}/>
            <Route path = {`${match.path}/us`} render = {() => <h3>This is Us</h3>} /> 
            <Route path = {`${match.path}/you`} render = {() => <h3>This is You</h3>} />
        </Switch>
    </div>
)
const Users = () => <h2>Users</h2>;
const UsersA = () => <h2>Users-a</h2>;
const Login = () => <h2>login</h2>;
const NotFound = () => <h2>404 page</h2>;
//这里在props上都有各种参数的信息，分别在location和match上边
const UsersB = (props) => {
    let {name, age} = urlObj.parse(props.location.search, true).query
    return (
        <h2>this is UsersB{props.match.params.id} {age} {name}</h2>
    )
}

class AppRouter extends Component {
    render () {
        let query = { name: 'haha' , age: 16}
        return (
            <div className = 'root'>
                <div className = "panel panel-default">
                    <div className = "panel-heading">
                        <Link to = '/'>Home</Link>
                        <Link to = '/about'>About</Link>
                        <Link to = '/users'>Users</Link>
                        <Link to = '/users/a'>Users-a</Link>
                        <Link to = {{
                            pathname: '/users/2',
                            search: '?' + qs.stringify(query)
                        }}>UsersB</Link>
                    </div>
                </div>
                <Switch>
                    {/* 这里多的可以匹配到少的，比如/home可以匹配到/,/users/a可以匹配到/users */}
                    <Route path = '/' exact render = {() =>{
                        let isLogin = true 
                        return isLogin ? <Redirect to = '/home'/> : <Login />
                    }}/>
                    <Route path = '/home' exact component = {Index}></Route>

                    <Route path = '/about' component = {About}></Route>
                    <Route path = '/users/a' component = {UsersA}></Route>
                    <Route path = '/users/:id' component = {UsersB}></Route>
                    <Route path = '/users' component = {Users}></Route>
                    <Route path = '/not-found' component = {NotFound}></Route>
                    <Redirect to = {{ pathname: '/not-found' }} />
                </Switch>
            </div>
        )
    }
}

export default AppRouter