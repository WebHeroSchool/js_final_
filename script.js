const lev = document.querySelectorAll('.level__choice');
const game = document.querySelectorAll('.button');
const games = document.querySelectorAll('.game__one');
const container = document.querySelector('.game');
let numberCards = 3;


lev.forEach(function(element) {
    element.classList.remove('level__choice-romb');
    element.addEventListener("click", function(){
      lev.forEach(function(element){
            element.classList.remove('level__choice-romb')  
                  })
        element.classList.add('level__choice-romb');
      let levelName = document.querySelector(".level__choice-romb").getAttribute("id");
      switch (levelName) {
        case 'easy':
          numberCards = 3;
         break;
    
        case 'medium':
          numberCards = 6;
        break;
  
         case 'hard':
          numberCards = 10;
        break;
       }
    })  
});



createCard = () => {
   let newCards = document.createElement('div');
   newCards.classList = 'card_back';
   container.append(newCards); 
 }

game.forEach(function(event) {
  event.classList.remove('field');
  event.addEventListener("click", function() {
      games.forEach(function (event) {
      event.classList.add('field');
    })
    for (let i = 0; i < numberCards; i++ ) {
       createCard()
      }
    })
  });





