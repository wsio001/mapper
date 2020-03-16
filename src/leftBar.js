import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AddressList from "./addressList";
import InputForm from './inputForm';

export default class leftBar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            bed: "0",
            bath: "0",
            sqt:"0",
            minPrice: "0",
            maxPrice: "0",
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
          AddressList.createList(this.state);
          event.preventDefault();
      }
    
    render(){
        return(
            <Form onSubmit = {this.handleInputSubmit}> 
                <InputForm 
                controlId = "formBed"
                text = "Bedrooms: "
                name = "bed"
                size = "sm"
                type = "number"
                placeholder = "Enter # of Bedrooms"
                value = "2"
                onChange = {this.handleInputChange}
                />

                <InputForm 
                controlId = "formBath"
                text = "Bathrooms: "
                name = "bath"
                size = "sm"
                type = "number"
                placeholder = "Enter # of Bathrooms"
                value = "2"
                onChange = {this.handleInputChange}
                />
                <InputForm 
                controlId = "formSqt"
                text = "Sqt: "
                name = "sqt"
                size = "sm"
                type = "number"
                placeholder = "Enter # of sql"
                value = "1500"
                onChange = {this.handleInputChange}
                />

                <InputForm 
                controlId = "formMinPrice"
                text = "Min Price: "
                name = "minPrice"
                size = "sm"
                type = "number"
                placeholder = ""
                value = "1000"
                onChange = {this.handleInputChange}
                />

                <InputForm 
                controlId = "formMaxPrice"
                text = "Max Price: "
                name = "maxPrice"
                size = "sm"
                type = "number"
                placeholder = ""
                value = "3500"
                onChange = {this.handleInputChange}
                />
                
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
