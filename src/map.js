import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import key from "./APIKey";

function Map(){
    return(
        <GoogleMap 
        defaultZoom = {10} 
        defaultCenter = {{lat: 35.904613, lng: -79.046761}}
        />
    );

}
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Mapper(){
    return(
        <div style = {{ width: "100vw", height: "100vh"}} >
            <WrappedMap 
            googleMapURL = {'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=' + key}
            loadingElement = {<div style = {{height: '100%'}} />}
            containerElement = {<div style={{ height: '100%' }} />}
            mapElement = {<div style={{ height: '100%' }} />}
            />
        </div>

    );
}
