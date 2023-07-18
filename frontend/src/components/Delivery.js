import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaTruck, FaClock, FaStore, FaWhatsapp } from 'react-icons/fa'

const Delivery = () => {
  return (
    <Container className='delivery'>
      <h2>Options de livraison</h2>
      <Row className='delivery-options'>
        {/* Disposition mobile - Une ligne */}
        <Col xs={12} md={6} lg={3} className='delivery-option'>
          <FaTruck size={30} className='red-icon' />
          <span>Livraison gratuite</span>
        </Col>
        <Col xs={12} md={6} lg={3} className='delivery-option'>
          <FaStore size={30} className='red-icon' />
          <span>Retrait en magasin</span>
        </Col>
        <Col xs={12} md={6} lg={3} className='delivery-option'>
          <FaClock size={30} className='red-icon' />
          <span>Heures d'ouverture/10h - 18h</span>
        </Col>
        <Col xs={12} md={6} lg={3} className='delivery-option'>
          <FaWhatsapp size={30} className='red-icon' />
          <span>Commande sur WhatsApp</span>
        </Col>
      </Row>
    </Container>
  )
}

export default Delivery
