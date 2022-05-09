$(document).ready(function(){
	loadContent();
	$('#more_cars').click(
		function (){
			var count = document.getElementById('main__items').getElementsByClassName('cars_place').length;
			$.post("php/get_more_cars.php", {kol: 5, tek: count}, successMoreCars);
		});
});

function loadContent(){
	$.post("php/get_content.php",{}, successLoad);
}

function successLoad(data){
	data = JSON.parse(data);
	console.log(data);
	for(var i in data)
		{
			let cars = 
			`	<div class="cars_place">
					<div class="cars_cart">
							<div class="picture">
								<img src="${data[i].img}" alt="${data[i].name}">
							</div>

							<div class="cars_name">
								${data[i].name}
							</div>

							<div class="cars_text">
								<p>
									${data[i].text_p1}
								</p>

								<p>
									${data[i].text_p2}
								</p>
							</div>
						</div>
					</div>
				</div>`;
			document.getElementById("main__items").insertAdjacentHTML('beforeend', cars);
		}}

function successMoreCars(data){
	data = JSON.parse(data);
	console.log(data);
	for(var i in data)
		{
			let cars = 
			`	<div class="cars_place">
					<div class="cars_cart">
							<div class="picture">
								<img src="${data[i].img}" alt="${data[i].name}">
							</div>

							<div class="cars_name">
								${data[i].name}
							</div>

							<div class="cars_text">
								<p>
									${data[i].text_p1}
								</p>

								<p>
									${data[i].text_p2}
								</p>
							</div>
						</div>
					</div>
				</div>`;
			document.getElementById("main__items").insertAdjacentHTML('beforeend', cars);
}}