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
  id: string | number;
  title: string;
  lat: number;
  lng: number;
  adres: string;
  telefon: string;
  tarih: string;
  calismaSaatleri: string;
  molaSaatleri: string;
}

export default function Map() {
  const [noktalar, setNoktalar] = useState<BagisNoktasi[]>([]);
  const [seciliNokta, setSeciliNokta] = useState<BagisNoktasi | null>(null);

  useEffect(() => {
    // Yazdığımız kendi Edge API'mizden veriyi çekiyoruz
    fetch('/api/bagis-noktalari')
      .then(res => res.json())
      .then(data => setNoktalar(data));
  }, []);

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Üst Kısım: Harita */}
      <div className="w-full h-125 rounded-xl overflow-hidden shadow-2xl border-4 border-white z-0 relative">
        <MapContainer 
          center={[41.0, 29.0]} // İstanbul/Marmara geneli merkez
          zoom={9} 
          scrollWheelZoom={false} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap'
          />
          
          {noktalar.map((nokta) => (
            <Marker 
              key={nokta.id} 
              position={[nokta.lat, nokta.lng]} 
              icon={redPinIcon}
              eventHandlers={{
                click: () => {
                  setSeciliNokta(nokta);
                },
              }}
            >
              <Popup className="rounded-xl min-w-55">
                <div className="text-left p-1">
                  <strong className="block text-red-600 mb-2 border-b border-red-100 pb-1 text-base">{nokta.title}</strong>
                  
                  <div className="space-y-1.5 mt-2 text-sm text-slate-700">
                    <p><span className="font-bold">Adres:</span> {nokta.adres}</p>
                    <p><span className="font-bold">Telefon:</span> {nokta.telefon !== "Belirtilmemiş" ? <a href={`tel:${nokta.telefon.replace(/\s+/g,'')}`} className="text-blue-600 hover:underline">{nokta.telefon}</a> : nokta.telefon}</p>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Alt Kısım: Nokta Detayları (Liste) */}
      <div className="w-full px-2">
        <h3 className="text-2xl font-bold text-slate-800 mb-4 px-2">Bağış Noktası Detayları</h3>
                 
        {seciliNokta ? (
          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-red-600 hover:shadow-lg transition-shadow text-left mb-6 mx-2 animate-in fade-in zoom-in duration-300">
            <h4 className="font-bold text-red-700 text-lg mb-2">{seciliNokta.title}</h4>
                           
            <div className="text-sm text-slate-700 space-y-1.5">
              <p><span className="font-semibold text-slate-900">📍 Adres:</span> {seciliNokta.adres}</p>
              <p><span className="font-semibold text-slate-900">📞 Telefon:</span> {seciliNokta.telefon}</p>
              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center bg-slate-50 p-2 rounded mt-2 gap-2 text-xs">
                <span>📅 <b>Tarih:</b> {seciliNokta.tarih}</span>
                <span>⏰ <b>Mesai:</b> {seciliNokta.calismaSaatleri}</span>
                <span>☕ <b>Mola:</b> {seciliNokta.molaSaatleri}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-100 p-8 rounded-xl text-center text-slate-500 font-medium mx-2 mb-6 border-2 border-dashed border-slate-200">
            👆 Haritadan bir Kızılay bağış noktasına tıklayarak adres, telefon ve mesai detaylarını burada görebilirsiniz.
          </div>
        )}
      </div>
    </div>
  );
}