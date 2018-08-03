<?php 
	session_start();
	$var = $_POST['palavra'];
	$array = str_split($var);
	$num = count($array);
	for ($i=0; $i < $num; $i++) { 
		$aux[$i]='*';
	}
	$_SESSION['palavra']=$array;
	$_SESSION['num']=$num;
	$_SESSION['aux']=$aux;
	

	header("location:index2.php");


	for ($i=0; $i < $num ; $i++) { 
		if($palavra[$i]==$letra){
			$aux[$i]==$palavra[$i];
			echo $aux[$i];
		}else{
			echo $aux[$i];
		}
	}

?>
