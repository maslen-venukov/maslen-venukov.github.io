<?php

/*
Use this token to access the HTTP API:
1390201807:AAFOqVzDUzTT1u8LPcn-hy1vD-2IYlHbUy8
Keep your token secure and store it safely, it can be used by anyone to control your bot.
*/

$name = $_GET["name"];
$phone = $_GET["phone"];
$ticket = strtoupper($_GET["ticket"]);
$forma = $_GET["forma"];

class Partner
{
	public $ticket;
	public $chat_id;
		
	public function __construct($ticket, $chat_id)
	{
		$this->ticket = $ticket;
		$this->chat_id = $chat_id;
	}
}

$partners = [ //Партнеры
	new Partner('ELENAKRUTIKOVA10', "304969360"), //Елена Крутикова
	new Partner('ANNAPREMIERA10', "167260044"), //Анна Премьера
	new Partner('IVANEGOROV10', "167260044"), //Иван Егоров
];
	
//Узнать id чата
//https://api.telegram.org/bot1390201807:AAFOqVzDUzTT1u8LPcn-hy1vD-2IYlHbUy8/getUpdates
$token = "1390201807:AAFOqVzDUzTT1u8LPcn-hy1vD-2IYlHbUy8";
$chat_id = "167260044";
$arr = array(
	'Имя: ' => $name,
	'Телефон: ' => $phone,
	'Пригласительный: ' => $ticket
);

$txt = "🎯<b>Заявка c сайта LDOU.RU</b>"."%0A";
if ( $forma == "30" ) {$txt .= "Форма: Запись на проработку"."%0A"."%0A";}
else if ( $forma == "1100" ) {$txt .= "Форма: Запись на тренинг"."%0A"."%0A";}
else $txt .= "%0A";



foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$txt .= "%0A"."-------------------";

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

	// Переберем созданный массив циклом:
foreach ($partners as $partner) {
	if ($partner->ticket==$ticket) {$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$partner->chat_id}&parse_mode=html&text={$txt}","r");
		break;
	}		
}


?>