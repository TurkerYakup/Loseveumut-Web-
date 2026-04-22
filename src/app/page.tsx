import Link from "next/link";
import React from "react";
import MapWrapper from "@/components/MapWrapper";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* 1. Kahraman Alanı (Hero Section) */}
      <section className="relative px-6 py-32 md:py-48 flex flex-col items-center justify-center text-center bg-gradient-to-br from-red-600 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Lösemili Çocuklara Umut Ol, <br className="hidden md:block" /> Hayat Kurtar
          </h1>
          <p className="text-xl md:text-2xl font-medium text-red-50">
            Lösemi, çocukluk çağının en çok görülen kan kanseridir.
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto pt-4 opacity-90">
            Sadece 10 dakikalık bir kan örneği vererek kök hücre bağışçısı olabilirsiniz. Senin kanın, bir çocuğun yarını olabilir.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#bagis-noktalari" onClick={(e) => {
              e.preventDefault();
              document.getElementById('bagis-noktalari')?.scrollIntoView({ behavior: 'smooth' });
            }} className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-red-600 rounded-full font-bold text-lg hover:bg-slate-100 hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer">
              Bağış Noktalarını Gör
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Süreç: Adım Adım Hayat Kurtarmak (Timeline) */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto rounded-3xl my-12 relative">
        <div className="absolute inset-0 bg-slate-50 -z-10 rounded-3xl" />
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Adım Adım Hayat Kurtarmak</h2>
          <p className="text-lg text-slate-600">Sanıldığının aksine çok kolay ve acısız bir süreçtir.</p>
        </div>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          
          {/* Adım 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-50 bg-red-500 text-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10 transition-transform group-hover:scale-110">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            </div>
            {/* Desktop Connection Line - Left side */}
            <div className="hidden md:block absolute left-1/2 top-1/2 h-[2px] w-[5%] bg-slate-200 group-odd:-translate-x-full group-even:translate-x-0 -z-10" />
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-xl shadow-md border-l-4 border-l-red-500 border-y border-r border-slate-100 transition-all duration-300 group-hover:-translate-y-1">
              <h3 className="font-bold text-xl text-slate-900 mb-2">Başvuru ve Kayıt</h3>
              <p className="text-slate-600">Kan verme merkezine gidilerek "Kök Hücre Bağışçısı Bilgilendirme Formu" doldurulur ve ilk kan örneği verilerek veri tabanına kayıt olunur.</p>
            </div>
          </div>

          {/* Adım 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-50 bg-red-500 text-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10 transition-transform group-hover:scale-110">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
            </div>
            {/* Desktop Connection Line - Right side */}
            <div className="hidden md:block absolute left-1/2 top-1/2 h-[2px] w-[5%] bg-slate-200 group-odd:-translate-x-full group-even:translate-x-0 -z-10" />

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-xl shadow-md border-r-4 md:border-r border-l border-y border-slate-100 md:group-even:border-l-4 md:group-even:border-l-red-500 md:group-odd:border-r-4 md:group-odd:border-r-red-500 transition-all duration-300 group-hover:-translate-y-1">
              <h3 className="font-bold text-xl text-slate-900 mb-2">İlk Eşleşme ve Doğrulama</h3>
              <p className="text-slate-600">Veri tabanında bir hastayla uyum sağlanırsa, uyumun kesinliği için tekrar çağrılıp doğrulama kanı verilir.</p>
            </div>
          </div>

          {/* Adım 3 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-50 bg-red-500 text-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10 transition-transform group-hover:scale-110">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
             {/* Desktop Connection Line - Left side */}
            <div className="hidden md:block absolute left-1/2 top-1/2 h-[2px] w-[5%] bg-slate-200 group-odd:-translate-x-full group-even:translate-x-0 -z-10" />

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-xl shadow-md border-l-4 border-l-red-500 border-y border-r border-slate-100 md:group-odd:border-l-4 md:group-odd:border-l-red-500 transition-all duration-300 group-hover:-translate-y-1">
              <h3 className="font-bold text-xl text-slate-900 mb-2">Check-up Aşaması</h3>
              <p className="text-slate-600">Uyum kesinleştiğinde, bağışçı evden özel olarak alınır, detaylı bir sağlık taramasından geçirilir ve tekrar eve bırakılır.</p>
            </div>
          </div>

          {/* Adım 4 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-50 bg-red-500 text-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10 transition-transform group-hover:scale-110">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
            </div>
            {/* Desktop Connection Line - Right side */}
            <div className="hidden md:block absolute left-1/2 top-1/2 h-[2px] w-[5%] bg-slate-200 group-odd:-translate-x-full group-even:translate-x-0 -z-10" />

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-xl shadow-md border-r-4 md:border-r border-l border-y border-slate-100 md:group-even:border-l-4 md:group-even:border-l-red-500 md:group-odd:border-r-4 md:group-odd:border-r-red-500 transition-all duration-300 group-hover:-translate-y-1">
              <h3 className="font-bold text-xl text-slate-900 mb-2">Kök Hücre Çoğaltma</h3>
              <p className="text-slate-600">İşlemden 3-4 gün önce bağışçının koluna bir ilaç enjekte edilir. Bu ilaç, kandaki kök hücre sayısını oldukça yüksek bir seviyeye çıkarır.</p>
            </div>
          </div>

          {/* Adım 5 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-50 bg-red-500 text-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10 transition-transform group-hover:scale-110">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
             {/* Desktop Connection Line - Left side */}
            <div className="hidden md:block absolute left-1/2 top-1/2 h-[2px] w-[5%] bg-slate-200 group-odd:-translate-x-full group-even:translate-x-0 -z-10" />

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-xl shadow-md border-l-4 border-l-red-500 border-y border-r border-slate-100 md:group-odd:border-l-4 md:group-odd:border-l-red-500 transition-all duration-300 group-hover:-translate-y-1">
              <h3 className="font-bold text-xl text-slate-900 mb-2">Bağış ve Sonuç</h3>
              <p className="text-slate-600">Kök hücre alınır ve süreç tamamlanır. Bu hücreler, kemik iliği üretimi durdurulan hastaya enjekte edilerek o bölgenin yenilenmesi sağlanır.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Bilgi Köşesi: Lösemi ve Bağışçı Olmak */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Bilgi Köşesi: Lösemi ve Bağışçı Olmak</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Sıkça sorulan sorular ve sürecin güvenliği hakkında bilmeniz gereken kısa ve öz bilgiler.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:ring-1 hover:ring-red-100 transition-all duration-300 group flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Lösemi Türleri Nelerdir?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Nükseden (tekrarlayan), vücuda yayılan veya bitmiş olan farklı lösemi türleri vardır. Ancak tümünde tedavinin en güçlü ayağı kök hücre naklidir.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:ring-1 hover:ring-red-100 transition-all duration-300 group flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Bağışçıya Etkisi Nedir?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Bağışçıdan hiçbir şey eksilmez ancak bağışlanan kişinin hayatı yüksek oranda kurtulur. Süreç son derece güvenli ve uzman kontrolündedir.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:ring-1 hover:ring-red-100 transition-all duration-300 group flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Ne Sıklıkla Bağış Yapılır?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Bir hastayla eşleşip yalnızca 1 kez kök hücre bağışçısı olmak yeterlidir. O eşleşme, o kişinin bir ömürlük umudu anlamına gelir.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:ring-1 hover:ring-red-100 transition-all duration-300 group flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Erken Teşhisin Önemi</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Kan vermenin, erken teşhis koymanın ve donör havuzunun genişliğinin hayati önemi vardır. Ne kadar çok donör formu varsa o kadar çok hayat vardır.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Harita ve İletişim (Footer Öncesi Alan) */}
      <section id="bagis-noktalari" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Nerede Bağış Yapabilirim?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Size en yakın Kızılay Kan Bağışı veya TÜRKÖK merkezini bulun ve hayat kurtarmak için ilk adımı atın.</p>
        </div>

        <div className="bg-white rounded-3xl w-full flex items-center justify-center overflow-hidden relative shadow-2xl ring-8 ring-white z-0">
          <MapWrapper />
        </div>

        <div className="mt-16 flex flex-col items-center justify-center space-y-6">
          <div className="text-center">
             <h3 className="text-2xl font-bold text-slate-900 mb-2">Daha Fazla Bilgi İçin</h3>
             <p className="text-slate-600">Sürece dair detaylı bilgi edinmek ve bağış merkezlerine ulaşmak için Kızılay veya TÜRKÖK resmi sayfalarını ziyaret edebilirsiniz.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="https://www.kanver.org" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl text-center">
              Kızılay'a Gitmek İçin
            </a>
            <a href="https://turkok.saglik.gov.tr/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl text-center">
              TÜRKÖK'e Gitmek İçin
            </a>
          </div>
        </div>
      </section>

      {/* Basit Footer */}
      <footer className="py-8 bg-slate-900 text-slate-400 text-center border-t border-slate-800">
        <p>© 2026 Lösemiye Umut Ol. Hayat kurtarmak senin elinde.</p>
      </footer>
    </div>
  );
}
