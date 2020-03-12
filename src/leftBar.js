import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AddressList from "./addressList";

export default class leftBar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            bed: 0,
            bath: 0,
            sqt:0,
            minPrice: 0,
            maxPrice: 0,
            type: "Any"
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputSubmit = this.handleInputSubmit.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });
      }
      
      handleInputSubmit(event){
          AddressList.
          event.preventDefault();
      }
    
    render(){
        return(
            <Form onSubmit = {this.handleInputSubmit}> 
                <Form.Group  as = {Row} controlId="formBed">
                    <Form.Label column sm md lg xl ={4}>Bedrooms: </Form.Label>
                    <Col sm md lg xl= {8}>
                        <Form.Control name = 'bed' size="sm" 
                        type="number" placeholder="Enter # of Bedrooms" 
                        value = "2"
                        onChange={this.handleInputChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as = {Row} controlId="formBath">
                    <Form.Label size = "sm" column sm md lg xl ={4}>Bathrooms: </Form.Label>
                    <Col sm md lg xl = {8}>
                        <Form.Control name = 'bath' size="sm" 
                        type="number" placeholder="Enter # of Bathrooms" 
                        value = "2"
                        onChange={this.handleInputChange} />
                    </Col>
                </Form.Group>

                <Form.Group  as = {Row} controlId="formSqt">
                    <Form.Label column sm md lg xl ={4}>Sqt: </Form.Label>
                    <Col sm md lg xl= {8}>
                        <Form.Control name = 'sqt' size="sm" 
                        type="number" placeholder="Enter # of sql" 
                        value = "1500"
                        onChange={this.handleInputChange} />
                    </Col>
                </Form.Group>

                <Form.Group as = {Row} controlId="formMinPrice">
                    <Form.Label column sm md lg xl ={4} >Min Price: </Form.Label>
                    <Col sm md lg xl = {8}>
                        <Form.Control name = 'minPrice' size="sm" 
                        type="number" value = "1000" 
                        onChange={this.handleInputChange} />
                    </Col>
                </Form.Group>

                <Form.Group as = {Row} controlId="formMaxPrice">
                    <Form.Label inline column sm md lg xl ={4} >Max price: </Form.Label>
                    <Col sm md lg xl = {8}>
                        <Form.Control name = 'maxPrice' size="sm" 
                        type="number" value = "3500" 
                        onChange={this.handleInputChange} />
                    </Col>
                </Form.Group>
                
                <Form.Group as = {Row} controlId = "formHouseType">
                    <Form.Label column sm md lg xl = {4}> Type: </Form.Label>
                    <Col sm md lg xl = {8}>
                        <Form.Control as = "select" name = "type" 
                        size = "sm"
                        onChange ={this.handleInputChange}>
                            <option>Any</option>
                            <option>Apartment</option>
                            <option>House</option>
                            <option>Condominium</option>
                            <option>Townhouse</option>
                        </Form.Control>
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm md lg xl ={12} >
                        <Button variant = "outline-dark" type="submit" block >Submit</Button>
                        </Col>
                </Form.Group>
            </Form>
        )
    }
}
