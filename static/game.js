function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var fontAwesome = ["f0f9", "f103", "f100", "f101", "f102", "f107", "f104", "f105", "f106", "f179", "f187",
    "f13d", "f1fe", "f0ab", "f0a8", "f01a", "f190", "f18e", "f01b", "f0a9", "f0aa", "f063",
    "f17b", "f060", "f061", "f062", "f047", "f0b2", "f07e", "f07d", "f069", "f1fa"];


let game = {
    buttons: document.querySelectorAll('.card'),
    evenMove: true, // if false after move, wait for second card, if true check if cards are the same
    turnCard: function (event) {
        game.evenMove = !game.evenMove;
        if (game.evenMove === true) {
            alert("This is true alert")
        }
        else {
            alert("This is false alert")
        }
    },
    initialize: function () {
        [].forEach.call(game.buttons, function (button) {
            button.addEventListener('click', game.turnCard)
            game.images = game.getImagesArray();
        })
    },
    getImagesArray: function () {
        let images = [];
        for (let i = 0; i < (game.buttons.length / 2); i++) {
            let randomIndex = Math.floor(Math.random() * fontAwesome.length);
            if (images.indexOf(fontAwesome[randomIndex]) === -1) {
                images.push(fontAwesome[randomIndex]);
            }
            else {
                i--;
                continue;
            }
        }
        images = images.concat(images);
        shuffle(images)
        return images;
    }
}

game.initialize();