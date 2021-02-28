import React from "react";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet';


import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


export const Prva = () => {
  
  return (
    <MapContainer
  className="markercluster-map"
  center={[51.0, 19.0]}
  zoom={4}
  maxZoom={18}
>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution=''
  />

  {/* Put <MarkerClusterGroup {...props} /> inside react-leaflet after <TileLayer /> */}
  <MarkerClusterGroup>
    <Marker position={[49.8397, 24.0297]} />
    <Marker position={[52.2297, 21.0122]} />
    <Marker position={[51.5074, -0.0901]} />
  </MarkerClusterGroup>
</MapContainer>
  );
};

export default Prva;