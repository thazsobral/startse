function changeBackgroundColor() {
    const menu = document.querySelector("#select-backgroud-color");
    const color = menu.options[menu.selectedIndex].value;
    
    document.body.style.background = color; 
}

function changeTextColor() {
    const menu = document.querySelector("#select-text-color");
    const color = menu.options[menu.selectedIndex].value;

    const texts = document.getElementsByClassName("text");
    for (const text of texts) {
        text.style.color = color;
    }
}