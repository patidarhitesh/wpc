var pressListHeight=$('.pressList').outerHeight();
$('.stockBlock').css('height',pressListHeight);

var divHeight=$('.investorBotSection').outerHeight();
$('.screenDividerfull').css('height',divHeight);


var headerHeight=$('header').outerHeight();
$('.searchContainer').css('top',headerHeight);
$('.megaMenu,.secondLevelMenu,.thirdLevelMenu').css('top',headerHeight);

$('.serchBtn').click(function(){	
	$(this).toggleClass('active');
	$(this).find('span').toggleClass('glyphicon-remove');
	var defaultVal="Search";
	if($('.searchContainer').hasClass('open')){
		$('.searchContainer').fadeOut();
		$('.searchContainer').removeClass('open');
		$('.searchInput input').val('');
	}	
	else{
		$('.searchContainer').fadeIn();
		$('.searchContainer').addClass('open');
		$('.searchInput input').focus();
	};
});


$('.searchClose').click(function(){
	$('.searchInput input').val('');
	$('.searchContainer').fadeOut();
	$('.searchContainer').removeClass('open');	
});


/*mega menu js starts here */
var viewPortWidth=$(window).width();
$('.megaMenu,.secondLevelMenu,.thirdLevelMenu').css('left',viewPortWidth);

function openMegamenu(){
$('.menuIcon').click(function(){	
	if($(this).hasClass('menuActive')){	
		$(this).removeClass('menuActive');
		$('.serchBtn').fadeIn();	
		$('body').removeClass('bodyFix');
		$('.megaMenu').animate({'left':viewPortWidth});	
	}
	else{
		$('.serchBtn,.menuIcon').css('display','none');
		$(this).addClass('menuActive');
		$('.closeMenuDiv').fadeIn();	
		$('body').addClass('bodyFix');
		$('.megaMenu').animate({'left':0});
	}
});
};
function closeMegaMenu(){
$('.closeMenuDiv').click(function(){
	$('.closeMenuDiv').css('display','none'); 
	$('.serchBtn,.menuIcon').fadeIn();
	$('.searchContainer').fadeOut();	
	$('.menuIcon').removeClass('menuActive');
	$('.searchContainer').removeClass('open');
	$('body').removeClass('bodyFix');
	$('.megaMenu,.secondLevelMenu,.thirdLevelMenu').animate({'left':viewPortWidth});
	if($('.searchContainer').hasClass('open')){
		$('.mobileMenu').hide();		
	}
	else{
		$('.mobileMenu').fadeIn();
	}
});
};
function searchClose(){
$('.closeSearchDiv').click(function(){
	$('.closeSearchDiv').css('display','none'); 
	$('.serchBtn,.menuIcon').fadeIn();
	$('.searchContainer,.megaMenu').fadeOut();	
	$('.menuIcon').removeClass('menuActive');
	$('.searchContainer').removeClass('open');
	if($('.searchContainer').hasClass('open')){
		$('.mobileMenu').hide();		
	}
	else{
		$('.mobileMenu').show();
	}
});
};

//open second level
var getPrevId;
$('.navListing h3').click(function(){
	if($(this).attr('data-title')){
		getPrevId=$(this).attr('data-title');		
		$('.secondLevelMenu .navListing').css('display','none');
		$('#'+$(this).attr('data-title')).css('display','block');	
		$('.backToMenu, .backToPrevMenu').attr('data-id',getPrevId);
		$('.secondLevelMenu').animate({'left':0});
		$(this).addClass("openSeconLevel");
	}
});

$('.backToMenu').click(function(){
	$('.secondLevelMenu').animate({'left':viewPortWidth});	 
});

$('.backToPrevMenu').click(function(){
	var getPrevId=$(this).attr('data-id');
	$('.secondLevelMenu').animate({'left':0})
	$('.thirdLevelMenu').animate({'left':viewPortWidth});	
	$('.navListing').find("h3[data-title='" + getPrevId + "']").parents('.navListing').css({'display':'block'});	
		
});

//open third level
$('.thirdLevel h3').click(function(){
	if($(this).attr('data-title')){
		$('.thirdLevelMenu .navListing').css('display','none');
		$('#'+$(this).attr('data-title')).css('display','block');	
		$('.thirdLevelMenu').animate({'left':0});
	}
});
	
openMegamenu();
closeMegaMenu();
searchClose();
/*mega menu js ends here */

/*secondary menu js starts here */
$('.navHeader').click(function(){
	if($(this).hasClass('open')){
		$(this).removeClass('open');
		$(this).parent().find('ul').slideUp();
	}
	else{
		$(this).addClass('open');
		$(this).parent().find('ul').slideDown();
	}
});
$('.secondaryNav ul li a').click(function(){
	if($(window).width()<768){
		var liData=$(this).text();
		$('.navHeader').text(liData);
		$('.navSelect ul').slideUp();
		$('.navHeader').removeClass('open');
	}
})
/*secondary menu js ends here */

/*equal height js */
equalheight = function(container){
	//debugger;
var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}
$(window).load(function() {
	if($(window).width()>=768){ 		
		$('.bioSection').removeAttr('style');
		$('.heading').removeAttr('style');
  		equalheight('.bioSection');
		equalheight('.heading');
		//equalheight('.investContent');	
		equalheight('.tweetContainer');	
		equalheight('.investHeader');	
	}
});
/*equal height js ends*/

/*trim text js */
function trimTxt(){
$(".investorBotSection ul li p a,.pressReleaseBlock p").each (function () {
	if($(window).width()<=768){
		if ($(this).text().length > 45)
	  	$(this).text($(this).text().substring(0,45) + '...');
	}
	else if($(window).width()>768 && $(window).width()<1024)
	{
		if ($(this).text().length > 80)
	  	$(this).text($(this).text().substring(0,80) + '...');
	}
	else ($(window).width()>1024)
	{	
		if ($(this).text().length > 100)
	  	$(this).text($(this).text().substring(0,100) + '...');
	}
  });
}
trimTxt();
 /*trim text js ends */
 
/*modal window js */
$(function() {
        $(".video").click(function () {
        var theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-video"),
        videoSRCauto = videoSRC;
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function () {
            $(theModal + ' iframe').attr('src', '');
        });
        });
    });
$('#videoModal').on('hidden.bs.modal', function (e) {
$('#videoModal').find('iframe').attr('src', '');
});

$('#contactBox').on('hidden.bs.modal', function (e) {
  $(this)
    .find("input,textarea,select")
       .val('')
       .end()
    .find("input[type=checkbox], input[type=radio]")
       .prop("checked", "")
       .end();
})
/*modal window js ends */

/*portfolio page js starts here */
	$('.tabbing li a').click(function(){
		$('.tabbing li a').removeClass('active');
		$(this).addClass('active');
		var data=$(this).attr('data-title')
		$('.hideDiv').hide();
		$("#"+data).show();
	}); 
	
	$('.graphListiong .diversificationType li a').click(function(){
		$('.diversificationType li a').removeClass('active');
		$(this).addClass('active');
		var data=$(this).attr('data-title')
		$('.hideDiv').hide();
		$("#"+data).show();
	});
	
	$('.classDiv li a').click(function(){
		$('.diversificationType li a').removeClass('active');
		$(this).addClass('active');
		var data=$(this).attr('data-title')
		$('.divHide').hide();
		$("#"+data).show();
	});
	
	
	$('.tenantListTab li a').click(function(){
		if($(this).hasClass('active'))
		{
			$(this).parent().find('.innerTable').slideUp();
			$(this).removeClass('active')
		}
		else{
			$(".tenantListTab .innerTable").slideUp();
			$('.tenantListTab li a').removeClass('active');
			$(this).parent().find('.innerTable').slideDown();
			$(this).addClass('active')
		}	
	});
		
	$('.fliterBar li a').click(function(){
		if($(this).hasClass('active'))
		{
			$(this).parent().find('.innerList').slideUp();
			$(this).removeClass('active');
		}
		else{
			$(".fliterBar .innerList").slideUp();
			$('.fliterBar li a').removeClass('active');
			$(this).parent().find('.innerList').slideDown();
			$(this).addClass('active')
		}	
	});
/*portfolio page js ends here */

/*tertiary nav js starts here */
$('.tertiaryNavMobile h3').click(function(){
	if( $(this).hasClass('active')){
		$(this).removeClass('active');
		$(this).parent().find('ul').slideUp();
	}
	else{
		$(this).addClass('active');
		$(this).parent().find('ul').slideDown();
	}
});

//sticky tertiary nav 
var headerHeight=$("header").outerHeight();
var tertiaryNavHeight=$('.tertiaryNav').outerHeight();
var bannerHeight=$('.aboutUsBanner, .workingWPCBanner').outerHeight();
var secondryNavHeight=$('.secondaryNav').outerHeight();
var totalHeight=(bannerHeight+secondryNavHeight)-headerHeight;

var scrollHeight=headerHeight+tertiaryNavHeight;

$(window).scroll(function(){
	if($(window).scrollTop()>totalHeight)
	{
		$(".tertiaryNav").addClass("fixed");
	}
	else
	{
		$(".tertiaryNav").removeClass("fixed");
	}
});

$(window).scroll(function(){
	if($(window).scrollTop()>totalHeight)
	{
		$(".secondaryNav").addClass("fixed");
	}
	else
	{
		$(".secondaryNav").removeClass("fixed");
	}
});
$('.navLinks li a') .click(function(){
	var storeId = $(this).attr('data-title');
	$("html, body").stop(true).animate({ scrollTop: $('#'+storeId).offset().top-scrollHeight}, 1000);
	$(".navLinks li a").removeClass("liActive");
	$(this).addClass("liActive");
 });
 
 $('.navSelect li a') .click(function(){
	var storeId = $(this).attr('data-title');
	$("html, body").stop(true).animate({ scrollTop: $('#'+storeId).offset().top-scrollHeight}, 1000);
	$(".navSelect li a").removeClass("active");
	$(this).addClass("active");
 });

$(window).scroll(function(){
	var scrollPosition = $(window).scrollTop();	
	try{							
	$('.navLinks li a').each(function () {
		var storeId = $(this).attr('data-title');
		if ($("#"+storeId).offset().top-scrollHeight <= scrollPosition) {
			$('.navLinks li a').removeClass("liActive");
			$(this).addClass("liActive");
		}		
	});	
	}
	catch(e){};
}); 
//sticky tertiary nav ends

/*tertiary nav js ends here */

//resize function
$(window).resize(function(){	
trimTxt();	
var viewPortWidth=$(window).width();
$('.megaMenu,.secondLevelMenu,.thirdLevelMenu').removeAttr('style');
$('.megaMenu,.secondLevelMenu,.thirdLevelMenu').css('left',viewPortWidth);
var headerHeight=$('header').outerHeight();
$('.searchContainer').css('top',headerHeight);
$('.megaMenu, .secondLevelMenu, .thirdLevelMenu').css('top',headerHeight);
$('.closeMenuDiv').css('display','none');
$('.menuIcon').removeClass('menuActive').css('display','block');
	
$('.bioSection').removeAttr('style');
$('.heading').removeAttr('style');
//$('.investContent').removeAttr('style');
$('.tweetContainer').removeAttr('style');
	
equalheight('.tweetContainer');
equalheight('.bioSection');
equalheight('.heading');
//equalheight('.investContent');

if($(window).width()<768){ 		
	$('.bioSection').removeAttr('style');
	$('.heading').removeAttr('style');
	//$('.investContent').removeAttr('style');
	$('.tweetContainer').removeAttr('style');
}

$('body').removeClass('bodyFix');
$('.serchBtn').fadeIn();
	
	
var pressListHeight=$('.pressList').outerHeight();
$('.stockBlock').css('height',pressListHeight);	

});

/* close search container clicking outside search box*/
$(document).click(function (e)
{
	var container = $(".serchBtn ,.searchInput");	
	if (!container.is(e.target)
	&& container.has(e.target).length === 0) 
	{
		$('.searchContainer').hide();
		$('.searchContainer').removeClass('open');
		$('.searchInput input').val('');
		$('.serchBtn').removeClass('active');
		$('.serchBtn').find('span').removeClass('glyphicon-remove');
	}
});
/* search box js ends */


/*table header fixed */
$('.distributionTable').find('tr th,tr td').css({'width':$(this).width()/4});
//scrollTop function
$(window).scroll(function(){
	 if($(window).width()>1024){
		if($(window).scrollTop()>100){
			$('.scrollTop').fadeIn();
		}
		else{
			$('.scrollTop').fadeOut();
		}
	}
});

$('.scrollTop').click(function(){
	 $("html, body").animate({ scrollTop: 0 }, 500);
});

/* cookies js stats */
	var cookiesHeight=$('.cookieSection').outerHeight(true);
	$(window).scroll(function(){
		if($(window).scrollTop()>cookiesHeight){
			$('.headerMain').css('position','fixed');
		}
		else{
			$('.headerMain').css('position','static');
		}
	});
	
	$('.acceptCookie .customBtn, .closeCookie a').click(function(){
		$('.headerCookie').slideUp();
	});
/* cookies js ends */




