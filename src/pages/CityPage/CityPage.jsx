import ActivitiesList from '../../components/ActivitiesList/ActivitiesList.jsx';
import AddActivityForm from '../../components/AddActivityForm/AddActivityForm.jsx';
import './CityPage.css'

import { Container, Row, Col } from 'react-bootstrap';


const CityPage = () => {
  return (
    <section className='CityPage'>

      <Container className="form-container">

        <ActivitiesList />

      </Container>

    </section>
  );
};

export default CityPage;