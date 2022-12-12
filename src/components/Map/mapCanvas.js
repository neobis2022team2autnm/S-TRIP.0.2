import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet'
import L from "leaflet"






const ResetCenterMap = (props)=>{

    const {showMarker}= props;
    const map = useMap()

    useEffect(()=>{
        if(showMarker){
            map.setView(
             L.latLng(showMarker?.lat, showMarker?.lon),
             map.getZoom(),
             {animate:true}
            )
         }
    },[showMarker,map])
   
    
    return null
 }


const MapCanvas = (props) => {
    const showMarker = props.selectPlace;
    const {position} = props;
    const positionPlace = [props.selectPlace?.lat, props.selectPlace?.lon];
     console.log(positionPlace);
     

    return (
    <div className='flex justify-center'>
        <MapContainer center={position} zoom={15} scrollWheelZoom={false} 
          
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
              {showMarker !==null &&(
                
                  <Marker position={positionPlace}>
                  <Popup>
                   A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
              </Marker>
          
              )} 
              <ResetCenterMap showMarker={showMarker}/>


        </MapContainer>
    </div>

    )
}

export default MapCanvas;