<?php
REQUIRE_ONCE('koneksi.php');
$QUERY = MYSQLI_QUERY($conn,
"SELECT * FROM TAXI"
);
$data_taxi[] = "";
while($taxi = MYSQLI_FETCH_ASSOC($QUERY))
{
    $data_taxi[] = $taxi;
}
header('Content-Type:application/json;charset=utf-8');
ECHO JSON_ENCODE( $data_taxi);
MYSQLI_CLOSE($conn);
?>