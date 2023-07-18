import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import t1 from '../assets/table.png'
import m from '../assets/m.png'

const Banner = () => {
  return (
    <Container fluid>
      <Row className='banner-row'>
        <Col xs={12} md={8}>
          <Link to='/table'>
            <div className='banner-item'>
              <img src={t1} alt='Première Image' className='banner-image-big' />
              <div
                className='banner-description'
                style={{ textDecoration: 'none' }}
              >
                <h2>Tables basses fonctionnelles et tendance :</h2>
                <p>
                  Ajoutez une touche de style à votre salon avec nos tables
                  basses fonctionnelles et tendance. Nos tables basses sont
                  conçues pour répondre à vos besoins quotidiens tout en
                  apportant une touche d'élégance à votre espace de vie.
                  Choisissez parmi une variété de designs et de matériaux, y
                  compris des tables basses en bois massif, en verre ou en
                  métal, pour compléter votre décor. Offrez-vous un espace
                  pratique et esthétique avec nos tables basses de qualité.
                </p>
                <Button variant='primary add-to-cart'>
                  Acheter maintenant
                </Button>
              </div>
            </div>
          </Link>
        </Col>
        <Col xs={12} md={4}>
          <Link to='/moustiquaire'>
            <div className='banner-item'>
              <img
                src={m}
                alt='Deuxième Image'
                className='banner-image-small'
              />
              <div className='banner-description'>
                <h2>Moustiquaires pour des nuits paisibles :</h2>
                <p>
                  Protégez-vous des moustiques et autres insectes nuisibles avec
                  nos moustiquaires de haute qualité. Fabriquées à partir de
                  matériaux résistants, ces moustiquaires vous offrent un
                  sommeil paisible sans les désagréments des piqûres d'insectes.
                  Faciles à installer et à entretenir, nos moustiquaires sont
                  idéales pour une utilisation dans la chambre à coucher, le
                  salon ou même en extérieur lors de vos activités en plein air.
                  Profitez d'une nuit de sommeil réparateur grâce à nos
                  moustiquaires fiables.
                </p>
                <Button variant='primary add-to-cart'>
                  Acheter maintenant
                </Button>
              </div>
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Banner
