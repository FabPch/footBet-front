<?php

    $request_uri = $_SERVER["REQUEST_URI"];
    $request_uri_0 = explode("?", $request_uri);
    $request_uri_1 = explode("#", $request_uri_0[0]);
    $clean_request_uri = $request_uri_1[0];

    $routes = array(
        "/" => "homepage",
        "/group" => "group",
        "/sign_up" => "signup",
        "/sign_in" => "login",
        "/my/predictions" => "my/predictions"
    );

    $page = array_key_exists($clean_request_uri, $routes) ? $routes[$clean_request_uri] : '404';

    if($page == '404') {
        http_response_code(404);
    }

    include 'app/templates/default_0.php';
    include 'app/pages/' . $page . '.php';
    include 'app/templates/default_1.php';
