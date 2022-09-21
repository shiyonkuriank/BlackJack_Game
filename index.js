import './index.css';
(function (w) {
  let messageEl = document.getElementById('message-el');
  let cards = [getrandomcard(), getrandomcard()];
  let isAlive = false;
  let blackJack = false;
  let sumEl = document.getElementById('sum-el');
  let cardEl = document.querySelector('#card-el');
  let playerEl = document.querySelector('#player-el');

  let player = {
    name: 'Shiyon',
    chips: 145,
  };

  playerEl.textContent = player.name + ' : $' + player.chips;

  function startgame() {
    isAlive = true;
    rendergame();
  }

  function getrandomcard() {
    let num = Math.floor(Math.random() * 13 + 1);
    if (num === 1) {
      return 11;
    } else if (num > 11) {
      return 10;
    } else {
      return num;
    }
  }

  function rendergame() {
    let sum = 0;
    cardEl.textContent = 'Card: ';
    for (let i = 0; i < cards.length; i++) {
      sum += cards[i];
      cardEl.textContent += cards[i] + ' ';
    }
    if (sum <= 20) {
      messageEl.textContent = 'Do you want to draw a new card?';
    } else if (sum === 21) {
      messageEl.textContent = "You 've hot a blackjack";
      blackJack = true;
    } else {
      messageEl.textContent = "You 're out of the game ";
      isAlive = false;
    }

    sumEl.textContent = 'Sum: ' + sum;
  }

  function newcard() {
    if (isAlive == true && blackJack == false) {
      let card = getrandomcard();
      cards.push(card);
      rendergame();
    }
  }
  w.startgame = startgame;
  w.newcard = newcard;
  w.rendergame = rendergame;
})(window);
