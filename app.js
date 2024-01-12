class Casino {
    constructor(name, isFakeCoin){
        this.name = name;
        this.timesPlayed = 0;
        this.isFakeCoin = isFakeCoin;
    }
  
    playGame(betAmount){
      let bet = betAmount;
      this.timesPlayed += 1;
      if ( Math.random() <= 0.5 || this.isFakeCoin === true) {
          console.log ( this.name + ' ' + 'won!')
      }else{
          console.log ( 'You won' + ' ' + bet * (this.timesPlayed + 1) + '!')
      }
    }

    rollDie(die){
        let casinoDie = Math.floor(Math.random()*100);
        let playerDie = die;
        this.timesPlayed += 1;
        if(casinoDie >= playerDie || this.isFakeCoin === true){
          console.log(this.name + ' ' + 'won!')
        }else{
          console.log('You won' + ' ' + playerDie * (this.timesPlayed + 1) + '!')
        }
    }
  };
  
  // TESTS
  // const myCasino = new Casino("HackerU Casino");
  // myCasino.playGame(5);
  // myCasino.playGame(15);
  // myCasino.playGame(25);
  // myCasino.playGame(35);

// BONUS TESTS

// const myBonusCasino = new Casino("HackerU Bonus Casino", true);
// console.log(myBonusCasino);
// myBonusCasino.playGame(5);
// myBonusCasino.playGame(15);
// myBonusCasino.playGame(25);
// myBonusCasino.playGame(35);


// Extra BONUS TESTS

const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);

