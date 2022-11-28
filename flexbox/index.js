const addChieldButton = document.getElementById("add-child-button");
const whiteBoard = document.getElementById("flex-container");

addChieldButton.addEventListener("click", function(e) {
    e.preventDefault();
    let width = document.getElementById("div-width").value;
    let height = document.getElementById("div-height").value;
    let order = document.getElementById("div-order").value;
    let flexGrow = document.getElementById("div-flex-grow").value;
    let flexShrink = document.getElementById("div-flex-shrink").value;
    let flexBasis = document.getElementById("div-flex-basis").value;
    let selectAlignSelf = document.getElementById("align-self-choice").value;

    let div = document.createElement("div");

    div.innerText = order;

    div.style.width = width !== null ? width : "100px";
    div.style.height = height !== null ? height : "100px";
    div.style.order = order !== 0 ? order : 0;
    div.style.flexGrow = flexGrow !== 0 ? flexGrow : 0;
    div.style.flexGrow = flexShrink !== 1 ? flexGrow : 1;
    div.style.flexBasis = flexBasis !== null ? flexBasis : "auto";
    div.style.alignSelf = selectAlignSelf;

    whiteBoard.appendChild(div);
});