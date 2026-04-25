'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Sabit merkez için hastane ikonu (turuncu konsept)
const hospitalIcon = L.divIcon({
  className: 'bg-transparent',
  html: `<div style="position:relative;width:36px;height:36px;margin-left:-18px;margin-top:-18px">
    <div style="background:#ea580c;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(0,0,0,0.35)">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" style="width:20px;height:20px">
        <path d="M19.5 3.75H4.5A.75.75 0 003.75 4.5v15a.75.75 0 00.75.75h4.5V15h3v5.25H18a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75zM9 13.5H7.5V12H9v1.5zm0-3H7.5V9H9v1.5zm1.5-3h-3V6h3v1.5zm3 6H12V15h1.5v-1.5zm0-3H12V12h1.5v1.5zm0-3H12V9h1.5v1.5zm0-3h-3V6h3v1.5z"/>
      </svg>
    </div>
  </div>`,
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -22],
});

// Gezici araç/tır için araba ikonu (turuncu konsept)
const carIcon = L.divIcon({
  className: 'bg-transparent',
  html: `<div style="position:relative;width:36px;height:36px;margin-left:-18px;margin-top:-18px">
    <div style="background:#f97316;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(0,0,0,0.35)">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" style="width:20px;height:20px">
        <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875H3a3 3 0 106 0h3.75a3 3 0 106 0h.375a1.875 1.875 0 001.875-1.875V15H13.5z"/>
        <path d="M14.25 4.5h-1.5v.75h1.5V4.5zM15 6.375V13.5h6.75V9.375L18.75 6.375H15zM6 18a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm10.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
      </svg>
    </div>
  </div>`,
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -22],
});

// Çadır ikonu (turuncu konsept)
const tentIcon = L.divIcon({
  className: 'bg-transparent',
  html: `<div style="position:relative;width:36px;height:36px;margin-left:-18px;margin-top:-18px">
    <div style="background:#f97316;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(0,0,0,0.35)">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" style="width:20px;height:20px">
        <path d="M11.134 2.146a1 1 0 011.732 0l9 16A1 1 0 0121 19.5h-5v-5a1 1 0 10-2 0v5H10v-5a1 1 0 10-2 0v5H3a1 1 0 01-.866-1.354l9-16z"/>
      </svg>
    </div>
  </div>`,
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -22],
});

const getIcon = (ekipTipi: number) => {
  if (ekipTipi === 1) return hospitalIcon;
  if (ekipTipi === 2) return tentIcon;
  return carIcon;
};

const iller: Record<number, string> = {
  1: 'ADANA', 2: 'ADIYAMAN', 3: 'AFYONKARAHİSAR', 4: 'AĞRI', 5: 'AMASYA', 6: 'ANKARA', 7: 'ANTALYA', 8: 'ARTVİN', 9: 'AYDIN', 10: 'BALIKESİR', 11: 'BİLECİK', 12: 'BİNGÖL', 13: 'BİTLİS', 14: 'BOLU', 15: 'BURDUR', 16: 'BURSA', 17: 'ÇANAKKALE', 18: 'ÇANKIRI', 19: 'ÇORUM', 20: 'DENİZLİ', 21: 'DİYARBAKIR', 22: 'EDİRNE', 23: 'ELAZIĞ', 24: 'ERZİNCAN', 25: 'ERZURUM', 26: 'ESKİŞEHİR', 27: 'GAZİANTEP', 28: 'GİRESUN', 29: 'GÜMÜŞHANE', 30: 'HAKKARİ', 31: 'HATAY', 32: 'ISPARTA', 33: 'MERSİN', 34: 'İSTANBUL', 35: 'İZMİR', 36: 'KARS', 37: 'KASTAMONU', 38: 'KAYSERİ', 39: 'KIRKLARELİ', 40: 'KIRŞEHİR', 41: 'KOCAELİ', 42: 'KONYA', 43: 'KÜTAHYA', 44: 'MALATYA', 45: 'MANİSA', 46: 'KAHRAMANMARAŞ', 47: 'MARDİN', 48: 'MUĞLA', 49: 'MUŞ', 50: 'NEVŞEHİR', 51: 'NİĞDE', 52: 'ORDU', 53: 'RİZE', 54: 'SAKARYA', 55: 'SAMSUN', 56: 'SİİRT', 57: 'SİNOP', 58: 'SİVAS', 59: 'TEKİRDAĞ', 60: 'TOKAT', 61: 'TRABZON', 62: 'TUNCELİ', 63: 'ŞANLIURFA', 64: 'UŞAK', 65: 'VAN', 66: 'YOZGAT', 67: 'ZONGULDAK', 68: 'AKSARAY', 69: 'BAYBURT', 70: 'KARAMAN', 71: 'KIRIKKALE', 72: 'BATMAN', 73: 'ŞIRNAK', 74: 'BARTIN', 75: 'ARDAHAN', 76: 'IĞDIR', 77: 'YALOVA', 78: 'KARABÜK', 79: 'KİLİS', 80: 'OSMANİYE', 81: 'DÜZCE'
};

export default function Map() {
  const [gosterilecekNoktalar, setGosterilecekNoktalar] = useState<any[]>([]);
  const [seciliNokta, setSeciliNokta] = useState<any>(null);

  useEffect(() => {
    // Bugünün tarihini hesapla (YYYY-MM-DD)
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    const bugun = `${yyyy}-${mm}-${dd}`;

    const KIZILAY_API_URL = 'https://mobilwebapi.kizilay.org.tr/api/BloodTeam/0';
    fetch(KIZILAY_API_URL)
      .then((res) => res.json())
      .then((rawData) => {
        const formatSaat = (saatString: string) => (saatString ? saatString.substring(11, 16) : '-');
        const formatTarih = (tarihString: string) => (tarihString ? tarihString.substring(0, 10) : '-');

        const islenmisVeriler = rawData
          .map((item: any, index: number) => {
            const ilAdi = iller[item.ilId] || '';
            const ilceAdi = item.ilceAd || '';
            let hamAdres = (item.adres || 'Adres belirtilmemiş.').trim();
            
            // Eğer adres içinde il adı zaten yazmıyorsa sonuna ekle
            if (ilAdi && ilceAdi && !hamAdres.toUpperCase().includes(ilAdi)) {
              hamAdres = `${hamAdres} - ${ilceAdi} / ${ilAdi}`;
            }

            const telefonlar = (item.telefon || '')
              .split(/[-/,]/)
              .map((p: string) => {
                let t = p.trim();
                if (!t) return '';
                // Remove all leading zeros to normalize
                t = t.replace(/^0+/, '');
                const digits = t.replace(/\D/g, '');
                // Add exactly one leading zero for standard 10-digit codes (not 444)
                if (digits.length === 10 && !digits.startsWith('444')) {
                  return '0' + t;
                }
                return t;
              }).filter(Boolean);

            return {
              id: item.ekipID || index,
              title: item.ekipAdi || 'Kızılay Bağış Noktası',
              lat: item.koordinatLatitude,
              lng: item.koordinatLongitude,
              adres: hamAdres,
              telefonlar: telefonlar,
            tarih: formatTarih(item.tarih),
            calismaSaatleri: `${formatSaat(item.baslangicSaati)} - ${formatSaat(item.bitisSaati)}`,
            baslamaSaati: formatSaat(item.baslangicSaati),
            bitisSaati: formatSaat(item.bitisSaati),
            molaSaatleri:
              item.araBaslangicSaati && item.araBitisSaati && item.araBaslangicSaati.includes('T')
                ? `${formatSaat(item.araBaslangicSaati)} - ${formatSaat(item.araBitisSaati)}`
                : 'Yok',
            ulasim: item.ulasimYontemleri && item.ulasimYontemleri.length > 0 
                ? item.ulasimYontemleri.map((u: any) => u.aciklama).join(', ') 
                : '',
            ekipTipi: item.ekipTipi,
            donanimliMi: item.aferezAlinabilir,
          };
        })
          .filter((nokta: any) => nokta.lat > 35 && nokta.lng > 25)
          .filter((nokta: any) => {
             const isSabitMerkez = nokta.ekipTipi === 1;
             const isGezici = nokta.tarih === bugun && nokta.ekipTipi !== 1;
             return isSabitMerkez || isGezici;
          });

        setGosterilecekNoktalar(islenmisVeriler);
      })
      .catch((err) => console.error('Veri çekilemedi:', err));
  }, []);

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Harita */}
      <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-2xl border-4 border-white z-0 relative">
        <MapContainer
          center={[41.0082, 28.9784]}
          zoom={10}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap"
          />

          {gosterilecekNoktalar.map((nokta) => (
            <Marker
              key={nokta.id}
              position={[nokta.lat, nokta.lng]}
              icon={getIcon(nokta.ekipTipi)}
              eventHandlers={{
                click: () => setSeciliNokta(nokta),
              }}
            >
              <Popup className="rounded-xl">
                <div className="text-center p-1">
                  <strong className="block text-orange-600 mb-1 text-base">{nokta.title}</strong>
                  <div className="bg-slate-50 p-2 rounded text-xs text-left space-y-1">
                    <p>
                      <b>Mesai:</b> {nokta.calismaSaatleri}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <b>Telefon:</b>{' '}
                      {nokta.telefonlar.length > 0 ? (
                        nokta.telefonlar.map((tel: string, i: number) => (
                          <span key={i}>
                            {i > 0 && ' / '}
                            <a href={`tel:${tel.replace(/\s+/g, '')}`} className="text-blue-600 hover:underline">
                              {tel}
                            </a>
                          </span>
                        ))
                      ) : (
                        <span>Belirtilmemiş</span>
                      )}
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Seçili Nokta Detayları */}
      <div className="w-full mt-2">
        <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center justify-between">
          <span>📍 Bağış Noktası Detayı</span>
        </h3>

        {seciliNokta ? (
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-all text-left">
             <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${seciliNokta.ekipTipi === 1 ? 'bg-orange-100 text-orange-700' : 'bg-orange-100 text-orange-600'}`}>
                {seciliNokta.ekipTipi === 1 ? 'Sabit Merkez' : seciliNokta.ekipTipi === 2 ? 'Çadır' : 'Mobil Araç'}
              </span>
            </div>
            <h4 className="font-bold text-slate-800 text-lg mb-2 uppercase">{seciliNokta.title}</h4>
            <div className="text-sm text-slate-700 space-y-1">
              <p><b>Adres:</b> {seciliNokta.adres}</p>
              <div className="flex flex-wrap gap-1">
                <b>Telefon:</b>{' '}
                {seciliNokta.telefonlar.length > 0 ? (
                  seciliNokta.telefonlar.map((tel: string, i: number) => (
                    <span key={i}>
                      {i > 0 && ' / '}
                      <a href={`tel:${tel.replace(/\s+/g, '')}`} className="text-blue-600 hover:underline">
                        {tel}
                      </a>
                    </span>
                  ))
                ) : (
                  <span>Belirtilmemiş</span>
                )}
              </div>
              <p><b>Başlama Saat:</b> {seciliNokta.baslamaSaati}</p>
              <p><b>Mola Araları:</b> {seciliNokta.molaSaatleri}</p>
              <p><b>Bitiş Saat:</b> {seciliNokta.bitisSaati}</p>
              {seciliNokta.ulasim && <p><b>Ulaşım:</b> {seciliNokta.ulasim}</p>}
            </div>
          </div>
        ) : (
          <div className="bg-slate-50 p-8 rounded-xl text-center text-slate-500 font-medium border-2 border-dashed border-slate-200">
            Detaylarını görmek için haritadan bir bağış noktasına tıklayın.
          </div>
        )}
      </div>
    </div>
  );
}