<?php
error_reporting(E_ALL ^ E_NOTICE);
// Inicijalizacija niza, dodavanje datuma i vremena

$podaci = array(date('d.m.Y.'),date('h:m'));

// SASTOJCI

if($_POST['sunka']=="sunka_l") array_push($podaci,1);
else if ($_POST['sunka']=="sunka_d") array_push($podaci,2);
else if ($_POST['sunka']=="sunka") array_push($podaci,3);
else array_push($podaci,0);

if (isset($_POST['cbx_rajcica'])) array_push($podaci,3); 
else array_push($podaci,0);

if($_POST['kulen']=="kulen_l") array_push($podaci,1);
else if ($_POST['kulen']=="kulen_d") array_push($podaci,2);
else if ($_POST['kulen']=="kulen") array_push($podaci,3);
else array_push($podaci,0);

if($_POST['luk']=="luk_l") array_push($podaci,1);
else if ($_POST['luk']=="luk_d") array_push($podaci,2);
else if ($_POST['luk']=="luk") array_push($podaci,3);
else array_push($podaci,0);

if($_POST['gljive']=="gljive_l") array_push($podaci,1);
else if ($_POST['gljive']=="gljive_d") array_push($podaci,2);
else if ($_POST['gljive']=="gljive") array_push($podaci,3);
else array_push($podaci,0);

if($_POST['sir']=="sir_l") array_push($podaci,1);
else if ($_POST['sir']=="sir_d") array_push($podaci,2);
else if ($_POST['sir']=="sir") array_push($podaci,3);
else array_push($podaci,0);

if($_POST['kukuruz']=="kukuruz_l") array_push($podaci,1);
else if ($_POST['kukuruz']=="kukuruz_d") array_push($podaci,2);
else if ($_POST['kukuruz']=="kukuruz") array_push($podaci,3);
else array_push($podaci,0);

if($_POST['masline']=="masline_l") array_push($podaci,1);
else if ($_POST['masline']=="masline_d") array_push($podaci,2);
else if ($_POST['masline']=="masline") array_push($podaci,3);
else array_push($podaci,0);

// TIJESTO
if (isset($_POST['cbx_korica_t'])) array_push($podaci,1); else array_push($podaci,0);

if (isset($_POST['cbx_rub'])) array_push($podaci,1); else array_push($podaci,0);

if($_POST['cbx_peceno']=="vise_peceno") array_push($podaci,2);
else if ($_POST['cbx_peceno']=="normalno_peceno") array_push($podaci,0);
else array_push($podaci,1);

// PODACI O NARUDZBI
array_push($podaci,$_POST['ime_prezime']);
array_push($podaci,$_POST['adresa']);
array_push($podaci,$_POST['telefon']);
array_push($podaci,$_POST['napomene']);
array_push($podaci,$_POST['broj_pizza']);
array_push($podaci,$_POST['velicinaPizze']);
array_push($podaci,$_POST['zaPlatiti']);

//echo "Podaci: <br>"; // Provjera
//foreach ($podaci as $value) {echo "$value <br>";} // Provjera

include "db_connect.php";
$sql_unos="INSERT INTO restoran (datum, vrijeme, sunka, rajcica, kulen, luk,gljive, sir, kukuruz, masline, tanka_korica, rub_sir, peceno, ime, adresa, telefon, napomene, broj, velicina, cijena, izvrseno) VALUES('$podaci[0]','$podaci[1]','$podaci[2]','$podaci[3]','$podaci[4]','$podaci[5]','$podaci[6]','$podaci[7]','$podaci[8]','$podaci[9]','$podaci[10]','$podaci[11]','$podaci[12]','$podaci[13]','$podaci[14]','$podaci[15]','$podaci[16]','$podaci[17]','$podaci[18]','$podaci[19]','0')";

if (mysql_query($sql_unos))
{
echo "<html><head></head>";
echo "<body bgcolor='orange' align='center'>";
echo "<br><br><img src='./Resursi/pizzaNarudzbaUspjesna.png'></img>";
echo "</body>";
echo"</html>";
} 
else {
echo "<html><head></head>";
echo "<body bgcolor='orange' align='center'>";
echo "<br><br><img src='./Resursi/pizzaNarudzbaNeuspjesna.png'></img>";
echo "</body>";
echo"</html>";
}
  
header("refresh:3;url=./sloziPizzu.html");
?>