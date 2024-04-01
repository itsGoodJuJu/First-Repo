
function buttonClick() {
    let cereal = document.getElementsByTagName('body');
    let button = document.getElementById('button1');
    button.innerText = "Button was Pressed";
    button.style.backgroundColor = "green";

    let newButton = document.createElement("button");
    newButton.innerText = "Newly created button";
    cereal[0].appendChild(newButton);

    console.log(cereal);
    console.log(button);
}