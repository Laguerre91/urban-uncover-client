import ControlledCarousel from './../../components/ControlledCarousel/ControlledCarousel'
import CityButtons from "../../components/CityButtons/CityButtons"

import './HomePage.css'


function HomePage() {


    return (

        <section className="HomePage hero">


            <ControlledCarousel />


            <div className='btn-cities'>
                <CityButtons />
            </div>

        </section>

    )
}

export default HomePage