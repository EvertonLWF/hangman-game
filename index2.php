<?php
session_start();
$num=$_SESSION['num'];
$palavra=$_SESSION['palavra'];
$aux=$_SESSION['aux'];
?>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="style.css">
	<meta charset="utf-8">
	<title>Pagina do game</title>
</head>
<body>
	<input type="text" class="letra" id="letra">
	<button id="btn" >Confirmar</button><br><br>
	<h2 id="txt"><?php for ($i=0; $i < $num ; $i++) { 
		echo $aux[$i];
	}; ?></h2><br>
	<h2 id="end"><?php for ($i=0; $i < $num ; $i++) { 
		echo $palavra[$i];
	}; ?></h2>
	<h2 id="vida">6</h2>
	<div class="cabeca"></div>
	<div class="left"></div>
	<div class="corpo"></div>
	<div class="right"></div>
	<div class="pernaL"></div>
	<div class="pernaR"></div>

	<div class="forca">
		<div class="corda"></div>
		<div class="A"></div>
		<div class="B"></div>
		<div class="C"></div>
		<div class="D"></div>
	</div>		
		
	<script type="text/javascript" src="jquery-3.3.1.min.js"></script>
	<script type="text/javascript" src="script.js"></script>
</body>
</html>