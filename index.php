
<!DOCTYPE html>
<html lang="ru">
<head>
	<title>Main</title>
	<link rel='stylesheet' href='../css/main.css'>
	<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"> 
  
  $(document).ready(function() {
	$('btn-input_product').bind("click"),function() {
		$.ajax({
			url: 'search_info.php',
			type:"post",
			dataType:'html',
			beforeSend:function (){echo "error"},
			success:function() {echo 'complete'})
		})
	}
  });
  </script>

</head>
<body>
<header> 
	<section id='logo'> 
		<div class='themes_page'> 
		 <img class ="themes_light" src="https://img.icons8.com/officexs/16/000000/sun.png">
		<img class='themes_dark' src="https://img.icons8.com/color/15/000000/new-moon.png">
		</div> 
		<div class='text-logo-colors_1'>ZNU</div>
		<div class='text-logo-colors_2'>costs</div>
	</section>
</header>
<main class='main'> 
	<div class="container"> 
		<div class = "side-bar"> 
			<div class = 'info_faculty'> 
				<div class='faculty-name-all'>Факультет</div>
				<div class='faculty-name_mathfac'>
					Математичний
				</div>
				<div class='faculty-name_biological margin_fac'>
					Біологічний
			    </div>
				<div class='faculty-name_Economic'>
					Економічний
				</div>
				<div class='faculty-name_historical margin_fac'>
					Історичний
				</div>
				<div class='faculty-name_physical-education'>
					Фізичного виховання
				</div>
				<div class='faculty-name_philological margin_fac'>
					Філологічний
				</div>
				<div class='faculty-name_legal'>
					Юридичний
				</div>
			</div>
		</div>  

			<button class = "btn-add-block_info"> 
				<img src="https://img.icons8.com/android/24/000000/plus.png">
			</button>
			<div class = 'main-info'></div>
			<button class = "btn-search_info">
				<img src="https://img.icons8.com/ios/20/000000/search--v1.png">
			</button>
			<!--<div class = 'main_search_info'> </div>!-->
			<div class="container_date"></div>
			
	</div> 
</main>	
<footer> 
	<div class='footer'>
		<div class='communicate'> 
		<div class= 'insta'><a href='https://www.instagram.com/studradaznu/?hl=ru'></div>
	<img  id='insta-logo' src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt='insta'>
		<div class= 'telegram'><a href='https://t.me/ZNU_public'></div>
		<img  id='telega-logo' src="https://img.icons8.com/ios-filled/50/000000/paper-plane.png" alt='telega'>
	</div>
</footer> 
</body>
<!--<script type="text/javascript" src="../js/main.js"></script>!-->
<script type="text/javascript" src="../js/handlers/script_add.js"></script>
<script type="text/javascript" src="../js/handlers/script_search.js"></script>
</html>