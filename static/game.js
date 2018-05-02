var fontAwesome = [];
fontAwesome.push("f0f9","f103","f100","f101","f102","f107","f104","f105","f106","f179","f187");
fontAwesome.push("f13d","f1fe","f0ab","f0a8","f01a","f190","f18e","f01b","f0a9","f0aa","f063");
fontAwesome.push("f17b","f060","f061","f062","f047","f0b2","f07e","f07d","f069","f1fa");

let game = {
    buttons: document.querySelectorAll('.card'),
    evenMove : true, // if false after move, wait for second card, if true check if cards are the same
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
        for (let i = 0; i<(game.buttons.length/2); i++) {
            let randomIndex = Math.floor(Math.random() * fontAwesome.length);
            if (images.indexOf(fontAwesome[randomIndex]) === -1) {
                images.push(fontAwesome[randomIndex]);
            }
            else {
                i--;
                continue;
            }
        }
        return images;
    }
}

game.initialize();