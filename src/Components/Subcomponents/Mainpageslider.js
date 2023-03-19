import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Outlet, Link } from "react-router-dom";

export default function Mainpageslider() {
  return (
    <div className=''>
        <Link className='cursor-default'>

    <Carousel controls={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/u/n/untitled-1_2.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/u/n/untitled-2.jpg"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/m/e/men1_9.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

        </Link>
    </div>
  )
}
