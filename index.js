$('body').find('#originalContent strong').html('wat.');
$('.box:contains(\'Web Developer\')').find('span:contains(\'Web Developer\')').each(function(){$(this).text('Web Developer & Superstar')});