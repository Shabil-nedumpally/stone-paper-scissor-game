
var cimage = document.getElementById('cd')
var image = document.getElementById('ud')
var userscore = document.getElementById('userScore')
var computerscore = document.getElementById('computerScore')
var user = 0;
var cpu = 0;
var player;
var win = document.getElementById('winlose')
var remove = document.getElementById('stone')
var remove1=document.getElementById('stone1')
var remove2=document.getElementById('stone2')

const sound = new Audio('HinaCC0_011_Fallen_leaves.mp3')
sound.play();
sound.loop = true;
const winsound= new Audio('mixkit-video-game-win-2016.wav')
const losesound= new Audio('mixkit-retro-arcade-lose-2027.wav')

function clicK(){
    var random = Math.floor(Math.random() * 3) + 1;
    var userboard = document.getElementById('userboard')
    var computerboard = document.getElementById('computerboard')
    
    
   
  
    
    
    
    if(random==1  ){
        cimage.innerHTML='<img src="https://media.istockphoto.com/photos/stone-pebble-gray-picture-id1288973456?b=1&k=20&m=1288973456&s=170667a&w=0&h=GBGgp4yrZv4ooDBws8yHF24sJ3rkEpObYsBWpVNKFT8=">'

    }else if(random==2  ){
        cimage.innerHTML='<img src="https://images.unsplash.com/photo-1603484477859-abe6a73f9366?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80">'
    }else{
        cimage.innerHTML='<img src="https://www.ikea.com/in/en/images/products/sy-scissors__0112301_pe263788_s5.jpg?f=s">'
    }


    if(random==1 && player==1 ){
        
        userscore.innerHTML='tie'
        computerscore.innerHTML='tie'
       
     }else if( random==2 && player==1 ){
        cpu++
        computerscore.innerHTML=' cpu scored +1 '
        userscore.innerHTML='  '
        computerboard.innerHTML='cpu score :'+ cpu;

     }else if ( random ==3 && player==1) {
        user++
        userscore.innerHTML='You scored +1'
        computerscore.innerHTML='  '
        userboard.innerHTML="user score : "+ user

        
         

     }

     // player 2

     if(random==1 && player==2 ){
        user++
        userscore.innerHTML='You scored +1'
        computerscore.innerHTML='  '
        userboard.innerHTML="user score : "+ user
        
        
       
     }else if( random==2 && player==2 ){
        userscore.innerHTML='tie'
        computerscore.innerHTML='tie'

     }else if ( random ==3 && player==2) {
        cpu++
        computerscore.innerHTML=' cpu scored +1 '
        userscore.innerHTML='  '
        computerboard.innerHTML='cpu score :'+ cpu;
        
     }
        // player 3

        if(random==1 && player==3 ){
           cpu++
            computerscore.innerHTML=' cpu scored +1 '
            userscore.innerHTML='  '
            computerboard.innerHTML='cpu score :'+ cpu;
           

            
            
            
           
         }else if( random==2 && player==3 ){
            user++
            userscore.innerHTML='You scored +1'
            computerscore.innerHTML='  '
            userboard.innerHTML="user score : "+ user
    
         }else if ( random ==3 && player==3) {
            userscore.innerHTML='tie'
            computerscore.innerHTML='tie'
           




       
         

     }
   //  var win = getElementById('winlose')


     // win

     if(user==5){
        win.innerHTML ='Congratulation  you win 🎉'
         winsound.play();
         remove.style.display="none"
         remove1.style.display="none"
         remove2.style.display="none"
         
     }

     if(cpu==5){
      win.innerHTML ='sorry you lose  ! please click retry button'
       losesound.play();
       remove.style.display="none"
       remove1.style.display="none"
       remove2.style.display="none"
   }
    


    

   


    
}





// user side

function stoneClick(){

    player=1
     image.innerHTML='<img src="https://media.istockphoto.com/photos/stone-pebble-gray-picture-id1288973456?b=1&k=20&m=1288973456&s=170667a&w=0&h=GBGgp4yrZv4ooDBws8yHF24sJ3rkEpObYsBWpVNKFT8=">'
    
     
     clicK();
    
     
    


    
}
function paperClick(){

    player=2
    image.innerHTML='<img src="https://images.unsplash.com/photo-1603484477859-abe6a73f9366?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80">'
    
    clicK()
}
function scissorClick(){

    player=3
    image.innerHTML='<img src="https://www.ikea.com/in/en/images/products/sy-scissors__0112301_pe263788_s5.jpg?f=s">'
    
    clicK()


    
}
function resetClick(){

    document.location.reload();
   
}






