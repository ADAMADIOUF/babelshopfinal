import React from 'react'

import{Row,Col} from "react-bootstrap"
import Product from '../components/Product'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Link, useParams } from 'react-router-dom'
import ProductCarousel from '../components/ProductCarousel'
import Delivery from '../components/Delivery'
import Deals from '../components/Deals'
import Banner from '../components/Banner'
import Category from '../components/Category'
const HomeScreen = () => {
  const {  keyword } = useParams()
 const{data:products,isLoading,isError}=useGetProductsQuery({keyword})
 if(isLoading){
  return<Loader/>
 }
 if (isError) {
   return <Message />
 }
  return (
    <>
      {!keyword ? (
        <div>
          <ProductCarousel />
          <Delivery />
          <Deals />
          <Banner />
          <Category />
        </div>
      ) : (
        <Link to={`/`} className='btn btn-light mb-4'>
          Retourner
        </Link>
      )}
      <h1>Produits les plus récents</h1>
      <Row>
        {products.slice(0, 4).map((product) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default HomeScreen