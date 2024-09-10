function toggleMenu() {
    var menuImage = document.getElementById("menu2");
    if (menuImage.style.display === "none" || menuImage.style.display === "") {
        menuImage.style.display = "block";
    } else {
        menuImage.style.display = "none";
    }
}

function hideMenu() {
    var menuImage = document.getElementById("menu2");
    menuImage.style.display = "none"; // Hide the menu2 image when clicked
}
