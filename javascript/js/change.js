window.onload = function () {
    var heading=document.querySelector("#head");
    heading.onclick = function () {
        heading.style.color="red";
        heading.style.border="3px solid blue";
        heading.style.background="yellow";
    }
}