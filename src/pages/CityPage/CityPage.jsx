import ActivitiesList from '../../components/ActivitiesList/ActivitiesList.jsx';
import AddActivityForm from '../../components/AddActivityForm/AddActivityForm.jsx';
import './CityPage.css'

import { Container, Row, Col } from 'react-bootstrap';


const CityPage = () => {
  return (
    <section className='CityPage'>

      <Container className="form-container">

        <Row className="form-row">

          <Col md={{ span: 6, offset: 3 }}>

            <h3>Create a new activity!</h3>
            <hr />

            <AddActivityForm />

          </Col>

        </Row>

        <ActivitiesList />

      </Container>

    </section>
  );
};

export default CityPage;