
document.addEventListener('DOMContentLoaded',inti) //DOMContentLoaded is Used to First Run all the HTML page after that Run the Js 
function inti()
{
    let btn= document.getElementById('btn');
let link=document.getElementById('link');
let text=document.getElementById('text');
btn.addEventListener('click',buttonClick); //click event


//We can Also write a Event Handler using arrow(=>)
link.addEventListener('click',ev=>
{
    ev.preventDefault(); //Stop actually what to do and it prints console value  
    console.log(ev.type);
}); 

text.addEventListener('input',ev=> //input event
{
  console.log(ev.type,ev.target.value);
});
text.addEventListener('change', ev=>{ //Change Event
console.log(ev.type,ev.target,ev.target.value);    
})
text.addEventListener('blur',ev=> //blur Event
{
    console.log(ev.type,ev.target);
})
function buttonClick(ev)
{
  console.log(ev.type,ev.target,ev.currentTarget);
}
}
