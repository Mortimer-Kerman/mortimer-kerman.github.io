<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

if (!isset($_GET["q"])) {
    http_response_code(400);
    echo "Missing query";
    exit;
}

$apiUrl = "https://ssd.jpl.nasa.gov/api/horizons.api?" . $_GET["q"];

$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL => $apiUrl,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 15
]);

$response = curl_exec($ch);

if ($response === false) {
    http_response_code(500);
    echo curl_error($ch);
    exit;
}

curl_close($ch);

header("Content-Type: application/json");
echo $response;
?>
