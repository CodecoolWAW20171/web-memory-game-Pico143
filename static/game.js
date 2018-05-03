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


var fontAwesome = ["fa-500px", "fa-address-book", "fa-address-book-o", "fa-address-card",
    "fa-address-card-o", "fa-adjust", "fa-adn", "fa-align-center", "fa-align-justify",
    "fa-align-left", "fa-align-right", "fa-amazon", "fa-ambulance",
    "fa-american-sign-language-interpreting", "fa-anchor", "fa-android", "fa-angellist",
    "fa-angle-double-down", "fa-angle-double-left", "fa-angle-double-right", "fa-angle-double-up",
    "fa-angle-down", "fa-angle-left", "fa-angle-right", "fa-angle-up", "fa-apple", "fa-archive",
    "fa-area-chart", "fa-arrow-circle-down", "fa-arrow-circle-left", "fa-arrow-circle-o-down",
    "fa-arrow-circle-o-left", "fa-arrow-circle-o-right", "fa-arrow-circle-o-up",
    "fa-arrow-circle-right", "fa-arrow-circle-up", "fa-arrow-down", "fa-arrow-left",
    "fa-arrow-right", "fa-arrow-up", "fa-arrows", "fa-arrows-alt", "fa-arrows-h", "fa-arrows-v",
    "fa-asl-interpreting", "fa-assistive-listening-systems", "fa-asterisk", "fa-at",
    "fa-audio-description", "fa-automobile", "fa-backward", "fa-balance-scale", "fa-ban",
    "fa-bandcamp", "fa-bank", "fa-bar-chart", "fa-bar-chart-o", "fa-barcode", "fa-bars",
    "fa-bath", "fa-bathtub", "fa-battery", "fa-battery-0", "fa-battery-1", "fa-battery-2",
    "fa-battery-3", "fa-battery-4", "fa-battery-empty", "fa-battery-full", "fa-battery-half",
    "fa-battery-quarter", "fa-battery-three-quarters", "fa-bed", "fa-beer", "fa-behance",
    "fa-behance-square", "fa-bell", "fa-bell-o", "fa-bell-slash", "fa-bell-slash-o", "fa-bicycle",
    "fa-binoculars", "fa-birthday-cake", "fa-bitbucket", "fa-bitbucket-square", "fa-bitcoin",
    "fa-black-tie", "fa-blind", "fa-bluetooth", "fa-bluetooth-b", "fa-bold", "fa-bolt",
    "fa-bomb", "fa-book", "fa-bookmark", "fa-bookmark-o", "fa-braille", "fa-briefcase", "fa-btc",
    "fa-bug", "fa-building", "fa-building-o", "fa-bullhorn", "fa-bullseye", "fa-bus",
    "fa-buysellads", "fa-cab", "fa-calculator", "fa-calendar", "fa-calendar-check-o",
    "fa-calendar-minus-o", "fa-calendar-o", "fa-calendar-plus-o", "fa-calendar-times-o",
    "fa-camera", "fa-camera-retro", "fa-car", "fa-caret-down", "fa-caret-left", "fa-caret-right",
    "fa-caret-square-o-down", "fa-caret-square-o-left", "fa-caret-square-o-right", "fa-caret-square-o-up",
    "fa-caret-up", "fa-cart-arrow-down", "fa-cart-plus", "fa-cc", "fa-cc-amex", "fa-cc-diners-club",
    "fa-cc-discover", "fa-cc-jcb", "fa-cc-mastercard", "fa-cc-paypal", "fa-cc-stripe",
    "fa-cc-visa", "fa-certificate", "fa-chain", "fa-chain-broken", "fa-check", "fa-check-circle", "fa-check-circle-o",
    "a-cogs", "fa-columns", "fa-comment", "fa-comment-o", "fa-commenting", "fa-commenting-o", "fa-comments", "fa-comments-o",
    "fa-compass", "fa-compress", "fa-connectdevelop", "fa-contao", "fa-copy", "fa-copyright", "fa-creative-commons",
    "fa-credit-card", "fa-credit-card-alt", "fa-crop", "fa-crosshairs", "fa-css3", "fa-cube", "fa-cubes", "fa-cut",
    "fa-cutlery", "fa-dashboard", "fa-dashcube", "fa-database", "fa-deaf",
    "fa-deafness", "fa-dedent"]


    let game = {
        buttons: document.querySelectorAll('.card'),
        evenMove: true, // if false after move, wait for second card, if true check if cards are the same
        turnCard: function (ev) {
            game.evenMove = !game.evenMove;
            if (game.evenMove === true) {
                image = game.images[this.id-1];
                let icon = this.querySelector('i');
                if (icon.classList.contains('fa-times-rectangle')) {
                    icon.classList.remove('fa-times-rectangle');
                    icon.classList.add(image);
                }
            }
            else {
                image = game.images[this.id-1];
                let icon = this.querySelector('i');
                if (icon.classList.contains('fa-times-rectangle')) {
                    icon.classList.remove('fa-times-rectangle');
                    icon.classList.add(image);
                }
            }
        },
        initialize: function () {
            let i = 1;
            [].forEach.call(game.buttons, function (button) {
                button.addEventListener('click', game.turnCard)
                button.id = i;
                i++;

            })
            game.images = game.getImagesArray();
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