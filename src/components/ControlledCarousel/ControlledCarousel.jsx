import Carousel from 'react-bootstrap/Carousel';
import madridPicture from './../../assets/images/picture-madrid.jpeg'

import './ControlledCarousel.css'

function IndividualIntervalsExample() {
    return (
        <Carousel className='ControlledCarousel'>
            <Carousel.Item interval={1000}>
                <img src={madridPicture} alt="Madrid Picture" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img src={madridPicture} alt="Madrid Picture" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={madridPicture} alt="Madrid Picture" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;