'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Leaflet'in varsayılan PNG sorununu aşmak için doğrudan SVG ve Tailwind kullanıyoruz
const redPinIcon = L.divIcon({
  className: 'bg-transparent', // Leaflet'in varsayılan beyaz arka planını şeffaf yapıyoruz
  html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-red-600 drop-shadow-xl w-10 h-10 -ml-2 -mt-4">
          <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
         </svg>`,
  iconSize: [40, 40],
  iconAnchor: [20, 40], // İkonun tam sivri ucunun haritadaki koordinata denk gelmesini sağlar
  popupAnchor: [0, -40], // Popup'ın ikonun üstünde açılması için
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
          <Marker key={nokta.id} position={[nokta.lat, nokta.lng]} icon={redPinIcon}>
            <Popup className="rounded-xl">
              <div className="text-center p-1">
                <strong className="block text-red-600 mb-1 text-base">{nokta.title}</strong>
                <span className="text-sm text-slate-600 font-medium">{nokta.type}</span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}