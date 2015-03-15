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

$(document).ready(
	function()
	{
		showLogin();
	}
);
