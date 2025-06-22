// HotelMap.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
});

// Dummy hotel locations
const hotels = [
  {
    name: "Hotel Haven, Dhaka",
    position: [23.8103, 90.4125],
  },
  {
    name: "Ocean View, Chattogram",
    position: [22.3569, 91.7832],
  },
  {
    name: "Hilltop Resort, Sylhet",
    position: [24.8949, 91.8687],
  },
];

// This ensures the map size adjusts properly when inside a carousel
function FixMapSize() {
  const map = useMap();
  setTimeout(() => {
    map.invalidateSize();
  }, 100);
  return null;
}

const HotelMap = () => {
  return (
    <div className="h-[400px] w-full rounded-xl overflow-hidden shadow-lg relative z-0">
      <MapContainer
        center={[23.8103, 90.4125]}
        zoom={7}
        scrollWheelZoom={true}
        wheelPxPerZoomLevel={150}
        className="h-full w-full z-0"
      >
        <FixMapSize />
       <TileLayer
  attribution='&copy; <a href="https://carto.com/">CARTO</a>'
  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
/>

        {hotels.map((hotel, index) => (
          <Marker key={index} position={hotel.position} icon={customIcon}>
            <Popup>{hotel.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default HotelMap;
