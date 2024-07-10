// import React from "react";
import ContactCard from "./ContactCard";
// import { Container, Navbar, Image } from "react-bootstrap";
// import styles from "./header.module.css";
const Header = () => {
  return (
    <>
      <div id="headerdiv" className="" style={{ height: "100px" }}>
        <ContactCard quant={"0"} style={{ height: "100%" }} />
      </div>
    </>
  );
};

export default Header;
