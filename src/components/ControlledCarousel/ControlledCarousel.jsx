import Carousel from 'react-bootstrap/Carousel';

import madridPicture from './../../assets/images/CitiesImages/picture-madrid.jpeg'
import amsterdamPicture from './../../assets/images/CitiesImages/picture-amsterdam.webp'
import athensPicture from './../../assets/images/CitiesImages/picture-atenas.webp'
import berlinPicture from './../../assets/images/CitiesImages/picture-berlin.jpeg'
import brusselsPicture from './../../assets/images/CitiesImages/picture-brussels.jpeg'
import edinbourghPicture from './../../assets/images/CitiesImages/picture-edinbourgh.jpeg'

import './ControlledCarousel.css'

const ControlledCarousel = () => {

    return (
        <Carousel className='ControlledCarousel' indicators={false}>
            <Carousel.Item interval={2000}>
                <img className="carousel-img" src={madridPicture} alt="Madrid Picture" />

                <Carousel.Caption className='caption mad-caption'>
                    <h3>Discover Madrid</h3>

                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img className="carousel-img" src={amsterdamPicture} alt="Amsterdam Picture" />

                <Carousel.Caption className='caption ams-caption'>
                    <h3>Take a walk through Amsterdam</h3>

                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img className="carousel-img" src={athensPicture} alt="Athens Picture" />

                <Carousel.Caption className='caption ath-caption'>
                    <h3>Relax and enjoy Athens</h3>

                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img className="carousel-img" src={berlinPicture} alt="Berlin Picture" />

                <Carousel.Caption className='caption ber-caption'>
                    <h3>Have lots of fun in Berlin</h3>

                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img className="carousel-img" src={brusselsPicture} alt="Brussels Picture" />

                <Carousel.Caption className='caption bru-caption'>
                    <h3>Let Brussels take your breath away</h3>

                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img className="carousel-img" src={edinbourghPicture} alt="Edinbourgh Picture" />

                <Carousel.Caption className='caption edin-caption'>
                    <h3>Fall in love with Edinbourgh</h3>

                </Carousel.Caption>

            </Carousel.Item>
        </Carousel>
    )
}

export default ControlledCarousel;