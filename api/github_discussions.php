<?php
//This was originally hosted by Frablock on his own website. https://github.com/Frablock

//Custom .env file reader
$lines = file(__DIR__ . "/../.env", FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
foreach ($lines as $line) {
    if (str_starts_with(trim($line), '#')) continue;
    [$name, $value] = explode('=', $line, 2);
    putenv(sprintf('%s=%s', $name, $value));
}

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$user = $_GET["user"];
$repo = $_GET["repo"];
$title = $_GET["title"];

$url = "https://api.github.com/repos/".$user."/".$repo."/discussions";

// Initialize cURL session
$ch = curl_init();

$githubToken = getenv("GITHUB_TOKEN");

// Set cURL options
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: token ' . $githubToken,
    'User-Agent: PHP-cURL-Request', // GitHub requires a User-Agent
    'Accept: application/vnd.github.v3+json'
]);

// Execute the request and store the response
$response = curl_exec($ch);

// Check for cURL errors
if ($response === false) {
    $error = curl_error($ch);
    curl_close($ch);
    die('Error: ' . $error);
}

// Close the cURL session
curl_close($ch);

// Decode JSON response
$discussions = json_decode($response, true);

$art = null;
foreach ($discussions as $x) {
    //print_r($x);
    if ($x['title']==$title) {
        echo "{\"comments\":".$x['comments'].",\"reactions\":".json_encode($x['reactions'])."}";
    }
}
?>
