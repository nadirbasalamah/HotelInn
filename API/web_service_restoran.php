<?php
	REQUIRE_ONCE('koneksi.php');
	$QUERY = MYSQLI_QUERY($conn,
	"SELECT * FROM RESTORAN"
	);
	$rstarr = [];
	$rst = new stdClass;
	while($ROW = MYSQLI_FETCH_ASSOC($QUERY)){
	$rstarr[] = $ROW;
	}
	header('Content-Type:application/json;charset=utf-8');
	ECHO JSON_ENCODE( $rstarr);
	MYSQLI_CLOSE($conn);
?>