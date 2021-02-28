import React, { useEffect, useRef } from "react";
import useScript from "./useScript";

export const Druga = () => {

  const mapElement = useRef(null);
  let map = null;
  const status = useScript(
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyA6vKL6Q4u5ZhGAJlYOMkQZ13pxCUXOe9k'
  );
  const setMarker = (position, title) => {
    const marker = new window.google.maps.Marker({
      position,
      title,
    });
    marker.setMap(map);
  }
  if (status === "ready") {
    map = new window.google.maps.Map(mapElement.current, {
      zoom: 5,
      center: { lat: -25.363, lng: 131.044 }
    });
    setMarker({ lat: -25.363, lng: 131.044 }, "test");
    setMarker({ lat: -24.363, lng: 130.044 }, "test2");
  }
  return (
    <div>
      <div>
      </div>
      <div className="map" ref={mapElement} />
    </div>
  );
}

export default Druga;