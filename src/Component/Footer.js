import React from 'react'
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { AiFillSkype } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';


function Footer() {
    return (
      <div style={{borderTop:"solid",borderTopColor:"#ccc"}} >
    <div class="container p-4">
      <div class="row no-gutter">
        <div class="p-4 col-md-3">
          <h3 class="mb-3">LOGO</h3>
          <p class="lead"> <a href="#" class="text-muted"> 365 Park Street, NY</a> </p>
          <p class="text-muted"><b>Phone : </b><a href="#" class="text-muted" style={{textDecoration:"none"}}> 542 550 5462</a>
          </p>
          <p class="text-muted"><b>Email : </b><a href="#" class="text-muted">
             info@pingendo.com</a> </p>
          <div class="mx-auto">
                <a href="#" class="twitter pl-2"><AiFillTwitterCircle size="1rem" color="#ccc"/></a>
                <a href="#" class="facebook pl-2"><FaFacebook size="1rem" color="#ccc"/></a>
                <a href="#" class="instagram pl-2"><FaInstagram size="1rem" color="#ccc"/></a>
                <a href="#" class="google-plus pl-2"><AiFillSkype size="1rem" color="#ccc"/></a>
                <a href="#" class="linkedin pl-2"><FaLinkedinIn size="1rem" color="grey"/></a>
          </div>    
        </div>
        <div class="p-4 col-md-3">
          <p class="lead"><b>Useful Link</b></p>
          <ul class="list-unstyled">
            <li class="pb-2"><IoIosArrowForward color="#4f70ce" size=".7rem"/><a href="#" class="text-muted ">Home</a></li>
            <li class="pb-2"><IoIosArrowForward color="#4f70ce" size=".7rem"/><a href="#" class="text-muted">About us</a></li>
            <li class="pb-2"><IoIosArrowForward color="#4f70ce" size=".7rem"/><a href="#" class="text-muted ">Our services</a></li>
            <li class=""><IoIosArrowForward color="#4f70ce" size=".7rem"/><a href="#" class="text-muted">Stories</a></li>
          </ul>
        </div>
        <div class="p-4 col-md-3">
          <p class="lead"><b>Our Services</b></p>
          <ul class="list-unstyled">
            <li class="pb-2 "><IoIosArrowForward color="#4f70ce" size=".7rem"/><a href="#" class="text-muted ">Home</a></li>
            <li class="pb-2"><IoIosArrowForward color="#4f70ce" size=".7rem"/><a href="#" class="text-muted">About us</a></li>
            <li class="pb-2"><IoIosArrowForward color="#4f70ce" size=".7rem"/><a href="#" class="text-muted ">Our services</a></li>
            <li class=""><IoIosArrowForward color="#4f70ce" size=".7rem"/><a href="#" class="text-muted">Stories</a></li>
          </ul>
        </div>
        <div class="py-4 px-2 col-md-3">
          <p contenteditable="true" class="lead "><b>Our Newsletter</b></p>
          <p class="text-muted">Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          <form class="form-inline pt-2">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Your e-mail"/>
              <div class="input-group-append"><button class="btn btn-secondary" type="button" style={{backgroundColor:"#4f70ce"}}>Subscribe</button></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Footer
