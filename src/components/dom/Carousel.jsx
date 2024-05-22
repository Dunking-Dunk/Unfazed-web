"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CardCarousel = ({ children, props }) => {
    return (<Carousel
        {...props}
        emulateTouch
        autoPlay
        infiniteLoop
        interval={20000}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
    >
        {children}
    </Carousel>)
}

export default CardCarousel;