import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AddUser from './components/AddUser'
import EditUser from './components/Edituser'
import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/adduser"} component={AddUser} />
                <Route exact path={"/edituser/:id"} component={EditUser} />
            </Switch>
        </>
    )
}

export default App