<?php

/**
 * @link https://abconnect.docs.apiary.io/#introduction/authentication/php
 * @link https://widgets.academicbenchmarks.com/ABConnect/v4/topicsBrowser/topicsBrowser.html
 */

$partnerID = 'demo4';
$partnerKey = 'exMSobPnS7F0s/u/aKtakg';
$authExpires = time() + 3600;
$message = $authExpires;
$authSignature = urlencode(base64_encode(hash_hmac('sha256', $message, $partnerKey, true)));
$url = "https://api.academicbenchmarks.com/rest/v4/standards?partner.id=$partnerID&auth.signature=$authSignature&auth.expires=$authExpires";
$response = file_get_contents($url);
$data = json_decode($response);
var_dump($data);
