import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'
import Loader from '../components/Loader'
import { Button, Col, Row, Table } from 'react-bootstrap'
import Message from '../components/Message'
import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
} from '../slices/productsApiSlice'
import { Link, useParams } from 'react-router-dom'

const ProductListScreen = () => {
  const { keyword } = useParams()
  const {
    data: products,
    isLoading,
    error,
    refetch,
  } = useGetProductsQuery({ keyword })

  const [createProduct, { isLoading: loadingCreate }] =
    useCreateProductMutation()
  const [deleteProduct, { isLoading: loadingDelete }] =
    useDeleteProductMutation()

  const deleteHandler = async (id) => {
    if (window.confirm('Êtes-vous sûr(e) ?')) {
      try {
        await deleteProduct(id)
        refetch()
        toast.success('Produit supprimé')
      } catch (error) {
        toast.error(error?.data?.message || error.error)
      }
    }
  }

  const createProductHandler = async () => {
    if (
      window.confirm('Êtes-vous sûr(e) de vouloir créer un nouveau produit ?')
    ) {
      try {
        await createProduct()
        refetch()
      } catch (error) {
        toast.error(error?.data?.message || error.error)
      }
    }
  }

  return (
    <>
      {!keyword ? (
        <Row className='align-items-center'>
          <Col>
            <h1>Produits</h1>
          </Col>
          <Col className='text-end'>
            <Button className='btn-sm m-3' onClick={createProductHandler}>
              <FaEdit /> Créer un produit
            </Button>
          </Col>
        </Row>
      ) : (
        <Link to={`/`} className='btn btn-light mb-4'>
          Retourner
        </Link>
      )}

      {loadingCreate || loadingDelete || isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          {keyword && <h1>Résultats de recherche pour "{keyword}"</h1>}
          <Table striped hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NOM</th>
                <th>PRIX</th>
                <th>CATÉGORIE</th>
                <th>MARQUE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant='light' className='btn-sm mx-2'>
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm '
                      onClick={() => deleteHandler(product._id)}
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  )
}

export default ProductListScreen
