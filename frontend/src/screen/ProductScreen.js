import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import WhatsAppWidget from '../components/WhatsApp'
import 'react-whatsapp-widget/dist/index.css'
import {
  Form,
  Button,
  Card,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap'
import Rating from '../components/Rating'
import {
  useCreateReviewMutation,
  useGetProductByIdQuery,
} from '../slices/productsApiSlice'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { addToCart } from '../slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const ProductScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
const [showWhatsAppWidget, setShowWhatsAppWidget] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [qty, setQty] = useState(1)
  const { id: productId } = useParams()
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const {
    data: product,
    isLoading,
    refetch,
    isError,
  } = useGetProductByIdQuery(productId)
  const [createReview, { isLoading: loadingProductReview }] =
    useCreateReviewMutation()
  const { userInfo } = useSelector((state) => state.auth)

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }))
    navigate(`/cart`)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      await createReview({
        productId,
        rating,
        comment,
      }).unwrap()
      refetch()
      toast.success('Avis envoyé')
      setRating(0)
      setComment('')
    } catch (error) {
      toast.error(error?.data?.message || error.error)
    }
  }

    const handleAddToCart = () => {
      const message = `Je veux acheter ${product.name} x${qty}`
      const url = `https://wa.me/+221750132750?text=${encodeURIComponent(
        message
      )}`
      window.open(url, '_blank')
    }


  if (isLoading) {
    return <Loader />
  }
  if (isError) {
    return <Message />
  }

  return (
    <>
      <Link to={`/`} className='btn btn-light my-3'>
        Retour
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} avis`}
              />
            </ListGroupItem>
            <ListGroupItem>Prix: {product.price} F CFA</ListGroupItem>
            <ListGroupItem>Description: {product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <Row>
                  <Col>Prix</Col>
                  <Col>
                    <strong> {product.price} F CFA</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Statut</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? 'En stock' : 'Indisponible'}
                    </strong>
                  </Col>
                </Row>
              </ListGroupItem>
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Quantité</Col>
                    <Col>
                      <Form.Control
                        as='select'
                        value={qty}
                        onChange={(e) => setQty(Number(e.target.value))}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroupItem>
                <Button
                  className='btn-block add-to-cart'
                  type='button'
                  disabled={product.countInStock === 0}
                  onClick={addToCartHandler}
                >
                  Ajouter au panier
                </Button>
              </ListGroupItem>
              <ListGroupItem>
                <Button onClick={handleAddToCart} className='whatsapp'>
                  acheter par whatsapp
                </Button>
                {showWhatsAppWidget && (
                  <WhatsAppWidget
                    phoneNumber='+221750132750'
                    message={`
je veux acheter ${product.name}`}
                  />
                )}
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row className='review'>
        <Col md={6}>
          <h2>Avis</h2>
          {product.reviews.length === 0 && <Message>Aucun avis</Message>}
          <ListGroup variant='flush'>
            {product.reviews.map((review) => (
              <ListGroupItem key={review._id}>
                <strong>{review.name}</strong>
                <Rating value={review.rating} />
                <p>{review.createdAt.substring(0, 10)}</p>
                <p>{review.comment}</p>
              </ListGroupItem>
            ))}
            <ListGroupItem>
              <h2>Écrire un avis</h2>
              {loadingProductReview && <Loader />}
              {userInfo ? (
                <Form onSubmit={submitHandler}>
                  <Form.Group controlId='rating' className='my-2'>
                    <Form.Label>Évaluation</Form.Label>
                    <Form.Control
                      as='select'
                      value={rating}
                      onChange={(e) => setRating(Number(e.target.value))}
                    >
                      <option value=''>Sélectionner...</option>
                      <option value='1'>1-Mauvais</option>
                      <option value='2'>2-Passable</option>
                      <option value='3'>3-Bon</option>
                      <option value='4'>4-Très bon</option>
                      <option value='5'>5 - Excellent</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId='comment' className='my-2'>
                    <Form.Label>Commentaire</Form.Label>
                    <Form.Control
                      as='textarea'
                      row='3'
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Button
                    disabled={loadingProductReview}
                    type='submit'
                    variant='primary'
                  >
                    Soumettre
                  </Button>
                </Form>
              ) : (
                <Message>
                  Veuillez<Link to={`/login`}> vous connecter</Link> pour écrire
                  un avis
                </Message>
              )}
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
