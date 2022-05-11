		//начать играть
     	var gamePlaying=false;
		    var score1=0;
		    var score2=0;
		    var kolvo=0;
		    var hod=0;
		//бросить кости
		$(document).ready(function(){
			        $(".startgame").click(function(){
			 if (gamePlaying==true){
				alert("Игра еще не закончена, доиграйте или нажмите сдаться")
			} else {
        	kolvo = $("#kost").val();
          	if (kolvo == 1) {
        	$("#dice1").animate({opacity:"hide"},"slow");
        	$("#dice3").animate({opacity:"hide"},"slow");
        	gamePlaying=true;
		    score1=0;
		    score2=0;
		    hod=0;
		    $('#dice2').attr('src', 'img/dicedefault.png');
			$('#dice4').attr('src', 'img/dicedefault.png');
			$("#nomerhoda").html('Ход ' + hod);
		    $("#status").html('Вам выпало:');
			$("#statuscomp").html('Выпало компьютеру:');
		    $("#status1").html('Ваш счет:' + score1 + '.');
			$("#status2").html('Счет компьютера:' + score2 + '.');
		} else if (kolvo == 2) {
			$("#dice1").animate({opacity:"show"},"slow");
			$("#dice3").animate({opacity:"show"},"slow");
			gamePlaying=true;
		    score1=0;
		    score2=0;
		    hod=0;
		    $('#dice1').attr('src', 'img/dicedefault.png');
		    $('#dice2').attr('src', 'img/dicedefault.png');
		    $('#dice3').attr('src', 'img/dicedefault.png');
		    $('#dice4').attr('src', 'img/dicedefault.png');
			$("#nomerhoda").html('Ход ' + hod);
			$("#status").html('Вам выпало:');
			$("#statuscomp").html('Выпало компьютеру:');
			$("#status1").html('Ваш счет:' + score1 + '.');
			$("#status2").html('Счет компьютера:' + score2 + '.');
		} else
		{
			alert("Введите количество кубиков от 1 до 2");
		}
	}
		});
			              $(".concede").click(function(){
        	gamePlaying=false;
        	score1=0;
		    score2=0;
		    hod=0;
		    $('#dice1').attr('src', 'img/dicedefault.png');
		    $('#dice2').attr('src', 'img/dicedefault.png');
		    $('#dice3').attr('src', 'img/dicedefault.png');
		    $('#dice4').attr('src', 'img/dicedefault.png');
			$("#nomerhoda").html('Ход ' + hod);
        	$("#status").html('Вам выпало:');
			$("#statuscomp").html('Выпало компьютеру:');
		    $("#status1").html('Ваш счет:' + score1 + '.');
			$("#status2").html('Счет компьютера:' + score2 + '.');
		});
    $(".throw").click(function(){
    			if (score1==6) {
			alert("игра окончена вы победили");
		    $("#status1").html('Ваш счет:' + score1 + '.');
			$("#status2").html('Счет компьютера:' + score2 + '.');
			gamePlaying=false;
		}
		else if (score2==6){
			alert("игра окончена победил компьютер");
		    $("#status1").html('Ваш счет:' + score1 + '.');
			$("#status2").html('Счет компьютера:' + score2 + '.');
			gamePlaying=false;
		}
		if (gamePlaying && kolvo==2) {
			hod+=1;
        const side1 = Math.floor( Math.random() * 6 ) + 1;
        const side2 = Math.floor( Math.random() * 6 ) + 1;
		const side3 = Math.floor( Math.random() * 6 ) + 1;
		const side4 = Math.floor( Math.random() * 6 ) + 1;
        const diceTotal = side1 + side2;
		const diceTotal2 = side3 + side4;
		$('#dice1').attr('src', 'img/dice-'+side1+'.png');
		$('#dice2').attr('src', 'img/dice-'+side2+'.png');
		$('#dice3').attr('src', 'img/dice-'+side3+'.png');
		$('#dice4').attr('src', 'img/dice-'+side4+'.png');
				$("#nomerhoda").html('Ход ' + hod);
				$("#status").html('Вам выпало:' + diceTotal + '.');
				$("#statuscomp").html('Выпало компьютеру:' + diceTotal2 + '.');
					if (diceTotal>diceTotal2) {
						score1+=1;
					}
					else if (diceTotal<diceTotal2) {
						score2+=1;
					}
				$("#status1").html('Ваш счет:' + score1 + '.');
				$("#status2").html('Счет компьютера:' + score2 + '.');
			}
			else if (gamePlaying && kolvo==1) {
			const side1 = Math.floor( Math.random() * 6 ) + 1;
        	const side2 = Math.floor( Math.random() * 6 ) + 1;
        	hod+=1;
        		$('#dice2').attr('src', 'img/dice-'+side1+'.png');
				$('#dice4').attr('src', 'img/dice-'+side2+'.png');
					$("#nomerhoda").html('Ход ' + hod);
					$("#status").html('Вам выпало:' + side1 + '.');
					$("#statuscomp").html('Выпало компьютеру:' + side2 + '.');
				if (side1>side2) {
					score1+=1;
				}
				else if (side1<side2) {
					score2+=1;
				}
				$("#status1").html('Ваш счет:' + score1 + '.');
				$("#status2").html('Счет компьютера:' + score2 + '.');
			}
    });
});