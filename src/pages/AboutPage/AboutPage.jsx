import './AboutPage.css'
import { Container, Card, ListGroup, Row, Col } from "react-bootstrap"
import oscar from './../../assets/images/Aboutpage/oscar.jpeg'
import lara from './../../assets/images/Aboutpage/lara.jpeg'
import jero from './../../assets/images/Aboutpage/jero.jpg'
import Git from './../../assets/images/Aboutpage/github.png'
import Lkedin from './../../assets/images/Aboutpage/link.png'


const AboutPage = () => {
    return (
        <Container className='AboutPage'>
            <Row>
                <Col md={4}>
                    <Card className='devCard h-100'>
                        <Card.Img className='profileFoto' variant="top" src={lara} />
                        <Card.Body>
                            <Card.Title>Lara Aguerre</Card.Title>
                            <Card.Text>
                                FullStack Developer
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item className='description'>The fucking master of Devs!!!!</ListGroup.Item>
                        </ListGroup>
                        <Card.Body className='bodyCard'>
                            <Card.Img className='imgLink' src={Git} href="#" alt='Lara Aguerre' />
                            <Card.Link className='gitLink' href="https://github.com/Laguerre91/">GitHub</Card.Link>
                            <Card.Img className='imgLink' src={Lkedin} href="#" />
                            <Card.Link className='edinLink' href="https://www.linkedin.com/in/lara-aguerre-developer/">Linkedin</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card Card className='devCard h-100'>
                        <Card.Img className='profileFoto' variant="top" src={jero} />
                        <Card.Body>
                            <Card.Title>Jerónimo Olea</Card.Title>
                            <Card.Text>
                                FullStack Developer
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item className='description'>Seguirá estudiando para ser mejor aún.</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Img className='imgLink' src={Git} alt='Jerónimo Olea' />
                            <Card.Link className='gitLink' href="https://github.com/jeroolea28">GitHub</Card.Link>
                            <Card.Img className='imgLink' src={Lkedin} />
                            <Card.Link className='edinLink' href="#">Linkedin</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card Card className='devCard h-100'>
                        <Card.Img className='profileFoto' variant="top" src={oscar} />
                        <Card.Body>
                            <Card.Title>Oscar Gómez</Card.Title>
                            <Card.Text>
                                FullStack Developer
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item className='description'>Fotógrafo ecommerce, pasándose al otro lado de la web.</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Img className='imgLink' src={Git} alt='Oscar Gómez' />
                            <Card.Link className='gitLink' href="#">GitHub</Card.Link>
                            <Card.Img className='imgLink' src={Lkedin} />
                            <Card.Link className='edinLink' href="#">Linkedin</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )

}
export default AboutPage