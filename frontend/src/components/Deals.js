import React, { useState, useEffect } from 'react'
import Message from './Message'
import Loader from './Loader'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Rating from './Rating'

const Deals = () => {
  const [startIndex, setStartIndex] = useState(0)
  const { keyword } = useParams()
  const { data: products, isLoading, error } = useGetProductsQuery({ keyword })

  const itemsPerPageMobile = 1
  const itemsPerPageTablet = 2
  const itemsPerPageDesktop = 3
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageMobile)

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      if (screenWidth >= 992) {
        setItemsPerPage(itemsPerPageDesktop)
      } else if (screenWidth >= 768) {
        setItemsPerPage(itemsPerPageTablet)
      } else {
        setItemsPerPage(itemsPerPageMobile)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <Message />
  }

  const dealsProducts = products.filter((product) => product.brand === 'deals')
  const totalPages = Math.ceil(dealsProducts.length / itemsPerPage)

  const handleNext = () => {
    setStartIndex(
      (prevIndex) => (prevIndex + itemsPerPage) % dealsProducts.length
    )
  }

  const handlePrev = () => {
    setStartIndex(
      (prevIndex) =>
        (prevIndex - itemsPerPage + dealsProducts.length) % dealsProducts.length
    )
  }

  const visibleProducts = dealsProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  return (
    <>
      {!keyword ? (
        <h2 className='title-black'>Meilleures offres</h2>
      ) : (
        <Link to={`/`} className='btn btn-light mb-4'>
          Retour
        </Link>
      )}

      {dealsProducts.length === 0 ? (
        <Message variant='info'>
          Aucune offre spéciale disponible pour le moment.
        </Message>
      ) : (
        <>
          <Row className='container-deals'>
            {visibleProducts.map((product) => (
              <Col key={product._id} xs={12} md={6} lg={4}>
                <Link to={`/product/${product._id}`}>
                  <div className='offer-badge'>Offres</div>
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
                      <Card.Text as='h3'>${product.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
          <div className='slider-buttons'>
            <Button onClick={handlePrev} disabled={startIndex === 0} className='btn-slider' >
              Précédent
            </Button>
            <Button
              onClick={handleNext}
              disabled={startIndex + itemsPerPage >= dealsProducts.length}
             className='btn-slider'>
              Suivant
            </Button>
          </div>
        </>
      )}
    </>
  )
}

export default Deals
