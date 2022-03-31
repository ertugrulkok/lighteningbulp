

const onButton = document.getElementById("switch_on"); 
const offButton = document.getElementById("switch_off"); 
const darkBulb = document.getElementById("dark_bulb"); 
const brightBulb = document.getElementById("bright_bulb"); 
const title = document.getElementById("text"); 






function switch_on () {
    brightBulb.style.opacity = 0; 
    darkBulb.style.opacity = 1; 
    document.body.style.backgroundColor = "black";
    title.style.color = "white";  
    onButton.style.backgroundColor = "rgb(97, 0, 0)"
    offButton.style.backgroundColor = "rgb(0, 130, 190)"
    onButton.disabled = true; 
    offButton.disabled = false;
}

  


function switch_off () {
    darkBulb.style.opacity = 0; 
    brightBulb.style.opacity = 1; 
    document.body.style.backgroundColor = "white"; 
    title.style.color = "black";
    offButton.style.backgroundColor = "rgb(97, 0, 0)" 
    onButton.style.backgroundColor = "orangered"; 
    offButton.disabled = true; 
    onButton.disabled = false; 
}

resetButton.reset(); 
