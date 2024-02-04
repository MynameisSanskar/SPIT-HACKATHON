import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
function MyMap() {
    const roundedMarker = new L.Icon({
        iconUrl: "marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
        shadowUrl: "marker-shadow.png",
        className: "rounded-marker",
      });
  const position = [19.0760, 72.8777]; // Latitude and Longitude

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "365px", width: "100%" } }
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A marker pointing to latitude {position[0]} and longitude{" "}
          {position[1]}.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MyMap;
