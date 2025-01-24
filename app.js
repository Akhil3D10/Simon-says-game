let div1= document.querySelector(".div1");
let div2= document.querySelector(".div2");
let div3= document.querySelector(".div3");
let div4= document.querySelector(".div4");
let h3= document.querySelector("h3");

let gamestarted= false;
let level=0;
let systemseq=[];
let userseq=[];
let temp=0;

document.addEventListener('keypress', function(){
    if(gamestarted==false){
        console.log('game started');
        gamestarted=true;
        // for(let i=0; systemseq.every((element, index) => element != userseq[index]); i++ ){
        //     console.log('chech1')
        //     if(systemseq.every((element, index) => element === userseq[index])){
                levelup();
        //         console.log('check 6')
        //         userturn(level);
        //         console.log('check 7')
        //     }
        //     else{
        //         console.log('youlost');
        //         break;
        //     }
        // }
    }
    
});

function levelup(){
    userseq=[];
    level = level+1;
    console.log(level)
    // for(let i=0;i<level;i++){
        let rand= Math.ceil(Math.random()*4);
        systemseq.push(rand);
        let bbtn = document.getElementById(`${rand}`)
        blink(bbtn);
        console.log("system: ",systemseq)
    // }
    h3.innerText=`Level:${level}`;
}

function blink(btn){
    let prevcolor = btn.style.backgroundColor;
    btn.style.backgroundColor="white";
    setTimeout( () => {
                btn.style.backgroundColor = `${prevcolor}`
    },200);
}

function userblink(btn){
    let prevcolor = btn.style.backgroundColor;
    console.log(btn.style.backgroundColor)
    btn.style.backgroundColor="black";
    setTimeout( () => {
                if(btn.innerText=='1'){
                    console.log("selected div ",btn.innerText);
                    btn.style.backgroundColor = `rgb(190, 69, 115)`;
                }
                else if(btn.innerText=='2') {
                    console.log("selected div ",btn.innerText);
                    btn.style.backgroundColor = `rgb(69, 190, 190)`;
                }
                else if(btn.innerText=='3') {
                    console.log("selected div ",btn.innerText);
                    btn.style.backgroundColor = `rgb(79, 190, 69)`;
                }
                else if(btn.innerText=='4');{
                    console.log("selected div ",btn.innerText);
                    btn.style.backgroundColor = `rgb(119, 69, 190)`;
                }
               
    },200);
    userseq.push(parseInt(btn.innerText));
    console.log("user: ",userseq)
}

function playerclicks(cbtn){
    console.log('clicked');
}

let allbtns= document.querySelectorAll(".btn");
for (btns of allbtns){
    btns.addEventListener('click', function(){
        userblink(this);
        if(systemseq.every((element, index) => element === userseq[index])){
            setTimeout(levelup(), 1000)
        }
        else{
            console.log("fialed")
            h3.innerText=`wrong sequence, you failed!`;
            systemseq=[];

        }
    });
}



    