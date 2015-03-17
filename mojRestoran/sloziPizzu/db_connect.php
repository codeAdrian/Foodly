<?php
if (!$spoj=@mySQL_connect("localhost", "root", ""))
{
die("Pogreška pri spajanju na server");
}
if (!mySQL_select_db("sloziPizzu", $spoj)){die("Pogreška pri spajanju na bazu podataka");}
?>