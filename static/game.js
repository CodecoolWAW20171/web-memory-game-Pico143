var handleClick = function (event) {
    alert("This is some alert")
};
var buttons = document.querySelectorAll('.card');
buttonCount = 0;
[].forEach.call(buttons, function (button) {
    buttonCount++;
    button.addEventListener('click', handleClick)
})

var fontAwesome = {};
fontAwesome["fa-ambulance"] = ["f0f9"];
fontAwesome["fa-anchor"] = ["f13d"];
fontAwesome["fa-android"] = ["f17b"];
fontAwesome["fa-angellist"] = ["f209"];
fontAwesome["fa-angle-double-down"] = ["f103"];
fontAwesome["fa-angle-double-left"] = ["f100"];
fontAwesome["fa-angle-double-right"] = ["f101"];
fontAwesome["fa-angle-double-up"] = ["f102"];
fontAwesome["fa-angle-down"] = ["f107"];
fontAwesome["fa-angle-left"] = ["f104"];
fontAwesome["fa-angle-right"] = ["f105"];
fontAwesome["fa-angle-up"] = ["f106"];
fontAwesome["fa-apple"] = ["f179"];
fontAwesome["fa-archive"] = ["f187"];
fontAwesome["fa-area-chart"] = ["f1fe"];
fontAwesome["fa-arrow-circle-down"] = ["f0ab"];
fontAwesome["fa-arrow-circle-left"] = ["f0a8"];
fontAwesome["fa-arrow-circle-o-down"] = ["f01a"];
fontAwesome["fa-arrow-circle-o-left"] = ["f190"];
fontAwesome["fa-arrow-circle-o-right"] = ["f18e"];
fontAwesome["fa-arrow-circle-o-up"] = ["f01b"];
fontAwesome["fa-arrow-circle-right"] = ["f0a9"];
fontAwesome["fa-arrow-circle-up"] = ["f0aa"];
fontAwesome["fa-arrow-down"] = ["f063"];
fontAwesome["fa-arrow-left"] = ["f060"];
fontAwesome["fa-arrow-right"] = ["f061"];
fontAwesome["fa-arrow-up"] = ["f062"];
fontAwesome["fa-arrows"] = ["f047"];
fontAwesome["fa-arrows-alt"] = ["f0b2"];
fontAwesome["fa-arrows-h"] = ["f07e"];
fontAwesome["fa-arrows-v"] = ["f07d"];
fontAwesome["fa-asterisk"] = ["f069"];
fontAwesome["fa-at"] = ["f1fa"];

for (let i = 0; i<(buttonCount/2); i++)