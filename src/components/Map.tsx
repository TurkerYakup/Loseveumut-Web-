'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Leaflet ikon hatasını çözen klasik ayar
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/833/833474.png', // Kırmızı bir kalp/konum ikonu
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

interface BagisNoktasi {
  id: number;
  title: string;
  lat: number;
  lng: number;
  type: string;
}

export default function Map() {
  const [noktalar, setNoktalar] = useState<BagisNoktasi[]>([]);

  useEffect(() => {
    // Yazdığımız kendi Edge API'mizden veriyi çekiyoruz
    fetch('/api/bagis-noktalari')
      .then(res => res.json())
      .then(data => setNoktalar(data));
  }, []);

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-2xl relative z-0">
      <MapContainer 
        center={[40.6, 29.0]} // Haritanın açılış merkezi (Marmara Bölgesi)
        zoom={8} 
        scrollWheelZoom={false} 
        style={{ height: '100%', width: '100%', zIndex: 0 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {noktalar.map((nokta) => (
          <Marker key={nokta.id} position={[nokta.lat, nokta.lng]} icon={customIcon}>
            <Popup>
              <div className="text-center">
                <strong className="block text-red-600 mb-1">{nokta.title}</strong>
                <span className="text-sm text-gray-600">{nokta.type}</span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}