var score=0;
var side_alt=["roll: 1", "roll: 2", "roll: 3", "roll: 4", "roll: 5", "roll: 6"];
function throwdice(){
	 var rand1=Math.round(Math.random()*5) + 1;
	 var rand2=Math.round(Math.random()*5) + 1;
	 var rand3=Math.round(Math.random()*5) + 1;
	 var rand4=Math.round(Math.random()*5) + 1;

 
	 document.getElementById("mydice1").src="images/d" + rand1 + ".png";
	 document.getElementById("mydice2").src="images/d" + rand2 + ".png";
	 document.getElementById("hisdice1").src="images/e" + rand3 + ".png";
	 document.getElementById("hisdice2").src="images/e" + rand4 + ".png";


	 document.getElementById("mydice1").alt=side_alt[rand1];
	 document.getElementById("mydice2").alt=side_alt[rand2];
	 document.getElementById("hisdice1").alt=side_alt[rand3];
	 document.getElementById("hisdice2").alt=side_alt[rand4];

	 who_won(rand1,rand2,rand3,rand4);
}


function who_won(rand1,rand2,rand3,rand4){
	 let player_points=rand1 + rand2 + 2; 
	 let enemy_points=rand3 + rand4 + 2; 
	 let giffy=winner(player_points,enemy_points); 
	 document.getElementById("message").src="images/" + giffy; 
	 document.getElementById("message").alt=giffy;
	 document.getElementById("score").value=score;
}

function winner(player, enemy){
	 if (player < enemy){
		 score=score-1; 
		 return "looser.gif";
	}
	 if (enemy < player){
		 score=score + 1; 
		 return "winner.gif";
	}
	 if (player==enemy){
		 return "equal.gif"; 
	}
}