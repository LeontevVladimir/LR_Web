$(function(){
	$('#tabs').tabs({ 
			show: { effect: "fade",duration: 300 }, 
			hide: { effect: "fade",duration: 300 },
		});
}); 

$(function(){
		$( "#accordion" ).accordion({
		collapsible: true,
		active: false
		}); 
	});

$(function(){
	$("#create").button().click(function(){
		$('#dialog').dialog("open");
	})

	$('#dialog').dialog({
	autoOpen: false,
	buttons:{
			Оформить: function (event, ui) {
					$( "#conf" ).dialog("open");

				var sp_fio = $("#fio").val();
				var sp_amount = $("#amount").val();
				var sp_spare_part = $("#sparepart").val();
				var sp_date = $("#date").val();
				var sp_gorod = $("#gorod").val();
				var sp_address = $("#address").val();
				var price,sp_price;

					switch (sp_spare_part) {
						case 'Генератор': sp_price = 7200;
						break;
						case 'Воздушный фильтр': sp_price = 500;
						break;
						case 'Свеча зажигания': sp_price = 1000;
						break;
					} 
                    price = sp_price*sp_amount;
					document.getElementById('sp_fio').value = sp_fio;
					document.getElementById('sp_amount').value = sp_amount;
					document.getElementById('sp_spare_part').value = sp_spare_part;
					document.getElementById('sp_date').value = sp_date;
					document.getElementById('sp_gorod').value = sp_gorod;
					document.getElementById('sp_address').value = sp_address;
					document.getElementById('price').value = price;
				},
			Отмена: function() {
			$(this).dialog('close');
	}
},
	show: {effect: "fade", duration: 800},
	hide: {effect: "drop", duration: 800},
});

$("#slider_amount").slider({
	range: "min",
	value: 0,
	min: 0,
	max: 10,
	step: 1,
	slide: function(event, ui) {
		$("#amount").val($("#slider_amount").slider("option", "value"));
	},
	change: function(event, ui) { 
		$("#amount").val($("#slider_amount").slider("option", "value"));
	}
});
$("#amount").val($("#slider_amount").slider("option", "value"));

$( "#date" ).datepicker({
	dateFormat: "dd.mm.yy"
	});

$("#tip").tooltip();

var availableTags = [
		"Уфа",
		"Москва",
		"Санкт-Петербург",
		"Сочи",
		];
		$( "#gorod" ).autocomplete({
		source: availableTags
		});

	$('#conf').dialog({

	autoOpen: false,
	buttons:{
			Подтвердить: function (event, ui) {
				$( "#oform" ).dialog("open");
				$( "#dialog" ).dialog("close")
				$(this).dialog('close');
				},
			Отмена: function() {
			$(this).dialog('close');
	}
},
	show: {effect: "fade", duration: 800},
	hide: {effect: "drop", duration: 800},
});

$('#oform').dialog({
	autoOpen: false,
	show: {effect: "fade", duration: 800},
	hide: {effect: "drop", duration: 800},
});
})