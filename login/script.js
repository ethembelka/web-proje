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