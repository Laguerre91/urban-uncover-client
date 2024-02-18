import ControlledCarousel from './../../components/ControlledCarousel/ControlledCarousel'
import CityButton from "../../components/CityButton/CityButton"

import './HomePage.css'


function HomePage() {


    return (
        <div className="HomePage">
            <section className="hero">
                <div className="hero-title">
                    <h1>Urban Uncover</h1>
                </div>
                <ControlledCarousel />
                <CityButton />
            </section>
        </div>
    )
}

export default HomePage