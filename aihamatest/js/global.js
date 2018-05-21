$(function(){
	//スクロール
	$('a[href*=#]').click(function() {
		if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			
			var targetOffset = 0;
			if ($target.length) {
				if(this.hash.slice(1).length != 0){
					targetOffset = $target.offset().top;
				}
			}
			$('html,body').animate({scrollTop: targetOffset}, 400, 'easeOutSine');
			return false;
		}
	});
	
	//IEPNG対策
	$("img[src$=png]").pngfix();
	
	//タブ
	$("#tabs").tabs();

	//ホバー
	var postfix = '_a';
	$('#nav a img').not('[src*="'+ postfix +'."]').each(function() {
		var img = $(this);
		var src = img.attr('src');
		var src_on = src.substr(0, src.lastIndexOf('.')) + postfix + src.substring(src.lastIndexOf('.'));
		img.hover(function() {
			img.attr('src', src_on);
		}, function() {
			img.attr('src', src);
		});
	});
});


$(window).scroll(function(){
        var offset = $('body').height() - $('.info').height() -500;

    if ($(window).scrollTop() < 370) {
        $('.info').css({
            top: '0',
            position: 'relative'
        });
    }else if($(window).scrollTop() > offset) {
        $('.info').css({
            top: (offset - 370),
            position: 'relative'
        });
    }else {
        $('.info').css({
            top: '10px',
            position: 'fixed'
        });
    }
});

$(function(){
    $("#home_news > article > h2").click(function () {
        $("+ div",this).slideToggle(350);
    });  
});


//フェード
$(document).ready(function() {
	$('#key').cycle({ 
		fx:    'fade', 
		timeout:   3000 
	});
});
$(document).ready(function() {
	$('.slideshow').cycle({ 
		fx:		'scrollLeft', 
		speed:	500,
		timeout:	3000, 
		random:	1
	});
});














$(function(){
	//ホバー
	$(".rollover li").hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	});
	//現在入るページをマウスオーバーに
	if(location.pathname != "/") {
		var now = location.href.split('/');
		var endDir = now.slice(now.length-2,now.length-1);
		jQuery('#nav li a[href$="'+endDir+'/index.html"]').html('<img src=\"../img/interface/navi_'+endDir+'_a.gif\">');
	}
});
