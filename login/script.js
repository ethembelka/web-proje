function adKontrol() {
    let kullaniciAdi = document.getElementById('frm').kulAdi.value;
    if(document.getElementById('frm').kulAdi.value==""){
        document.getElementById('uyariVer').innerHTML= "<p>Lütfen Kullanıcı Adınızı Giriniz</p>";
    }
    if(kullaniciAdi.includes('@')==false && kullaniciAdi != "") {
        document.getElementById('uyariVer').innerHTML= "<p>Kullanıcı Adı Kısmına Mailinizi Giriniz</p>";
        
    }
}

function sifreKontrol() {
    let sifre = document.getElementById('frm').sifre.value;
    if(sifre=="") {
        document.getElementById('uyariVer').innerHTML= "<p>Lütfen Şifrenizi Giriniz</p>";
    }
}

function clickEvent() {
    let kulAdi = "B181210061";
    let sifre = "123";
    
    let girilenAd = document.getElementById('frm').kulAdi.value;
    let girilenSifre = document.getElementById('frm').sifre.value;
    
    if(kulAdi == girilenAd && sifre == girilenSifre) {
        alert("Başarılı Giriş");
    }
    else {
        alert("Kullanıcı Adı Veya Şifre Hatalı");
    }
}