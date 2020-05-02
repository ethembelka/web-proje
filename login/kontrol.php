<?php
error_reporting(0);
$kullaniciAdi = "B181210061";
$sifre  = "123";

if($sifre == $_POST["sifre"] && $kullaniciAdi == $_POST["kulAdi"]) {
    echo "Hoşgeldiniz B181210061 <br> ETHEM BELKA ŞAHİN";
}
else {
    header ("Location:login.html");
}



?>