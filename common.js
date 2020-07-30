$(function(){

	var randomContent = [];
	$('.contentBox li').each(function() {
        randomContent.push($(this).html());
    });

	randomContent.sort(function() {
	    return Math.random() - Math.random();
	});

	$('.contentBox li').empty();

	i = 0;
	$('.contentBox li').each(function() {
		 $(this).append(randomContent[i]);
		i++;
	});

});
