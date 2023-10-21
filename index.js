
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
function noList(){
    let numberOfTasks = document.querySelector("ul").innerHTML;
    if(numberOfTasks == ''){
        document.querySelector("ul").innerHTML = "<p>Things you need to do</p>";
    }
    else{
        document.querySelector("p").style.visibility = "hidden";
    }
}
function addToList() {
    var taskValue = document.querySelector(".newTask").value;
    if(taskValue == ''){
        
    }
    else{
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    // let delBtn = document.createElement("span");
    // delBtn.setAttribute("class", "deleteButton");
    // delBtn.innerHTML = "\u00d7";
    li.appendChild(document.createTextNode(taskValue));
    li.setAttribute("onclick", "taskDone();");
    // li.appendChild(delBtn);
    ul.appendChild(li);
    document.querySelector(".newTask").value = '';
    document.querySelector(".newTask").placeholder = "Add another task";
    noList();
    }
    
  }
  
placeholderRandom(randomNumber(6)); 
noList();

var enterDown = document.getElementById("submitBtn");
enterDown.addEventListener("keydown", function(event){
    if(event.code == "Enter"){
        addToList();
    }
})

function taskDone(){
    document.querySelector("li").classList.add("del");
}

