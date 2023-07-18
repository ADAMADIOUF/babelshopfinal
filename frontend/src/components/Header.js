import React from 'react'
import { Navbar, Nav, Container, Badge, NavDropdown, Image } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useLogoutMutation } from '../slices/usersApiSlice'
import { logout } from '../slices/authSlice'
import SearchProduct from './SearchProduct'
import logo from "../assets/logo1.png"
const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { cartItems } = useSelector((state) => state.cart)
  const { userInfo } = useSelector((state) => state.auth)
  const [logoutApiCall] = useLogoutMutation()
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate(`/login`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <header>
      <Navbar
        bg='#E57373'
        variant='dark'
        expand='lg'
        collapseOnSelect
        style={{ backgroundColor: 'red' }}
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <Image src={logo} className='logo'/>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <SearchProduct />
              <LinkContainer to='/tass'>
                <Nav.Link>Tasses </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/pannier'>
                <Nav.Link>Paniers </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/table'>
                <Nav.Link>Tables</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/moustiquaire'>
                <Nav.Link>Moustiquaires </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/vaisselle'>
                <Nav.Link>Vaisselles </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <FaShoppingCart /> Panier
                  {cartItems.length > 0 && (
                    <Badge pill bg='danger' style={{ marginLeft: '5px' }}>
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profil</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Se déconnecter
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <FaUser /> Connexion
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Produits</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Commandes</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Utilisateurs</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
