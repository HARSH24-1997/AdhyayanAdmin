import React from 'react';
import Slider from "react-slick";
import Product from '../Content/Product'
import { AiFillRightCircle } from 'react-icons/ai';
import {AiFillLeftCircle} from 'react-icons/ai';

function HorizontalScroll() {

  var settings = {
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


    return (
         <div>
         <div className="container px-4">
             {/* <div className="clearfix mt-5 mb-2">
                 <h4 className="float-left">Catelog</h4>
                 <h5 className="float-right text-uppercase">See All</h5>
             </div> */}
         <Slider
          dots={false}
          arrows={true}
          infinite={true}
          slidesToShow={4}
          slidesToScroll={1}
          autoplaySpeed={3000}
          nextArrow={<AiFillRightCircle size="5rem" color="orange"/>}
          prevArrow={<AiFillLeftCircle size="5rem" color="orange" />}
          {...settings}
          >


        {Product.map((props,index)=>(
            <div className="col px-3">
            <div class="card"> <img class="card-img-top" src={props.src} alt="Card image cap"/>
              <div class="card-body p-0">
                <p class="card-text text-center">{props.content}</p>
                <button className="btn-block btn-lg" style={{bottom:"0vh",color:"white",backgroundColor:"orange"}}>{props.cost}</button>
              </div>
            </div>
            </div>
        ))}
        </Slider>
        </div>
        </div>
    )
}

export default HorizontalScroll
