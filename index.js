
function randomNumber(number){
    var number = Math.floor(Math.random() * number) + 1;
    return number;
}
function placeholderRandom(number){
    switch (number) {
        case 1:
            document.querySelector(".newTask").placeholder = "Walk the dog";
            break;
        case 2:
            document.querySelector(".newTask").placeholder = "Code";
            break;
        case 3:
            document.querySelector(".newTask").placeholder = "Go out";
            break;
        case 4:
            document.querySelector(".newTask").placeholder = "Call Mom";
            break;
        case 5:
            document.querySelector(".newTask").placeholder = "Groceries";
            break;
        case 6:
            document.querySelector(".newTask").placeholder = "Study";
            break;
        default:
            document.querySelector(".newTask").placeholder = "Walk the dog";
            break;
    }
}
placeholderRandom(randomNumber(6)); 
