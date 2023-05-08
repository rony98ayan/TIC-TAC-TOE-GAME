let b=document.getElementsByClassName('box');
console.log(b);
let turn="X";
let gameOver=false;
 const changeTurn=()=>
 {
    if(turn=="X")
    {
        return "O";
    }
    else 
    return "X";
 }

 const winGame=()=>
 {
    const boxtext=document.getElementsByClassName('box');
     let m= [
         [0,1,2],
         [3,4,5],
         [6,7,8],
         [0,3,6],
         [1,4,7],
         [2,5,8],
         [0,4,8],
         [2,4,6]
     ]
     if(gameOver==false)
     {
  m.forEach(element => {
     if((boxtext[element[0]].innerHTML==boxtext[element[1]].innerHTML) && (boxtext[element[1]].innerHTML==boxtext[element[2]].innerHTML) && (boxtext[element[0]].innerHTML!=''))

     {
        document.getElementById('info').innerHTML=boxtext[element[0]].innerHTML +' '+ 'is'+' '+ 'won';
        gameOver=true;
     }
 })
}
 }   

 for(let i=0;i<b.length;i++)
{
    
    b[i].addEventListener('click', ()=>{
        
        if(b[i].innerHTML=='')
        {
        b[i].innerHTML=turn;

        turn=changeTurn();
        winGame();
         if(gameOver==false)
         {
            document.getElementById('info').innerHTML= "Turn for" + turn;            
         }
         else
         {
            
            document.getElementsByTagName('img')[0].style.width='200px';

         
         }
         
        }
    })
    
}
          let button=document.getElementById('btn');
          button.addEventListener('click' , ()=>{
            for(let i=0;i<b.length;i++)
            {
                b[i].innerHTML='';
            }  
            turn='X';       
            
           
            document.getElementById('info').innerHTML= "Turn for" + turn; 
            document.getElementsByTagName('img')[0].style.width='0px';
            gameOver=false;
          })
         
