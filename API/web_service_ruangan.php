<?php
	REQUIRE_ONCE('koneksi.php');
	$QUERY = MYSQLI_QUERY($conn,
	"SELECT * FROM RUANGAN"
	);
	$rgnarr = [];
	$rgn = new stdClass;
	while($ROW = MYSQLI_FETCH_ASSOC($QUERY)){
	$rgnarr[] = $ROW;
	}
	header('Content-Type:application/json;charset=utf-8');
	ECHO JSON_ENCODE( $rgnarr);echo"\n";
	MYSQLI_CLOSE($conn);
?>