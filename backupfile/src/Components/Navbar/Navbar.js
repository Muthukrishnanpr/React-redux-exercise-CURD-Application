import React from 'react'
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
        <nav className="navbar bg-dark navbar-dark">
            <Link to={"/"} className="navbar-brand ms-5 pt-1 pb-2">React Redux ContactBook</Link>
        </nav>
    </>
  )
}

export default Navbar