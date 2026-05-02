import React from "react";
import MapWrapper from "@/components/MapWrapper";
import ScrollNav from "@/components/ScrollNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-orange-50 text-slate-900 font-sans">
      <ScrollNav />

      {/* 1. Hero Section */}
      <section id="hero" className="relative px-6 py-24 md:py-36 lg:py-48 bg-orange-500 text-white overflow-hidden">
        {/* Arka plan dekor: büyük turuncu daireler */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-400 rounded-full opacity-30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-16 w-80 h-80 bg-orange-600 rounded-full opacity-20 blur-3xl pointer-events-none" />
        {/* Kurdele/şerit dekor */}


        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 z-10 relative">
          {/* Sol: Resim */}
          <div className="w-full md:w-5/12 flex justify-start relative group">
            {/* Arkadaki beyaz parlama efekti */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-white/40 blur-[80px] lg:blur-[120px] rounded-full pointer-events-none transition-all duration-500 group-hover:bg-white/50 group-hover:scale-110"></div>
            
            <img
              src="/hero-child.png"
              alt="Lösemiye Umut"
              className="relative w-full max-w-lg lg:max-w-[650px] h-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform duration-500 z-10 lg:-translate-x-8"
            />
          </div>

          {/* Sağ: Metin */}
          <div className="w-full md:w-7/12 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-[2.25rem] lg:text-[3rem] xl:text-[3.5rem] lg:whitespace-nowrap font-extrabold tracking-tight leading-tight">
              Lösemili Çocuklara Umut Ol
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-orange-100">
              Hayat Kurtar
            </p>
            <p className="text-lg md:text-xl pt-2 opacity-90 max-w-xl mx-auto md:mx-0">
              Sadece 10 dakikalık bir kan örneği vererek kök hücre bağışçısı olabilirsiniz. Senin kanın, bir çocuğun yarını olabilir.
            </p>
            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#bagis-noktalari"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-500 rounded-full font-bold text-lg hover:bg-orange-50 hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer"
              >
                Bağış Noktalarını Gör
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Adım Adım Hayat Kurtarmak */}
      <section id="adim-adim" className="py-24 px-6 md:px-12 max-w-5xl mx-auto rounded-3xl my-12 relative bg-white shadow-2xl ring-1 ring-orange-50 overflow-hidden">
        {/* Dekor: turuncu şeritler */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300" />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300" />

        {/* İçeriklerin z-index'ini yükselterek görsellerin üstünde kalmalarını sağlama */}
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Adım Adım Hayat Kurtarmak</h2>
            <p className="text-lg text-slate-600">Sanıldığının aksine çok kolay ve acısız bir süreçtir.</p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-orange-300 before:to-transparent">

            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
                title: "Başvuru ve Kayıt",
                desc: "Kan verme merkezine gidilerek \"Kök Hücre Bağışçısı Bilgilendirme Formu\" doldurulur ve ilk kan örneği verilerek veri tabanına kayıt olunur.",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />,
                title: "İlk Eşleşme ve Doğrulama",
                desc: "Veri tabanında bir hastayla uyum sağlanırsa, uyumun kesinliği için tekrar çağrılıp doğrulama kanı verilir.",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
                title: "Check-up Aşaması",
                desc: "Uyum kesinleştiğinde, bağışçı evden özel olarak alınır, detaylı bir sağlık taramasından geçirilir ve tekrar eve bırakılır.",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />,
                title: "Kök Hücre Çoğaltma",
                desc: "İşlemden 3-4 gün önce bağışçının koluna bir ilaç enjekte edilir. Bu ilaç, kandaki kök hücre sayısını oldukça yüksek bir seviyeye çıkarır.",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
                title: "Bağış ve Sonuç",
                desc: "Kök hücre alınır ve süreç tamamlanır. Bu hücreler, kemik iliği üretimi durdurulan hastaya enjekte edilerek o bölgenin yenilenmesi sağlanır.",
              },
            ].map((step, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-orange-100 bg-gradient-to-tr from-orange-400 to-orange-500 text-white shadow-orange-300 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10 transition-transform group-hover:scale-110">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">{step.icon}</svg>
                </div>
                <div className="hidden md:block absolute left-1/2 top-1/2 h-0.5 w-[5%] bg-orange-200 group-even:-translate-x-full group-odd:translate-x-0 -z-10" />
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl shadow-md border border-slate-100 border-l-4 border-l-orange-400 md:group-even:border-l md:group-even:border-l-slate-100 md:group-even:border-r-4 md:group-even:border-r-orange-400 hover:shadow-orange-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-orange-400 bg-orange-50 px-2 py-0.5 rounded-full">Adım {i + 1}</span>
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bilgi Köşesi */}
      <section id="bilgi-kosesi" className="py-24 px-6 bg-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Bilgi Köşesi: Lösemi ve Bağışçı Olmak
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Sıkça sorulan sorular ve sürecin güvenliği hakkında bilmeniz gereken kısa ve öz bilgiler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />,
                title: "Lösemi Türleri Nelerdir?",
                desc: "Nükseden (tekrarlayan), vücuda yayılan veya bitmiş olan farklı lösemi türleri vardır. Ancak tümünde tedavinin en güçlü ayağı kök hücre naklidir.",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
                title: "Bağışçıya Etkisi Nedir?",
                desc: "Bağışçıdan hiçbir şey eksilmez ancak bağışlanan kişinin hayatı yüksek oranda kurtulur. Süreç son derece güvenli ve uzman kontrolündedir.",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
                title: "Ne Sıklıkla Bağış Yapılır?",
                desc: "Bir hastayla eşleşip yalnızca 1 kez kök hücre bağışçısı olmak yeterlidir. O eşleşme, o kişinin bir ömürlük umudu anlamına gelir.",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />,
                title: "Erken Teşhisin Önemi",
                desc: "Kan vermenin, erken teşhis koymanın ve donör havuzunun genişliğinin hayati önemi vardır. Ne kadar çok donör formu varsa o kadar çok hayat vardır.",
              },
            ].map((card, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:ring-2 hover:ring-orange-200 transition-all duration-300 group flex flex-col items-center text-center border-t-4 border-orange-400">
                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{card.icon}</svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Harita */}
      <section id="bagis-noktalari" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Nerede Bağış Yapabilirim?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Size en yakın Kızılay Kan Bağışı veya TÜRKÖK merkezini bulun ve hayat kurtarmak için ilk adımı atın.
          </p>
        </div>

        <div className="bg-white rounded-3xl w-full flex items-center justify-center overflow-hidden relative shadow-2xl ring-8 ring-orange-100 z-0">
          <MapWrapper />
        </div>

        {/* Kalp Görseli (Ayırıcı) */}
        <div className="my-24 flex justify-center">
          <img
            src="/heart-divider.png"
            alt="Kalp"
            className="w-36 md:w-48 h-auto object-contain drop-shadow-xl hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Daha Fazla Bilgi İçin</h3>
            <p className="text-slate-600">Sürece dair detaylı bilgi edinmek ve bağış merkezlerine ulaşmak için Kızılay veya TÜRKÖK resmi sayfalarını ziyaret edebilirsiniz.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="https://www.kanver.org" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl text-center">
              Kızılay'a Gitmek İçin
            </a>
            <a href="https://turkok.saglik.gov.tr/" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl text-center">
              TÜRKÖK'e Gitmek İçin
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-slate-400 text-center border-t border-slate-800">
        <p>© Kök hücre bağışçısı olup, çocuklara umut olmak senin elinde.</p>
      </footer>
    </div>
  );
}
