import React from 'react'
// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { IoMdSearch } from 'react-icons/io';
import { MdMenu } from 'react-icons/md';
import {useState,useEffect} from 'react';
import SearchNavbar from '../Component/SearchNavbar';
import "../CSS/Navbar.css"


function Navbar() {

    return (
        <>
            <div class="accordion" id="accordionExample">
                <nav class="navbar navbar-expand-md navbar-light shadow-lg" id="main_navbar" >
                    <div class="container"> <a class="navbar-brand text-body" href="#">
                        <b> Logo</b>
                    </a>
                        <ul class="navbar-nav d-flex flex-row ml-auto order-xs-11 order-md-12">
                            <li class="nav-item"> <a class="nav-link" href="#">
                                <IoMdSearch color="black" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" />
                            </a> </li>
                        </ul>
                        <button class="navbar-toggler navbar-toggler-right border-0 order-xs-12" type="button" data-toggle="collapse" data-target="#navbar4">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbar4">
                            <ul class="navbar-nav ml-auto order-md-11">
                                <li class="nav-item"> <a class="nav-link" href="#">Home</a> </li>
                                <li class="dropdown"> <a class="nav-link dropdown-toggle" href="#" aria-expanded="false" aria-haspopup="true" data-toggle="dropdown" id="navbarDropdownMenuLink" role="button" data-offset="10,20" > About</a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Action 1</a></li>
                                        <li><a class="dropdown-item" href="#">Action 2</a></li>
                                        <li class="nav-item dropright">
                                            <a class="dropdown-item dropdown-toggle" href="#" aria-expanded="false" aria-haspopup="true" data-toggle="dropdown" id="navbarDropdown2" tabindex="-1">Next level</a>
                                            <ul class="dropdown-menu show" aria-labelledby="navbarDropdown2">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Action 1</a></li>
                                                <li><a class="dropdown-item" href="#">Action 2</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item"> <a class="nav-link" href="#">Services</a> </li>
                                <li class="nav-item"> <a class="nav-link" href="#">Portfolio</a> </li>
                                <li class="nav-item"> <a class="nav-link" href="#">Pricing</a> </li>
                                <li class="nav-item"> <a class="nav-link" href="#">Contact</a> </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <nav class="navbar navbar-light" >
                    <div class="container d-flex justify-content-center">
                        <form class="form-inline my-auto">
                            <div class="input-group">
                                <input type="search" class="form-control" id="inlineFormInputGroup" placeholder="Search" />
                                <div class="input-group-append"><button class="btn btn-primary" type="button">Search</button></div>
                            </div>
                        </form>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
