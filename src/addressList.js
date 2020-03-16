import React from "react";
import axios from "axios";
export default class AddressList extends React.Component{
    state = {
        addresses:[]
    }

    createList(prop){
        console.log(prop)
        // for (var i = 1; i < 15; i++) {
        //     let query = "search_submitted=1"
        //     + "&rent_low=" + prop.minPrice
        //     + "&rent_high=" + prop.maxPrice
        //     + "num_bedrooms=" + prop.bed
        //     + "num_bathrooms=" + prop.bath
        //     + "&type=" + ((prop.type === "Any") ? "" : prop.type)

        //     let url = 'https://www.chapelhillrent.com/site/search/results?' + query;
        //     url = url + '&page_size=25&page_number=' + i;
        //     console.log(url);
        //     axios.get(
        //         url).then(res => {console.log(res.data);this.setState({addresses: res.data});});
        // }
    }

    /*
    processSiteData(data) {
        var site = $(data);
        var table = site.find("table");
        var listings = table.find("td.lg");
        //count += listings.length;
        var addresses = table.find("td.lg").map((i,e) => { 
          var listing = e.childNodes[1]
          var label = listing.childNodes[1].getAttribute('href');
          var link = '<a target="_blank" href="https://www.chapelhillrent.com' + label + '" >link</a>';
          var addressElement = listing.childNodes[5];
          if (typeof addressElement != 'undefined' && addressElement.getAttribute('class') == 'addr') {
            var address = addressElement.innerHTML;
            addMarkerFromAddress(address, link);
            count += 1;
            console.log(address);
          }
        });
        //addresses.map((i, address) => {
        //  addMarkerFromAddress(address);
        //  console.log(address); 
        //})
        console.log("Total items found: " + count);
    }
    */

    render(){
        return(
            <ul>
                <li>{this.state.addresses}</li>
            </ul>
        )
    }
}