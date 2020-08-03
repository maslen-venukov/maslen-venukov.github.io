<?php

ini_set("display_errors","1");
ini_set("display_startup_errors","1");
ini_set('error_reporting', E_ALL);


echo "lead.php ok";


$params = json_decode(file_get_contents('php://input'), true);
if (empty($params)) {
    $params = $_REQUEST;
}


foreach ($params as $key => $value) {
   $arr[] = $key . '=' . $value ; 
}

$str = implode(";", $arr);

$count = file_get_contents('logs/count.txt');
$int = (int)$count;
$int++;
file_put_contents("logs/count.txt", $int);



file_put_contents("logs/lead.log", $str.PHP_EOL, FILE_APPEND | LOCK_EX);


$service = isset($params['service']) ? $params['service'] : ' ';
$model = isset($params['model']) ? $params['model'] : ' ';
$year = isset($params['year']) ? $params['year'] : ' ';
$engine = isset($params['engine']) ? $params['engine'] : ' ';
$phone = isset($params['phone']) ? $params['phone'] : ' ';
$utm = isset($params['utm']) ? $params['utm'] : ' ';
// katalina.katalova@yandex.ru
mail("katalina.katalova@yandex.ru", "Заявка cheaper.utilprofi.ru", " Заявка №$int \n Услуга:$service \n Модель:$model\n Год:$year \n Двигатель:$engine \n Телефон:$phone \n UTM:$utm");

$sms = "#$int usluga:$service,model:$model,god:$year,engine:$engine,tel:$phone";

//  79373013168
file_get_contents("https://smsc.ru/sys/send.php?login=rus-zapchasti&psw=8n98\$YgvPkh&phones=79373013168&translit=1&mes=$sms");

print_r($params);

?>