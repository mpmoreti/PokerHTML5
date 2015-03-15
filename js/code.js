function showValue(sliderID, textbox)
{
	var v = $(sliderID).val();
	$(textbox).val(v);
}

function showLogin()
{
	$("#player-info-and-login #login").css("display", "inline");
	$("#player-info-and-login #login #username").focus();
	$("#player-info-and-login #info").css("display", "none");
}

function showPlayerInfo()
{
	$("#player-info-and-login #login").css("display", "none");
	$("#player-info-and-login #info").css("display", "inline");
}

function hidePlayer1Info()
{
	$("#player1 #username").css("visibility", "hidden");
	$("#player1 #table-player-info-credits").css("visibility", "hidden");
}

function setPlayer1Info(username, credits, show)
{
	show = (typeof show !== 'undefined')? show : true;
	
	$("#player1 #username").text(username);
	$("#player1 #table-player-info-credits").text(credits);
	
	if (show)
	{
		$("#player1 #username").css("visibility", "visible");
		$("#player1 #table-player-info-credits").css("visibility", "visible");
	}
}

function hidePlayer1Cards()
{
	$("#player1 #card1").css("visibility", "hidden");
	$("#player1 #card2").css("visibility", "hidden");
}

function setPlayer1Cards(card1, card2, show)
{
	show = (typeof show !== 'undefined')? show : true;
	
	$("#player1 #card1").attr("src", card1);
	$("#player1 #card2").attr("src", card2);
	
	if (show)
	{
		$("#player1 #card1").css("visibility", "visible");
		$("#player1 #card2").css("visibility", "visible");	
	}
}

function hidePlayer2Info()
{
	$("#player2 #username").css("visibility", "hidden");
	$("#player2 #table-player-info-credits").css("visibility", "hidden");
}

function setPlayer2Info(username, credits, show)
{
	show = (typeof show !== 'undefined')? show : true;
	
	$("#player2 #username").text(username);
	$("#player2 #table-player-info-credits").text(credits);
	
	if (show)
	{
		$("#player2 #username").css("visibility", "visible");
		$("#player2 #table-player-info-credits").css("visibility", "visible");
	}
}

function hidePlayer2Cards()
{
	$("#player2 #card1").css("visibility", "hidden");
	$("#player2 #card2").css("visibility", "hidden");
}

function setPlayer2Cards(card1, card2, show)
{
	show = (typeof show !== 'undefined')? show : true;
	
	$("#player2 #card1").attr("src", card1);
	$("#player2 #card2").attr("src", card2);
	
	if (show)
	{
		$("#player2 #card1").css("visibility", "visible");
		$("#player2 #card2").css("visibility", "visible");	
	}
}

function setPlayer2Info(username, credits, show)
{
	show = (typeof show !== 'undefined')? show : true;
	
	$("#player2 #username").text(username);
	$("#player2 #table-player-info-credits").text(credits);
	
	if (show)
	{
		$("#player2 #username").css("visibility", "visible");
		$("#player2 #table-player-info-credits").css("visibility", "visible");
	}
}

function hidePlayer1Bet()
{
	$("#player1-bet").css("visibility", "hidden");
}

function setPlayer1Bet(amount, show)
{
	show = (typeof show !== 'undefined')? show : true;
	
	$("#player1-bet").text(amount);
	
	if (show)
	{
		$("#player1-bet").css("visibility", "visible");
	}
}

function hidePlayer2Bet()
{
	$("#player2-bet").css("visibility", "hidden");
}

function setPlayer2Bet(amount, show)
{
	show = (typeof show !== 'undefined')? show : true;
	
	$("#player2-bet").text(amount);
	
	if (show)
	{
		$("#player2-bet").css("visibility", "visible");
	}
}

function hidePot()
{
	$("#pot").css("visibility", "hidden");
}

function setPot(amount, show)
{
	show = (typeof show !== 'undefined')? show : true;
	
	$("#pot").text(amount);
	
	if (show)
	{
		$("#pot").css("visibility", "visible");
	}
}

function hideBoardCards()
{
	for (var i = 1; i <= 5; i++)
	{
		$("#board-card" + i).css("visibility", "hidden");
	}
}

function setBoardCard(id, card, show)
{
	show = (typeof show !== 'undefined')? show : true;
	
	$("#board-card" + id).attr("src", card);
	
	if (show)
	{
		$("#board-card" + id).css("visibility", "visible");
	}
}

function hideGameButtons()
{
	$("#game-buttons").css("visibility", "hidden");
}

$(document).ready(
	function()
	{
		showLogin();
		
		hidePlayer1Info();
		hidePlayer1Cards();
		hidePlayer2Info();
		hidePlayer2Cards();
		hidePlayer1Bet();
		hidePlayer2Bet();
		hidePot();
		hideBoardCards();
		hideGameButtons();
		
		setPlayer1Info("player1", 500);
		setPlayer1Cards("images/cards_svg/4_of_clubs.svg", "images/cards_svg/9_of_hearts.svg", 500);
		
		setPlayer2Info("player2", 450);
		setPlayer2Cards("images/cards_svg/back.svg", "images/cards_svg/back.svg", 500);
		
		setPlayer1Bet(42);
		setPlayer2Bet(42);
		setPot(116);
		
		setBoardCard(1, "images/cards_svg/5_of_hearts.svg");
		setBoardCard(2, "images/cards_svg/queen_of_clubs.svg");
		setBoardCard(3, "images/cards_svg/ace_of_diamonds.svg");
		setBoardCard(4, "images/cards_svg/jack_of_diamonds.svg");
		setBoardCard(5, "images/cards_svg/9_of_spades.svg");
	}
);
