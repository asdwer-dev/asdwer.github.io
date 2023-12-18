/*script.js*/
document.getElementById("flagBlock").addEventListener("mousemove", function (e) {
    var hoverText = document.getElementById("hoverText");
    hoverText.style.left = e.clientX + 20 + "px"; // Позиция X текста относительно курсора
    hoverText.style.top = e.clientY + 20 + "px"; // Позиция Y текста относительно курсора
});

document.getElementById("flagBlock").addEventListener("mouseenter", function () {
    document.getElementById("hoverText").classList.add("show");
});

document.getElementById("flagBlock").addEventListener("mouseleave", function () {
    document.getElementById("hoverText").classList.remove("show");
});
