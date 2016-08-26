var iconBars = document.getElementById("menuToggle");
var menuItem = document.getElementsByClassName("menuItem");
iconBars.addEventListener("click", function () {
    console.log(iconBars.className.toString());
    var i;
    for (i = 0; i < menuItem.length; i++) {
        if (menuItem[i].className === "menuItem") {
            menuItem[i].className += " hidden";
        }
        else {
            menuItem[i].className = "menuItem";
        }
    }
});