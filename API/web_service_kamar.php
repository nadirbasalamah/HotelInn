<?php
REQUIRE_ONCE('koneksi.php');
$QUERY = MYSQLI_QUERY($conn,
"SELECT * FROM kamar"
);
while($kmr = MYSQLI_FETCH_ASSOC($QUERY))
{
    $data_kamar[] = $kmr;    
}
header('Content-Type:application/json;charset=utf-8');
ECHO JSON_ENCODE($data_kamar);
MYSQLI_CLOSE($conn);
?>