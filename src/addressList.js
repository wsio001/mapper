import React from "react";
import axios from "axios";
export default class AddressList extends React.Component{
    state = {
        addresses:["asdfkjlsal"]
    }

    componentDidMount(){
        let num_bathrooms = 0;
        let num_bedrooms = 0;
        let price = 0;

        
        axios.get(
        "https://www.chapelhillrent.com/site/search/results?search_submitted=1&rent_low=&rent_high=&num_bedrooms=2&num_bathrooms=2&type="
        ).then(res => {console.log(res.data);this.setState({addresses: res.data});});
        }

    render(){
        return(
            <ul>
                <li>{this.state.addresses}</li>
            </ul>
        )
    }
}