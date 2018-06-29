$('#a').click(function(){
	alert('wrong!');
	location.href = "first.html";
})
$("#a").mouseover(function(){
	$("#a").css("background-color", "black");
	$("#a").css("color", "red");
});
$("#a").mouseleave(function(){
	$("#a").css("background-color", "white");
	$("#a").css("color", "black");
});

$('#b').click(function(){
	alert('you are correct!');
	location.href = "last.html";
})
$("#b").mouseover(function(){
	$("#b").css("background-color", "black");
	$("#b").css("color", "green");
});
$("#b").mouseleave(function(){
	$("#b").css("background-color", "white");
	$("#b").css("color", "black");
});

$('#c').click(function(){
	alert('wrong!');
	location.href = "first.html";
})
$("#c").mouseover(function(){
	$("#c").css("background-color", "black");
	$("#c").css("color", "red");
});
$("#c").mouseleave(function(){
	$("#c").css("background-color", "white");
	$("#c").css("color", "black");
});
