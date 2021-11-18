
y = Math.floor((Math.random() * 99) + 1);

var count = 1;
document.getElementById("btn")
function guess() {
    
    
    let a = parseInt(document.getElementById("num").value);

    if (y === a) {
        alert(`🤝 Congratulation You Guessed the correct number in ${count} attempt!!`);
    } else if (y>a) {
        alert("Sorry 😮 !!!  try a larger number")
        count++;
    } else if (y<a) {
        alert("Sorry 😮 !!!  try a smaller number")
        count++;
    } else {
        alert("please  give a number")
    }
    
}