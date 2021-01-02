const link = document.querySelector("#link");
const button = document.querySelectorAll(".button")

link.addEventListener("click", function () {
});

for(let pressedButton of button) {
    pressedButton.addEventListener("click", function () {
        console.log('button clicked');
    });
}