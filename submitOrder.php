<?php
error_reporting(E_ALL ^ E_NOTICE);
// Inicijalizacija niza, dodavanje datuma i vremena

$datum_vrijeme = array(date('d.m.Y.'),date('h:m'));

include "db_connect.php";

if(!isset($_POST['itemNo01']) || strlen(trim($_POST['itemNo01'])) != 0){
$sql_unos="INSERT INTO narudzbe (date,time,restaurant,item,IDcode,quantity,price,size,firstName,lastName,address,phoneNumber,processed) VALUES('$datum_vrijeme[0]','$datum_vrijeme[1]','".$_POST['cartRestaurant']."','".$_POST['itemNo01']."','".$_POST['itemCodeNo01']."','".$_POST['itemQuantityNo01']."','".$_POST['itemPriceNo01']."','".$_POST['itemSizeNo01']."','".$_POST['Firstname']."','".$_POST['LastName']."','".mysqli_real_escape_string($con, $_POST['DeliveryAddress'])."','".$_POST['PhoneNumber']."','0')";
mysql_query($sql_unos);
}

if(!isset($_POST['itemNo02']) || strlen(trim($_POST['itemNo02'])) != 0){
$sql_unos="INSERT INTO narudzbe (date,time,restaurant,item,IDcode,quantity,price,size,firstName,lastName,address,phoneNumber,processed) VALUES('$datum_vrijeme[0]','$datum_vrijeme[1]','".$_POST['cartRestaurant']."','".$_POST['itemNo02']."','".$_POST['itemCodeNo02']."','".$_POST['itemQuantityNo02']."','".$_POST['itemPriceNo02']."','".$_POST['itemSizeNo02']."','".$_POST['Firstname']."','".$_POST['LastName']."','".mysqli_real_escape_string($con, $_POST['DeliveryAddress'])."','".$_POST['PhoneNumber']."','0')";
mysql_query($sql_unos);
}

if(!isset($_POST['itemNo03']) || strlen(trim($_POST['itemNo03'])) != 0){
$sql_unos="INSERT INTO narudzbe (date,time,restaurant,item,IDcode,quantity,price,size,firstName,lastName,address,phoneNumber,processed) VALUES('$datum_vrijeme[0]','$datum_vrijeme[1]','".$_POST['cartRestaurant']."','".$_POST['itemNo03']."','".$_POST['itemCodeNo03']."','".$_POST['itemQuantityNo03']."','".$_POST['itemPriceNo03']."','".$_POST['itemSizeNo03']."','".$_POST['Firstname']."','".$_POST['LastName']."','".mysqli_real_escape_string($con, $_POST['DeliveryAddress'])."','".$_POST['PhoneNumber']."','0')";
mysql_query($sql_unos);
}

if(!isset($_POST['itemNo04']) || strlen(trim($_POST['itemNo04'])) != 0){
$sql_unos="INSERT INTO narudzbe (date,time,restaurant,item,IDcode,quantity,price,size,firstName,lastName,address,phoneNumber,processed) VALUES('$datum_vrijeme[0]','$datum_vrijeme[1]','".$_POST['cartRestaurant']."','".$_POST['itemNo04']."','".$_POST['itemCodeNo04']."','".$_POST['itemQuantityNo04']."','".$_POST['itemPriceNo04']."','".$_POST['itemSizeNo04']."','".$_POST['Firstname']."','".$_POST['LastName']."','".mysqli_real_escape_string($con, $_POST['DeliveryAddress'])."','".$_POST['PhoneNumber']."','0')";
mysql_query($sql_unos);
}

if(!isset($_POST['itemNo05']) || strlen(trim($_POST['itemNo05'])) != 0){
$sql_unos="INSERT INTO narudzbe (date,time,restaurant,item,IDcode,quantity,price,size,firstName,lastName,address,phoneNumber,processed) VALUES('$datum_vrijeme[0]','$datum_vrijeme[1]','".$_POST['cartRestaurant']."','".$_POST['itemNo05']."','".$_POST['itemCodeNo05']."','".$_POST['itemQuantityNo05']."','".$_POST['itemPriceNo05']."','".$_POST['itemSizeNo05']."','".$_POST['Firstname']."','".$_POST['LastName']."','".mysqli_real_escape_string($con, $_POST['DeliveryAddress'])."','".$_POST['PhoneNumber']."','0')";
mysql_query($sql_unos);
}

if(!isset($_POST['itemNo06']) || strlen(trim($_POST['itemNo06'])) != 0){
$sql_unos="INSERT INTO narudzbe (date,time,restaurant,item,IDcode,quantity,price,size,firstName,lastName,address,phoneNumber,processed) VALUES('$datum_vrijeme[0]','$datum_vrijeme[1]','".$_POST['cartRestaurant']."','".$_POST['itemNo06']."','".$_POST['itemCodeNo06']."','".$_POST['itemQuantityNo06']."','".$_POST['itemPriceNo06']."','".$_POST['itemSizeNo06']."','".$_POST['Firstname']."','".$_POST['LastName']."','".mysqli_real_escape_string($con, $_POST['DeliveryAddress'])."','".$_POST['PhoneNumber']."','0')";
mysql_query($sql_unos);
}

if(!isset($_POST['itemNo07']) || strlen(trim($_POST['itemNo07'])) != 0){
$sql_unos="INSERT INTO narudzbe (date,time,restaurant,item,IDcode,quantity,price,size,firstName,lastName,address,phoneNumber,processed) VALUES('$datum_vrijeme[0]','$datum_vrijeme[1]','".$_POST['cartRestaurant']."','".$_POST['itemNo07']."','".$_POST['itemCodeNo07']."','".$_POST['itemQuantityNo07']."','".$_POST['itemPriceNo07']."','".$_POST['itemSizeNo07']."','".$_POST['Firstname']."','".$_POST['LastName']."','".mysqli_real_escape_string($con, $_POST['DeliveryAddress'])."','".$_POST['PhoneNumber']."','0')";
mysql_query($sql_unos);
}

if(!isset($_POST['itemNo08']) || strlen(trim($_POST['itemNo08'])) != 0){
$sql_unos="INSERT INTO narudzbe (date,time,restaurant,item,IDcode,quantity,price,size,firstName,lastName,address,phoneNumber,processed) VALUES('$datum_vrijeme[0]','$datum_vrijeme[1]','".$_POST['cartRestaurant']."','".$_POST['itemNo08']."','".$_POST['itemCodeNo08']."','".$_POST['itemQuantityNo08']."','".$_POST['itemPriceNo08']."','".$_POST['itemSizeNo08']."','".$_POST['Firstname']."','".$_POST['LastName']."','".mysqli_real_escape_string($con, $_POST['DeliveryAddress'])."','".$_POST['PhoneNumber']."','0')";
mysql_query($sql_unos);
}

if(!isset($_POST['itemNo09']) || strlen(trim($_POST['itemNo09'])) != 0){
$sql_unos="INSERT INTO narudzbe (date,time,restaurant,item,IDcode,quantity,price,size,firstName,lastName,address,phoneNumber,processed) VALUES('$datum_vrijeme[0]','$datum_vrijeme[1]','".$_POST['cartRestaurant']."','".$_POST['itemNo09']."','".$_POST['itemCodeNo09']."','".$_POST['itemQuantityNo09']."','".$_POST['itemPriceNo09']."','".$_POST['itemSizeNo09']."','".$_POST['Firstname']."','".$_POST['LastName']."','".mysqli_real_escape_string($con, $_POST['DeliveryAddress'])."','".$_POST['PhoneNumber']."','0')";
mysql_query($sql_unos);
}

if(!isset($_POST['itemNo10']) || strlen(trim($_POST['itemNo10'])) != 0){
$sql_unos="INSERT INTO narudzbe (date,time,restaurant,item,IDcode,quantity,price,size,firstName,lastName,address,phoneNumber,processed) VALUES('$datum_vrijeme[0]','$datum_vrijeme[1]','".$_POST['cartRestaurant']."','".$_POST['itemNo10']."','".$_POST['itemCodeNo10']."','".$_POST['itemQuantityNo10']."','".$_POST['itemPriceNo10']."','".$_POST['itemSizeNo10']."','".$_POST['Firstname']."','".$_POST['LastName']."','".mysqli_real_escape_string($con, $_POST['DeliveryAddress'])."','".$_POST['PhoneNumber']."','0')";
mysql_query($sql_unos);
}

header("refresh:0;url=./orderFood.html");
?>