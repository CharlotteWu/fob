window.onload= function(){

   //show people's information
   var sHeight = document.body.scrollHeight ;
   var sWidth = document.body.scrollWidth ; 
   var mask = document.getElementById('mask');
   var cHeight = document.documentElement.clientHeight;
   var cWidth = document.documentElement.clientWidth;
   var intro = document.getElementsByClassName('self_intro'); 
   var pic = document.getElementsByClassName('p_pic'); 
   var close = document.getElementsByClassName('close');
  
     for(var i=0;i<pic.length;i++){
      pic[i].id = i; 
       pic[i].onclick = function(){   
          intro[this.id].style.display = "block";  
          intro[this.id].style.top = (cHeight - 400)/2+ 'px';
          intro[this.id].style.left = (cWidth - 900)/2 + 'px';
          mask.style.display = "block";
          mask.style.height = sHeight + 'px';
          mask.style.width = sWidth + 'px'; 
       };    
  }

     for(var j=0;j<close.length;j++){
     	close[j].id = j;
     	close[j].onclick = function(){
     		intro[this.id].style.display = "none";
     		mask.style.display = "none";
     	}
     }

 
   //change music 
    var cd = document.getElementsByClassName('cd');
    for(var i=0;i<cd.length;i++){
      cd[i].id = i;
    }

   
}