import React from 'react';
import Slider from "react-slick";
import Best from '../Content/Best.js'
import { AiFillRightCircle } from 'react-icons/ai';
import { AiFillLeftCircle } from 'react-icons/ai';
import { FaQuoteLeft } from 'react-icons/fa';
import "../CSS/Testimonial.css";


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


function Testimonial() {

    return (
        <>
            <div className="container text-center py-2">
                <h3 class="pt-2">TESTIMONIAL</h3>
                <hr className="pt-0 pill"></hr>
                <p style={{ fontSize: "1.5em" }}>We have worked with many clients and we always like to hear they come out from the cooperation happy and satisfied. Have a look what our clients said about us.</p>
            <Slider
                dots={true}
                // arrows={true}
                infinite={true}
                slidesToShow={4}
                slidesToScroll={1}
                autoplaySpeed={3000}
                // nextArrow={<AiFillRightCircle size="5rem" color="orange"/>}
                // prevArrow={<AiFillLeftCircle size="5rem" color="orange" />}
                // dotsClass={'slick-dots'}
                {...settings}
            >
                {Best.map((props, index) => (
                    <div class="col p-3 no-gutters">
                        <div class="card my-auto">
                            <div class="card-body p-4" style={{borderBottom:"solid",borderBottomColor:"red",borderBottomWidth:"3px",borderRadius:"3px"}} >
                                <p class="mt-3 mb-4">{props.Msg}</p>
                                <div class="row">
                                    {/* <FaQuoteLeft/> */}
                                    <div class="col-md-4 col-3 my-auto"> <img class="img-fluid d-block rounded-circle" src="https://static.pingendo.com/img-placeholder-2.svg" /> </div>
                                    <div class="d-flex  col-md-8 flex-column justify-content-center align-items-start col-9">
                                        <p class="mb-0 lead mx-auto"> <b>{props.Name}</b> </p>
                                        <p class="mb-0 mx-auto">{props.Job}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            </div>
        </>
    )
}

export default Testimonial