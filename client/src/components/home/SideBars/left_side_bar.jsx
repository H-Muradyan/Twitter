import React from 'react';
import smallTwitter from "/public/images/smallTwitter.svg";
import Col from 'react-bootstrap/Col';
import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import { Row } from 'react-bootstrap';
import { IoMdNotifications } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap/Button';



const Left_side_bar = () => {
   return (
      <Col className="border min-vh-100" xl={2}>
         <Image src={smallTwitter} alt="twitter icon" />
         <br />
         <Link href="/home">
               <a>
                  <AiFillHome style={{fontSize: "26px"}}/> 
                  Home
               </a>
         </Link> <br />
         <Link href="/explore">
               <a>
               <FaHashtag style={{fontSize: "26px"}}/>
                  Explore
               </a>
         </Link> <br />
         <Link href="/home">
               <a>
                  <BsFillPersonFill style={{fontSize: "26px"}}/>
                  Profile
               </a>
         </Link> <br />
         <button className="tweet--button">Tweet</button>

         {/* <Row className="d-flex">
            <Col xl={2}> <FaHashtag style={{fontSize: "26px"}}/> </Col>
               <Col xl={10}>Explore</Col>
         </Row>
         <Row className="d-flex">
            <Col xl={2}> <IoMdNotifications style={{fontSize: "26px"}}/> </Col>
               <Col xl={10}>Explore</Col>
         </Row>
         <Row className="d-flex">
            <Col xl={2}> <BsFillPersonFill style={{fontSize: "26px"}}/> </Col>
               <Col xl={10}>Explore</Col>
         </Row> */}
         
      </Col>
   )
}

export default Left_side_bar;