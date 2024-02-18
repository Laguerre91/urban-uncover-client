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
                <img src={madridPicture} alt="Madrid Picture" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img src={amsterdamPicture} alt="Amsterdam Picture" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img src={athensPicture} alt="Athens Picture" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img src={berlinPicture} alt="Berlin Picture" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img src={brusselsPicture} alt="Brussels Picture" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img src={edinbourghPicture} alt="Edinbourgh Picture" />
            </Carousel.Item>
        </Carousel>
    )
}

export default ControlledCarousel;