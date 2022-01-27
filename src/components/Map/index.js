import {React} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './index.css'


const Map = () => {
  return (
     <MapContainer center={[25.1124, 55.1390]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[25.1124,55.1390]}>
          <Popup>
          Palm Jumeirah
          </Popup>
        </Marker>
      </MapContainer>
    )
}

export default Map;