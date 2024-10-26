let userscore=0;
let compscore=0;

let choices=document.querySelectorAll(".choice");
let userScorePara= document.querySelector("#user-score");
let compScorePara= document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIndx=Math.floor(Math.random() *3);
    return options[randomIndx];
   
};

const drawGame= ()=>{
    document.getElementById("msg").innerText="Game is draw. Play again";
    document.getElementById("msg").style.backgroundColor="#0c3575";
   // console.log("Game is draw. Play again");
};

const showWinner= (userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        userScorePara.innerText=userscore;
        document.getElementById("msg").innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
         document.getElementById("msg").style.backgroundColor="green";
    //console.log("You Win");
    }else{
        compscore++;
        compScorePara.innerText=compscore;
        document.getElementById("msg").innerText=`You Lose. ${compChoice} beats your ${userChoice}`;
        document.getElementById("msg").style.backgroundColor="red";
        //console.log("You Lose");
    }
};

let playGame= (userChoice)=>{
    console.log("User Choice= ",userChoice);
    //Generate computer choice
    const compChoice= genCompChoice();
    console.log("Comp Choice= ",compChoice);

    if(userChoice===compChoice){
        //draw
       drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper, scissors
            userWin= compChoice=== "paper"?false:true;
        }else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors"?false:true;
        }else{
            //paper,rock
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin, userChoice,compChoice);
    }

};
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
       const userChoice= choice.getAttribute("id");
       playGame(userChoice);
       
    });
});

