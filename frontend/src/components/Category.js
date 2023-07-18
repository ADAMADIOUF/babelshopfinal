import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import v from "../assets/v.png"
import p from '../assets/p.png'
import tb from '../assets/tb.png'
import t from '../assets/t.png'

const Category = () => {
  return (
    <Container fluid className='categories'>
      <h2 className='text-center mb-4'>Categories</h2>
      <Row>
        <Col xs={6} md={3}>
          <Link to='/vaisselle'>
            <Card className='category-card'>
              <Card.Img src={v} alt='Category 1' />
              <Card.Body>
                <Card.Title>Ensembles de vaisselle élégants :</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col xs={6} md={3}>
          <Link to='/pannier'>
            <Card className='category-card'>
              <Card.Img src={p} alt='Category 2' />
              <Card.Body>
                <Card.Title>panier fruits et légumes</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col xs={6} md={3}>
          <Link to='/table'>
            <Card className='category-card'>
              <Card.Img src={tb} alt='Category 3' />
              <Card.Body>
                <Card.Title>table base</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col xs={6} md={3}>
          <Link to='/tass'>
            <Card className='category-card'>
              <Card.Img src={t} alt='Category 4' />
              <Card.Body>
                <Card.Title>tasse</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Category
