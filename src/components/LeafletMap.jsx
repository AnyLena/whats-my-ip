import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";


const LeafletMap = ({ userIp }) => {
  useEffect(() => {}, [userIp]);

  const userLat = userIp.location.lat;
  const userLng = userIp.location.lng;

  const position = [userLat, userLng];

  return (
    <div className="map-container">
    <MapContainer
      className="map"
      center={position}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
};

export default LeafletMap;
