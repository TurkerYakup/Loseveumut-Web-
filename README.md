# 🎗️ Lösemiye Umut - Kök Hücre Bağış Rehberi

**🌐 Canlı Site:** [https://losemiyeumut.com](https://losemiyeumut.com)

Bu proje, lösemi hastası çocuklara umut olmak ve kök hücre bağışı sürecini topluma en doğru, en açık şekilde anlatmak amacıyla geliştirilmiş gönüllü bir web uygulamasıdır. Proje, potansiyel bağışçıları bilgilendirerek onların en yakın Kızılay kan bağış noktalarını harita üzerinden anlık olarak bulabilmelerini sağlar.

## 🌟 Proje Hakkında

Lösemi tedavisinde en büyük umut ışığı kök hücre naklidir. Ancak birçok insan kök hücre bağışı sürecini bilmediği veya korktuğu için bağışçı olmaktan çekinmektedir. **Lösemiye Umut**, bu önyargıları yıkmayı hedefleyerek süreci adım adım (Başvuru, Eşleşme, Check-up, Çoğaltma, Bağış) anlatan modern ve kullanıcı dostu bir arayüz sunar. 

Aynı zamanda Kızılay'ın resmi API'si üzerinden Türkiye genelindeki **aktif ve anlık** kan bağış merkezlerini harita üzerinde göstererek kullanıcıyı doğrudan harekete geçmeye teşvik eder.

## ✨ Özellikler

- **Modern ve Duyarlı Tasarım:** Her cihazda (mobil, tablet, masaüstü) kusursuz çalışan, Tailwind CSS ile hazırlanmış özel UI/UX.
- **Adım Adım Bilgilendirme:** Bağış sürecinin 5 adımda basit ve anlaşılır bir şekilde görselleştirilmesi.
- **Canlı Harita Entegrasyonu:** React Leaflet ile Türkiye haritası üzerinde Kızılay bağış noktalarının gösterimi.
- **Akıllı Filtreleme:** Sadece aktif olan sabit merkezlerin ve *o gün hizmet veren* gezici araç/çadırların haritada gösterilmesi.
- **Detaylı Bağış Noktası Kartları:** Haritadan seçilen noktanın adres, çalışma/mola saatleri, iletişim ve ulaşım bilgilerinin dinamik olarak gösterilmesi.

## 🛠️ Kullanılan Teknolojiler

- **[Next.js](https://nextjs.org/)** - React Framework (App Router kullanılmıştır)
- **[Tailwind CSS](https://tailwindcss.com/)** - Stil ve modern arayüz tasarımı
- **[React Leaflet](https://react-leaflet.js.org/)** - Harita bileşeni ve OpenStreetMap entegrasyonu
- **[Kızılay Mobil Web API]** - Gerçek zamanlı bağış noktası verileri

## 🩸 Kızılay API Entegrasyonu Nasıl Çalışır?

Projedeki en kritik özelliklerden biri, kullanıcıya en yakın bağış noktasını anlık olarak sunabilmektir. Bunun için doğrudan **Kızılay Mobil Web API'si** kullanılmıştır. Sistem şu adımlarla çalışır:

1. **Veri Çekme (Fetch):** Uygulama yüklendiğinde `https://mobilwebapi.kizilay.org.tr/api/BloodTeam/0` uç noktasına (endpoint) bir GET isteği atılır. Bu API, Türkiye genelindeki tüm planlı Kızılay bağış etkinliklerini ve merkezlerini döndürür.
2. **Akıllı Filtreleme Algoritması:** 
   - Gelen veriler arasında koordinat hataları olanlar (örn. Türkiye haritası sınırları dışında olan, `lat > 35 && lng > 25` kuralına uymayan noktalar) haritadan temizlenir.
   - **Sabit Merkezler (`ekipTipi === 1`):** Kan bağış merkezleri her zaman açık oldukları için haritada kalıcı olarak tutulur.
   - **Gezici Araçlar ve Çadırlar (`ekipTipi !== 1`):** Bu noktalar sadece belirli tarihlerde o konumda bulunurlar. Uygulama, kullanıcının sisteme girdiği o anki tarihini hesaplar ve sadece **tam o gün** hizmet veren mobil noktaları haritaya dahil eder. Geçmiş veya ileriki tarihlerdeki etkinlikler kafa karışıklığını önlemek adına gizlenir.
3. **Veri Formatlama ve UI Eşleştirme:**
   - İlçe ve İl ID'leri birleştirilerek kullanıcının rahatça okuyabileceği tam adresler oluşturulur.
   - API'den gelen karmaşık telefon numarası verileri (örn. ardışık `/`, `,` veya sıfırsız numaralar) ayrıştırılıp formatlanır ve tıklanabilir (doğrudan arama yapabilen) bağlantılara dönüştürülür.
   - Gelen `ekipTipi` verisine göre haritada özel tasarlanmış turuncu renk konseptli ikonlar (Sabit Hastane, Çadır veya Mobil Araç) atanır.

## 🚀 Kurulum ve Çalıştırma

Projeyi kendi bilgisayarınızda veya ortamınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz.

### Gereksinimler
- Node.js (v18.17 veya üzeri önerilir)
- npm, yarn veya pnpm

### Adımlar

1. Projeyi bilgisayarınıza klonlayın:
   ```bash
   git clone https://github.com/TurkerYakup/Loseveumut-Web-.git
   cd Loseveumut-Web-
   ```

2. Gerekli bağımlılıkları yükleyin:
   ```bash
   npm install
   # veya
   yarn install
   ```

3. Geliştirme (development) sunucusunu başlatın:
   ```bash
   npm run dev
   # veya
   yarn dev
   ```

4. Tarayıcınızda `http://localhost:3000` adresine giderek uygulamayı yerel ortamınızda görüntüleyebilirsiniz.

## 🤝 Katkıda Bulunma

Bu tamamen bir gönüllülük projesidir. Amacımız daha çok insana ulaşıp daha fazla hayat kurtarılmasına vesile olmaktır. Projeyi geliştirmek, yeni özellikler eklemek veya tasarım optimizasyonları yapmak isterseniz pull request (PR) göndermekten çekinmeyin.

1. Bu depoyu fork'layın.
2. Kendi özellik dalınızı (branch) oluşturun (`git checkout -b feature/YeniHarikaOzellik`).
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni harika bir özellik eklendi'`).
4. Dalınızı push yapın (`git push origin feature/YeniHarikaOzellik`).
5. Bir Pull Request oluşturun ve incelemeye gönderin.

## 📜 Lisans

Bu proje, iyilik ve sosyal farkındalık amacıyla geliştirilmiş olup açık kaynaklıdır. Ticari bir amacı bulunmamaktadır. Kodları dilediğiniz gibi inceleyebilir, ilham alabilir veya projelerinize entegre edebilirsiniz.

---

> *Küçük bir tüp kan, bir çocuğun yarını olabilir.* 🧡
