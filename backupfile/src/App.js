import React from "react"
import { Route, Switch } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import AddUser from "./Components/AddUser/AddUser"
import EditUser from "./Components/EditUser/EditUser"
const App = () => {

    return (
        <>
        <Navbar />
            <Switch>
                <Route exact path="/" component={() => <Home />} />
                <Route path="/addUser" component={() => <AddUser />} />
                <Route path="/editUser/:id" component={() => <EditUser />} />
            </Switch>
        </>
    )
}

export default App;