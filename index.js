
    let clickk= document.getElementsByTagName("button")
    let turn='X',v=[0,1,2,3,4,5,6,7,8,9],ok=0,full=0;
    let reset=document.getElementById('res');
//Reset button
    reset.addEventListener('click',function(){
        turn='X',v=[0,1,2,3,4,5,6,7,8,9],ok=0,full=0;
        for(let j=0;j<=clickk.length-1;j++)
        {
            clickk[j].innerHTML='';
        }
        document.getElementById('result').innerHTML='';
    })
//Click trigger and displaying the winner
    for(let i=0;i<=clickk.length-1;i++){
            clickk[i].addEventListener('click',function(){
            //Counting the 'x' and '0' placed in table
                full++  
            if(v[i]!=turn && clickk[i].className!='res'){
                if(turn=='X')
                { clickk[i].innerHTML=turn;
                    turn='o';
                }
                else if(turn=='o'){
                clickk[i].innerHTML=turn;
                turn='X';
                }
                v[i]=turn;
                
            }

        if(((v[0]===v[1] && v[1]===v[2]) || (v[0]===v[3] && v[3]===v[6])||(v[0]===v[4] && v[4]===v[8])||(v[1]===v[4] && v[4]===v[7])|| (v[2]===v[5] && v[5]===v[8])||(v[3]===v[4] && v[4]===v[5])||(v[6]===v[7] && v[7]===v[8])||(v[2]===v[4] && v[4]===v[6])) && ok===0){
            ok=1;
            
            if(turn==='o')
                document.getElementById('result').innerHTML='Player 1 won🎉';
            else 
                document.getElementById('result').innerHTML='Player 2 won🎉';
            
        }
        else if(full===9 && ok===0)
        document.getElementById('result').innerHTML='Draw⚔️';


         })
   

    }


