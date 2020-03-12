import React from 'react';
import './App.css';
import Mapper from './map';
import LeftBar from "./leftBar";
import AddressList from "./addressList";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <div className="App">

      <div style = {{paddingTop : "50px"}} ></div>

      <Container fluid = {true}>
        <Row>
          <Col  sm md lg xl  = {3}>
            <LeftBar/>
            <AddressList/>
          </Col>
          <Col  sm md lg xl  = {9}>
            <Mapper/>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
