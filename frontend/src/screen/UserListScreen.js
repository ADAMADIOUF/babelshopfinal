import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { FaTrash, FaEdit, FaCheck, FaTimes } from 'react-icons/fa'
import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from '../slices/usersApiSlice'
import Loader from '../components/Loader'
import { Button, Table } from 'react-bootstrap'
import Message from '../components/Message'
import { toast } from 'react-toastify'

const UserListScreen = () => {
  const { data: users, isLoading, error, refetch } = useGetUsersQuery()
  const [deleteUser, { isLoading: loadingDelete }] = useDeleteUserMutation()

  const deleteHandler = async (id) => {
    if (window.confirm('Êtes-vous sûr(e) ?')) {
      try {
        await deleteUser(id)
        refetch()
        toast.success('Utilisateur supprimé')
      } catch (error) {
        toast.error(error?.data?.message || error.message)
      }
    }
  }

  return (
    <>
      <h1>Utilisateurs</h1>
      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error.message}</Message>
      ) : (
        <Table striped hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOM</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th>VERIFIÉ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <FaCheck style={{ color: 'green' }} />
                  ) : (
                    <FaTimes style={{ color: 'red' }} />
                  )}
                </td>
                <td>
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant='light' className='btn-sm'>
                      <FaEdit />
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(user._id)}
                  >
                    <FaTrash style={{ color: 'white' }} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default UserListScreen
