// import React from "react";
import { Navbar, Image, Nav } from "react-bootstrap";
import styles from "./header.module.css";
import MediaQuery, { useMediaQuery } from "react-responsive";
const ContactCard = (props) => {
  const navlist = [
    "Homepage",
    "Products",
    "Menu",
    "Lama",
    "Events",
    "Blog",
    "Contact",
  ];
  let quant = props.quant;
  return (
    <>
      <Navbar
        sticky="top"
        expand="md"
        style={{
          color: "white",
          padding: "20px 50px",
        }}
      >
        {/* <div className="d-md-flex flex-column flex-md-row w-100 "> */}
        {/* <div className="container-fluid"> */}
        <Navbar.Brand
          href="#Call"
          // className={`d-flex flex-grow-0 flex-md-grow-2 order-md-1 order-2  align-items-center ${styles.leftbrand}`}
          className={`d-flex flex-grow-0 flex-md-grow-2 align-items-center ${styles.leftbrand}`}
        >
          <div
            className={`p-md-2 rounded-circle ${styles.imgcontainer}`}
            style={{ backgroundColor: "white" }}
          >
            <Image
              src="/images/phone.png"
              className="w-auto"
              alt=""
              style={{ height: "35px" }}
            />
          </div>
          <div
            className={
              "ms-3 d-md-flex d-none flex-column align-items-start justify-content-around px-2 text-white"
            }
          >
            <h5 className={"order fs-6 p-0 m-0"}>Order now</h5>
            <p className={"tel fs-5 p-0 m-0 fw-bold "}>012 345 678</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="order-3"
        />

        <Navbar.Collapse
          className="h-100 flex-md-grow-5 order-md-2 order-3"
          // className="h-100 flex-md-grow-5 "
          id="basic-navbar-nav"
        >
          <Nav className="text-white m-auto h-75 align-items-center">
            {navlist.map((navitem, index) => {
              return navitem == "Lama" ? (
                // <Nav.Link key={index} href="#Lama" className="h-100 p-0">
                <MediaQuery minWidth={768} key={index}>
                  <Image
                    src="./images/logo.png"
                    style={{ height: "60px" }}
                    className="d-md-block d-none"
                    alt="Lama"
                  />
                </MediaQuery>
              ) : (
                // </Nav.Link>
                <Nav.Link
                  key={index}
                  href={`#${navitem}`}
                  className="text-white px-1"
                >
                  {navitem}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand
          className="h-50 p-0 m-0 d-flex flex-grow-0 order-md-3 order-2
          
          text-md-end text-start"
        >
          <Image
            alt=""
            src="./images/cart.png"
            className="p-0 m-0"
            style={{ height: "60px" }}
          ></Image>
          <div className={styles.quant}>{quant}</div>
        </Navbar.Brand>
        {/* </div> */}
        {/* </div> */}
      </Navbar>

      {/* </div> */}
    </>
  );
};

export default ContactCard;
