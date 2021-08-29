import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useEffect } from "react";
import MapGL,{Marker} from "react-map-gl";
import axios from 'axios';
import { FaMapMarkerAlt } from 'react-icons/fa';
const MAPBOX_TOKEN = "pk.eyJ1IjoiaG9haXRyaW5oNDU5IiwiYSI6ImNrcmRiNzE3MDVhengycHFocm93M2pqaHAifQ.zmbKPk_8PnkSFA0L0GERYA";

function MapUserComponent(props) {
  const [addressMarker, setaddressMarker] = useState([])
  const addressdata = [{
    id: 1, address:props.dataMap
  },
]

  useEffect(()=>{
    let newaddressdata = [];
    addressdata.map((address)=>{
      axios.
      get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address.address}.json?access_token=pk.eyJ1IjoiaG9haXRyaW5oNDU5IiwiYSI6ImNrcmRiNzE3MDVhengycHFocm93M2pqaHAifQ.zmbKPk_8PnkSFA0L0GERYA`
      )
      .then(function (response) {
        // handle success
        
        newaddressdata.push({...address, 
        longitude: response.data.features[0].center[0],
        latitude: response.data.features[0].center[1],
        }); 
        setaddressMarker(newaddressdata);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
         // always executed
      });   
    });
    
  },[])
  const [viewport, setViewport] = useState({
    latitude: 14.623946300351609,
    longitude: 108.40424015960069,
    zoom: 4
  });
  return (
    <div style={{ height: "100%", width: "100%"}}>
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport)=>setViewport(viewport)}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      > 
      {addressMarker.map((addressm)=>
      <Marker
      latitude={addressm.latitude}
      longitude={addressm.longitude}
      >
        <FaMapMarkerAlt style={{color:"red", fontSize:30}}/>
      </Marker>)}
      </MapGL>
    </div>
  );
  
}
export default MapUserComponent;