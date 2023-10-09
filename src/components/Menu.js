import React from 'react'
import {Nav} from "react-bootstrap"

const Menu = () => {
  return (
    <Nav className='d-flex justify-content-center align-items-center bg-warning p-3 fs-3'>
      <Nav.Item as="li">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/Login">Login</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/Register">Register</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Menu