import React, { useEffect } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Link, useParams } from 'react-router-dom'
import Rating from '../components/Rating'

const PannierScreen = () => {
 useEffect(() => {
   window.scrollTo(0, 0)
 }, [])
  const { keyword } = useParams()
  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductsQuery({ keyword })

  // Check if products is undefined or null
  if (!products) {
    return <Loader />
  }

  const pannierProducts = products.filter(
    (product) => product.category === 'panier'
  )

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <Message variant='danger'>Error fetching products.</Message>
  }

  return (
    <>
      {!keyword ? (
        <div></div>
      ) : (
        <Link to={`/`} className='btn btn-light mb-4'>
          Retourner
        </Link>
      )}
      <h1>Nos Paniers</h1>
      <Row>
        {pannierProducts.map((product) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Card className='my-3 p-3 rounded'>
                <Link to={`/product/${product._id}`}>
                  <Card.Img
                    src={product.image}
                    variant='top'
                    className='product-image'
                  />
                </Link>
                <Card.Body>
                  <Link to={`/product/${product._id}`}>
                    <Card.Title as='div' className='product-title'>
                      <strong>{product.name}</strong>
                    </Card.Title>
                  </Link>
                  <Card.Text as='div'>
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} avis`}
                    />
                  </Card.Text>
                  <Card.Text as='h3'>{product.price} F CFA</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default PannierScreen
