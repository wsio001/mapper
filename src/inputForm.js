import React from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function InputForm(props) {
    console.log(props)
    return (
        <Form.Group  as = {Row} controlId = {props.controlId}>
                    <Form.Label column sm md lg xl ={4}>{props.text} </Form.Label>
                    <Col sm md lg xl= {8}>
                        <Form.Control name = {props.name} size={props.size}
                        type={props.type} placeholder={props.placeholder}
                        value = {props.value}
                        onChange={props.onChange}
                        />
                    </Col>
                </Form.Group>
    )
}

export default InputForm