
function adKontrol() {
    document.getElementById('ad').style.border = '2px solid red';
    
    let ad = document.getElementById('frm').isim.value;
    if(ad=="") {
        document.getElementById('ad').placeholder = 'İsim Alanını Boş Bırakmayınız!';
        return false;
    }
    let say = ad.length;
    if(say<3 && ad!=""){
        document.getElementById('ad').value = "";
        document.getElementById('ad').placeholder = 'Lütfen İsminizi Doğru Giriniz';
        return false;
    }
    if(say>=3 && ad!="") {
        document.getElementById('ad').style.border = '2px solid green';
        return true;
    }
}

function soyadKontrol() {
    
    let soyad = document.getElementById('frm').soyisim.value;
    if(soyad=="") {
        document.getElementById('surname').style.border = '2px solid red';
        document.getElementById('surname').placeholder = 'Soyisim Alanını Boş Bırakmayınız!';
        return false;
    }
    let say = soyad.length;
    if(say<3 && soyad!=""){
        document.getElementById('surname').style.border = '2px solid red';
        document.getElementById('surname').value = "";
        document.getElementById('surname').placeholder = 'Lütfen Soyisminizi Doğru Giriniz';
        return false;
    }
    if(say>=3 && soyad!="") {
        document.getElementById('surname').style.border = '2px solid green';
        return true;
    }
}

function emailKontrol() {
    
    let email = document.getElementById('frm').email.value;
    if(email.includes('@')==false && email!="") {
        document.getElementById('email').style.border ='2px solid red';
        document.getElementById('email').value = "";
        document.getElementById('email').placeholder ='Lütfen Mailinizi Doğru Giriniz!'
        return false;
    }
    if(email=="") {
        document.getElementById('email').style.border ='2px solid red';
        document.getElementById('email').placeholder = 'Mail Alanını Boş Bırakmayınız!'
        return false;
    }
    if (email.length < 4 && email!="") {
        document.getElementById('email').style.border ='2px solid red';
        document.getElementById('email').value = "";
        document.getElementById('email').placeholder ='Lütfen Mailinizi Doğru Giriniz!'
        return false;
    }
    if(email.includes('@')==true && email!="" && email.length>=4) {
        document.getElementById('email').style.border ='2px solid green';
        return true;
    }
}

function sifreKontrol() {
    let sifre = document.getElementById('frm').sifre.value;
    if(sifre.length<4) {
        document.getElementById('sifre').style.border = '2px solid red';
        document.getElementById('sifre').value = '';
        document.getElementById('sifre').placeholder = 'Lütfen Güçlü Bir Parola Giriniz!'
        return false;
    }
    if(sifre.length<6 && sifre.length>=4) {
        document.getElementById('sifre').style.border = '2px solid orange';
        return true;
    }
    if(sifre.length>=6) {
        document.getElementById('sifre').style.border = '2px solid green';
        return true;
    }
}

function mesajKontrol() {
    let mesaj = document.getElementById('message').value;
    let say = mesaj.length;
    if(mesaj=="") {
        document.getElementById('message').style.border = '2px solid red';
        document.getElementById('message').placeholder = 'Mesaj Alanını Boş Bırakmayın';
        return false;
    }
    if(say < 10 && mesaj != ""){
        document.getElementById('message').style.border = '2px solid red';
        document.getElementById('message').value ="";
        document.getElementById('message').placeholder = 'Mesajınız On Karakterden Uzun Olsun';
        return false;
    }
    if(say >= 10 && mesaj != ""){
        document.getElementById('message').style.border = '2px solid green';
        return true;
    }
}

function clickEvent() {
    if(adKontrol()==true && soyadKontrol()==true && emailKontrol()==true && sifreKontrol()==true && mesajKontrol()==true){
        alert("Mesajınız Başarıyla Gönderildi");
        return true;
    }
    else {
        alert("Mesajınız Gönderilemedi Lütfen Alanları Kontrol Ediniz");
        return false;
    }
}