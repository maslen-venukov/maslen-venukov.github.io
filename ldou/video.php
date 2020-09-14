<?php // Атрибуты IFRAME должны быть следующими width="100%" height="400" для корректной работы ?>



<?php // Видео о курсе ?>



<?php if ( $_GET["video"] == "about" ): ?>



<!--	<iframe width="100%" height="400" src="https://www.youtube.com/embed/6w-WkduH74Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

-->



<?php endif; ?>





<?php //видео отзывов, заполняется по очереди ?>



<?php if ( $_GET["video"] == "review" && $_GET["index"] == "1" ): ?>



<iframe width="100%" height="400" src="https://www.youtube.com/embed/4XVDwec2_G4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



<?php elseif ( $_GET["video"] == "review" && $_GET["index"] == "2" ): ?>



<iframe width="100%" height="400" src="https://www.youtube.com/embed/5QfI4fe570I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



<?php elseif ( $_GET["video"] == "review" && $_GET["index"] == "3" ): ?>



<iframe width="100%" height="400" src="https://www.youtube.com/embed/hzR8z75smXk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



<?php elseif ( $_GET["video"] == "review" && $_GET["index"] == "4" ): ?>



<iframe width="100%" height="400" src="https://www.youtube.com/embed/Ktzyt2q7nOs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



<?php elseif ( $_GET["video"] == "review" && $_GET["index"] == "5" ): ?>



<iframe width="100%" height="400" src="https://www.youtube.com/embed/O7jR__uyxgo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



<?php elseif ( $_GET["video"] == "review" && $_GET["index"] == "6" ): ?>



<iframe width="100%" height="400" src="https://www.youtube.com/embed/CiFvmWtW6Dc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<?php //Отзывы клиентов наших Выпускников ?>

<?php elseif ( $_GET["video"] == "review" && $_GET["index"] == "7" ): ?>



<iframe width="100%" height="400" src="https://www.youtube.com/embed/LXb3EKWsInQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



<?php elseif ( $_GET["video"] == "review" && $_GET["index"] == "8" ): ?>



<iframe width="100%" height="400" src="https://www.youtube.com/embed/LXb3EKWsInQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<?php elseif ( $_GET["video"] == "review" && $_GET["index"] == "9" ): ?>



<iframe width="100%" height="400" src="https://www.youtube.com/embed/LXb3EKWsInQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



<?php elseif ( $_GET["video"] == "review" && $_GET["index"] == "10" ): ?>



<iframe width="100%" height="400" src="https://www.youtube.com/embed/LXb3EKWsInQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



<?php elseif ( $_GET["video"] == "review" && $_GET["index"] == "11" ): ?>



<iframe width="100%" height="400" src="https://www.youtube.com/embed/LXb3EKWsInQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



<?php endif; ?>