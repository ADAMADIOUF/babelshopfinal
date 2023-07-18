import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import WhatsAppButton from './components/WhatsAppButton'

const App = () => {
  return (
    <>
      <Header />

      <main className='py-3'>
        <Container>
          <Outlet />
        </Container>
      </main>
<ToastContainer/>
<WhatsAppButton/>
      <Footer />
    </>
  )
}

export default App