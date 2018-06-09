<?php

    $request_uri = $_SERVER["REQUEST_URI"];
    $request_uri_0 = explode("?", $request_uri);
    $request_uri_1 = explode("#", $request_uri_0[0]);
    $clean_request_uri = $request_uri_1[0];

    $routes = array(
        "/" => "homepage",
        "/group" => "group"
    );

    $page = array_key_exists($clean_request_uri, $routes) ? $routes[$clean_request_uri] : 'homepage';

    include 'app/templates/default_0.php';
    include 'app/pages/' . $page . '.php';
    include 'app/templates/default_1.php';
