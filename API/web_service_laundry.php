<?php
REQUIRE_ONCE('koneksi.php');
$QUERY = MYSQLI_QUERY($conn,
"SELECT * FROM laundry"
);
$data_laundry = [];
while($lndry = MYSQLI_FETCH_ASSOC($QUERY))
{
    $data_laundry[] = $lndry;    
}
header('Content-Type:application/json;charset=utf-8');
ECHO JSON_ENCODE( $data_laundry);
MYSQLI_CLOSE($conn);
?>