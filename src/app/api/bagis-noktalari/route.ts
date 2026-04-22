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
      // Saatleri ISO formatından daha okunabilir bir formata getirebiliriz (örneğin sadece 09:00 - 18:30)
      const parseTime = (timeStr: string) => timeStr ? timeStr.split('T')[1]?.substring(0, 5) : '';
      const baslangic = parseTime(item.baslangicSaati);
      const bitis = parseTime(item.bitisSaati);
      const saatler = baslangic && bitis ? `${baslangic} - ${bitis}` : '';
      
      const isAferez = item.aferezAlinabilir ? "✅ Kök Hücre (Aferez) Alınabilir" : "Kan Bağışı Kabul Ediliyor";

      return {
        id: item.ekipID || index.toString(),
        title: item.ekipAdi || "Kızılay Bağış Noktası",
        lat: item.koordinatLatitude,
        lng: item.koordinatLongitude,
        address: `${item.adres} ${item.ilceAd ? '- ' + item.ilceAd : ''}`,
        phone: item.telefon || "Belirtilmemiş",
        type: isAferez,
        workingHours: saatler
      };
    }).filter((nokta: any) => nokta.lat && nokta.lng); // Koordinatı olmayan (boş) verileri haritadan gizle 

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