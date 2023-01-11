let string="";
// function display(value)
// {
//     console.log("Value1",value);
//     document.getElementsByClassName("input").value+=value;
//     console.log(document.getElementsByClassName("button").value);
// }
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
       string=string+e.target.innerHTML;
       document.querySelector('input').value=string;
    })
})

function ac() {
    string = "";
    console.clear();
    console.log(string);
    document.querySelector('input').value = string;
}
function equal() {
    let d="",h="";
    let len=string.length;
    len=len/3;
    for(let i=0;i<len;i++)
    {
         d=string.charAt(i);
         h=h+d;
        
    }
    console.log(h);
}