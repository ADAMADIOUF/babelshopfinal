import React, { useState } from 'react'
import FormContainer from '../components/FormContainer'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { savesShippingAddress } from '../slices/cartSlice'
import CheckoutSteps from '../components/CheckoutSteps'

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
  const [address, setAddress] = useState(shippingAddress?.address || '')
  const [city, setCity] = useState(shippingAddress?.city || '')
  const [postalCode, setPostalCode] = useState(
    shippingAddress?.postalCode || ''
  )
  const [country, setCountry] = useState(shippingAddress?.country || '')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitHandler = () => {
    dispatch(savesShippingAddress({ address, city, postalCode, country }))
    navigate(`/payment`)
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Livraison</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address' className='my-2'>
          <Form.Label>Adresse</Form.Label>
          <Form.Control
            type='text'
            placeholder='Entrez votre adresse'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='city' className='my-2'>
          <Form.Label>Ville</Form.Label>
          <Form.Control
            type='text'
            placeholder='Entrez votre ville'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='postalCode' className='my-2'>
          <Form.Label>Code postal</Form.Label>
          <Form.Control
            type='text'
            placeholder='Entrez votre code postal'
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='country' className='my-2'>
          <Form.Label>Pays</Form.Label>
          <Form.Control
            type='text'
            placeholder='Entrez votre pays'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary' className='my-2'>
          Continuer
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
