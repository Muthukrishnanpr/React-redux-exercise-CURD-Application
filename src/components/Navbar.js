import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar bg-dark navbar-dark shadow">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand py-2 ms-5 fst-italic fw-bolder">React Redux Exercise...</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar