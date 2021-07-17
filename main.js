function rpsGame(uchoose){
    console.log(uchoose);
    var humchoice,botchoice;
    humchoice=uchoose.id;
    //console.log(humchoice);
    botchoice=numbertoChoice(rand());
    console.log('you '+botchoice);
    results = decideWinner(humchoice,botchoice);
    console.log(results);
    message=finalMessage(results);
    console.log(message);
    rpsFrontEnd(uchoose.id,botchoice,message);

}
function rand(){
    return Math.floor(Math.random()*3);
}
function numbertoChoice(number){
    return ['ROCK','PAPER','SCISSORS'][number];
}
function decideWinner(uchoose,comchoice){
    var database = {
        'ROCK':{'SCISSORS':1,'ROCK':0.5,'PAPER':0},
        'PAPER':{'ROCK':1,'PAPER':0.5,'SCISSORS':0},
        'SCISSORS':{'PAPER':1,'SCISSORS':0.5,'ROCK':0}

    };
    var urScore = database[uchoose][comchoice];
    var comScore = database[comchoice][uchoose];

    return [urScore,comScore];

}
function finalMessage([urScore,comScore]){
    if(urScore==1){
        return {'message':'You Won!','color':'green'};
    }
    else if(urScore==0.5){
        return {'message':'Its a Tie','color':'yellow'};
    }
    else{
        return {'message':'You Lost','color':'red'};
    }
}
function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    var imgDatabase={
        'ROCK':document.getElementById('ROCK').src, 
        'PAPER':document.getElementById('PAPER').src,
        'SCISSORS':document.getElementById('SCISSORS').src
    };
    document.getElementById('ROCK').remove();
    document.getElementById('SCISSORS').remove();
    document.getElementById('PAPER').remove();
    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');

    humanDiv.innerHTML="<img src='"+imgDatabase[humanImageChoice]+"'height=150 width=150 style='box-shadow:0px 10px 50px rgb(223, 9, 51);'>"
    messageDiv.innerHTML="<h1 style ='color:"+finalMessage['color']+";font-size:60px ;padding:30px ;'>"+finalMessage['message']+"</h1>"
    botDiv.innerHTML="<img src='"+imgDatabase[botImageChoice]+"'height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,223,1);'>"

    document.getElementById('flex-box1').appendChild(humanDiv);
    document.getElementById('flex-box1').appendChild(messageDiv);

    document.getElementById('flex-box1').appendChild(botDiv);
    
    
    
    

}