import ControlledCarousel from './../../components/ControlledCarousel/ControlledCarousel'
import CityButton from "../../components/CityButton/CityButton"

import './HomePage.css'


function HomePage() {


    return (
        <div className="HomePage">
            <section className="hero">

                <div className='carousel'>
                    <ControlledCarousel />
                </div>

                <div className='btn-cities'>
                    <CityButton />
                </div>

            </section>
        </div>
    )
}

export default HomePage