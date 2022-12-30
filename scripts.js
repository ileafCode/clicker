var button = document.getElementById("myButton");
var upgrade1 = document.getElementById("upgrade");
var upgrCounter = document.getElementById("upgrCounter");

var outText = document.getElementById("outText");

var timesClicked = 0;
var timesUpgraded = 0;
var add = 1;

var timesToClick = 50;

button.onclick = mainClicked;
upgrade1.onclick = upgradeClicked;

function upgradeClicked(clicked) {
    if (timesClicked < timesToClick) {
        alert("You need " + (timesToClick - timesClicked) + " more click(s) to get the upgrade!");
    } else {
        add += 1;
        timesClicked -= timesToClick;
        timesUpgraded += 1;
        timesToClick += 50;
        outText.innerHTML = "Clicked: " + timesClicked;
        upgrCounter.innerHTML = "Upgrades: " + (timesUpgraded + 1);
    }
}

function mainClicked(clicked) {
    timesClicked += add;
    outText.innerHTML = "Clicked: " + timesClicked;
}        
