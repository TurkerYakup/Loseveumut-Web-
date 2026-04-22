export const runtime = 'edge';
export const dynamic = 'force-dynamic'; // Cache'i iptal eder, hep taze çeker

export async function GET() {
  try {
    const KIZILAY_API_URL = 'https://mobilwebapi.kizilay.org.tr/api/BloodTeam/0';      
    
    const response = await fetch(KIZILAY_API_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`Kızılay API yanıt vermedi: ${response.status}`);
    }

    const rawData = await response.json();
    console.log("KIZILAY'DAN GELEN ÖRNEK VERİ:", rawData[0] || rawData?.Data?.[0]);

    // GELEN VERİYİ HARİTAMIZA UYGUN HALE GETİRİYORUZ (MAPPING)
    const noktalar = rawData.map((item: any, index: number) => {
      // Saat formatını temizleyen küçük bir yardımcı fonksiyon (0001-01-01T09:00:00 -> 09:00)
      const formatSaat = (saatString: string) => saatString ? saatString.substring(11, 16) : "-";
      const formatTarih = (tarihString: string) => tarihString ? tarihString.substring(0, 10) : "-";

      return {
        id: item.ekipID || index,
        title: item.ekipAdi || "Kızılay Bağış Noktası",
        lat: item.koordinatLatitude,
        lng: item.koordinatLongitude,
        adres: item.adres || "Adres belirtilmemiş.",
        telefon: item.telefon ? `0 ${item.telefon}` : "Belirtilmemiş",
        tarih: formatTarih(item.tarih),
        calismaSaatleri: `${formatSaat(item.baslangicSaati)} - ${formatSaat(item.bitisSaati)}`,
        molaSaatleri: (item.araBaslangicSaati && item.araBitisSaati && item.araBaslangicSaati.includes('T'))
                       ? `${formatSaat(item.araBaslangicSaati)} - ${formatSaat(item.araBitisSaati)}`
                       : "Yok"
      };
    }).filter((nokta: any) => nokta.lat && nokta.lng); 

    return new Response(JSON.stringify(noktalar), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0',
      },
    });

  } catch (error) {
    console.error("API Çekim Hatası:", error);
    return new Response(JSON.stringify({ error: "Veriler alınamadı" }), { status: 500 });
  }
}