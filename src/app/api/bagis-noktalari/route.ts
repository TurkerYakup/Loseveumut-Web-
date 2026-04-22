export const runtime = 'edge';

export async function GET() {
  // NOT: Gerçek URL'yi bulduğumuzda buradaki örnek veriyi silip fetch() atacağız.
  // Şimdilik haritanın çalıştığını görmek için kendi verimizi dönüyoruz.
  const mockData = [
    {
      id: 1,
      title: "Bursa Nilüfer Kan Alma Birimi",
      lat: 40.2217,
      lng: 28.9950,
      type: "Kök Hücre ve Kan Bağışı"
    },
    {
      id: 2,
      title: "İstanbul Çapa Kan Bağış Merkezi",
      lat: 41.0145,
      lng: 28.9322,
      type: "Kök Hücre Alınabilenler"
    },
    {
      id: 3,
      title: "Kadıköy İskele Kan Alma Birimi",
      lat: 40.9900,
      lng: 29.0200,
      type: "Kök Hücre Alınabilenler"
    }
  ];

  return new Response(JSON.stringify(mockData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}