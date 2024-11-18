import { Container, Row, Col } from 'react-bootstrap'

import './AboutUsPage.css'

const AboutUsPage = () => {

    return (
        <div className="AboutUsPage m-5">
            <Container>
                <Row>
                    <Col md="5" className='image'>
                    </Col>
                    <Col/>
                    <Col Col md="6">
                    <h1 className='mb-5'>Sobre PlayUp</h1>
                    <p>En nuestra plataforma, nos especializamos en conectar a entusiastas de los juegos de mesa, ofreciendo una solución innovadora para planificar y participar en actividades relacionadas con esta apasionante afición.</p>
                    <p>Somos Iván Blanco y Elena Frontiñán, profesionales con una sólida trayectoria en comunicación audiovisual  y diseño de producto. Nuestra experiencia y pasión por los juegos de mesa nos han llevado a desarrollar este proyecto con el objetivo de facilitar la organización de eventos y fomentar la interacción entre jugadores.</p>
                    <p>Nuestro compromiso es ofrecer una plataforma intuitiva y funcional que potencie la experiencia de los usuarios y permita a las comunidades de jugadores crecer y prosperar.  🎲</p>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default AboutUsPage