 $(document).ready(function(){
    var timer = null;
     
    //check the screen's size 
 

    //roll pics  
	$('#rb div').css({opacity: 0.0});
	$('#rb div:first').css({opacity: 1.0});
	setInterval(function () {
	     var current = ($('#rb div.present')?  $('#rb div.present') : $('#rb div:first'));
	     var next = ((current.next().length) ? ((current.next().hasClass('caption'))? $('#rb div:first') :current.next()) : $('#rb div:first'));
	
	     next.css({opacity: 0.0})
	     .addClass('present')
	     .animate({opacity: 1.0}, 1000); 

	    current.animate({opacity: 0.0}, 1000)
      	.removeClass('present'); 
     },2000);  

     //meun's show
     $('#show').on('click',function (){
     	if($('#show').hasClass('close')){ 
     	    $('#show').removeClass('close');
     	       menuShow(-200);  
     	 }else{
           $('#show').addClass('close');
     	    menuShow(0);  
     	 }
     	  
     }); 

     function menuShow(range){
     	clearInterval(timer);
        var speed = 0;  
        timer = setInterval(function(){
            
           speed = (range - $('.sidebar').offset().left)/10;
           speed = speed>0 ? Math.ceil(speed):Math.floor(speed);

           if($('.sidebar').offset().left == range){
           	clearInterval(timer);
           }else{
           	 
           	 $('.sidebar').css('left',$('.sidebar').offset().left+speed+'px');
           }

        },20); 
     }
     
      

     //change the cds    
     var nowIndex =0;  

     var newLeft= parseInt($('.cd_l').innerWidth()) - parseInt($('.cd_l').innerWidth()/5) ; 
      $('.pre').on('click',function(){   
           var  mlValue = parseInt($('.cd_l').css("margin-left"))+parseInt($(document.body).innerWidth())-55  ; 
       
             $('.cd_list .cd_l').animate({marginLeft:mlValue+'px'});
             $('.cd_list .cd_l').css({marginLeft:mlValue+'px'});
              
              if(mlValue>0){
                 $('.cd_list .cd_l').animate({marginLeft:-newLeft+'px'});
                $('.cd_list .cd_l').css({marginLeft:-newLeft+'px'});
              }

              nowIndex =-Math.round(parseInt($('.cd_l').css('margin-left'))/$(window).width()); 
              $('.cd')[nowIndex].addClass('active').siblings().removeClass('active');
               
      });
  
       $('.next').on('click',function(){  
          var  mlValue = parseInt($('.cd_l').css("margin-left"))-parseInt($(document.body).innerWidth())+55 ; 
         
             $('.cd_list .cd_l').animate({marginLeft:mlValue});
             $('.cd_list .cd_l').css({marginLeft:mlValue});   
              
              if(mlValue< -newLeft){
                $('.cd_list .cd_l').animate({marginLeft:0+'px'});
             $('.cd_list .cd_l').css({marginLeft:0+'px'});  
              }  
               nowIndex =-Math.round(parseInt($('.cd_l').css('margin-left'))/$(window).width());  
               $('.cd')[nowIndex].addClass('active').siblings().removeClass('active');

      }); 
       
       


  })
    