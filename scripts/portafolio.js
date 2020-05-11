var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); // Change image every 2 seconds
}


/******************* */
  var pos=0;
  var speed=200;
  var adj=["Electronic","Freelancer","developer"];
//////PREGUNTAR ESTO////////////////////
  var j=0;
  
  newText=adj[j];
  
  document.getElementById('str').innerText=newText;
  var str=document.getElementById('str').innerText; 
  
  
  
  document.getElementById('str').innerText='';

  //typing
  function type(){
    if(pos<str.length){
      document.getElementById('str').innerText+=str.charAt(pos);
      pos++;
      setTimeout(type,speed); //call fn again to type all 
    }else {
     setTimeout(erase,speed);
    }
  }

  //start typing
  setTimeout(type,speed);

  //erase fn
  function erase(){
    if(pos>=0){
      var temp=str.substring(0,pos);
      document.getElementById('str').innerText=temp;
      pos--;
      setTimeout(erase,speed);

    }
    else{
      j++ ;
      j = j % adj.length;
      str=adj[j];   
      document.getElementById('str').text=str;
      setTimeout(type,speed);
    }
  }