export const runtime = 'edge';

export async function GET() {
  try {
    // NOT: Ekrandaki '0' veya '34' isimli isteğe tıklayıp Request URL'sini buraya yapıştıracaksın.
    // Şimdilik Kızılay'ın mantığına en uygun URL yapısını (0 = Hepsi) farz ederek yazıyoruz.
    const KIZILAY_API_URL = 'https://mobilwebapi.kizilay.org.tr/api/BloodTeam/0';      
    
    // Kızılay'ın sunucusundan veriyi çekiyoruz
    const response = await fetch(KIZILAY_API_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        // Kızılay'ın sunucusu bizi tarayıcı sansın diye Header ekliyoruz
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36'
      },
      // Cloudflare üzerinde 1 saat (3600 sn) cache'liyoruz ki Kızılay'ı banlamayalım
      next: { revalidate: 3600 } 
    });

    if (!response.ok) {
      throw new Error(`Kızılay API yanıt vermedi: ${response.status}`);
    }

    const rawData = await response.json();
    console.log("KIZILAY'DAN GELEN ÖRNEK VERİ:", rawData[0] || rawData?.Data?.[0]);

    // GELEN VERİYİ HARİTAMIZA UYGUN HALE GETİRİYORUZ (MAPPING)
    const noktalar = rawData.map((item: any, index: number) => ({
      id: item.ekipID || index,
      title: item.ekipAdi || "Kızılay Bağış Noktası",
      lat: item.koordinatLatitude,
      lng: item.koordinatLongitude,
      // Alt bilgi olarak adreslerini gösterelim, çok daha şık olur
      type: item.adres || "Kök Hücre ve Kan Bağışı Noktası" 
    })).filter((nokta: any) => nokta.lat && nokta.lng); // Koordinatı olmayan (boş) verileri haritadan gizle 

    return new Response(JSON.stringify(noktalar), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=3600, stale-while-revalidate',
      },
    });

  } catch (error) {
    console.error("API Çekim Hatası:", error);
    return new Response(JSON.stringify({ error: "Veriler alınamadı" }), { status: 500 });
  }
}