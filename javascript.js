
            function upArrowPressed() {
			var element = document.getElementById("image");
            			
			if(parseInt(element.style.top)<=0){}
				else{
            element.style.top = parseInt(element.style.top) - 5 + 'px';
            
				}
            }

            function downArrowPressed() {
				
            var element = document.getElementById("image");
            element.style.top = parseInt(element.style.top) + 5 + 'px';
            }
var score=0;
			var vari=setInterval(function(){
			var shark1 = document.getElementById("bar1");
			var shark2 = document.getElementById("bar2");
			var shark3 = document.getElementById("bar3");
			var shark4 = document.getElementById("bar4");
			
			var plane= document.getElementById("image");
					 var shark1_box = { top: 0 ,bottom:0, left:0, right:0 };
					 var shark2_box = { top: 0 ,bottom:0, left:0, right:0 };
					 var shark3_box = { top: 0 ,bottom:0, left:0, right:0 };
					 var shark4_box = { top: 0 ,bottom:0, left:0, right:0 };
					 
					 var plane_box = { top: 0 , bottom:0, left:0, right:0 };
                     shark1_box = shark1.getBoundingClientRect();
					 shark2_box = shark2.getBoundingClientRect();
					 shark3_box = shark3.getBoundingClientRect();
					 shark4_box = shark4.getBoundingClientRect();
					 plane_box = plane.getBoundingClientRect();
					 //console.log(shark2_box.left);
					 
					 //if(shark1_box.left<=20){score++;console.log(score)};
					 //if(shark2_box.left<=20){score++;console.log(score)};
					 //if(shark3_box.left<=100){score++;console.log(score)};
					 //if(shark4_box.left<=100){score++;console.log(score)};
					 
					 if (shark1_box.top > plane_box.top && shark1_box.bottom < plane_box.bottom && shark1_box.left < plane_box.right){
					 document.getElementById("gameover").style.display = "block";
					 onCall();
					 }
					 if (shark2_box.top > plane_box.top && shark2_box.bottom < plane_box.bottom && shark2_box.left < plane_box.right){
					  document.getElementById("gameover").style.display ="block";
					  onCall();
					 }
					if (shark3_box.top > plane_box.top && shark3_box.bottom < plane_box.bottom && shark3_box.left < plane_box.right){
					 document.getElementById("gameover").style.display = "block";
					  onCall();
					 }
					 if (shark4_box.top > plane_box.top && shark4_box.bottom < plane_box.bottom && shark4_box.left < plane_box.right){
					  document.getElementById("gameover").style.display ="block";
					 onCall();
					 }
					 },33);

			function onCall()
			{
		    
			document.getElementById("bar1").style.animationPlayState="paused";
			document.getElementById("bar2").style.animationPlayState="paused";
			document.getElementById("bar3").style.animationPlayState="paused";
			document.getElementById("bar4").style.animationPlayState="paused";
			document.getElementById("image").style.animationPlayState="paused";
			document.getElementById("background-area").style.animationPlayState="paused";
				 
			}			
            function moveSelection(evt) {
				
			    
				switch (evt.keyCode) {
                    case 37:
                    leftArrowPressed();
                    break;
                    case 39:
                    rightArrowPressed();
                    break;
                    case 38:
                    upArrowPressed();
                    break;
                    case 40:{
					downArrowPressed();
					
                    break;}
					
                    }
                };

        function docReady()
        {
          window.addEventListener('keydown', moveSelection);
        }
		
