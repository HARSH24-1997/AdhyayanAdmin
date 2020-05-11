import React from 'react'
import {RiBasketballLine} from 'react-icons/ri';
import {IoIosSpeedometer} from 'react-icons/io';
import {GiEarthAmerica} from 'react-icons/gi';


function Services() {
    return (
        <div class="py-5 bg-light" >
        <div class="container">
          <div class="row">
            <div class="text-center col-md-12">
              <h1 style={{color:"#627680"}}>Services</h1>
              <p class="lead">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 p-3">
              <div class="card bg-light">
                <div class="card-body p-4 text-center" style={{backgroundColor:"white"}}>
                  <IoIosSpeedometer size="3rem" color="green"/>
                  <h4 class="title"><a href="" class="text-dark">Lorem Ipsum</a></h4>
                  <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 p-3">
              <div class="card bg-light">
                <div class="card-body p-4 text-center" style={{backgroundColor:'white'}}>
                  <GiEarthAmerica size="3rem" color="lightblue"/>
                  <h4 class="title"><a href="" class="text-dark">Sed ut perspiciatis</a></h4>
                  <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 p-3">
              <div class="card bg-light">
                <div class="card-body p-4 text-center" style={{backgroundColor:'white'}}>
                <RiBasketballLine size="3rem" color="pink"/>
                  <h4 class="title"><a href="" class="text-dark">Sed ut perspiciatis</a></h4>
                  <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Services
