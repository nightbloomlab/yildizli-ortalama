    const kayitAdi = "yanoGanoVerileri";
    const eskiKayitAdi = "dersTakipVerileri";
    const senaryoKayitAdi = "yanoGanoSenaryolari";
    const donemProfilKayitAdi = "yanoGanoDonemProfilleri";
    const doodleYogunlukKayitAdi = "yanoGanoDoodleYogunlugu";
    const temaKayitAdi = "yanoGanoTemaSecimi";
    const bysKrediKayitAdi = "yanoGanoBysKrediKontrolu";
    const otomatikYedekKayitAdi = "yanoGanoOtomatikMiniYedekler";
    const kilitliDonemKayitAdi = "yanoGanoKilitliDonemler";
    const bilerekSilindiKayitAdi = "yanoGanoBilerekSilindi";
    const sonDisaAktarmaKayitAdi = "yanoGanoSonDisAktarma";

    const notBaremi = [
      { min: 90, harf: "AA", katsayi: 4.00, aciklama: "Pekiyi" },
      { min: 85, harf: "BA", katsayi: 3.50, aciklama: "İyi-Pekiyi" },
      { min: 80, harf: "BB", katsayi: 3.00, aciklama: "İyi" },
      { min: 75, harf: "CB", katsayi: 2.50, aciklama: "Orta-İyi" },
      { min: 65, harf: "CC", katsayi: 2.00, aciklama: "Orta" },
      { min: 55, harf: "DC", katsayi: 1.50, aciklama: "Orta-Geçer" },
      { min: 50, harf: "DD", katsayi: 1.00, aciklama: "Geçer" },
      { min: 45, harf: "FD", katsayi: 0.50, aciklama: "Başarısız" },
      { min: 0, harf: "FF", katsayi: 0.00, aciklama: "Başarısız" }
    ];

    const donemProfilSecenekleri = {
      rahat: {
        ad: "Rahat geçmek",
        rozet: "Profil: Rahat",
        alt: "Minimum risk",
        tavsiye: "Bu profilde amaç dönemi paniksiz kapatmak. Kredisi yüksek derslerde en az CC/CB bandını koru; gereken finali 85 üstüne çıkan dersleri erken toparla."
      },
      gano: {
        ad: "GANO yükseltmek",
        rozet: "Profil: GANO yükseltme",
        alt: "Ortalama artırma",
        tavsiye: "Bu profilde yüksek kredili dersler kritik. 4-5 kredilik derslerde BA/AA hedeflemek GANO'yu daha hızlı yükseltir; düşük kredili derslerde BB altına düşmemeye çalış."
      },
      aaba: {
        ad: "AA / BA odaklı",
        rozet: "Profil: AA/BA",
        alt: "Yüksek hedef",
        tavsiye: "Bu profilde her dersin final tablosunda AA ve BA satırına bak. AA mümkün değilse BA'yı, BA çok zorsa BB'yi kontrollü yedek hedef yap."
      },
      risk: {
        ad: "Risk azaltmak",
        rozet: "Profil: Risk azaltma",
        alt: "Kötü senaryo koruması",
        tavsiye: "Bu profilde öncelik düşmemek. Gereken finali 95+ olan derslerin hedefini gerçekçi seviyeye çek; FF/FD/DD riskini kapatacak minimum final hedefini belirle."
      }
    };

    const dersFormu = document.getElementById("dersFormu");
    const formBaslik = document.getElementById("formBaslik");
    const formButonlari = document.getElementById("formButonlari");
    const dersAdi = document.getElementById("dersAdi");
    const donem = document.getElementById("donem");
    const kredi = document.getElementById("kredi");
    const dersDurumu = document.getElementById("dersDurumu");
    const notTuruAlani = document.getElementById("notTuruAlani");
    const hedefHarfAlani = document.getElementById("hedefHarfAlani");
    const hedefHarf = document.getElementById("hedefHarf");
    const notTuru = document.getElementById("notTuru");
    const vizeAlani = document.getElementById("vizeAlani");
    const vizeEtiketi = document.getElementById("vizeEtiketi");
    const finalAlani = document.getElementById("finalAlani");
    const suAlani = document.getElementById("suAlani");
    const vize = document.getElementById("vize");
    const finalNotu = document.getElementById("final");
    const suNotu = document.getElementById("suNotu");
    const canliOrtalamaBaslik = document.getElementById("canliOrtalamaBaslik");
    const canliHarfBaslik = document.getElementById("canliHarfBaslik");
    const canliOrtalama = document.getElementById("canliOrtalama");
    const canliHarf = document.getElementById("canliHarf");
    const formNotu = document.getElementById("formNotu");
    const yanoDonemi = document.getElementById("yanoDonemi");
    const donemOnerileri = document.getElementById("donemOnerileri");
    const dersListesi = document.getElementById("dersListesi");
    const yanoSonuc = document.getElementById("yanoSonuc");
    const yanoAlt = document.getElementById("yanoAlt");
    const ganoSonuc = document.getElementById("ganoSonuc");
    const ganoAlt = document.getElementById("ganoAlt");
    const toplamKredi = document.getElementById("toplamKredi");
    const dersSayisi = document.getElementById("dersSayisi");
    const dersFiltreleri = document.getElementById("dersFiltreleri");
    const dersFiltreBilgi = document.getElementById("dersFiltreBilgi");
    const dersSayisiKarti = document.getElementById("dersSayisiKarti");
    const baremListesi = document.getElementById("baremListesi");
    const disaAktarButonu = document.getElementById("disaAktarButonu");
    const iceAktarButonu = document.getElementById("iceAktarButonu");
    const iceAktarDosyasi = document.getElementById("iceAktarDosyasi");
    const yedeklemeDurumu = document.getElementById("yedeklemeDurumu");
    const topluDonem = document.getElementById("topluDonem");
    const topluDersler = document.getElementById("topluDersler");
    const topluPlanlananEkle = document.getElementById("topluPlanlananEkle");
    const topluPlanlananTemizle = document.getElementById("topluPlanlananTemizle");
    const topluPlanlananMesaj = document.getElementById("topluPlanlananMesaj");
    const calismaOnceligiOzet = document.getElementById("calismaOnceligiOzet");
    const calismaOnceligiListesi = document.getElementById("calismaOnceligiListesi");

    const hedefGanoInput = document.getElementById("hedefGanoInput");
    const hedefGanoDonemi = document.getElementById("hedefGanoDonemi");
    const hedefGanoMevcut = document.getElementById("hedefGanoMevcut");
    const hedefGanoMevcutKredi = document.getElementById("hedefGanoMevcutKredi");
    const hedefGanoDonemKredi = document.getElementById("hedefGanoDonemKredi");
    const hedefGanoGerekliYano = document.getElementById("hedefGanoGerekliYano");
    const hedefGanoGerekliAlt = document.getElementById("hedefGanoGerekliAlt");
    const hedefGanoMevcutYano = document.getElementById("hedefGanoMevcutYano");
    const hedefGanoFark = document.getElementById("hedefGanoFark");
    const hedefGanoMesaj = document.getElementById("hedefGanoMesaj");
    const donemProfilDonemi = document.getElementById("donemProfilDonemi");
    const donemProfilSecimi = document.getElementById("donemProfilSecimi");
    const donemProfilAdi = document.getElementById("donemProfilAdi");
    const donemProfilAlt = document.getElementById("donemProfilAlt");
    const donemProfilYano = document.getElementById("donemProfilYano");
    const donemProfilKredi = document.getElementById("donemProfilKredi");
    const donemProfilMesaj = document.getElementById("donemProfilMesaj");
    const donemKarsilastirmaListesi = document.getElementById("donemKarsilastirmaListesi");
    const donemMiniGrafik = document.getElementById("donemMiniGrafik");
    const veriSagligiOzet = document.getElementById("veriSagligiOzet");
    const veriSagligiListesi = document.getElementById("veriSagligiListesi");
    const bysKrediKontrolu = document.getElementById("bysKrediKontrolu");
    const veriSagligiYenile = document.getElementById("veriSagligiYenile");
    const raporYazdirButonu = document.getElementById("raporYazdirButonu");
    const tumunuSilButonu = document.getElementById("tumunuSilButonu");
    const geriAlButonu = document.getElementById("geriAlButonu");
    const geriAlDurumu = document.getElementById("geriAlDurumu");
    const miniYedekListesi = document.getElementById("miniYedekListesi");
    const miniYedekleriTemizle = document.getElementById("miniYedekleriTemizle");
    const uygulamaPenceresiButonu = document.getElementById("uygulamaPenceresiButonu");
    const kisaYolDosyasiButonu = document.getElementById("kisaYolDosyasiButonu");
    const uygulamaModuNotu = document.getElementById("uygulamaModuNotu");
    const temaSecimi = document.getElementById("temaSecimi");
    const doodleYogunlugu = document.getElementById("doodleYogunlugu");
    const temaMenuButonu = document.getElementById("temaMenuButonu");
    const doodleMenuButonu = document.getElementById("doodleMenuButonu");
    const ofMenuButonu = document.getElementById("ofMenuButonu");
    const temaMenu = document.getElementById("temaMenu");
    const doodleMenu = document.getElementById("doodleMenu");
    const ofMenu = document.getElementById("ofMenu");
    const sifirDersleriPlanlananaCevirButonu = document.getElementById("sifirDersleriPlanlananaCevirButonu");
    const senaryoSatirlari = document.getElementById("senaryoSatirlari");
    const senaryoYano = document.getElementById("senaryoYano");
    const senaryoGano = document.getElementById("senaryoGano");
    const senaryoUyari = document.getElementById("senaryoUyari");
    const senaryoyuTemizle = document.getElementById("senaryoyuTemizle");
    const senaryoAdi = document.getElementById("senaryoAdi");
    const senaryoyuKaydet = document.getElementById("senaryoyuKaydet");
    const senaryoKayitListesi = document.getElementById("senaryoKayitListesi");
    const senaryoKayitMesaj = document.getElementById("senaryoKayitMesaj");

    let dersler = guvenliJsonOku(localStorage.getItem(kayitAdi), []);
    let kayitliSenaryolar = guvenliJsonOku(localStorage.getItem(senaryoKayitAdi), []);
    let donemProfilleri = guvenliJsonOku(localStorage.getItem(donemProfilKayitAdi), {});
    let otomatikYedekler = guvenliJsonOku(localStorage.getItem(otomatikYedekKayitAdi), []);
    let kilitliDonemler = guvenliJsonOku(localStorage.getItem(kilitliDonemKayitAdi), {});
    let yedekGeriYukleniyor = false;
    let duzenlenenIndex = null;

    function dersleriUygunHaleGetir(liste) {
      if (!Array.isArray(liste)) return [];

      return liste.map(function(ders) {
        const planlananMi = ders && (ders.durum === "planlanan" || ders.notTuru === "planlanan");
        const notTuruDegeri = planlananMi ? "planlanan" : (ders && ders.notTuru === "su" ? "su" : "harf");
        const eskiNot = ders && ders.not100 !== undefined ? Number(ders.not100) : 0;
        const vizeDegeri = ders && ders.vize !== undefined ? Number(ders.vize) : eskiNot;
        const finalDegeri = ders && ders.final !== undefined ? Number(ders.final) : eskiNot;

        return {
          ad: ders && ders.ad ? ders.ad : "Ders",
          donem: ders && ders.donem ? ders.donem : "Dönem belirtilmedi",
          kredi: Number(ders && ders.kredi) || 0,
          durum: planlananMi ? "planlanan" : "notlu",
          notTuru: notTuruDegeri,
          hedefHarf: planlananMi && ders && harfNotuGecerliMi(ders.hedefHarf) ? String(ders.hedefHarf).toUpperCase() : "",
          hedefVize: planlananMi && ders && ders.hedefVize !== undefined && ders.hedefVize !== null && ders.hedefVize !== "" ? sayiSinirla(ders.hedefVize) : "",
          vize: (planlananMi || notTuruDegeri === "su") ? null : vizeDegeri,
          final: (planlananMi || notTuruDegeri === "su") ? null : finalDegeri,
          suNotu: ders && ders.suNotu === "U" ? "U" : "S"
        };
      });
    }

    dersler = dersleriUygunHaleGetir(dersler);

    if (dersler.length === 0 && localStorage.getItem(bilerekSilindiKayitAdi) !== "true") {
      const kurtarilan = doluDersListesiBul();
      if (kurtarilan) {
        dersler = dersleriUygunHaleGetir(kurtarilan.dersler);
        localStorage.setItem(kayitAdi, JSON.stringify(dersler));
        console.warn("Veri koruma: ders listesi bos okundu, kayitli yedekten geri yuklendi.", {
          dersSayisi: dersler.length,
          kaynak: kurtarilan.kaynak
        });
      }
    }

    if (!Array.isArray(kayitliSenaryolar)) {
      kayitliSenaryolar = [];
    }

    if (!donemProfilleri || Array.isArray(donemProfilleri) || typeof donemProfilleri !== "object") {
      donemProfilleri = {};
    }

    if (!Array.isArray(otomatikYedekler)) {
      otomatikYedekler = [];
    }

    if (!kilitliDonemler || Array.isArray(kilitliDonemler) || typeof kilitliDonemler !== "object") {
      kilitliDonemler = {};
    }

    function guvenliJsonOku(metin, varsayilanDeger) {
      try {
        if (!metin) return varsayilanDeger;
        return JSON.parse(metin);
      } catch (hata) {
        return varsayilanDeger;
      }
    }

    function doluDersListesiBul() {
      const adaylar = [];

      function dersListesiGecerliMi(liste) {
        return Array.isArray(liste) && liste.some(function(ders) {
          return ders && typeof ders === "object" && (
            ders.ad !== undefined ||
            ders.donem !== undefined ||
            ders.kredi !== undefined ||
            ders.notTuru !== undefined ||
            ders.durum !== undefined
          );
        });
      }

      function adayEkle(kaynak, liste) {
        if (!dersListesiGecerliMi(liste)) return;
        adaylar.push({
          kaynak: kaynak,
          dersler: dersleriUygunHaleGetir(liste)
        });
      }

      function veridenDersListesiCikar(veri) {
        if (dersListesiGecerliMi(veri)) return veri;
        if (veri && typeof veri === "object" && dersListesiGecerliMi(veri.dersler)) return veri.dersler;
        return null;
      }

      [eskiKayitAdi, kayitAdi].forEach(function(anahtar) {
        const veri = guvenliJsonOku(localStorage.getItem(anahtar), null);
        adayEkle(anahtar, veridenDersListesiCikar(veri));
      });

      const yedekler = guvenliJsonOku(localStorage.getItem(otomatikYedekKayitAdi), []);
      if (Array.isArray(yedekler)) {
        yedekler.forEach(function(yedek, index) {
          adayEkle(otomatikYedekKayitAdi + "[" + index + "]", yedek && yedek.dersler);
        });
      }

      for (let i = 0; i < localStorage.length; i++) {
        const anahtar = localStorage.key(i);
        if (!anahtar || anahtar === bilerekSilindiKayitAdi) continue;
        const veri = guvenliJsonOku(localStorage.getItem(anahtar), null);
        const liste = veridenDersListesiCikar(veri);
        adayEkle(anahtar, liste);

        if (Array.isArray(veri)) {
          veri.forEach(function(oge, index) {
            if (oge && typeof oge === "object") {
              adayEkle(anahtar + "[" + index + "]", oge.dersler);
            }
          });
        }
      }

      adaylar.sort(function(a, b) {
        return b.dersler.length - a.dersler.length;
      });
      return adaylar[0] || null;
    }

    function otomatikYedekleriKaydet() {
      localStorage.setItem(otomatikYedekKayitAdi, JSON.stringify(otomatikYedekler));
    }

    function kilitliDonemleriKaydet() {
      localStorage.setItem(kilitliDonemKayitAdi, JSON.stringify(kilitliDonemler));
    }

    function donemKilitliMi(donemAdi) {
      return kilitliDonemler[String(donemAdi || "")] === true;
    }

    function kayitliVeriSnapshot(etiket) {
      const kayitliDersler = guvenliJsonOku(localStorage.getItem(kayitAdi), []);
      const kayitliSenaryolarOnceki = guvenliJsonOku(localStorage.getItem(senaryoKayitAdi), []);
      const kayitliProfillerOnceki = guvenliJsonOku(localStorage.getItem(donemProfilKayitAdi), {});
      const kayitliKilitlerOnceki = guvenliJsonOku(localStorage.getItem(kilitliDonemKayitAdi), {});

      return {
        tarih: new Date().toLocaleString("tr-TR"),
        iso: new Date().toISOString(),
        etiket: etiket || "Otomatik yedek",
        dersler: dersleriUygunHaleGetir(kayitliDersler),
        senaryolar: Array.isArray(kayitliSenaryolarOnceki) ? kayitliSenaryolarOnceki : [],
        donemProfilleri: kayitliProfillerOnceki && !Array.isArray(kayitliProfillerOnceki) && typeof kayitliProfillerOnceki === "object" ? kayitliProfillerOnceki : {},
        kilitliDonemler: kayitliKilitlerOnceki && !Array.isArray(kayitliKilitlerOnceki) && typeof kayitliKilitlerOnceki === "object" ? kayitliKilitlerOnceki : {},
        bysKredi: localStorage.getItem(bysKrediKayitAdi) || ""
      };
    }

    function anlikVeriSnapshot(etiket) {
      return {
        tarih: new Date().toLocaleString("tr-TR"),
        iso: new Date().toISOString(),
        etiket: etiket || "Otomatik yedek",
        dersler: dersleriUygunHaleGetir(dersler),
        senaryolar: Array.isArray(kayitliSenaryolar) ? kayitliSenaryolar : [],
        donemProfilleri: donemProfilleri && !Array.isArray(donemProfilleri) && typeof donemProfilleri === "object" ? donemProfilleri : {},
        kilitliDonemler: kilitliDonemler && !Array.isArray(kilitliDonemler) && typeof kilitliDonemler === "object" ? kilitliDonemler : {},
        bysKredi: bysKrediKontrolu ? bysKrediKontrolu.value : (localStorage.getItem(bysKrediKayitAdi) || "")
      };
    }

    function yedekIcerigiOzeti(yedek) {
      const dersSayisi = Array.isArray(yedek.dersler) ? yedek.dersler.length : 0;
      const senaryoSayisi = Array.isArray(yedek.senaryolar) ? yedek.senaryolar.length : 0;
      const kilitSayisi = yedek.kilitliDonemler && typeof yedek.kilitliDonemler === "object" ? Object.keys(yedek.kilitliDonemler).filter(function(ad) { return yedek.kilitliDonemler[ad]; }).length : 0;
      return dersSayisi + " ders · " + senaryoSayisi + " senaryo" + (kilitSayisi ? " · " + kilitSayisi + " kilit" : "");
    }

    function otomatikYedekEkle(yedek) {
      if (yedekGeriYukleniyor || !yedek) return;

      const yeniIcerik = JSON.stringify({
        dersler: yedek.dersler || [],
        senaryolar: yedek.senaryolar || [],
        donemProfilleri: yedek.donemProfilleri || {},
        kilitliDonemler: yedek.kilitliDonemler || {},
        bysKredi: yedek.bysKredi || ""
      });
      const sonYedek = otomatikYedekler[0];
      const sonIcerik = sonYedek ? JSON.stringify({
        dersler: sonYedek.dersler || [],
        senaryolar: sonYedek.senaryolar || [],
        donemProfilleri: sonYedek.donemProfilleri || {},
        kilitliDonemler: sonYedek.kilitliDonemler || {},
        bysKredi: sonYedek.bysKredi || ""
      }) : "";

      if (yeniIcerik === sonIcerik) return;
      otomatikYedekler.unshift(yedek);
      otomatikYedekler = otomatikYedekler.slice(0, 8);
      otomatikYedekleriKaydet();
      miniYedekleriGuncelle();
    }

    function miniYedekleriGuncelle() {
      if (geriAlButonu) geriAlButonu.disabled = otomatikYedekler.length === 0;
      if (geriAlDurumu) {
        geriAlDurumu.textContent = otomatikYedekler.length
          ? "Geri alınabilecek son kayıt: " + (otomatikYedekler[0].etiket || "Otomatik yedek") + " · " + (otomatikYedekler[0].tarih || "")
          : "Henüz geri alınacak işlem yok.";
      }

      if (!miniYedekListesi) return;
      if (!otomatikYedekler.length) {
        miniYedekListesi.innerHTML = '<div class="bos">Mini yedek yok. İlk değişiklikten sonra burada görünecek.</div>';
        return;
      }

      miniYedekListesi.innerHTML = otomatikYedekler.map(function(yedek, index) {
        return '<article class="mini-yedek-karti">' +
          '<div><strong>' + guvenliYazi(yedek.etiket || ("Mini yedek " + (index + 1))) + '</strong>' +
          '<span>' + guvenliYazi(yedek.tarih || "") + ' · ' + guvenliYazi(yedekIcerigiOzeti(yedek)) + '</span></div>' +
          '<button type="button" class="ikincil mini-yedek-yukle" data-yedek-index="' + index + '">Yükle</button>' +
        '</article>';
      }).join('');
    }

    function yedegiUygula(index, geriAlModu) {
      const yedek = otomatikYedekler[index];
      if (!yedek) return;

      const onay = geriAlModu ? true : confirm("Bu mini yedeğe dönülecek. Mevcut hâl değişecek. Devam edilsin mi?");
      if (!onay) return;

      yedekGeriYukleniyor = true;
      dersler = dersleriUygunHaleGetir(yedek.dersler || []);
      kayitliSenaryolar = Array.isArray(yedek.senaryolar) ? yedek.senaryolar : [];
      donemProfilleri = yedek.donemProfilleri && !Array.isArray(yedek.donemProfilleri) && typeof yedek.donemProfilleri === "object" ? yedek.donemProfilleri : {};
      kilitliDonemler = yedek.kilitliDonemler && !Array.isArray(yedek.kilitliDonemler) && typeof yedek.kilitliDonemler === "object" ? yedek.kilitliDonemler : {};

      localStorage.setItem(kayitAdi, JSON.stringify(dersler));
      localStorage.setItem(senaryoKayitAdi, JSON.stringify(kayitliSenaryolar));
      localStorage.setItem(donemProfilKayitAdi, JSON.stringify(donemProfilleri));
      localStorage.setItem(kilitliDonemKayitAdi, JSON.stringify(kilitliDonemler));
      if (yedek.bysKredi !== undefined && yedek.bysKredi !== null) {
        localStorage.setItem(bysKrediKayitAdi, String(yedek.bysKredi));
        if (bysKrediKontrolu) bysKrediKontrolu.value = String(yedek.bysKredi);
      }

      if (geriAlModu) {
        otomatikYedekler.splice(index, 1);
        otomatikYedekleriKaydet();
      }

      yedekGeriYukleniyor = false;
      formuTemizle();
      senaryoSatirlariniSifirla();
      ekraniGuncelle();
      miniYedekleriGuncelle();
      alert(geriAlModu ? "Son işlem geri alındı." : "Mini yedek geri yüklendi.");
    }

    function sonIslemiGeriAl() {
      if (!otomatikYedekler.length) {
        alert("Geri alınacak işlem yok.");
        return;
      }
      yedegiUygula(0, true);
    }

    function senaryoKayitlariniKaydet() {
      const yeniMetin = JSON.stringify(kayitliSenaryolar);
      const eskiMetin = localStorage.getItem(senaryoKayitAdi);
      if (!yedekGeriYukleniyor && eskiMetin !== null && eskiMetin !== yeniMetin) {
        otomatikYedekEkle(kayitliVeriSnapshot("Senaryo değişikliğinden önce"));
      }
      localStorage.setItem(senaryoKayitAdi, yeniMetin);
      miniYedekleriGuncelle();
    }

    function donemProfilleriniKaydet() {
      const yeniMetin = JSON.stringify(donemProfilleri);
      const eskiMetin = localStorage.getItem(donemProfilKayitAdi);
      if (!yedekGeriYukleniyor && eskiMetin !== null && eskiMetin !== yeniMetin) {
        otomatikYedekEkle(kayitliVeriSnapshot("Dönem profili değişikliğinden önce"));
      }
      localStorage.setItem(donemProfilKayitAdi, yeniMetin);
      miniYedekleriGuncelle();
    }

    function kaydet(etiket) {
      const yeniMetin = JSON.stringify(dersler);
      const eskiMetin = localStorage.getItem(kayitAdi);
      const eskiDersler = guvenliJsonOku(eskiMetin, []);
      const yeniBos = Array.isArray(dersler) && dersler.length === 0;
      const eskiDolu = Array.isArray(eskiDersler) && eskiDersler.length > 0;
      const islemEtiketi = String(etiket || "").toLocaleLowerCase("tr-TR");
      const bilincliSilme = islemEtiketi.includes("sil");

      if (yeniBos && eskiDolu && !bilincliSilme) {
        console.warn("Veri koruma: bos ders listesi mevcut derslerin ustune yazilmadi.", {
          mevcutDersSayisi: eskiDersler.length,
          etiket: etiket || ""
        });
        dersler = dersleriUygunHaleGetir(eskiDersler);
        return;
      }

      if (!yedekGeriYukleniyor && eskiMetin !== null && eskiMetin !== yeniMetin) {
        otomatikYedekEkle(kayitliVeriSnapshot(etiket || "Ders değişikliğinden önce"));
      }
      if (!yeniBos) {
        localStorage.removeItem(bilerekSilindiKayitAdi);
      }
      localStorage.setItem(kayitAdi, yeniMetin);
      miniYedekleriGuncelle();
    }

    function guvenliYazi(yazi) {
      const alan = document.createElement("div");
      alan.textContent = yazi;
      return alan.innerHTML;
    }

    function sayiSinirla(deger) {
      const sayi = Number(deger);
      if (Number.isNaN(sayi)) return 0;
      if (sayi < 0) return 0;
      if (sayi > 100) return 100;
      return sayi;
    }

    function sinavTarihiMetni(tarih) {
      if (!tarih) return "";
      const parcalar = String(tarih).split("-");
      if (parcalar.length !== 3) return String(tarih);
      return parcalar[2] + "." + parcalar[1] + "." + parcalar[0];
    }

    function gunFarkiHesapla(tarih) {
      if (!tarih) return null;
      const bugun = new Date();
      const hedef = new Date(String(tarih) + "T00:00:00");
      if (Number.isNaN(hedef.getTime())) return null;
      const bugunBaslangic = new Date(bugun.getFullYear(), bugun.getMonth(), bugun.getDate());
      return Math.round((hedef - bugunBaslangic) / 86400000);
    }

    function sinavDurumMetni(tarih) {
      const fark = gunFarkiHesapla(tarih);
      if (fark === null) return "";
      if (fark < 0) return Math.abs(fark) + " gün önce";
      if (fark === 0) return "Bugün";
      if (fark === 1) return "Yarın";
      return fark + " gün kaldı";
    }

    function ortalamaBul(vizeDegeri, finalDegeri) {
      return (sayiSinirla(vizeDegeri) * 0.40) + (sayiSinirla(finalDegeri) * 0.60);
    }

    function ortalamadanHarfBul(ortalama) {
      const sayi = Number(ortalama);
      if (Number.isNaN(sayi)) return notBaremi[notBaremi.length - 1];

      for (let i = 0; i < notBaremi.length; i++) {
        if (sayi >= notBaremi[i].min) {
          return notBaremi[i];
        }
      }

      return notBaremi[notBaremi.length - 1];
    }

    function harfNotuBilgisiBul(harf) {
      const aranan = String(harf || "").toUpperCase();
      return notBaremi.find(function(item) {
        return item.harf === aranan;
      }) || null;
    }

    function harfNotuGecerliMi(harf) {
      return harfNotuBilgisiBul(harf) !== null;
    }

    function hedefVizeDegeri(ders) {
      if (!ders || ders.hedefVize === undefined || ders.hedefVize === null || ders.hedefVize === "") return "";
      return sayiSinirla(ders.hedefVize);
    }

    function gerekenFinalHesapla(hedefHarfDegeri, vizeDegeri) {
      const hedefBilgisi = harfNotuBilgisiBul(hedefHarfDegeri);
      if (!hedefBilgisi) {
        return {
          metin: "Hedef seç",
          detay: "Önce hedef harf notu seçilmeli.",
          durum: "hedef-yok",
          deger: null
        };
      }

      if (vizeDegeri === "" || vizeDegeri === null || vizeDegeri === undefined) {
        return {
          metin: "Vize gir",
          detay: "Gereken finali görmek için vize senaryosu gir.",
          durum: "vize-yok",
          deger: null
        };
      }

      const vizePuani = sayiSinirla(vizeDegeri);
      const gereken = (hedefBilgisi.min - (vizePuani * 0.40)) / 0.60;
      const yuvarlanmis = Math.max(0, gereken);

      if (gereken > 100) {
        return {
          metin: gereken.toFixed(2) + " ⚠",
          detay: "Bu hedef için final 100 üstü gerekiyor; hedef pratikte mümkün değil.",
          durum: "imkansiz",
          deger: gereken
        };
      }

      if (gereken <= 0) {
        return {
          metin: "0.00",
          detay: "Bu hedef için finalden 0 almak bile yeterli görünüyor.",
          durum: "rahat",
          deger: 0
        };
      }

      return {
        metin: yuvarlanmis.toFixed(2),
        detay: "Bu hedef için finalden en az " + yuvarlanmis.toFixed(2) + " almalısın.",
        durum: "mümkün",
        deger: yuvarlanmis
      };
    }


    function gerekenFinalDurumEtiketi(durum) {
      if (durum === "imkansiz") return "İmkânsız";
      if (durum === "rahat") return "0 bile yeter";
      if (durum === "mümkün") return "Mümkün";
      if (durum === "vize-yok") return "Vize gir";
      return "Hedef seç";
    }

    function gerekenFinalDurumSinifi(durum) {
      if (durum === "imkansiz") return "imkansiz";
      if (durum === "rahat") return "rahat";
      if (durum === "mümkün") return "mumkun";
      return "pasif";
    }

    function enYuksekMumkunHedefBul(ders) {
      const vizeDegeri = hedefVizeDegeri(ders);

      if (vizeDegeri === "") {
        return {
          harf: "",
          katsayi: null,
          metin: "Vize gir",
          finalMetin: "-",
          detay: "En yüksek mümkün hedefi görmek için önce vize senaryosu gir.",
          durum: "vize-yok"
        };
      }

      for (let i = 0; i < notBaremi.length; i++) {
        const item = notBaremi[i];
        const finalBilgisi = gerekenFinalHesapla(item.harf, vizeDegeri);

        if (finalBilgisi.durum !== "imkansiz") {
          return {
            harf: item.harf,
            katsayi: item.katsayi,
            metin: item.harf + " / " + item.katsayi.toFixed(2),
            finalMetin: finalBilgisi.metin,
            detay: "Bu vizeyle en yüksek mümkün hedef " + item.harf + ". Bu hedef için finalden en az " + finalBilgisi.metin + " almalısın.",
            durum: finalBilgisi.durum
          };
        }
      }

      return {
        harf: "FF",
        katsayi: 0,
        metin: "FF / 0.00",
        finalMetin: "0.00",
        detay: "Bu vizeyle en düşük hedef olan FF bile tabloya göre mümkündür.",
        durum: "rahat"
      };
    }

    function tumHedeflerIcinFinalTablosu(ders) {
      const vizeDegeri = hedefVizeDegeri(ders);

      if (vizeDegeri === "") {
        return '<div class="gereken-final-tablosu"><h4>Tüm hedefler için gereken final</h4><p>Tabloyu görmek için önce bu dersin vize senaryosunu gir.</p></div>';
      }

      const onerilenHedef = enYuksekMumkunHedefBul(ders);
      const satirlar = notBaremi.map(function(item) {
        const finalBilgisi = gerekenFinalHesapla(item.harf, vizeDegeri);
        const durumSinifi = gerekenFinalDurumSinifi(finalBilgisi.durum);
        const onerilenMi = onerilenHedef.harf === item.harf;
        return '<div class="gereken-final-satir ' + durumSinifi + (onerilenMi ? ' onerilen' : '') + '">' +
          '<strong>' + guvenliYazi(item.harf) + '</strong>' +
          '<span>' + guvenliYazi(finalBilgisi.metin) + '</span>' +
          '<em>' + guvenliYazi(onerilenMi ? 'En yüksek mümkün hedef' : gerekenFinalDurumEtiketi(finalBilgisi.durum)) + '</em>' +
        '</div>';
      }).join("");

      return '<div class="gereken-final-tablosu"><h4>Tüm hedefler için gereken final</h4><div class="gereken-final-satirlari">' + satirlar + '</div></div>';
    }

    function hedefHarfSecenekleri(seciliHarf) {
      const secili = harfNotuGecerliMi(seciliHarf) ? String(seciliHarf).toUpperCase() : "";
      let html = '<option value=""' + (secili === "" ? ' selected' : '') + '>Planlandı</option>';

      notBaremi.forEach(function(item) {
        html += '<option value="' + item.harf + '"' + (secili === item.harf ? ' selected' : '') + '>' + item.harf + ' / ' + item.katsayi.toFixed(2) + '</option>';
      });

      return html;
    }

    function dersPlanlananMi(ders) {
      return ders && (ders.durum === "planlanan" || ders.notTuru === "planlanan");
    }

    function dersOrtalamayaKatilacakMi(ders) {
      return !dersPlanlananMi(ders) && ders.notTuru !== "su";
    }

    function dersBilgisiHesapla(ders) {
      if (dersPlanlananMi(ders)) {
        const hedefBilgisi = harfNotuBilgisiBul(ders.hedefHarf);
        if (hedefBilgisi) {
          return {
            ortalama: null,
            harf: hedefBilgisi.harf,
            katsayi: hedefBilgisi.katsayi,
            aciklama: "Hedef harf notu"
          };
        }

        return {
          ortalama: null,
          harf: "Planlandı",
          katsayi: null,
          aciklama: "Henüz hedef harf seçilmedi"
        };
      }

      if (!dersOrtalamayaKatilacakMi(ders)) {
        return {
          ortalama: null,
          harf: ders.suNotu || "S",
          katsayi: null,
          aciklama: "Ortalamaya katılmaz"
        };
      }

      const ortalama = ortalamaBul(ders.vize, ders.final);
      const harf = ortalamadanHarfBul(ortalama);
      return {
        ortalama: ortalama,
        harf: harf.harf,
        katsayi: harf.katsayi,
        aciklama: harf.aciklama
      };
    }

    function ortalamaHesapla(liste) {
      let krediToplam = 0;
      let puanToplam = 0;

      liste.forEach(function(ders) {
        if (!dersOrtalamayaKatilacakMi(ders)) return;

        const dersKredisi = Number(ders.kredi);
        const bilgi = dersBilgisiHesapla(ders);
        krediToplam += dersKredisi;
        puanToplam += dersKredisi * bilgi.katsayi;
      });

      return {
        kredi: krediToplam,
        ortalama: krediToplam > 0 ? puanToplam / krediToplam : 0
      };
    }

    function tahminiOrtalamayaKatilacakMi(ders) {
      if (!ders) return false;
      if (dersPlanlananMi(ders)) return harfNotuGecerliMi(ders.hedefHarf);
      return dersOrtalamayaKatilacakMi(ders);
    }

    function tahminiOrtalamaHesapla(liste) {
      let krediToplam = 0;
      let puanToplam = 0;

      liste.forEach(function(ders) {
        if (!tahminiOrtalamayaKatilacakMi(ders)) return;

        const dersKredisi = Number(ders.kredi);
        const bilgi = dersBilgisiHesapla(ders);
        krediToplam += dersKredisi;
        puanToplam += dersKredisi * bilgi.katsayi;
      });

      return {
        kredi: krediToplam,
        ortalama: krediToplam > 0 ? puanToplam / krediToplam : 0
      };
    }

    function toplamKrediHesapla(liste) {
      return liste.reduce(function(toplam, ders) {
        return toplam + Number(ders.kredi || 0);
      }, 0);
    }

    function donemSiralamaDegeri(donemAdi) {
      const yazi = String(donemAdi || "");
      const yilEslesme = yazi.match(/(\d{4})(?:\s*-\s*(\d{4}))?/);
      const baslangicYili = yilEslesme ? Number(yilEslesme[1]) : 9999;
      let donemSirasi = 9;

      if (/güz|guz/i.test(yazi)) donemSirasi = 1;
      else if (/bahar/i.test(yazi)) donemSirasi = 2;
      else if (/yaz/i.test(yazi)) donemSirasi = 3;

      return baslangicYili * 10 + donemSirasi;
    }

    function donemSirala(a, b) {
      const fark = donemSiralamaDegeri(a) - donemSiralamaDegeri(b);
      return fark !== 0 ? fark : String(a).localeCompare(String(b), "tr");
    }

    function donemKilidiDegistir(donemAdi) {
      if (!donemAdi) return;
      otomatikYedekEkle(anlikVeriSnapshot(donemKilitliMi(donemAdi) ? "Dönem kilidi açılmadan önce" : "Dönem kilitlenmeden önce"));
      kilitliDonemler[donemAdi] = !donemKilitliMi(donemAdi);
      kilitliDonemleriKaydet();
      if (duzenlenenIndex !== null && dersler[duzenlenenIndex] && donemKilitliMi(dersler[duzenlenenIndex].donem)) {
        formuTemizle();
      }
      dersleriDonemlereGoreCiz();
      veriSagliginiGuncelle();
      miniYedekleriGuncelle();
    }

    function benzersizDonemler() {
      return [...new Set(dersler.map(function(ders) {
        return ders.donem;
      }))].sort(donemSirala);
    }

    function baremiHazirla() {
      baremListesi.innerHTML = "";

      notBaremi.forEach(function(item, index) {
        const ustSinir = index === 0 ? "100" : String(notBaremi[index - 1].min - 1);
        const aralik = item.min + "-" + ustSinir;
        const div = document.createElement("div");
        div.textContent = aralik + ": " + item.harf + " / " + item.katsayi.toFixed(2) + " / " + item.aciklama;
        baremListesi.appendChild(div);
      });
    }

    function donemAlanlariniGuncelle() {
      const oncekiSecim = yanoDonemi.value;
      const oncekiHedefGanoDonemi = hedefGanoDonemi ? hedefGanoDonemi.value : "";
      const oncekiDonemProfilDonemi = donemProfilDonemi ? donemProfilDonemi.value : "";
      const donemler = benzersizDonemler();

      donemOnerileri.innerHTML = "";
      donemler.forEach(function(donemAdi) {
        const option = document.createElement("option");
        option.value = donemAdi;
        donemOnerileri.appendChild(option);
      });

      yanoDonemi.innerHTML = "";
      if (hedefGanoDonemi) hedefGanoDonemi.innerHTML = "";
      if (donemProfilDonemi) donemProfilDonemi.innerHTML = "";

      if (donemler.length === 0) {
        const option = document.createElement("option");
        option.value = "";
        option.textContent = "Henüz dönem yok";
        yanoDonemi.appendChild(option);

        if (hedefGanoDonemi) {
          const hedefOption = document.createElement("option");
          hedefOption.value = "";
          hedefOption.textContent = "Henüz dönem yok";
          hedefGanoDonemi.appendChild(hedefOption);
        }

        if (donemProfilDonemi) {
          const profilOption = document.createElement("option");
          profilOption.value = "";
          profilOption.textContent = "Henüz dönem yok";
          donemProfilDonemi.appendChild(profilOption);
        }
        return;
      }

      donemler.forEach(function(donemAdi) {
        const option = document.createElement("option");
        option.value = donemAdi;
        option.textContent = donemAdi;
        yanoDonemi.appendChild(option);

        if (hedefGanoDonemi) {
          const hedefOption = document.createElement("option");
          hedefOption.value = donemAdi;
          hedefOption.textContent = donemAdi;
          hedefGanoDonemi.appendChild(hedefOption);
        }

        if (donemProfilDonemi) {
          const profilOption = document.createElement("option");
          profilOption.value = donemAdi;
          profilOption.textContent = donemAdi;
          donemProfilDonemi.appendChild(profilOption);
        }
      });

      if (donemler.includes(oncekiSecim)) {
        yanoDonemi.value = oncekiSecim;
      }

      if (hedefGanoDonemi) {
        const planlananDonem = donemler.find(function(donemAdi) {
          return dersler.some(function(ders) {
            return ders.donem === donemAdi && dersPlanlananMi(ders);
          });
        });

        if (donemler.includes(oncekiHedefGanoDonemi)) {
          hedefGanoDonemi.value = oncekiHedefGanoDonemi;
        } else if (planlananDonem) {
          hedefGanoDonemi.value = planlananDonem;
        }
      }

      if (donemProfilDonemi) {
        donemProfilDonemi.value = donemler.includes(oncekiDonemProfilDonemi) ? oncekiDonemProfilDonemi : donemler[0];
      }
    }

    function dersDurumuAlanlariniGuncelle() {
      const planlananSecili = dersDurumu.value === "planlanan";
      notTuruAlani.classList.toggle("alan-gizli", planlananSecili);
      hedefHarfAlani.classList.toggle("alan-gizli", !planlananSecili);
      notTuru.required = !planlananSecili;
      hedefHarf.required = false;
      notTuruAlanlariniGuncelle();
    }

    function notTuruAlanlariniGuncelle() {
      const planlananSecili = dersDurumu.value === "planlanan";
      const suSecili = !planlananSecili && notTuru.value === "su";

      vizeAlani.classList.toggle("alan-gizli", suSecili);
      finalAlani.classList.toggle("alan-gizli", planlananSecili || suSecili);
      suAlani.classList.toggle("alan-gizli", planlananSecili || !suSecili);
      vize.required = !planlananSecili && !suSecili;
      finalNotu.required = !planlananSecili && !suSecili;
      suNotu.required = !planlananSecili && suSecili;
      vize.placeholder = planlananSecili ? "Örn: 42" : "70";
      if (vizeEtiketi) vizeEtiketi.textContent = planlananSecili ? "Vize senaryosu" : "Vize notu";

      if (planlananSecili) {
        canliOrtalamaBaslik.textContent = "Gereken final";
        canliHarfBaslik.textContent = "Hedef";
        formNotu.textContent = "Planlanan derslerde hedef harf ve olası vize notunu girersen gereken finali, dönem YANO'yu ve planlanan GANO'yu görürsün.";
      } else if (suSecili) {
        canliOrtalamaBaslik.textContent = "Ortalama";
        canliHarfBaslik.textContent = "S / U sonucu";
        formNotu.textContent = "S / U dersler YANO ve GANO hesabına katılmaz.";
      } else {
        canliOrtalamaBaslik.textContent = "Ortalama";
        canliHarfBaslik.textContent = "Harf notu";
        formNotu.textContent = "Ortalama vize %40 + final %60 ile hesaplanır. Harf notu otomatik belirlenir.";
      }

      canliSonucuGuncelle();
    }

    function canliSonucuGuncelle() {
      if (dersDurumu.value === "planlanan") {
        const hedefBilgisi = harfNotuBilgisiBul(hedefHarf.value);
        const finalBilgisi = gerekenFinalHesapla(hedefHarf.value, vize.value);
        canliOrtalama.textContent = finalBilgisi.metin;
        canliHarf.textContent = hedefBilgisi ? hedefBilgisi.harf + " / " + hedefBilgisi.katsayi.toFixed(2) : "Hedef seçilmedi";
        return;
      }

      if (notTuru.value === "su") {
        canliOrtalama.textContent = "-";
        canliHarf.textContent = suNotu.value + " / Ortalamaya katılmaz";
        return;
      }

      const ortalama = ortalamaBul(vize.value, finalNotu.value);
      const harf = ortalamadanHarfBul(ortalama);
      canliOrtalama.textContent = ortalama.toFixed(2);
      canliHarf.textContent = harf.harf + " / " + harf.katsayi.toFixed(2);
    }

    function formButonlariniEkle(duzenlemeModu) {
      if (duzenlemeModu) {
        formButonlari.innerHTML =
          '<button type="submit">Değişiklikleri Kaydet</button>' +
          '<button class="ikincil" type="button" onclick="duzenlemeyiIptalEt()">Vazgeç</button>';
      } else {
        formButonlari.innerHTML = '<button type="submit">Dersi Ekle</button>';
      }
    }

    function formuTemizle() {
      dersAdi.value = "";
      donem.value = "";
      kredi.value = "";
      dersDurumu.value = "notlu";
      notTuru.value = "harf";
      hedefHarf.value = "";
      vize.value = "";
      finalNotu.value = "";
      suNotu.value = "S";
      duzenlenenIndex = null;
      formBaslik.textContent = "Ders Ekle ✦";
      formButonlariniEkle(false);
      dersDurumuAlanlariniGuncelle();
    }

    let senaryoSatirVerileri = [];
    let acikSenaryoSatiri = null;
    let aktifDersFiltresi = "tum";
    let acikDonemler = {};
    let acikDersDetaylari = {};

    function senaryoBosSatir(id) {
      return { id: id, courseId: "", vize: "", final: "" };
    }

    function senaryoSatirlariniSifirla() {
      senaryoSatirVerileri = [1, 2, 3, 4, 5].map(function(id) {
        return senaryoBosSatir(id);
      });
    }

    function harfNotluDersKayitlari() {
      return dersler
        .map(function(ders, index) { return { ders: ders, courseId: index }; })
        .filter(function(kayit) { return dersOrtalamayaKatilacakMi(kayit.ders); });
    }

    function senaryoSonuclariniTemizle(mesaj) {
      senaryoYano.textContent = "-";
      senaryoGano.textContent = "-";
      senaryoUyari.textContent = mesaj || "Boş satırlar hesaplamaya katılmaz. S / U dersler listede görünmez.";
    }

    function senaryoDersAdi(satir) {
      if (satir.courseId === "" || satir.courseId === null || satir.courseId === undefined) {
        return "Ders seçilmedi";
      }

      const ders = dersler[Number(satir.courseId)];
      return ders ? ders.ad + " - " + ders.donem : "Ders seçilmedi";
    }

    function senaryoDersButonlari(satir) {
      const kayitlar = harfNotluDersKayitlari();
      if (kayitlar.length === 0) {
        return '<div class="secili-ders">Harf notlu ders yok</div>';
      }

      return kayitlar.map(function(kayit) {
        const secili = String(kayit.courseId) === String(satir.courseId) ? " secili" : "";
        return '<button type="button" class="senaryo-ders-adayi' + secili + '" data-course-id="' + kayit.courseId + '">' + guvenliYazi(kayit.ders.ad + " - " + kayit.ders.donem) + '</button>';
      }).join("");
    }

    function senaryoSatirBilgisi(satir) {
      if (satir.courseId === "" || satir.courseId === null || satir.courseId === undefined) {
        return null;
      }

      const ders = dersler[Number(satir.courseId)];
      if (!ders || !dersOrtalamayaKatilacakMi(ders)) return null;

      return dersBilgisiHesapla({
        ad: "Senaryo",
        donem: ders.donem,
        kredi: ders.kredi,
        notTuru: "harf",
        vize: sayiSinirla(satir.vize),
        final: sayiSinirla(satir.final),
        suNotu: "S"
      });
    }

    function senaryoArayuzunuCiz() {
      const kayitlar = harfNotluDersKayitlari();
      senaryoSatirlari.innerHTML = "";

      if (senaryoSatirVerileri.length !== 5) {
        senaryoSatirlariniSifirla();
      }

      senaryoSatirVerileri.forEach(function(satir) {
        if (satir.courseId !== "") {
          const ders = dersler[Number(satir.courseId)];
          if (!ders || !dersOrtalamayaKatilacakMi(ders)) {
            satir.courseId = "";
            satir.vize = "";
            satir.final = "";
          }
        }

        const bilgi = senaryoSatirBilgisi(satir);
        const div = document.createElement("div");
        div.className = "senaryo-satir";
        div.dataset.id = String(satir.id);
        div.innerHTML =
          '<div class="senaryo-ders-alani"><label>Ders</label>' +
          '<div class="secili-ders">' + guvenliYazi(senaryoDersAdi(satir)) + '</div>' +
          '<button class="ikincil ders-sec-buton" type="button">Ders seç</button>' +
          '<div class="senaryo-ders-listesi" ' + (acikSenaryoSatiri === satir.id ? '' : 'hidden') + '>' + senaryoDersButonlari(satir) + '</div></div>' +
          '<div><label>Vize</label><input class="senaryo-vize" type="number" min="0" max="100" step="1" value="' + guvenliYazi(String(satir.vize)) + '"></div>' +
          '<div><label>Final</label><input class="senaryo-final" type="number" min="0" max="100" step="1" value="' + guvenliYazi(String(satir.final)) + '"></div>' +
          '<div class="senaryo-deger"><span>Ortalama</span><strong class="senaryo-ortalama">' + (bilgi ? bilgi.ortalama.toFixed(2) : '-') + '</strong></div>' +
          '<div class="senaryo-deger"><span>Harf</span><strong class="senaryo-harf">' + (bilgi ? guvenliYazi(bilgi.harf) : '-') + '</strong></div>' +
          '<div class="senaryo-deger"><span>Katsayı</span><strong class="senaryo-katsayi">' + (bilgi ? bilgi.katsayi.toFixed(2) : '-') + '</strong></div>';
        senaryoSatirlari.appendChild(div);
      });

      if (kayitlar.length === 0) {
        senaryoSonuclariniTemizle("Senaryo için harf notlu ders yok. S / U dersler ortalamaya katılmaz.");
        return;
      }

      senaryoHesapla();
    }

    function senaryoSatirSonucunuGuncelle(satirEl, satir) {
      const bilgi = senaryoSatirBilgisi(satir);
      const ortalamaEl = satirEl.querySelector(".senaryo-ortalama");
      const harfEl = satirEl.querySelector(".senaryo-harf");
      const katsayiEl = satirEl.querySelector(".senaryo-katsayi");

      if (!ortalamaEl || !harfEl || !katsayiEl) return;

      ortalamaEl.textContent = bilgi ? bilgi.ortalama.toFixed(2) : "-";
      harfEl.textContent = bilgi ? bilgi.harf : "-";
      katsayiEl.textContent = bilgi ? bilgi.katsayi.toFixed(2) : "-";
    }

    function senaryoArayuzunuScrollKoru() {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      senaryoArayuzunuCiz();
      window.scrollTo(scrollX, scrollY);
      requestAnimationFrame(function() {
        window.scrollTo(scrollX, scrollY);
      });
    }

    function senaryoHesapla() {
      const secilmisSatirlar = senaryoSatirVerileri.filter(function(satir) {
        return satir.courseId !== "" && dersler[Number(satir.courseId)] && dersOrtalamayaKatilacakMi(dersler[Number(satir.courseId)]);
      });

      if (secilmisSatirlar.length === 0) {
        senaryoSonuclariniTemizle("Ders seçilmemiş satırlar hesaplamaya katılmaz.");
        return;
      }

      const geciciDersler = dersler.map(function(ders) {
        return Object.assign({}, ders);
      });
      const degisenDonemler = new Set();

      secilmisSatirlar.forEach(function(satir) {
        const courseId = Number(satir.courseId);
        const ders = dersler[courseId];
        geciciDersler[courseId] = Object.assign({}, ders, {
          vize: sayiSinirla(satir.vize),
          final: sayiSinirla(satir.final)
        });
        degisenDonemler.add(ders.donem);
      });

      const yanoDonemi = degisenDonemler.size === 1 ? Array.from(degisenDonemler)[0] : yanoDonemiSecimi();
      const yano = ortalamaHesapla(geciciDersler.filter(function(ders) {
        return ders.donem === yanoDonemi;
      }));
      const gano = ortalamaHesapla(geciciDersler);

      senaryoYano.textContent = yano.ortalama.toFixed(2);
      senaryoGano.textContent = gano.ortalama.toFixed(2);
      senaryoUyari.textContent = degisenDonemler.size > 1
        ? "Birden fazla dönem seçildi; YANO üstte seçili döneme göre, GANO tüm derslere göre hesaplanır."
        : "Bu hesap geçicidir; gerçek dersler ve kayıtlı veriler değişmez.";
    }

    function yanoDonemiSecimi() {
      const seciliSatir = senaryoSatirVerileri.find(function(satir) {
        return satir.courseId !== "" && dersler[Number(satir.courseId)];
      });
      return yanoDonemi.value || (seciliSatir ? dersler[Number(seciliSatir.courseId)].donem : "");
    }

    function senaryoSatirlariniGuncelle() {
      senaryoArayuzunuCiz();
      senaryoKayitListesiniCiz();
    }

    function senaryoKayitSatirlariniHazirla() {
      return senaryoSatirVerileri.map(function(satir) {
        const ders = satir.courseId !== "" ? dersler[Number(satir.courseId)] : null;
        return {
          courseId: satir.courseId,
          dersAdi: ders ? ders.ad : "",
          donem: ders ? ders.donem : "",
          vize: satir.vize,
          final: satir.final
        };
      });
    }

    function senaryoKaydindaSeciliSatirVarMi(kayit) {
      return kayit && Array.isArray(kayit.satirlar) && kayit.satirlar.some(function(satir) {
        return satir && satir.courseId !== "" && satir.courseId !== null && satir.courseId !== undefined;
      });
    }

    function senaryoDersIdCoz(kayitSatiri) {
      if (!kayitSatiri) return "";

      const ad = String(kayitSatiri.dersAdi || "");
      const don = String(kayitSatiri.donem || "");
      if (ad && don) {
        const bulunanIndex = dersler.findIndex(function(ders) {
          return dersOrtalamayaKatilacakMi(ders) && ders.ad === ad && ders.donem === don;
        });
        if (bulunanIndex >= 0) return String(bulunanIndex);
      }

      if (kayitSatiri.courseId !== "" && kayitSatiri.courseId !== null && kayitSatiri.courseId !== undefined) {
        const eskiIndex = Number(kayitSatiri.courseId);
        if (dersler[eskiIndex] && dersOrtalamayaKatilacakMi(dersler[eskiIndex])) {
          return String(eskiIndex);
        }
      }

      return "";
    }

    function senaryoKayitListesiniCiz() {
      if (!senaryoKayitListesi || !senaryoKayitMesaj) return;
      senaryoKayitListesi.innerHTML = "";

      if (!kayitliSenaryolar.length) {
        senaryoKayitMesaj.textContent = "Kayıtlı senaryo yok.";
        return;
      }

      kayitliSenaryolar.forEach(function(kayit, index) {
        const seciliSayisi = Array.isArray(kayit.satirlar) ? kayit.satirlar.filter(function(satir) {
          return satir && satir.courseId !== "" && satir.courseId !== null && satir.courseId !== undefined;
        }).length : 0;

        const kart = document.createElement("div");
        kart.className = "senaryo-kayit-karti";
        kart.innerHTML =
          '<div><strong>' + guvenliYazi(kayit.ad || ("Senaryo " + (index + 1))) + '</strong>' +
          '<span>' + seciliSayisi + ' ders · ' + guvenliYazi(kayit.tarih || "") + '</span></div>' +
          '<button type="button" class="ikincil senaryo-yukle" data-index="' + index + '">Yükle</button>' +
          '<button type="button" class="sil senaryo-sil" data-index="' + index + '">Sil</button>';
        senaryoKayitListesi.appendChild(kart);
      });

      senaryoKayitMesaj.textContent = "Kaydettiğin senaryoları buradan geri yükleyebilirsin.";
    }

    function senaryoyuKaydetVeGuncelle() {
      const satirlar = senaryoKayitSatirlariniHazirla();
      const yeniKayit = {
        ad: senaryoAdi.value.trim() || ("Senaryo " + (kayitliSenaryolar.length + 1)),
        tarih: new Date().toLocaleDateString("tr-TR"),
        satirlar: satirlar
      };

      if (!senaryoKaydindaSeciliSatirVarMi(yeniKayit)) {
        senaryoKayitMesaj.textContent = "Kaydetmek için önce en az bir ders seçmelisin.";
        return;
      }

      kayitliSenaryolar.unshift(yeniKayit);
      kayitliSenaryolar = kayitliSenaryolar.slice(0, 12);
      senaryoKayitlariniKaydet();
      senaryoAdi.value = "";
      senaryoKayitListesiniCiz();
      senaryoKayitMesaj.textContent = "Senaryo kaydedildi: " + yeniKayit.ad;
    }

    function senaryoKaydiniYukle(index) {
      const kayit = kayitliSenaryolar[index];
      if (!kayit || !Array.isArray(kayit.satirlar)) return;

      senaryoSatirVerileri = [1, 2, 3, 4, 5].map(function(id, sira) {
        const kayitSatiri = kayit.satirlar[sira] || {};
        return {
          id: id,
          courseId: senaryoDersIdCoz(kayitSatiri),
          vize: kayitSatiri.vize === null || kayitSatiri.vize === undefined ? "" : kayitSatiri.vize,
          final: kayitSatiri.final === null || kayitSatiri.final === undefined ? "" : kayitSatiri.final
        };
      });

      acikSenaryoSatiri = null;
      senaryoArayuzunuScrollKoru();
      senaryoKayitMesaj.textContent = "Senaryo yüklendi: " + (kayit.ad || "Adsız senaryo");
    }

    function senaryoKaydiniSil(index) {
      const kayit = kayitliSenaryolar[index];
      if (!kayit) return;
      const eminMisin = confirm("'" + (kayit.ad || "Adsız senaryo") + "' senaryosunu silmek istediğine emin misin?");
      if (!eminMisin) return;

      kayitliSenaryolar.splice(index, 1);
      senaryoKayitlariniKaydet();
      senaryoKayitListesiniCiz();
      senaryoKayitMesaj.textContent = "Senaryo silindi.";
    }



    function calismaOnceligiBilgisi(ders) {
      const hedefVar = harfNotuGecerliMi(ders.hedefHarf);
      const vizeDegeri = hedefVizeDegeri(ders);
      const enYuksek = enYuksekMumkunHedefBul(ders);

      if (!hedefVar || vizeDegeri === "") {
        return {
          seviye: "Eksik bilgi",
          sinif: "eksik",
          puan: -1,
          gereken: "-",
          enYuksek: enYuksek.metin,
          tavsiye: "Öncelik için hedef harf ve vize senaryosu gir."
        };
      }

      const finalBilgisi = gerekenFinalHesapla(ders.hedefHarf, vizeDegeri);
      const finalDegeri = finalBilgisi.deger === null || finalBilgisi.deger === undefined ? -1 : finalBilgisi.deger;

      if (finalBilgisi.durum === "imkansiz") {
        return {
          seviye: "Çok yüksek",
          sinif: "imkansiz",
          puan: 1000 + finalDegeri,
          gereken: finalBilgisi.metin,
          enYuksek: enYuksek.metin,
          tavsiye: "Seçili hedef için final 100 üstü gerekiyor; hedefi düşürmeyi veya bu dersi en öne almayı düşün."
        };
      }

      if (finalDegeri >= 95) {
        return {
          seviye: "Çok yüksek",
          sinif: "cok-yuksek",
          puan: 900 + finalDegeri,
          gereken: finalBilgisi.metin,
          enYuksek: enYuksek.metin,
          tavsiye: "Bu hedef çok sıkı; final çalışmasında ilk sıraya yakın tut."
        };
      }

      if (finalDegeri >= 85) {
        return {
          seviye: "Yüksek",
          sinif: "yuksek",
          puan: 700 + finalDegeri,
          gereken: finalBilgisi.metin,
          enYuksek: enYuksek.metin,
          tavsiye: "Hedef mümkün ama güçlü final ister; düzenli çalışılmalı."
        };
      }

      if (finalDegeri >= 70) {
        return {
          seviye: "Orta",
          sinif: "orta",
          puan: 500 + finalDegeri,
          gereken: finalBilgisi.metin,
          enYuksek: enYuksek.metin,
          tavsiye: "Makul hedef; konu tekrarını aksatma."
        };
      }

      if (finalDegeri >= 50) {
        return {
          seviye: "Düşük",
          sinif: "rahat",
          puan: 300 + finalDegeri,
          gereken: finalBilgisi.metin,
          enYuksek: enYuksek.metin,
          tavsiye: "Hedef rahat görünüyor; temel tekrar yeterli olabilir."
        };
      }

      return {
        seviye: "Rahat",
        sinif: "rahat",
        puan: 100 + finalDegeri,
        gereken: finalBilgisi.metin,
        enYuksek: enYuksek.metin,
        tavsiye: "Bu ders şu an düşük öncelikli görünüyor; enerjiyi daha riskli derslere ayırabilirsin."
      };
    }

    function calismaOnceliginiGuncelle() {
      if (!calismaOnceligiListesi || !calismaOnceligiOzet) return;

      const kayitlar = dersler
        .map(function(ders, index) { return { ders: ders, index: index }; })
        .filter(function(kayit) { return dersPlanlananMi(kayit.ders); })
        .map(function(kayit) {
          return Object.assign({}, kayit, { oncelik: calismaOnceligiBilgisi(kayit.ders) });
        })
        .sort(function(a, b) {
          const puanFarki = b.oncelik.puan - a.oncelik.puan;
          if (puanFarki !== 0) return puanFarki;
          return String(a.ders.ad).localeCompare(String(b.ders.ad), "tr");
        });

      if (kayitlar.length === 0) {
        calismaOnceligiOzet.textContent = "Planlanan ders yok. Planlanan ders ekleyince çalışma önceliği burada görünecek.";
        calismaOnceligiListesi.innerHTML = '<div class="bos">Henüz planlanan ders yok.</div>';
        return;
      }

      const yuksekSayisi = kayitlar.filter(function(kayit) {
        return kayit.oncelik.sinif === "imkansiz" || kayit.oncelik.sinif === "cok-yuksek" || kayit.oncelik.sinif === "yuksek";
      }).length;
      const eksikSayisi = kayitlar.filter(function(kayit) { return kayit.oncelik.sinif === "eksik"; }).length;

      calismaOnceligiOzet.textContent = kayitlar.length + " planlanan ders listelendi" +
        (yuksekSayisi ? " · " + yuksekSayisi + " yüksek öncelikli" : "") +
        (eksikSayisi ? " · " + eksikSayisi + " eksik hedef/vize" : "") + ".";

      calismaOnceligiListesi.innerHTML = kayitlar.map(function(kayit) {
        const ders = kayit.ders;
        const oncelik = kayit.oncelik;
        const hedefMetni = harfNotuGecerliMi(ders.hedefHarf) ? ders.hedefHarf + " / " + harfNotuBilgisiBul(ders.hedefHarf).katsayi.toFixed(2) : "Hedef yok";
        const vizeMetni = hedefVizeDegeri(ders) === "" ? "Vize yok" : String(hedefVizeDegeri(ders));

        return '<article class="oncelik-karti">' +
          '<div class="oncelik-ders"><strong>' + guvenliYazi(ders.ad) + '</strong><span>' + guvenliYazi(ders.donem) + '</span></div>' +
          '<div class="oncelik-rozet ' + guvenliYazi(oncelik.sinif) + '"><span>Öncelik</span>' + guvenliYazi(oncelik.seviye) + '</div>' +
          '<div class="oncelik-rozet"><span>Vize</span>' + guvenliYazi(vizeMetni) + '</div>' +
          '<div class="oncelik-rozet"><span>Hedef</span>' + guvenliYazi(hedefMetni) + '</div>' +
          '<div class="oncelik-rozet"><span>Gereken final</span>' + guvenliYazi(oncelik.gereken) + '</div>' +
          '<p class="oncelik-tavsiye">En yüksek mümkün: ' + guvenliYazi(oncelik.enYuksek) + ' · ' + guvenliYazi(oncelik.tavsiye) + '</p>' +
        '</article>';
      }).join("");
    }



    function donemProfilBilgisi(donemAdi) {
      const profilKodu = donemProfilleri[donemAdi];
      return donemProfilSecenekleri[profilKodu] || null;
    }

    function donemProfilPlaniniGuncelle() {
      if (!donemProfilDonemi || !donemProfilSecimi || !donemProfilMesaj) return;

      const donemAdi = donemProfilDonemi.value;
      const profilKodu = donemAdi ? (donemProfilleri[donemAdi] || "") : "";
      const profil = donemProfilSecenekleri[profilKodu] || null;
      const donemDersleri = dersler.filter(function(ders) {
        return ders.donem === donemAdi;
      });
      const tahminiYano = tahminiOrtalamaHesapla(donemDersleri);
      const planlananSayisi = donemDersleri.filter(dersPlanlananMi).length;

      donemProfilSecimi.value = profilKodu;
      donemProfilAdi.textContent = profil ? profil.ad : "-";
      donemProfilAlt.textContent = profil ? profil.alt : "Profil seç";
      donemProfilYano.textContent = donemDersleri.length ? tahminiYano.ortalama.toFixed(2) : "-";
      donemProfilKredi.textContent = donemDersleri.length ? ("Kredi: " + tahminiYano.kredi + " · Ders: " + donemDersleri.length) : "Kredi: -";
      donemProfilMesaj.className = "hedef-gano-mesaj donem-profil-tavsiye";

      if (!donemAdi) {
        donemProfilMesaj.textContent = "Önce dönem seç.";
        return;
      }

      if (!profil) {
        donemProfilMesaj.textContent = "Bu dönem için profil seçilmedi. Profil seçersen dönem başlığında rozet olarak görünür.";
        return;
      }

      const ek = planlananSayisi > 0
        ? " Bu dönemde " + planlananSayisi + " planlanan ders var; hedef harfleri oynatarak profilin gerçekçi olup olmadığını kontrol edebilirsin."
        : " Bu dönem için planlanan ders yoksa profil sadece not edilmiş olur.";
      donemProfilMesaj.textContent = profil.tavsiye + ek;
    }

    function donemProfiliniDegistir() {
      if (!donemProfilDonemi || !donemProfilSecimi) return;
      const donemAdi = donemProfilDonemi.value;
      if (!donemAdi) return;

      if (donemProfilSecimi.value) {
        donemProfilleri[donemAdi] = donemProfilSecimi.value;
      } else {
        delete donemProfilleri[donemAdi];
      }

      donemProfilleriniKaydet();
      ekraniGuncelle();
    }

    function hedefGanoPlaniniGuncelle() {
      if (!hedefGanoInput || !hedefGanoDonemi || !hedefGanoMesaj) return;

      const mevcut = ortalamaHesapla(dersler);
      const mevcutPuan = mevcut.ortalama * mevcut.kredi;
      const hedefDeger = Number(String(hedefGanoInput.value).replace(",", "."));
      const donemAdi = hedefGanoDonemi.value;
      const donemDersleri = dersler.filter(function(ders) {
        return ders.donem === donemAdi;
      });
      const planlananDersler = donemDersleri.filter(dersPlanlananMi);
      const planlananKredi = toplamKrediHesapla(planlananDersler);
      const mevcutHedefYano = tahminiOrtalamaHesapla(planlananDersler);

      hedefGanoMevcut.textContent = mevcut.ortalama.toFixed(2);
      hedefGanoMevcutKredi.textContent = "YANO/GANO kredisi: " + mevcut.kredi;
      hedefGanoDonemKredi.textContent = String(planlananKredi);
      hedefGanoMevcutYano.textContent = mevcutHedefYano.kredi > 0 ? mevcutHedefYano.ortalama.toFixed(2) : "-";
      hedefGanoFark.textContent = "Fark: -";
      hedefGanoGerekliYano.textContent = "-";
      hedefGanoGerekliAlt.textContent = "Hedef gir";
      hedefGanoMesaj.className = "hedef-gano-mesaj";

      if (!donemAdi) {
        hedefGanoMesaj.textContent = "Önce hesaplamak istediğin dönemi seç.";
        return;
      }

      if (!Number.isFinite(hedefDeger) || hedefGanoInput.value === "") {
        hedefGanoMesaj.textContent = "Hedef GANO yazınca bu dönem kaç YANO gerektiğini hesaplayacağım.";
        return;
      }

      if (hedefDeger < 0 || hedefDeger > 4) {
        hedefGanoMesaj.classList.add("imkansiz");
        hedefGanoMesaj.textContent = "GANO hedefi 0.00 ile 4.00 arasında olmalı.";
        return;
      }

      if (planlananKredi <= 0) {
        hedefGanoMesaj.classList.add("zor");
        hedefGanoMesaj.textContent = "Seçili dönemde planlanan ders kredisi yok. Hedef GANO hesabı için gelecekte alınacak planlanan ders gerekir.";
        hedefGanoGerekliAlt.textContent = "Planlanan kredi yok";
        return;
      }

      const gerekliYano = (hedefDeger * (mevcut.kredi + planlananKredi) - mevcutPuan) / planlananKredi;
      const tumAAYapilirsaGano = (mevcutPuan + 4 * planlananKredi) / (mevcut.kredi + planlananKredi);
      const tumFFOlursaGano = mevcutPuan / (mevcut.kredi + planlananKredi);

      if (gerekliYano <= 0) {
        hedefGanoGerekliYano.textContent = "0.00";
        hedefGanoGerekliAlt.textContent = "Bu hedef zaten güvenli";
        hedefGanoFark.textContent = mevcutHedefYano.kredi > 0 ? "Fark: +" + mevcutHedefYano.ortalama.toFixed(2) : "Fark: -";
        hedefGanoMesaj.classList.add("uygun");
        hedefGanoMesaj.textContent = "Bu hedef mevcut GANO ve seçili krediyle zaten çok rahat görünüyor. Teorik olarak 0.00 YANO bile hedefi bozmaz.";
        return;
      }

      hedefGanoGerekliYano.textContent = gerekliYano.toFixed(2);
      hedefGanoGerekliAlt.textContent = "Bu dönem en az";
      const fark = mevcutHedefYano.kredi > 0 ? mevcutHedefYano.ortalama - gerekliYano : null;
      hedefGanoFark.textContent = fark === null ? "Fark: hedef not yok" : "Fark: " + (fark >= 0 ? "+" : "") + fark.toFixed(2);

      if (gerekliYano > 4) {
        hedefGanoMesaj.classList.add("imkansiz");
        hedefGanoMesaj.textContent = "Bu hedef seçili dönem kredisiyle mümkün görünmüyor. Bu dönemde tüm planlanan derslerden AA alsan bile tahmini GANO en fazla " + tumAAYapilirsaGano.toFixed(2) + " olur.";
        return;
      }

      if (gerekliYano >= 3.5) {
        hedefGanoMesaj.classList.add("zor");
      } else {
        hedefGanoMesaj.classList.add("uygun");
      }

      if (mevcutHedefYano.kredi > 0 && mevcutHedefYano.ortalama >= gerekliYano) {
        hedefGanoMesaj.textContent = "Şu anki hedef harflerin bu GANO hedefini karşılıyor. Seçili dönem hedef YANO'n " + mevcutHedefYano.ortalama.toFixed(2) + ", gereken minimum YANO " + gerekliYano.toFixed(2) + ".";
      } else if (mevcutHedefYano.kredi > 0) {
        hedefGanoMesaj.textContent = "Bu GANO hedefi için seçili dönemde en az " + gerekliYano.toFixed(2) + " YANO gerekir. Şu anki hedef YANO " + mevcutHedefYano.ortalama.toFixed(2) + "; aradaki farkı kapatmak için bazı hedef harfleri yükseltmen gerekebilir.";
      } else {
        hedefGanoMesaj.textContent = "Bu GANO hedefi için seçili dönemde en az " + gerekliYano.toFixed(2) + " YANO gerekir. Hedef harfleri girince şu anki hedef YANO ile karşılaştıracağım.";
      }

      if (hedefDeger < tumFFOlursaGano) {
        hedefGanoMesaj.textContent += " Not: Bu hedef, bu dönem çok düşük geçse bile teorik olarak korunuyor.";
      }
    }

    function dersRiskliMi(ders) {
      if (dersPlanlananMi(ders)) {
        const hedefVar = harfNotuGecerliMi(ders.hedefHarf);
        const vizeDegeri = hedefVizeDegeri(ders);

        if (!hedefVar || vizeDegeri === "") return false;

        const finalBilgisi = gerekenFinalHesapla(ders.hedefHarf, vizeDegeri);
        return finalBilgisi.durum === "imkansiz" || (Number(finalBilgisi.deger) >= 90);
      }

      if (!dersOrtalamayaKatilacakMi(ders)) return false;

      const bilgi = dersBilgisiHesapla(ders);
      return ["FF", "FD", "DD", "DC"].includes(bilgi.harf);
    }

    function dersEksikHedefMi(ders) {
      return dersPlanlananMi(ders) && (!harfNotuGecerliMi(ders.hedefHarf) || hedefVizeDegeri(ders) === "");
    }

    function dersBasariliMi(ders) {
      const bilgi = dersBilgisiHesapla(ders);
      return bilgi.harf === "AA" || bilgi.harf === "BA";
    }

    function dersFiltreyeUyuyorMu(ders) {
      if (aktifDersFiltresi === "riskli") return dersRiskliMi(ders);
      if (aktifDersFiltresi === "eksik") return dersEksikHedefMi(ders);
      if (aktifDersFiltresi === "planlanan") return dersPlanlananMi(ders);
      if (aktifDersFiltresi === "notlu") return !dersPlanlananMi(ders);
      if (aktifDersFiltresi === "basarili") return dersBasariliMi(ders);
      return true;
    }

    function dersFiltreButonlariniGuncelle() {
      if (!dersFiltreleri) return;

      dersFiltreleri.querySelectorAll("button[data-filtre]").forEach(function(buton) {
        buton.classList.toggle("aktif", buton.dataset.filtre === aktifDersFiltresi);
      });
    }

    function filtrelenmisDersKayitlari() {
      return dersler
        .map(function(ders, index) {
          return { ders: ders, index: index };
        })
        .filter(function(kayit) {
          return dersFiltreyeUyuyorMu(kayit.ders);
        });
    }

    function donemeGoreDersKayitlari() {
      const gruplar = {};

      dersler.forEach(function(ders, index) {
        const donemAdi = ders.donem || "Dönem belirtilmedi";
        if (!gruplar[donemAdi]) gruplar[donemAdi] = [];
        gruplar[donemAdi].push({ ders: ders, index: index });
      });

      return Object.keys(gruplar).sort(donemSirala).map(function(donemAdi) {
        const siraliKayitlar = gruplar[donemAdi].slice().sort(function(a, b) {
          return String(a.ders.ad || "").localeCompare(String(b.ders.ad || ""), "tr", { sensitivity: "base" });
        });
        return { donem: donemAdi, kayitlar: siraliKayitlar };
      });
    }



    function dersBasariSimgeleri(ders, bilgi, finalBilgisi) {
      const simgeler = [];
      if (dersPlanlananMi(ders)) simgeler.push({ sembol: "♡", etiket: "Planlanan" });
      if (bilgi && (bilgi.harf === "AA" || bilgi.harf === "BA")) simgeler.push({ sembol: "✦", etiket: "AA / BA" });
      if (dersEksikHedefMi(ders)) simgeler.push({ sembol: "?", etiket: "Eksik hedef" });
      if (finalBilgisi && finalBilgisi.durum === "imkansiz") simgeler.push({ sembol: "!", etiket: "İmkânsız hedef" });
      if (dersRiskliMi(ders)) simgeler.push({ sembol: "⚠", etiket: "Riskli" });
      return simgeler;
    }

    function dersBasariSimgeleriHtml(simgeler) {
      if (!simgeler || simgeler.length === 0) return "";
      return '<span class="basari-simgeleri">' + simgeler.map(function(simge) {
        return '<span class="basari-simge" title="' + guvenliYazi(simge.etiket) + '" aria-label="' + guvenliYazi(simge.etiket) + '">' + guvenliYazi(simge.sembol) + '</span>';
      }).join("") + '</span>';
    }

    function hedefUyariBilgisi(ders, bilgi, finalBilgisi, oneriBilgisi) {
      if (!dersPlanlananMi(ders)) return { metin: "", durum: "" };

      if (!harfNotuGecerliMi(ders.hedefHarf)) {
        return { metin: "? Hedef harf seçilmemiş. Önce AA / BA / BB gibi bir hedef seç.", durum: "eksik" };
      }

      if (hedefVizeDegeri(ders) === "") {
        return { metin: "? Vize senaryosu boş. Gereken final ve gerçekçi hedef yorumu için vize gir.", durum: "eksik" };
      }

      if (!finalBilgisi) return { metin: "", durum: "" };

      if (finalBilgisi.durum === "imkansiz") {
        const yedek = oneriBilgisi && oneriBilgisi.harf ? oneriBilgisi.harf : "daha düşük bir harf";
        return { metin: "! " + ders.hedefHarf + " gerçekçi değil. " + yedek + " hedeflemek daha mantıklı görünüyor.", durum: "imkansiz" };
      }

      const gereken = Number(finalBilgisi.deger);
      if (Number.isFinite(gereken) && gereken >= 95) {
        return { metin: "⚠ " + ders.hedefHarf + " çok zor: finalden yaklaşık " + gereken.toFixed(0) + "+ gerekiyor. Yedek hedef belirlemek iyi olur.", durum: "zor" };
      }

      if (Number.isFinite(gereken) && gereken >= 85) {
        return { metin: "⚠ " + ders.hedefHarf + " yüksek efor istiyor. Final hedefin " + gereken.toFixed(0) + " civarı olmalı.", durum: "yuksek" };
      }

      if (Number.isFinite(gereken) && gereken <= 65) {
        return { metin: "✦ " + ders.hedefHarf + " gayet gerçekçi görünüyor. Bu hedefi koruyabilirsin.", durum: "rahat" };
      }

      return { metin: "", durum: "" };
    }

    function dersAnahtariOlustur(ders) {
      return String((ders && ders.ad) || "").trim().toLocaleLowerCase("tr-TR") + "|" + String((ders && ders.donem) || "").trim().toLocaleLowerCase("tr-TR");
    }

    function donemPerformansEtiketi(yano, riskli, eksik) {
      if (riskli > 0 || eksik > 0) return "Kontrol gerekli";
      if (yano >= 3.5) return "Çok güçlü";
      if (yano >= 3) return "Güçlü";
      if (yano >= 2) return "Orta";
      return "Riskli";
    }

    function donemKarsilastirmasiniGuncelle() {
      if (!donemKarsilastirmaListesi || !donemMiniGrafik) return;

      const gruplar = donemeGoreDersKayitlari();
      if (gruplar.length === 0) {
        donemKarsilastirmaListesi.innerHTML = '<div class="bos">Karşılaştırma için henüz ders yok.</div>';
        donemMiniGrafik.innerHTML = '';
        return;
      }

      const satirlar = gruplar.map(function(grup) {
        const donemDersleri = grup.kayitlar.map(function(kayit) { return kayit.ders; });
        const yano = tahminiOrtalamaHesapla(donemDersleri);
        const kredi = toplamKrediHesapla(donemDersleri);
        const planlananSayisi = donemDersleri.filter(dersPlanlananMi).length;
        const riskliSayisi = donemDersleri.filter(dersRiskliMi).length;
        const eksikSayisi = donemDersleri.filter(dersEksikHedefMi).length;
        return {
          donem: grup.donem,
          yano: yano.ortalama,
          kredi: kredi,
          ders: grup.kayitlar.length,
          planlanan: planlananSayisi,
          riskli: riskliSayisi,
          eksik: eksikSayisi,
          etiket: donemPerformansEtiketi(yano.ortalama, riskliSayisi, eksikSayisi)
        };
      });

      donemMiniGrafik.innerHTML = satirlar.map(function(satir) {
        const yukseklik = Math.max(4, Math.min(100, (satir.yano / 4) * 100));
        return '<div class="mini-grafik-kolon" title="' + guvenliYazi(satir.donem + ' · YANO ' + satir.yano.toFixed(2)) + '">' +
          '<div class="mini-grafik-cubuk" style="--yukseklik:' + yukseklik.toFixed(0) + '%"></div>' +
          '<strong>' + satir.yano.toFixed(2) + '</strong>' +
          '<span>' + guvenliYazi(satir.donem) + '</span>' +
        '</div>';
      }).join('');

      donemKarsilastirmaListesi.innerHTML = satirlar.map(function(satir) {
        const doluluk = Math.max(0, Math.min(100, (satir.yano / 4) * 100));
        return '<article class="donem-karsilastirma-karti">' +
          '<div class="donem-karsilastirma-ust"><strong>' + guvenliYazi(satir.donem) + '</strong><span>' + guvenliYazi(satir.etiket) + '</span></div>' +
          '<div class="donem-karsilastirma-cubuk-alani"><div class="donem-karsilastirma-cubuk" style="--doluluk:' + doluluk.toFixed(0) + '%"></div></div>' +
          '<div class="donem-karsilastirma-metrikler">' +
            '<span>YANO ' + satir.yano.toFixed(2) + '</span>' +
            '<span>Kredi ' + satir.kredi + '</span>' +
            '<span>Ders ' + satir.ders + '</span>' +
            '<span>Risk/Eksik ' + satir.riskli + '/' + satir.eksik + '</span>' +
          '</div>' +
          (satir.planlanan ? '<p class="rapor-notu">Planlanan ders: ' + satir.planlanan + '</p>' : '') +
        '</article>';
      }).join('');
    }

    function veriSagligiSorunlariBul() {
      const sorunlar = [];
      const anahtarlar = {};

      dersler.forEach(function(ders, index) {
        const sira = index + 1;
        const ad = String(ders.ad || "").trim() || "Adsız ders";
        const donemAdi = String(ders.donem || "").trim() || "Dönem belirtilmedi";
        const krediDegeri = Number(ders.kredi);

        if (!ad || ad === "Adsız ders") {
          sorunlar.push({ durum: "hata", sembol: "!", baslik: sira + ". dersin adı boş", aciklama: "Ders adını doldurmalısın." });
        }

        if (!donemAdi || donemAdi === "Dönem belirtilmedi") {
          sorunlar.push({ durum: "uyari", sembol: "?", baslik: ad + " dönem bilgisi eksik", aciklama: "Dönem boş kalırsa hesaplar çalışır ama sıralama ve karşılaştırma zayıflar." });
        }

        if (!Number.isFinite(krediDegeri) || krediDegeri <= 0) {
          sorunlar.push({ durum: "hata", sembol: "!", baslik: ad + " kredi bilgisi sorunlu", aciklama: "Kredi boş, 0 veya geçersiz görünüyor." });
        }

        const anahtar = dersAnahtariOlustur(ders);
        if (anahtarlar[anahtar]) {
          anahtarlar[anahtar].push(sira);
        } else {
          anahtarlar[anahtar] = [sira];
        }

        if (dersPlanlananMi(ders)) {
          if (!harfNotuGecerliMi(ders.hedefHarf)) {
            sorunlar.push({ durum: "uyari", sembol: "?", baslik: ad + " hedef harfi eksik", aciklama: "Planlanan derslerde hedef harf seçilmezse planlanan GANO hesabı eksik kalır." });
          }
          if (hedefVizeDegeri(ders) === "") {
            sorunlar.push({ durum: "uyari", sembol: "?", baslik: ad + " vize senaryosu eksik", aciklama: "Gereken final hesabı için planlanan vizeyi yazmalısın." });
          }
        } else if (ders.notTuru !== "su") {
          const vizeBos = ders.vize === null || ders.vize === undefined || ders.vize === "" || Number.isNaN(Number(ders.vize));
          const finalBos = ders.final === null || ders.final === undefined || ders.final === "" || Number.isNaN(Number(ders.final));
          if (vizeBos || finalBos) {
            sorunlar.push({ durum: "hata", sembol: "!", baslik: ad + " not girişi eksik", aciklama: "Notlu derste vize ve final dolu olmalı." });
          }
        }
      });

      Object.keys(anahtarlar).forEach(function(anahtar) {
        if (!anahtar || anahtar === "|") return;
        if (anahtarlar[anahtar].length > 1) {
          const parcalar = anahtar.split("|");
          sorunlar.push({ durum: "uyari", sembol: "⚠", baslik: "Aynı ders tekrar eklenmiş olabilir", aciklama: "'" + parcalar[0] + "' dersi aynı dönemde " + anahtarlar[anahtar].join(", ") + ". satırlarda görünüyor." });
        }
      });

      if (bysKrediKontrolu) {
        const bysDeger = bysKrediKontrolu.value === "" ? null : Number(String(bysKrediKontrolu.value).replace(",", "."));
        if (bysDeger !== null && Number.isFinite(bysDeger)) {
          const uygulamaKredisi = toplamKrediHesapla(dersler);
          if (Math.abs(uygulamaKredisi - bysDeger) > 0.001) {
            sorunlar.push({ durum: "uyari", sembol: "⚠", baslik: "Toplam kredi BYS ile uyuşmuyor", aciklama: "Uygulama toplamı " + uygulamaKredisi + ", BYS kontrol değeri " + bysDeger + ". Fark: " + (uygulamaKredisi - bysDeger).toFixed(1) + "." });
          }
        }
      }

      return sorunlar;
    }

    function veriSagliginiGuncelle() {
      if (!veriSagligiOzet || !veriSagligiListesi) return;

      const sorunlar = veriSagligiSorunlariBul();
      const hataSayisi = sorunlar.filter(function(sorun) { return sorun.durum === "hata"; }).length;
      const uyariSayisi = sorunlar.filter(function(sorun) { return sorun.durum !== "hata"; }).length;
      const bysGirilmis = bysKrediKontrolu && bysKrediKontrolu.value !== "";

      veriSagligiOzet.className = "hedef-gano-mesaj";
      if (hataSayisi > 0) veriSagligiOzet.classList.add("imkansiz");
      else if (uyariSayisi > 0) veriSagligiOzet.classList.add("zor");
      else veriSagligiOzet.classList.add("uygun");

      if (dersler.length === 0) {
        veriSagligiOzet.textContent = "Henüz ders yok; kontrol için önce ders eklemelisin.";
        veriSagligiListesi.innerHTML = '<article class="veri-sagligi-karti uyari"><span class="veri-sagligi-sembol">?</span><div><strong>Ders bulunamadı</strong><p>Uygulama boş görünüyor.</p></div></article>';
        return;
      }

      if (sorunlar.length === 0) {
        veriSagligiOzet.textContent = "Temiz görünüyor ✦ Kredi, hedef, not ve tekrar kontrolünde sorun bulunmadı" + (bysGirilmis ? "; BYS kredisi de uyumlu." : ".");
        veriSagligiListesi.innerHTML = '<article class="veri-sagligi-karti"><span class="veri-sagligi-sembol">✦</span><div><strong>Her şey düzenli</strong><p>Şu an kritik veri hatası görünmüyor.</p></div></article>';
        return;
      }

      veriSagligiOzet.textContent = hataSayisi + " hata, " + uyariSayisi + " uyarı bulundu. Önce kırmızı/hatalı görünenleri düzelt.";
      veriSagligiListesi.innerHTML = sorunlar.slice(0, 18).map(function(sorun) {
        return '<article class="veri-sagligi-karti ' + guvenliYazi(sorun.durum) + '"><span class="veri-sagligi-sembol">' + guvenliYazi(sorun.sembol) + '</span><div><strong>' + guvenliYazi(sorun.baslik) + '</strong><p>' + guvenliYazi(sorun.aciklama) + '</p></div></article>';
      }).join('') + (sorunlar.length > 18 ? '<article class="veri-sagligi-karti uyari"><span class="veri-sagligi-sembol">…</span><div><strong>Devamı var</strong><p>Toplam ' + sorunlar.length + ' kayıt bulundu; önce ilk 18 tanesini düzelt.</p></div></article>' : '');
    }

    function yedeklemeDurumunuGuncelle() {
      if (!yedeklemeDurumu) return;

      const sonYedek = localStorage.getItem(sonDisaAktarmaKayitAdi);
      if (!sonYedek) {
        yedeklemeDurumu.textContent = "Henüz dışa aktarım kaydı yok. Veriler görünüyorken yedek almak iyi olur.";
        yedeklemeDurumu.className = "yedekleme-durumu uyari";
        return;
      }

      const tarih = new Date(sonYedek);
      if (Number.isNaN(tarih.getTime())) {
        yedeklemeDurumu.textContent = "Yedek tarihi okunamadı. Yeni bir dışa aktarım alabilirsin.";
        yedeklemeDurumu.className = "yedekleme-durumu uyari";
        return;
      }

      const fark = Math.floor((Date.now() - tarih.getTime()) / 86400000);
      yedeklemeDurumu.textContent = fark <= 0
        ? "Bugün yedek alındı."
        : "Son dışa aktarım: " + fark + " gün önce.";
      yedeklemeDurumu.className = "yedekleme-durumu" + (fark >= 7 ? " uyari" : "");
    }

    function donemGrubuOlustur(donemAdi, kayitlar) {
      const siraliKayitlar = kayitlar.slice().sort(function(a, b) {
        return String(a.ders.ad || "").localeCompare(String(b.ders.ad || ""), "tr", { sensitivity: "base" });
      });
      const donemDersleri = siraliKayitlar.map(function(kayit) { return kayit.ders; });
      const yano = tahminiOrtalamaHesapla(donemDersleri);
      const planlananGano = tahminiOrtalamaHesapla(dersler);
      const toplamKredi = toplamKrediHesapla(donemDersleri);
      const planlananSayisi = donemDersleri.filter(dersPlanlananMi).length;
      const planlananKredi = toplamKrediHesapla(donemDersleri.filter(dersPlanlananMi));
      const profilBilgisi = donemProfilBilgisi(donemAdi);
      const kilitli = donemKilitliMi(donemAdi);
      const acik = acikDonemler[donemAdi] === true;

      const grup = document.createElement("section");
      grup.className = "donem-grubu" + (acik ? " acik" : "") + (kilitli ? " kilitli" : "");

      const ust = document.createElement("button");
      ust.type = "button";
      ust.className = "donem-ust";
      ust.dataset.donem = donemAdi;
      ust.setAttribute("aria-expanded", acik ? "true" : "false");

      const baslikAlani = document.createElement("div");
      baslikAlani.className = "donem-baslik-alani";
      baslikAlani.innerHTML =
        '<h3>✦ ' + guvenliYazi(donemAdi) + '</h3>' +
        '<div class="donem-ozetleri">' +
          '<span>YANO: ' + yano.ortalama.toFixed(2) + '</span>' +
          (planlananSayisi > 0 ? '<span>Planlanan GANO: ' + planlananGano.ortalama.toFixed(2) + '</span>' : '') +
          '<span>Kredi: ' + toplamKredi + '</span>' +
          '<span>Ders: ' + siraliKayitlar.length + '</span>' +
          (planlananSayisi > 0 ? '<span>Planlanan: ' + planlananSayisi + ' ders / ' + planlananKredi + ' kredi</span>' : '') +
          (profilBilgisi ? '<span class="profil-rozet">' + guvenliYazi(profilBilgisi.rozet) + '</span>' : '') +
          (kilitli ? '<span class="donem-kilit-rozet">🔒 Kilitli</span>' : '') +
        '</div>';

      const ok = document.createElement("span");
      ok.className = "donem-ok";
      ok.setAttribute("aria-hidden", "true");
      ok.textContent = "›";

      ust.appendChild(baslikAlani);
      ust.appendChild(ok);
      grup.appendChild(ust);

      if (!acik) return grup;

      const icerik = document.createElement("div");
      icerik.className = "donem-icerik";
      icerik.innerHTML = '<div class="donem-kilit-satiri">' +
        '<button type="button" class="ikincil donem-kilit-degistir" data-donem="' + guvenliYazi(donemAdi) + '">' + (kilitli ? 'Kilidi aç 🔓' : 'Bu dönemi kilitle 🔒') + '</button>' +
        '<span>' + (kilitli ? 'Bu dönem kilitli: ders silme, düzenleme ve hedef değiştirme kapalı.' : 'Bitmiş dönemi yanlışlıkla bozmamak için kilitleyebilirsin.') + '</span>' +
      '</div>';

      siraliKayitlar.forEach(function(kayit) {
        icerik.appendChild(kompaktDersOlustur(kayit.ders, kayit.index));
      });

      grup.appendChild(icerik);
      return grup;
    }

    function kompaktDersOlustur(ders, index) {
      const bilgi = dersBilgisiHesapla(ders);
      const planlananDers = dersPlanlananMi(ders);
      const suDersi = ders.notTuru === "su";
      const detayAcik = acikDersDetaylari[String(index)] === true;
      const hedefVize = hedefVizeDegeri(ders);
      const finalBilgisi = planlananDers ? gerekenFinalHesapla(ders.hedefHarf, hedefVize) : null;
      const oneriBilgisi = planlananDers ? enYuksekMumkunHedefBul(ders) : null;
      const hedefUyari = hedefUyariBilgisi(ders, bilgi, finalBilgisi, oneriBilgisi);
      const simgeler = dersBasariSimgeleri(ders, bilgi, finalBilgisi);
      const kilitli = donemKilitliMi(ders.donem);
      const kilitNiteligi = kilitli ? ' disabled title="Bu dönem kilitli"' : '';

      const kart = document.createElement("article");
      kart.className = "kompakt-ders" + (planlananDers ? " planlanan-ders" : "") + (dersRiskliMi(ders) ? " riskli-ders" : "") + (kilitli ? " kilitli-ders" : "");
      kart.dataset.index = String(index);

      const ana = document.createElement("div");
      ana.className = "kompakt-ana";
      ana.innerHTML =
        '<div class="kompakt-ders-adi"><div class="ders-ad-satiri"><strong>' + guvenliYazi(ders.ad) + '</strong>' + dersBasariSimgeleriHtml(simgeler) + '</div><span>' + guvenliYazi(ders.donem) + '</span>' + (planlananDers ? '<em class="planlanan-etiket">✦ Planlanan ders</em>' : '') + '</div>' +
        '<div class="kompakt-rozet"><span>Kredi</span>' + guvenliYazi(String(ders.kredi)) + '</div>' +
        (planlananDers
          ? '<div class="kompakt-rozet planlanan-vize-rozet"><span>Vize</span><input class="planlanan-vize-girdisi" data-index="' + index + '" type="number" min="0" max="100" step="1" placeholder="-" value="' + guvenliYazi(String(hedefVize)) + '" aria-label="Vize senaryosu gir"' + kilitNiteligi + '></div>'
          : '<div class="kompakt-rozet"><span>Ortalama</span>' + (suDersi ? '-' : bilgi.ortalama.toFixed(2)) + '</div>') +
        (planlananDers
          ? '<div class="kompakt-rozet hedef-harf-rozet"><span>Hedef</span><select class="hedef-harf-secimi" data-index="' + index + '" aria-label="Hedef harf notu seç"' + kilitNiteligi + '>' + hedefHarfSecenekleri(ders.hedefHarf) + '</select></div>'
          : '<div class="kompakt-rozet"><span>' + (suDersi ? 'S/U' : 'Harf') + '</span>' + guvenliYazi(bilgi.harf) + '</div>') +
        (planlananDers
          ? '<div class="kompakt-rozet"><span>Gereken Final</span><strong class="' + (finalBilgisi.durum === 'imkansiz' ? 'gereken-final-imkansiz' : '') + '">' + guvenliYazi(finalBilgisi.metin) + '</strong></div>'
          : '<div class="kompakt-rozet"><span>Katsayı</span>' + (suDersi ? (bilgi.katsayi !== null && bilgi.katsayi !== undefined ? bilgi.katsayi.toFixed(2) : '-') : bilgi.katsayi.toFixed(2)) + '</div>') +
        (planlananDers
          ? '<div class="kompakt-rozet oneri-rozet"><span>En yüksek</span><strong>' + guvenliYazi(oneriBilgisi.metin) + '</strong><small>Final: ' + guvenliYazi(oneriBilgisi.finalMetin) + '</small></div>'
          : '') +
        '<div class="kompakt-butonlar">' +
          '<button class="ikincil kompakt-detay-buton" type="button" data-index="' + index + '">' + (detayAcik ? 'Gizle' : 'Detay') + '</button>' +
          '<button class="ikincil kompakt-duzenle" type="button" data-index="' + index + '"' + kilitNiteligi + '>Düzenle</button>' +
          '<button class="sil kompakt-sil" type="button" data-index="' + index + '"' + kilitNiteligi + '>Sil</button>' +
        '</div>' +
        (hedefUyari.metin ? '<p class="hedef-uyari hedef-uyari-' + guvenliYazi(hedefUyari.durum) + '">' + guvenliYazi(hedefUyari.metin) + '</p>' : '');
      kart.appendChild(ana);

      if (detayAcik) {
        const detay = document.createElement("div");
        detay.className = "kompakt-detay";
        detay.innerHTML = planlananDers
          ? '<div class="bilgi"><span>Vize senaryosu</span><strong>' + (hedefVize === "" ? '-' : guvenliYazi(String(hedefVize))) + '</strong></div>' +
            '<div class="bilgi"><span>Hedef harf</span><strong>' + guvenliYazi(bilgi.harf) + (bilgi.katsayi !== null && bilgi.katsayi !== undefined ? ' / ' + bilgi.katsayi.toFixed(2) : '') + '</strong></div>' +
            '<div class="bilgi"><span>Gereken final</span><strong>' + guvenliYazi(finalBilgisi.metin) + '</strong></div>' +
            '<div class="bilgi oneri-bilgi"><span>En yüksek mümkün hedef</span><strong>' + guvenliYazi(oneriBilgisi.metin) + ' · Final: ' + guvenliYazi(oneriBilgisi.finalMetin) + '</strong></div>' +
            '<div class="bilgi"><span>Durum</span><strong>' + guvenliYazi(finalBilgisi.detay) + '</strong></div>' +
            (hedefUyari.metin ? '<div class="bilgi"><span>Basit yorum</span><strong>' + guvenliYazi(hedefUyari.metin) + '</strong></div>' : '') +
            tumHedeflerIcinFinalTablosu(ders)
          : '<div class="bilgi"><span>Not türü</span><strong>' + (suDersi ? 'S / U' : 'Harf notlu') + '</strong></div>' +
            '<div class="bilgi"><span>Vize</span><strong>' + (suDersi ? '-' : guvenliYazi(String(ders.vize))) + '</strong></div>' +
            '<div class="bilgi"><span>Final</span><strong>' + (suDersi ? '-' : guvenliYazi(String(ders.final))) + '</strong></div>' +
            '<div class="bilgi"><span>Durum</span><strong>' + guvenliYazi(bilgi.aciklama) + '</strong></div>';
        kart.appendChild(detay);
      }

      return kart;
    }

    function dersleriDonemlereGoreCiz() {
      dersListesi.innerHTML = "";
      dersFiltreButonlariniGuncelle();

      if (dersler.length === 0) {
        dersListesi.innerHTML = '<div class="bos">Henüz ders eklenmedi.</div>';
        if (dersFiltreBilgi) dersFiltreBilgi.textContent = "0 ders gösteriliyor";
        return;
      }

      const filtreliKayitlar = filtrelenmisDersKayitlari();
      if (dersFiltreBilgi) {
        dersFiltreBilgi.textContent = filtreliKayitlar.length + " / " + dersler.length + " ders gösteriliyor";
      }

      if (filtreliKayitlar.length === 0) {
        dersListesi.innerHTML = '<div class="bos">Bu filtrede gösterilecek ders yok.</div>';
        return;
      }

      const gruplar = {};
      filtreliKayitlar.forEach(function(kayit) {
        const donemAdi = kayit.ders.donem || "Dönem belirtilmedi";
        if (!gruplar[donemAdi]) gruplar[donemAdi] = [];
        gruplar[donemAdi].push(kayit);
      });

      Object.keys(gruplar).sort(donemSirala).forEach(function(donemAdi) {
        dersListesi.appendChild(donemGrubuOlustur(donemAdi, gruplar[donemAdi]));
      });
    }

        function ekraniGuncelle() {
      donemAlanlariniGuncelle();

      const seciliDonem = yanoDonemi.value;
      const seciliDonemDersleri = dersler.filter(function(ders) {
        return ders.donem === seciliDonem;
      });
      const yano = tahminiOrtalamaHesapla(seciliDonemDersleri);
      const gano = ortalamaHesapla(dersler);
      const planlananGano = tahminiOrtalamaHesapla(dersler);
      const seciliDonemdePlanlananVar = seciliDonemDersleri.some(dersPlanlananMi);

      yanoSonuc.textContent = yano.ortalama.toFixed(2);
      yanoAlt.textContent = seciliDonem ? ("Kredi: " + yano.kredi + (seciliDonemdePlanlananVar ? " · Planlanan GANO: " + planlananGano.ortalama.toFixed(2) : "")) : "Kredi: 0";
      ganoSonuc.textContent = gano.ortalama.toFixed(2);
      ganoAlt.textContent = "YANO/GANO kredisi: " + gano.kredi;
      toplamKredi.textContent = toplamKrediHesapla(dersler);
      dersSayisi.textContent = dersler.length + " ders";
      dersSayisiKarti.textContent = "Ders: " + dersler.length;
      senaryoSatirlariniGuncelle();

      dersleriDonemlereGoreCiz();
      calismaOnceliginiGuncelle();
      hedefGanoPlaniniGuncelle();
      donemProfilPlaniniGuncelle();
      donemKarsilastirmasiniGuncelle();
      veriSagliginiGuncelle();
      yedeklemeDurumunuGuncelle();
      miniYedekleriGuncelle();
    }


    function hedefHarfiKarttanGuncelle(index, yeniHarf) {
      if (!dersler[index] || !dersPlanlananMi(dersler[index])) return;
      if (donemKilitliMi(dersler[index].donem)) {
        alert("Bu dönem kilitli. Hedefi değiştirmek için önce dönem kilidini aç.");
        ekraniGuncelle();
        return;
      }

      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      dersler[index].hedefHarf = harfNotuGecerliMi(yeniHarf) ? String(yeniHarf).toUpperCase() : "";
      kaydet("Hedef harf değişikliğinden önce");
      ekraniGuncelle();
      window.scrollTo(scrollX, scrollY);
      requestAnimationFrame(function() {
        window.scrollTo(scrollX, scrollY);
      });
    }

    function hedefVizeKarttanGuncelle(index, yeniVize) {
      if (!dersler[index] || !dersPlanlananMi(dersler[index])) return;
      if (donemKilitliMi(dersler[index].donem)) {
        alert("Bu dönem kilitli. Vize senaryosunu değiştirmek için önce dönem kilidini aç.");
        ekraniGuncelle();
        return;
      }

      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      dersler[index].hedefVize = yeniVize === "" || yeniVize === null || yeniVize === undefined ? "" : sayiSinirla(yeniVize);
      kaydet("Vize senaryosu değişikliğinden önce");
      ekraniGuncelle();
      window.scrollTo(scrollX, scrollY);
      requestAnimationFrame(function() {
        window.scrollTo(scrollX, scrollY);
      });
    }

    function raporStiliniOlustur() {
      return '<style>' +
        'body{font-family:Arial,Helvetica,sans-serif;margin:0;padding:28px;color:#2f2534;background:#fff8ff;}' +
        'h1{margin:0 0 6px;font-size:26px;color:var(--purple-dark);}' +
        'h2{margin:24px 0 10px;font-size:18px;color:var(--purple-dark);border-bottom:2px solid var(--lesson-2);padding-bottom:6px;}' +
        'p{line-height:1.5;}' +
        '.ust{margin-bottom:18px;padding:16px;border-radius:16px;background:var(--lesson-1);}' +
        '.ozet{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:16px 0;}' +
        '.kart{padding:12px;border-radius:14px;background:#f6edf6;border:1px solid var(--lesson-2);}' +
        '.kart span{display:block;font-size:12px;font-weight:800;color:var(--purple-mid);margin-bottom:4px;}' +
        '.kart strong{display:block;font-size:20px;color:var(--text);}' +
        'table{width:100%;border-collapse:collapse;margin:8px 0 18px;font-size:12px;}' +
        'th,td{border:1px solid var(--lesson-2);padding:7px;text-align:left;vertical-align:top;}' +
        'th{background:var(--lesson-1);color:var(--text);}' +
        'tr:nth-child(even) td{background:#fbf5fb;}' +
        '.uyari{color:var(--danger-dark);font-weight:800;}' +
        '.iyi{color:var(--purple-dark);font-weight:800;}' +
        '.kucuk{font-size:12px;color:#6c5972;}' +
        '@media print{body{padding:18px}.no-print{display:none}.ozet{grid-template-columns:repeat(4,1fr)}h2{break-after:avoid}table{break-inside:auto}tr{break-inside:avoid}}' +
        '</style>';
    }

    function raporTabloSatiri(hucreler) {
      return '<tr>' + hucreler.map(function(hucre) {
        return '<td>' + guvenliYazi(hucre) + '</td>';
      }).join('') + '</tr>';
    }

    function raporDersSatiri(ders) {
      const bilgi = dersBilgisiHesapla(ders);
      const planlanan = dersPlanlananMi(ders);
      const vizeDegeri = planlanan ? hedefVizeDegeri(ders) : (ders.vize === null || ders.vize === undefined ? '-' : ders.vize);
      const finalDegeri = planlanan ? '-' : (ders.final === null || ders.final === undefined ? '-' : ders.final);
      const gereken = planlanan ? gerekenFinalHesapla(ders.hedefHarf, hedefVizeDegeri(ders)) : null;
      const enYuksek = planlanan ? enYuksekMumkunHedefBul(ders) : null;

      return [
        ders.ad,
        ders.donem,
        String(ders.kredi),
        planlanan ? 'Planlanan' : (ders.notTuru === 'su' ? 'S / U' : 'Notlu'),
        planlanan ? (ders.hedefHarf || '-') : bilgi.harf,
        vizeDegeri === '' ? '-' : String(vizeDegeri),
        finalDegeri === '' ? '-' : String(finalDegeri),
        planlanan ? gereken.metin : (bilgi.ortalama === null ? '-' : bilgi.ortalama.toFixed(2)),
        planlanan ? enYuksek.metin : bilgi.aciklama
      ];
    }

    function raporTablosuOlustur(basliklar, satirlar) {
      return '<table><thead><tr>' + basliklar.map(function(baslik) {
        return '<th>' + guvenliYazi(baslik) + '</th>';
      }).join('') + '</tr></thead><tbody>' + satirlar.map(raporTabloSatiri).join('') + '</tbody></table>';
    }

    function raporHtmlOlustur() {
      const bugun = new Date().toLocaleString('tr-TR');
      const gano = ortalamaHesapla(dersler);
      const tahminiGano = tahminiOrtalamaHesapla(dersler);
      const toplamKredi = toplamKrediHesapla(dersler);
      const planlananDersler = dersler.filter(dersPlanlananMi);
      const riskliDersler = dersler.filter(dersRiskliMi);
      const eksikHedefler = dersler.filter(dersEksikHedefMi);

      const donemSatirlari = donemeGoreDersKayitlari().map(function(grup) {
        const donemDersleri = grup.kayitlar.map(function(kayit) { return kayit.ders; });
        const yano = tahminiOrtalamaHesapla(donemDersleri);
        const kredi = toplamKrediHesapla(donemDersleri);
        const planlananSayisi = donemDersleri.filter(dersPlanlananMi).length;
        const profil = donemProfilBilgisi(grup.donem);
        return [
          grup.donem,
          yano.ortalama.toFixed(2),
          String(kredi),
          String(grup.kayitlar.length),
          planlananSayisi ? String(planlananSayisi) : '-',
          profil ? profil.ad : '-'
        ];
      });

      const oncelikSatirlari = planlananDersler.map(function(ders) {
        const oncelik = calismaOnceligiBilgisi(ders);
        return [
          ders.ad,
          ders.donem,
          ders.hedefHarf || '-',
          hedefVizeDegeri(ders) === '' ? '-' : String(hedefVizeDegeri(ders)),
          oncelik.gereken,
          oncelik.seviye,
          oncelik.tavsiye
        ];
      }).sort(function(a, b) {
        const da = planlananDersler.find(function(d) { return d.ad === a[0] && d.donem === a[1]; });
        const db = planlananDersler.find(function(d) { return d.ad === b[0] && d.donem === b[1]; });
        return calismaOnceligiBilgisi(db).puan - calismaOnceligiBilgisi(da).puan;
      });

      let html = '<!DOCTYPE html><html lang="tr"><head><meta charset="UTF-8"><title>Yıldızlı Ortalama Raporu</title>' + raporStiliniOlustur() + '</head><body>';
      html += '<div class="ust"><h1>Yıldızlı Ortalama ✦ Rapor</h1><p class="kucuk">Oluşturulma: ' + guvenliYazi(bugun) + '</p><button class="no-print" onclick="window.print()">Yazdır / PDF olarak kaydet</button></div>';

      html += '<div class="ozet">';
      html += '<div class="kart"><span>Gerçek GANO</span><strong>' + gano.ortalama.toFixed(2) + '</strong><small>Kredi: ' + gano.kredi + '</small></div>';
      html += '<div class="kart"><span>Planlanan GANO</span><strong>' + tahminiGano.ortalama.toFixed(2) + '</strong><small>Hedefler dahil</small></div>';
      html += '<div class="kart"><span>Toplam kredi</span><strong>' + toplamKredi + '</strong><small>Ders: ' + dersler.length + '</small></div>';
      html += '<div class="kart"><span>Risk / Eksik</span><strong>' + riskliDersler.length + ' / ' + eksikHedefler.length + '</strong><small>Riskli / eksik hedef</small></div>';
      html += '</div>';

      html += '<h2>Dönem Özeti</h2>' + raporTablosuOlustur(['Dönem','YANO','Kredi','Ders','Planlanan','Profil'], donemSatirlari);

      if (riskliDersler.length) {
        html += '<h2>Riskli Dersler</h2>' + raporTablosuOlustur(['Ders','Dönem','Kredi','Tür','Harf/Hedef','Vize','Final','Gereken/Ort.','Not'], riskliDersler.map(raporDersSatiri));
      }

      if (eksikHedefler.length) {
        html += '<h2>Eksik Hedefli Planlanan Dersler</h2>' + raporTablosuOlustur(['Ders','Dönem','Kredi','Tür','Harf/Hedef','Vize','Final','Gereken/Ort.','Not'], eksikHedefler.map(raporDersSatiri));
      }

      if (oncelikSatirlari.length) {
        html += '<h2>Çalışma Önceliği</h2>' + raporTablosuOlustur(['Ders','Dönem','Hedef','Vize','Gereken final','Öncelik','Tavsiye'], oncelikSatirlari);
      }

      html += '<h2>Tüm Dersler</h2>' + raporTablosuOlustur(['Ders','Dönem','Kredi','Tür','Harf/Hedef','Vize','Final','Gereken/Ort.','Not'], dersler.map(raporDersSatiri));
      html += '<p class="kucuk">Bu rapor uygulamadaki kayıtlı dersler ve hedef senaryoları üzerinden hazırlanmıştır.</p>';
      html += '</body></html>';
      return html;
    }

    function raporuYazdir() {
      const pencere = window.open('', '_blank');
      if (!pencere) {
        alert('Rapor penceresi açılamadı. Tarayıcı açılır pencereyi engellemiş olabilir.');
        return;
      }

      pencere.document.open();
      pencere.document.write(raporHtmlOlustur());
      pencere.document.close();
      pencere.focus();

      setTimeout(function() {
        pencere.print();
      }, 350);
    }

    function tumVerileriSil() {
      const ilkOnay = confirm("Tüm dersleri, kayıtlı senaryoları ve dönem profillerini silmek istediğine emin misin? Bu işlem geri alınamaz. Önce yedek almadıysan iptal et.");
      if (!ilkOnay) return;

      const yaziliOnay = prompt("Son onay için SİL yaz. Büyük/küçük harf fark etmez.");
      if (!yaziliOnay || yaziliOnay.trim().toLocaleUpperCase("tr-TR") !== "SİL") {
        alert("Silme işlemi iptal edildi.");
        return;
      }

      otomatikYedekEkle(anlikVeriSnapshot("Tüm verileri silmeden önce"));

      dersler = [];
      kayitliSenaryolar = [];
      donemProfilleri = {};
      kilitliDonemler = {};
      acikDonemler = {};
      acikDersDetaylari = {};
      senaryoSatirlariniSifirla();

      localStorage.removeItem(kayitAdi);
      localStorage.removeItem(senaryoKayitAdi);
      localStorage.removeItem(donemProfilKayitAdi);
      localStorage.removeItem(kilitliDonemKayitAdi);
      localStorage.setItem(bilerekSilindiKayitAdi, "true");

      formuTemizle();
      ekraniGuncelle();
      alert("Tüm kayıtlı dersler, senaryolar ve dönem profilleri silindi.");
    }

    dersFiltreleri.addEventListener("click", function(olay) {
      const buton = olay.target.closest("button[data-filtre]");
      if (!buton) return;

      aktifDersFiltresi = buton.dataset.filtre || "tum";
      dersleriDonemlereGoreCiz();
    });

    dersListesi.addEventListener("change", function(olay) {
      const hedefSecimi = olay.target.closest(".hedef-harf-secimi");
      if (hedefSecimi) {
        hedefHarfiKarttanGuncelle(Number(hedefSecimi.dataset.index), hedefSecimi.value);
        return;
      }

      const vizeSecimi = olay.target.closest(".planlanan-vize-girdisi");
      if (vizeSecimi) {
        hedefVizeKarttanGuncelle(Number(vizeSecimi.dataset.index), vizeSecimi.value);
      }
    });

    dersListesi.addEventListener("keydown", function(olay) {
      const vizeSecimi = olay.target.closest(".planlanan-vize-girdisi");
      if (vizeSecimi && olay.key === "Enter") {
        vizeSecimi.blur();
      }
    });

    dersListesi.addEventListener("click", function(olay) {
      const kilitButonu = olay.target.closest(".donem-kilit-degistir");
      if (kilitButonu) {
        donemKilidiDegistir(kilitButonu.dataset.donem);
        return;
      }

      const donemButonu = olay.target.closest(".donem-ust");
      if (donemButonu) {
        const donemAdi = donemButonu.dataset.donem;
        acikDonemler[donemAdi] = !acikDonemler[donemAdi];
        dersleriDonemlereGoreCiz();
      calismaOnceliginiGuncelle();
        return;
      }

      const detayButonu = olay.target.closest(".kompakt-detay-buton");
      if (detayButonu) {
        const index = detayButonu.dataset.index;
        acikDersDetaylari[index] = !acikDersDetaylari[index];
        dersleriDonemlereGoreCiz();
      calismaOnceliginiGuncelle();
        return;
      }

      const duzenleButonu = olay.target.closest(".kompakt-duzenle");
      if (duzenleButonu) {
        dersDuzenle(Number(duzenleButonu.dataset.index));
        return;
      }

      const silButonu = olay.target.closest(".kompakt-sil");
      if (silButonu) {
        dersSil(Number(silButonu.dataset.index));
      }
    });

    [vize, finalNotu].forEach(function(input) {
      input.addEventListener("input", function() {
        if (input.value === "") {
          canliSonucuGuncelle();
          return;
        }

        input.value = sayiSinirla(input.value);
        canliSonucuGuncelle();
      });
    });

    dersDurumu.addEventListener("change", dersDurumuAlanlariniGuncelle);
    hedefHarf.addEventListener("change", canliSonucuGuncelle);
    notTuru.addEventListener("change", notTuruAlanlariniGuncelle);
    suNotu.addEventListener("change", canliSonucuGuncelle);
    yanoDonemi.addEventListener("change", function() {
      ekraniGuncelle();
      senaryoHesapla();
    });

    function ayarMenuleriniKapat(haricMenu) {
      [
        { menu: temaMenu, buton: temaMenuButonu },
        { menu: doodleMenu, buton: doodleMenuButonu },
        { menu: ofMenu, buton: ofMenuButonu }
      ].forEach(function(oge) {
        if (!oge.menu || oge.menu === haricMenu) return;
        oge.menu.hidden = true;
        if (oge.buton) oge.buton.setAttribute("aria-expanded", "false");
      });
    }

    function ayarMenuBagla(buton, menu) {
      if (!buton || !menu) return;
      buton.addEventListener("click", function(olay) {
        olay.stopPropagation();
        const acilacak = menu.hidden;
        ayarMenuleriniKapat(menu);
        menu.hidden = !acilacak;
        buton.setAttribute("aria-expanded", acilacak ? "true" : "false");
      });
    }

    function ayarButonDurumlariniGuncelle() {
      const seciliTema = temaSecimi ? temaSecimi.value : "mor";
      const seciliDoodle = doodleYogunlugu ? doodleYogunlugu.value : "orta";

      document.querySelectorAll("[data-tema]").forEach(function(buton) {
        buton.classList.toggle("aktif", buton.dataset.tema === seciliTema);
      });

      document.querySelectorAll("[data-doodle]").forEach(function(buton) {
        buton.classList.toggle("aktif", buton.dataset.doodle === seciliDoodle);
      });
    }

    ayarMenuBagla(temaMenuButonu, temaMenu);
    ayarMenuBagla(doodleMenuButonu, doodleMenu);
    ayarMenuBagla(ofMenuButonu, ofMenu);

    document.addEventListener("click", function(olay) {
      if (!olay.target.closest(".ayar-kutusu")) {
        ayarMenuleriniKapat();
      }
    });

    document.addEventListener("keydown", function(olay) {
      if (olay.key === "Escape") ayarMenuleriniKapat();
    });

    document.querySelectorAll("[data-tema]").forEach(function(buton) {
      buton.addEventListener("click", function() {
        if (!temaSecimi) return;
        temaSecimi.value = buton.dataset.tema;
        localStorage.setItem(temaKayitAdi, temaSecimi.value);
        temaSeciminiUygula();
        ayarMenuleriniKapat();
      });
    });

    document.querySelectorAll("[data-doodle]").forEach(function(buton) {
      buton.addEventListener("click", function() {
        if (!doodleYogunlugu) return;
        doodleYogunlugu.value = buton.dataset.doodle;
        localStorage.setItem(doodleYogunlukKayitAdi, doodleYogunlugu.value);
        doodleYogunlugunuUygula();
        ayarMenuleriniKapat();
      });
    });

    function temaSeciminiUygula() {
      if (!temaSecimi) return;

      const secim = localStorage.getItem(temaKayitAdi) || "mor";
      const uygunSecim = ["mor", "mavi", "yesil", "kirmizi", "sari"].includes(secim) ? secim : "mor";

      document.body.classList.remove("tema-mor", "tema-mavi", "tema-yesil", "tema-kirmizi", "tema-sari");
      document.body.classList.add("tema-" + uygunSecim);
      temaSecimi.value = uygunSecim;
      ayarButonDurumlariniGuncelle();
    }

    if (temaSecimi) {
      temaSecimi.addEventListener("change", function() {
        localStorage.setItem(temaKayitAdi, temaSecimi.value);
        temaSeciminiUygula();
      });
      temaSeciminiUygula();
    }

    function doodleYogunlugunuUygula() {
      if (!doodleYogunlugu) return;

      const secim = localStorage.getItem(doodleYogunlukKayitAdi) || "orta";
      const uygunSecim = ["az", "orta", "cok", "asiri"].includes(secim) ? secim : "orta";

      document.body.classList.remove("doodle-az", "doodle-orta", "doodle-cok", "doodle-asiri");
      document.body.classList.add("doodle-" + uygunSecim);
      doodleYogunlugu.value = uygunSecim;
      ayarButonDurumlariniGuncelle();
    }

    if (doodleYogunlugu) {
      doodleYogunlugu.addEventListener("change", function() {
        localStorage.setItem(doodleYogunlukKayitAdi, doodleYogunlugu.value);
        doodleYogunlugunuUygula();
      });
      doodleYogunlugunuUygula();
    }

    if (hedefGanoInput) {
      hedefGanoInput.addEventListener("input", hedefGanoPlaniniGuncelle);
    }
    if (hedefGanoDonemi) {
      hedefGanoDonemi.addEventListener("change", hedefGanoPlaniniGuncelle);
    }

    if (donemProfilDonemi) {
      donemProfilDonemi.addEventListener("change", donemProfilPlaniniGuncelle);
    }

    if (donemProfilSecimi) {
      donemProfilSecimi.addEventListener("change", donemProfiliniDegistir);
    }

    if (raporYazdirButonu) {
      raporYazdirButonu.addEventListener("click", raporuYazdir);
    }

    if (tumunuSilButonu) {
      tumunuSilButonu.addEventListener("click", tumVerileriSil);
    }

    if (geriAlButonu) {
      geriAlButonu.addEventListener("click", sonIslemiGeriAl);
    }

    if (miniYedekListesi) {
      miniYedekListesi.addEventListener("click", function(olay) {
        const buton = olay.target.closest(".mini-yedek-yukle");
        if (!buton) return;
        yedegiUygula(Number(buton.dataset.yedekIndex), false);
      });
    }

    if (miniYedekleriTemizle) {
      miniYedekleriTemizle.addEventListener("click", function() {
        if (!otomatikYedekler.length) {
          alert("Temizlenecek mini yedek yok.");
          return;
        }
        const onay = confirm("Mini yedek geçmişi temizlensin mi? Ana ders verilerin silinmez.");
        if (!onay) return;
        otomatikYedekler = [];
        otomatikYedekleriKaydet();
        miniYedekleriGuncelle();
      });
    }

    if (uygulamaPenceresiButonu) {
      uygulamaPenceresiButonu.addEventListener("click", function() {
        const pencere = window.open(window.location.href, "yildizliOrtalama", "popup=yes,width=1280,height=900,menubar=no,toolbar=no,location=no,status=no");
        if (!pencere) alert("Ayrı pencere açılamadı. Tarayıcı açılır pencereyi engellemiş olabilir.");
      });
    }

    if (kisaYolDosyasiButonu) {
      kisaYolDosyasiButonu.addEventListener("click", function() {
        const icerik = "[InternetShortcut]\nURL=" + window.location.href + "\n";
        const dosya = new Blob([icerik], { type: "application/octet-stream" });
        const adres = URL.createObjectURL(dosya);
        const baglanti = document.createElement("a");
        baglanti.href = adres;
        baglanti.download = "Yildizli-Ortalama.url";
        document.body.appendChild(baglanti);
        baglanti.click();
        baglanti.remove();
        URL.revokeObjectURL(adres);
      });
    }

    if (uygulamaModuNotu && window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) {
      uygulamaModuNotu.textContent = "Şu an uygulama/standalone moduna yakın açılmış görünüyor ✦";
    }

    function senaryoyuTemizleVeGuncelle() {
      senaryoSatirlariniSifirla();
      acikSenaryoSatiri = null;
      senaryoArayuzunuScrollKoru();
    }

    senaryoyuTemizle.addEventListener("click", function(olay) {
      olay.preventDefault();
      senaryoyuTemizleVeGuncelle();
    });

    senaryoSatirlari.addEventListener("click", function(olay) {
      olay.preventDefault();
      const satirEl = olay.target.closest(".senaryo-satir");
      if (!satirEl) return;
      const satir = senaryoSatirVerileri.find(function(kayit) {
        return String(kayit.id) === satirEl.dataset.id;
      });
      if (!satir) return;

      if (olay.target.classList.contains("ders-sec-buton")) {
        acikSenaryoSatiri = acikSenaryoSatiri === satir.id ? null : satir.id;
        senaryoArayuzunuScrollKoru();
        return;
      }

      if (olay.target.classList.contains("senaryo-ders-adayi")) {
        satir.courseId = olay.target.dataset.courseId;
        const ders = dersler[Number(satir.courseId)];
        satir.vize = ders.vize;
        satir.final = ders.final;
        acikSenaryoSatiri = null;
        senaryoArayuzunuScrollKoru();
      }
    });

    senaryoSatirlari.addEventListener("input", function(olay) {
      const satirEl = olay.target.closest(".senaryo-satir");
      if (!satirEl) return;
      const satir = senaryoSatirVerileri.find(function(kayit) {
        return String(kayit.id) === satirEl.dataset.id;
      });
      if (!satir) return;

      if (olay.target.classList.contains("senaryo-vize")) satir.vize = olay.target.value;
      if (olay.target.classList.contains("senaryo-final")) satir.final = olay.target.value;

      senaryoSatirSonucunuGuncelle(satirEl, satir);
      senaryoHesapla();
    });

    senaryoyuKaydet.addEventListener("click", function(olay) {
      olay.preventDefault();
      senaryoyuKaydetVeGuncelle();
    });

    senaryoKayitListesi.addEventListener("click", function(olay) {
      olay.preventDefault();
      const yukleButonu = olay.target.closest(".senaryo-yukle");
      const silButonu = olay.target.closest(".senaryo-sil");

      if (yukleButonu) {
        senaryoKaydiniYukle(Number(yukleButonu.dataset.index));
        return;
      }

      if (silButonu) {
        senaryoKaydiniSil(Number(silButonu.dataset.index));
      }
    });

    function topluSatirParcala(satir) {
      const temizSatir = String(satir || "").trim();
      if (!temizSatir) return null;

      let parcalar = temizSatir.split("|").map(function(parca) {
        return parca.trim();
      }).filter(function(parca) {
        return parca !== "";
      });

      if (parcalar.length < 2) {
        const eslesme = temizSatir.match(/^(.*?)(?:\s+[-–—]\s+|\s+)(\d+(?:[.,]\d+)?)\s*(?:kredi)?\s*$/i);
        if (eslesme) {
          parcalar = [eslesme[1].trim(), eslesme[2].trim()];
        }
      }

      if (parcalar.length < 2) {
        return { hata: "Kredi bulunamadı", satir: temizSatir };
      }

      const ad = parcalar[0];
      const krediDegeri = Number(String(parcalar[1]).replace(",", "."));
      const hedef = parcalar[2] ? String(parcalar[2]).trim().toUpperCase() : "";
      const vizeDegeri = parcalar[3] !== undefined && parcalar[3] !== "" ? sayiSinirla(parcalar[3]) : "";

      if (!ad) return { hata: "Ders adı boş", satir: temizSatir };
      if (!Number.isFinite(krediDegeri) || krediDegeri <= 0) return { hata: "Kredi geçersiz", satir: temizSatir };
      if (hedef && !harfNotuGecerliMi(hedef)) return { hata: "Hedef harf geçersiz", satir: temizSatir };

      return {
        ad: ad,
        kredi: krediDegeri,
        hedefHarf: hedef,
        hedefVize: vizeDegeri
      };
    }

    function topluPlanlananDersleriEkle() {
      const donemAdi = topluDonem.value.trim();
      const satirlar = topluDersler.value.split(/\r?\n/).map(function(satir) {
        return satir.trim();
      }).filter(Boolean);

      if (!donemAdi) {
        topluPlanlananMesaj.textContent = "Önce dönem yazmalısın.";
        topluDonem.focus();
        return;
      }

      if (donemKilitliMi(donemAdi)) {
        topluPlanlananMesaj.textContent = "Bu dönem kilitli. Toplu ders eklemek için önce dönem kilidini aç.";
        return;
      }

      if (satirlar.length === 0) {
        topluPlanlananMesaj.textContent = "Eklemek için en az bir ders satırı yazmalısın.";
        topluDersler.focus();
        return;
      }

      const eklenecekler = [];
      const hatalar = [];

      satirlar.forEach(function(satir, sira) {
        const sonuc = topluSatirParcala(satir);
        if (!sonuc) return;
        if (sonuc.hata) {
          hatalar.push((sira + 1) + ". satır: " + sonuc.hata + " → " + sonuc.satir);
          return;
        }

        eklenecekler.push({
          ad: sonuc.ad,
          donem: donemAdi,
          kredi: sonuc.kredi,
          durum: "planlanan",
          notTuru: "planlanan",
          hedefHarf: sonuc.hedefHarf,
          hedefVize: sonuc.hedefVize,
          vize: null,
          final: null,
          suNotu: "S"
        });
      });

      if (eklenecekler.length === 0) {
        topluPlanlananMesaj.textContent = "Ders eklenmedi. " + (hatalar[0] || "Formatı kontrol et.");
        return;
      }

      dersler = dersler.concat(eklenecekler);
      kaydet("Toplu planlanan ders eklemeden önce");
      ekraniGuncelle();
      topluPlanlananMesaj.textContent = eklenecekler.length + " planlanan ders eklendi." + (hatalar.length ? " Atlanan: " + hatalar.length + " satır." : "");

      if (hatalar.length) {
        alert("Bazı satırlar eklenemedi:\n\n" + hatalar.slice(0, 6).join("\n") + (hatalar.length > 6 ? "\n..." : ""));
      }
    }

    function topluPlanlananAlanlariniTemizle() {
      topluDonem.value = "";
      topluDersler.value = "";
      topluPlanlananMesaj.textContent = "";
    }

    function verileriDisaAktar() {
      const yedek = {
        uygulama: "Yıldızlı Ortalama ✦",
        surum: 2,
        olusturulmaTarihi: new Date().toISOString(),
        dersler: dersler,
        senaryolar: kayitliSenaryolar,
        donemProfilleri: donemProfilleri,
        kilitliDonemler: kilitliDonemler,
        bysKredi: bysKrediKontrolu ? bysKrediKontrolu.value : (localStorage.getItem(bysKrediKayitAdi) || "")
      };
      const dosya = new Blob([JSON.stringify(yedek, null, 2)], { type: "application/json" });
      const adres = URL.createObjectURL(dosya);
      const baglanti = document.createElement("a");
      baglanti.href = adres;
      baglanti.download = "gano-yedek.json";
      document.body.appendChild(baglanti);
      baglanti.click();
      baglanti.remove();
      URL.revokeObjectURL(adres);
      localStorage.setItem(sonDisaAktarmaKayitAdi, new Date().toISOString());
      yedeklemeDurumunuGuncelle();
    }

    function verileriIceAktar(dosya) {
      if (!dosya) return;

      const okuyucu = new FileReader();
      okuyucu.addEventListener("load", function() {
        try {
          const veri = JSON.parse(okuyucu.result);
          const iceAktarilanDersler = Array.isArray(veri) ? veri : veri.dersler;
          const uygunDersler = dersleriUygunHaleGetir(iceAktarilanDersler);

          if (!Array.isArray(iceAktarilanDersler)) {
            alert("Seçilen dosyada ders verisi bulunamadı.");
            return;
          }

          const onay = confirm("Mevcut verilerin üzerine yazılacak. Devam etmek istiyor musun?");
          if (!onay) return;

          dersler = uygunDersler;
          localStorage.removeItem(bilerekSilindiKayitAdi);
          if (Array.isArray(veri.senaryolar)) kayitliSenaryolar = veri.senaryolar;
          if (veri.donemProfilleri && !Array.isArray(veri.donemProfilleri) && typeof veri.donemProfilleri === "object") donemProfilleri = veri.donemProfilleri;
          if (veri.kilitliDonemler && !Array.isArray(veri.kilitliDonemler) && typeof veri.kilitliDonemler === "object") kilitliDonemler = veri.kilitliDonemler;
          if (veri.bysKredi !== undefined && veri.bysKredi !== null) {
            localStorage.setItem(bysKrediKayitAdi, String(veri.bysKredi));
            if (bysKrediKontrolu) bysKrediKontrolu.value = String(veri.bysKredi);
          }
          kaydet("Veri içe aktarmadan önce");
          senaryoKayitlariniKaydet();
          donemProfilleriniKaydet();
          kilitliDonemleriKaydet();
          formuTemizle();
          ekraniGuncelle();
          alert("Veriler içe aktarıldı.");
        } catch (hata) {
          alert("Dosya okunamadı. Lütfen geçerli bir JSON yedek dosyası seç.");
        } finally {
          iceAktarDosyasi.value = "";
        }
      });
      okuyucu.readAsText(dosya);
    }

    function sifirDersleriPlanlananaCevir() {
      const adaylar = dersler
        .map(function(ders, index) {
          const vizeDegeri = ders && ders.vize !== null && ders.vize !== undefined && ders.vize !== "" ? Number(ders.vize) : 0;
          const finalDegeri = ders && ders.final !== null && ders.final !== undefined && ders.final !== "" ? Number(ders.final) : 0;
          const sifirNotlu = !Number.isNaN(vizeDegeri) && !Number.isNaN(finalDegeri) && vizeDegeri === 0 && finalDegeri === 0;

          return {
            ders: ders,
            index: index,
            uygun: ders && !dersPlanlananMi(ders) && ders.notTuru !== "su" && sifirNotlu && !donemKilitliMi(ders.donem)
          };
        })
        .filter(function(kayit) {
          return kayit.uygun;
        });

      if (adaylar.length === 0) {
        alert("Planlanana çevrilecek 0 / FF ders bulunamadı.");
        return;
      }

      const donemSayilari = {};
      adaylar.forEach(function(kayit) {
        const donemAdi = kayit.ders.donem || "Dönem belirtilmedi";
        donemSayilari[donemAdi] = (donemSayilari[donemAdi] || 0) + 1;
      });

      const donemOzeti = Object.keys(donemSayilari)
        .sort(donemSirala)
        .map(function(donemAdi) {
          return "- " + donemAdi + ": " + donemSayilari[donemAdi] + " ders";
        })
        .join("\n");

      const onay = confirm(
        adaylar.length + " ders planlanan derse çevrilecek.\n\n" +
        donemOzeti + "\n\n" +
        "Bu işlem sadece vize ve finali 0 olan, şu an FF görünen notlu dersleri düzeltir. Devam edilsin mi?"
      );

      if (!onay) return;

      const adayIndexleri = new Set(adaylar.map(function(kayit) { return kayit.index; }));

      dersler = dersler.map(function(ders, index) {
        if (!adayIndexleri.has(index)) return ders;

        return {
          ad: ders.ad,
          donem: ders.donem,
          kredi: Number(ders.kredi) || 0,
          durum: "planlanan",
          notTuru: "planlanan",
          hedefHarf: harfNotuGecerliMi(ders.hedefHarf) ? String(ders.hedefHarf).toUpperCase() : "",
          hedefVize: "",
          vize: null,
          final: null,
          suNotu: "S"
        };
      });

      kaydet("0 / FF dersleri planlanana çevirmeden önce");
      formuTemizle();
      ekraniGuncelle();
      alert(adaylar.length + " ders planlanan derse çevrildi. Artık GANO'yu bozmayacaklar.");
    }

    if (sifirDersleriPlanlananaCevirButonu) {
      sifirDersleriPlanlananaCevirButonu.addEventListener("click", sifirDersleriPlanlananaCevir);
    }


    if (bysKrediKontrolu) {
      bysKrediKontrolu.value = localStorage.getItem(bysKrediKayitAdi) || "";
      bysKrediKontrolu.addEventListener("input", function() {
        localStorage.setItem(bysKrediKayitAdi, bysKrediKontrolu.value);
        veriSagliginiGuncelle();
      });
    }

    if (veriSagligiYenile) {
      veriSagligiYenile.addEventListener("click", function() {
        veriSagliginiGuncelle();
      });
    }

    topluPlanlananEkle.addEventListener("click", topluPlanlananDersleriEkle);
    topluPlanlananTemizle.addEventListener("click", topluPlanlananAlanlariniTemizle);

    disaAktarButonu.addEventListener("click", verileriDisaAktar);
    iceAktarButonu.addEventListener("click", function() {
      iceAktarDosyasi.click();
    });
    iceAktarDosyasi.addEventListener("change", function() {
      verileriIceAktar(iceAktarDosyasi.files[0]);
    });

    dersFormu.addEventListener("submit", function(olay) {
      olay.preventDefault();

      const planlananSecili = dersDurumu.value === "planlanan";
      const suSecili = !planlananSecili && notTuru.value === "su";
      const dersVerisi = {
        ad: dersAdi.value.trim(),
        donem: donem.value.trim(),
        kredi: Number(kredi.value),
        durum: planlananSecili ? "planlanan" : "notlu",
        notTuru: planlananSecili ? "planlanan" : (suSecili ? "su" : "harf"),
        hedefHarf: planlananSecili && harfNotuGecerliMi(hedefHarf.value) ? hedefHarf.value : "",
        hedefVize: planlananSecili && vize.value !== "" ? sayiSinirla(vize.value) : "",
        vize: (planlananSecili || suSecili) ? null : sayiSinirla(vize.value),
        final: (planlananSecili || suSecili) ? null : sayiSinirla(finalNotu.value),
        suNotu: suSecili ? suNotu.value : "S"
      };

      if (duzenlenenIndex === null) {
        if (donemKilitliMi(dersVerisi.donem)) {
          alert("Bu dönem kilitli. Bu döneme ders eklemek için önce dönem kilidini aç.");
          return;
        }
        dersler.push(dersVerisi);
        kaydet("Ders eklemeden önce");
      } else {
        if (dersler[duzenlenenIndex] && donemKilitliMi(dersler[duzenlenenIndex].donem)) {
          alert("Bu dönem kilitli. Dersi düzenlemek için önce dönem kilidini aç.");
          return;
        }
        if (donemKilitliMi(dersVerisi.donem)) {
          alert("Hedef dönem kilitli. Dersi bu döneme taşımak/düzenlemek için önce kilidi aç.");
          return;
        }
        dersler[duzenlenenIndex] = dersVerisi;
        kaydet("Ders düzenlemeden önce");
      }

      formuTemizle();
      ekraniGuncelle();
    });

    function dersDuzenle(index) {
      const ders = dersler[index];
      if (!ders) return;
      if (donemKilitliMi(ders.donem)) {
        alert("Bu dönem kilitli. Düzenlemek için önce dönem kilidini aç.");
        return;
      }
      duzenlenenIndex = index;
      dersAdi.value = ders.ad;
      donem.value = ders.donem;
      kredi.value = ders.kredi;
      dersDurumu.value = dersPlanlananMi(ders) ? "planlanan" : "notlu";
      notTuru.value = ders.notTuru === "su" ? "su" : "harf";
      hedefHarf.value = harfNotuGecerliMi(ders.hedefHarf) ? ders.hedefHarf : "";
      vize.value = dersPlanlananMi(ders) ? hedefVizeDegeri(ders) : (ders.vize === null || ders.vize === undefined ? "" : ders.vize);
      finalNotu.value = ders.final === null || ders.final === undefined ? "" : ders.final;
      suNotu.value = ders.suNotu === "U" ? "U" : "S";
      formBaslik.textContent = "Ders Düzenle ✦";
      formButonlariniEkle(true);
      dersDurumuAlanlariniGuncelle();
      dersAdi.focus();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function duzenlemeyiIptalEt() {
      formuTemizle();
    }

    function dersSil(index) {
      if (!dersler[index]) return;
      if (donemKilitliMi(dersler[index].donem)) {
        alert("Bu dönem kilitli. Silmek için önce dönem kilidini aç.");
        return;
      }
      const eminMisin = confirm("Bu dersi silmek istediğine emin misin?");
      if (!eminMisin) return;

      dersler.splice(index, 1);
      if (duzenlenenIndex === index) {
        formuTemizle();
      }
      kaydet("Ders silmeden önce");
      ekraniGuncelle();
    }

    baremiHazirla();
    dersDurumuAlanlariniGuncelle();
    ekraniGuncelle();



    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function() {
        navigator.serviceWorker.register("./service-worker.js").catch(function() {});
      });
    }
