<?php
$con=mysqli_connect("localhost", "root", "");
if (!$spoj=@mySQL_connect("localhost", "root", ""))
{
die("Failed to connect to the server");
}
if (!mySQL_select_db("foodly", $spoj)){die("Failed to connect to the database");}
?>