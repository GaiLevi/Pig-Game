/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



var scores, roundScore, activePlayer, dice, gamePlaying, x, prevDice,prevDice0, secondDice;

init();

///// Roll button /////

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        
 //random number
    var dice = Math.floor(Math.random() * 6) + 1;
    var secondDice = Math.floor(Math.random() * 6) + 1;
         //if the dice roll 2 '6' in a row
            if ((dice === 6 && prevDice === 6)||(secondDice === 6 && prevDice0 === 6)) {    
        scores[activePlayer] = 0;
        document.getElementById('score-' + activePlayer).textContent = '0';
        prevDice = 0;
        prevDice0 = 0;
        nextPlayer();} 
        
        else {
 //display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';    
    var diceDOM0 = document.querySelector('.dice0');
    diceDOM0.style.display = 'block';
    diceDOM0.src = 'dice-' + secondDice + '.png';  
 //update the round score if the number is NOT 1.
    if (dice > 1 && secondDice > 1){
        //ADD score
        roundScore += dice;
        roundScore += secondDice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //next player turn. 
nextPlayer();
    } 
    prevDice = dice;
    prevDice0 = secondDice;         }
    }  
}  );
 

///// Hold button //////

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying) {
    // ADD curent score to global score
    scores[activePlayer] += roundScore;
    
    
    //update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    //Check if player won the game
    if (scores[activePlayer] >= x){
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice0').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else{
        //next player
        nextPlayer();
    } }
});

///// new game button

document.querySelector('.btn-new').addEventListener('click', init); ///אין צורך בסוגריים נוספים שמפעילים את הפונקיה בגלל האיוונט ליסנר


function nextPlayer() {
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // if/else statement ?=if :=else
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice0').style.display = 'none';
};

function init() {
x = prompt('Set the winning score.');
scores = [0,0];
roundScore = 0;
activePlayer = 0;
prevDice = 0;
prevDice0 = 0;
gamePlaying = true;
document.querySelector('.dice').style.display = 'none';
document.querySelector('.dice0').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'player 1';
document.getElementById('name-1').textContent = 'player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

};



//dice = Math.floor(Math.random() * 6) + 1;
//document.querySelector('#current-' + activePlayer).textContent = dice;

    ///// second dice///
 /*       var secondDice = Math.floor(Math.random() * 6) + 1;
         //if the dice roll 2 '6' in a row
            if (secondDice === 6 && prevDice0 === 6){    
        scores[activePlayer] = 0;
        document.getElementById('score-' + activePlayer).textContent = '0';
        prevDice0 = 0;
        nextPlayer();} 
        
        else { prevDice0 = secondDice;
 //display the result
    var diceDOM0 = document.querySelector('.dice0');
    diceDOM0.style.display = 'block';
    diceDOM0.src = 'dice-' + secondDice + '.png';    
 //update the round score if the number is NOT 1.
    if (secondDice > 1){
        //ADD score
        roundScore += secondDice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //next player turn. 
nextPlayer();
    }   }*/
    /////

// HTML methhod
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';