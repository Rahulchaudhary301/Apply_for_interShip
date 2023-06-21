import React from "react";
import {  Link } from 'react-router-dom'






function Navbar() {






    return (
        <div>
            <>
                <nav class="navbar navbar-expand-lg navbar-light bg-warning">
                    <div class="container-fluid">
                        <Link id="x" class="navbar-brand" to="/">
                            Home
                        </Link>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link id="x" class="nav-link " aria-current="page" to="/college">
                                        Colleges
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link id="x" class="nav-link" to="/create">
                                        Create_College
                                    </Link>
                                </li>
                                
                               
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        </div>
    );
}

export default Navbar;
