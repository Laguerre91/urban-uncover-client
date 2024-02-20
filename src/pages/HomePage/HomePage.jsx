import ControlledCarousel from './../../components/ControlledCarousel/ControlledCarousel'
import CityButtons from "../../components/CityButtons/CityButtons"

import './HomePage.css'


function HomePage() {


    return (
        <div className="HomePage">
            <section className="hero">

                <div className='carousel'>
                    <ControlledCarousel />
                </div>

                <div className='btn-cities'>
                    <CityButtons />
                </div>

            </section>
        </div>
    )
}

export default HomePage