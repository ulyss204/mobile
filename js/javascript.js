var sizeSwitch = 25;
var switchHandle = $('.handle');

var switchArea =  $('.switch');

switchHandle.draggable({

  axis: 'x',
  containment: 'parent',
  stop: function() {
  	
    conditionMove.call($(this));
  }
});
switchArea.click(function() {
	var handle = $(this).find(switchHandle);
	
  	conditionMoveSnap.call(handle);
});

function conditionMove() {
  if(parseInt($(this).css('left')) <= (sizeSwitch / 2)) {
    $(this).animate({
      left: 0
    }, 100);
    
  }
  else {
    $(this).animate({
      left: sizeSwitch + 'px'
    }, 100);
    
  }
}

function conditionMoveSnap() {
  if(parseInt($(this).css('left')) == sizeSwitch) {
    $(this).animate({
      left: 0
    }, 100);
    
  }
  else {
    $(this).animate({
      left: sizeSwitch + 'px'
    }, 100);
    
  }
}
$('#btn').click(function(){
	$('.settings_password').show();
	$(this).hide();
});
$('#btn_1').click(function(){
	$('.settings_password').hide();
	$('#btn').show();
});
$('#btn_2').click(function(){
	$('.settings_password').hide();
	$('#btn').show();
});
$('.password_eye').click(function(){
	
	if($(this).parent().find($('input')).prop("type") == 'text'){
		$(this).parent().find($('input')).prop('type','password');
	}else if($(this).parent().find($('input')).prop("type") == 'password'){
		$(this).parent().find($('input')).prop('type','text');
	}
	
});
$('.password_eye').parent().find($('input')).mouseleave(function(){
	$(this).prop('type','password');
});
$('#ok').click(function(){
	if($('#info_name').val() !== ''){
		
			$('#name').html($('#info_name').val());
			$(this).hide();
			$('#info_name').hide();
		
	}else
	{$('#name').html('Введите имя').css({'color':'red'});}
});
$('#info_name').focus(function(){
	$('#name').html('').css({'color':'#495461'});
})
	