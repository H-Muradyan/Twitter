import React from 'react'
import { Col } from 'react-bootstrap'
import Image  from 'next/image';

const Center_sidebar = () => {
   return (
      <Col className="border min-vh-100 " xl={6}>
         <header className="header">
            <p className="header--title">Home</p>
         </header>

         <div>
            <div className="avatar">
               H
            </div>
            <div>
               <input type="text" placeholder="What`s happening?" />
            </div>
         </div>

      </Col>
   )
}

export default Center_sidebar