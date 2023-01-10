let string = "";
// function display(value)
// {
//     console.log("Value1",value);
//     document.getElementsByClassName("input").value+=value;
//     console.log(document.getElementsByClassName("button").value);
// }
let buttons = document.querySelectorAll('.button');
// console.log("Buttons",buttons);
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
       console.log(e.target);
       string = string + e.target.innerHTML;
       document.querySelector('input').value = string;
    })
})

function ac() {
    string = "";
    console.clear();
    console.log(string);
    document.querySelector('input').value = string;
}
function equal() {
    
}