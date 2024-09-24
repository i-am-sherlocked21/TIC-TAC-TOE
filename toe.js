let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let msgcon=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newb=document.querySelector("#new-btn");
let turnO=true; //for O turn ,if false then X turn

const   win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];





boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked"); 
        if(turnO){
             box.innerText="O";
             turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const show= (winner) =>{
    msg.innerText=`congractualtions , winner is ${winner}`;
    msgcon.classList.remove("hide");
    disbalebox();
};

const disbalebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enabalebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";  
    }

};

const checkwinner=()=>{
for(let i of win){
    let pos1=boxes[i[0]].innerText;
    let pos2=boxes[i[1]].innerText;
    let pos3=boxes[i[2]].innerText;

    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2  && pos1===pos3){
            console.log("winner");
            

            show(pos1);

        }
    }
}
};

const resetgame= ()=>{
    turnO=true;
    enabalebox();
    msgcon.classList.add("hide");

};

newb.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);