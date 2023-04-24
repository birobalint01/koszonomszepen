import axios from "axios";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

function Map() {
  const [Events, setEvents] = useState([]);

  const getEvents = async () => {
  
    await axios.get("http://localhost:5173/api/esemenyek").then((response) => {
  
    setEvents(response.data);
  
  });
  
};

  useEffect(() => {

    getEvents();

  }, []);

  return (
    <div style={{ height: auto }}>

      <MapContainer

        style={{
        
          height: "100%",
        
        }}
        center={[0, 0]}
        zoom={13}
        scrollWheelZoom={false}
      >
        
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {Events.length > 0 &&
        
        Events.map((Event) => {
        
          return (
        
        <Marker position={[0, 0]} key={Event.id}>
        
              <Popup>{<p>{Event.nev}</p>}</Popup>
        
        </Marker>
        
        );
        
        })}
      
      </MapContainer>
    
    </div>
  
  );

}

export default Map;