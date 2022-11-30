clearPropertiesChild();

const addChieldButton = document.getElementById("add-child-button");
const applyParentButton = document.getElementById("apply-parent-button");
const whiteBoard = document.getElementById("flex-container");

addChieldButton.addEventListener("click", function(e) {
    e.preventDefault();

    let [width, height, order, flexGrow, flexShrink, flexBasis, selectAlignSelf] = getValuesChild();

    let div = document.createElement("div");

    div.innerText = order;

    div.style.width = width !== null ? width : "100px";
    div.style.height = height !== null ? height : "100px";
    div.style.order = order !== 0 ? order : 0;
    div.style.flexGrow = flexGrow !== 0 ? flexGrow : 0;
    div.style.flexGrow = flexShrink !== 1 ? flexGrow : 1;
    div.style.flexBasis = flexBasis !== null ? flexBasis : "flex-start";
    div.style.alignSelf = selectAlignSelf;

    whiteBoard.appendChild(div);

    clearPropertiesChild();
});

applyParentButton.addEventListener("click", function(e) {
    e.preventDefault();

    let [flexDirection, flexWrap, justifyContent, alignItems, alignContent, rowGap, columnGap] = getValuesParent();

    whiteBoard.style.flexDirection = flexDirection !== "row" ? flexDirection : "row";
    whiteBoard.style.flexWrap = flexWrap !== "no-wrap" ? flexWrap : "no-wrap";
    whiteBoard.style.justifyContent = justifyContent !== "flex-start" ? justifyContent : "flex-start";
    whiteBoard.style.alignItems = alignItems !== "flex-start" ? alignItems : "flex-start";
    whiteBoard.style.alignContent = alignContent !== "flex-start" ? alignContent : "flex-start";
    whiteBoard.style.rowGap = rowGap !== "" ? rowGap : "normal";
    whiteBoard.style.columnGap = columnGap !== "" ? columnGap : "normal";

    clearPropertiesParent();
});

function clearPropertiesChild() {
    document.getElementById("div-width").value = "100px";
    document.getElementById("div-height").value = "100px";
    document.getElementById("div-order").value = 0;
    document.getElementById("div-flex-grow").value = 1;
    document.getElementById("div-flex-shrink").value = 1;
    document.getElementById("div-flex-basis").value = "auto";
    document.getElementById("align-self-choice").value = "flex-start";
};

function getValuesChild() {
    let width = document.getElementById("div-width").value;
    let height = document.getElementById("div-height").value;
    let order = document.getElementById("div-order").value;
    let flexGrow = document.getElementById("div-flex-grow").value;
    let flexShrink = document.getElementById("div-flex-shrink").value;
    let flexBasis = document.getElementById("div-flex-basis").value;
    let selectAlignSelf = document.getElementById("align-self-choice").value;
    
    return [width, height, order, flexGrow, flexShrink, flexBasis, selectAlignSelf];
};

function clearPropertiesParent() {
    document.getElementById("flex-direction-choice").value = "row";
    document.getElementById("flex-wrap-choice").value = "no-wrap";
    document.getElementById("justify-content-choice").value = "flex-start";
    document.getElementById("align-items-choice").value = "flex-start";
    document.getElementById("align-content-choice").value = "flex-start";
    document.getElementById("row-gap-choice").value = "";
    document.getElementById("column-gap-choice").value = "";
}

function getValuesParent() {
    let flexDirection = document.getElementById("flex-direction-choice").value;
    let flexWrap = document.getElementById("flex-wrap-choice").value;
    let justifyContent = document.getElementById("justify-content-choice").value;
    let alignItems = document.getElementById("align-items-choice").value;
    let alignContent = document.getElementById("align-content-choice").value;
    let rowGap = document.getElementById("row-gap-choice").value;
    let columnGap = document.getElementById("column-gap-choice").value;

    return [flexDirection, flexWrap, justifyContent, alignItems, alignContent, rowGap, columnGap];
}
