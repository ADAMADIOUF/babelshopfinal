import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='bg-dark text-white mt-5'>
      <Container>
        <Row>
          <Col md={6}>
            <h5>Babel Shop</h5>
            <p>Un endroit pour tous vos besoins d'achat</p>
          </Col>
          <Col md={6}>
            <h5>Contactez-nous</h5>
            <ul className='list-unstyled'>
              <li>Email : info@babelshop.com</li>
              <li>Téléphone : +221750132750</li>
              <li>Adresse : 123, rue Principale, Ville, Dakar,Senegal</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p className='text-center'>
              &copy; {new Date().getFullYear()} Babel Shop. Tous droits
              réservés.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
