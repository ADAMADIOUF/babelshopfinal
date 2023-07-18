import React, { useState } from 'react'
import { Button,Form } from 'react-bootstrap'
import {  useNavigate, useParams } from 'react-router-dom'

const SearchProduct = () => {
 const navigate = useNavigate()
 const{keyword:urlKeyword}=useParams()
 const[keyword,setKeyword]=useState(urlKeyword || "")
 const submitHandler =(e)=>{
e.preventDefault()
if(keyword.trim()){
 setKeyword("")
 navigate(`/search/${keyword}`)
}else{
 navigate("/")
}
 }
  return (
    <Form onSubmit={submitHandler}>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder='Rechercher des produits...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
    </Form>
  )
}

export default SearchProduct