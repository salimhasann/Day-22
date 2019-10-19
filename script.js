/*$ (selector).Action()*/
$(window).scroll(function(){
	var windowScroolPosition = $(window).scrollTop();
	var scrollPosition = $('#stikydiv').position();
	$('#p1').text(windowScroolPosition);
	$('#p2').text(scrollPosition.top);
	if(windowScroolPosition >= scrollPosition.top) {
		$('#stikydiv').css({
			'position' : 'fixed',
			'top' : '0px'
		})
	} else{
		$('#stikydiv').css({
			'position' : 'relative',
			'top' : '0px'
		})
	}
});





/*var scrollPosition = $('#scrolldiv').position();
alert(scrollPosition.left);*/




/*var fristscroll = 0;
$('#scrolldiv').scroll(function(){
	var scrollvalue = $('#scrolldiv').scrollTop();
	
	if(scrollvalue > fristscroll){
		$('#heading').text('you are scroll down');
	} else{
		$('#heading').text('you are scroll up');
	}
	fristscroll = scrollvalue;
});*/



/*$('#scrolldiv').scroll(function(){
	var scrolltop = $('#scrolldiv').scrollTop();
	$('#heading').text(scrolltop);
});*/



$('#firstOne').keyup(function() {
	var firstOne = $('#firstOne').val();
	$('#res1').text(firstOne);
});
$('#lastOne').keyup(function(){
	var lastOne = $('#lastOne').val();
	$('#res2').text(lastOne);
});
$('#lastOne').blur(function(){
	var firstOne = $('#firstOne').val();
	var lastOne = $('#lastOne').val();
	var outside = firstOne+' '+lastOne;
	$('#res3').text(outside);
});




$('#btn').click(function(){
	var firstName = $('#firstName').val();
	var lastName = $('#lastName').val();
	var fullName = firstName+' '+lastName;
	$('#fullName').val(fullName);
});