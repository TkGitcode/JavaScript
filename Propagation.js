//Bubbling and Propagation

// Syntax : element.addEventListener(type,function,useCapture(boolean));

let main=document.getElementById('m');
let para=document.getElementById('p');
let spam=document.getElementById('s');
let div=document.getElementById('d');
let goldHiglight = (ev)=>
{
   let target=ev.currentTarget;
   ev.stopPropagation(); //Will Not Travel to Parent Class
   target.className = 'gold';
   reset(target)
}

let reset = (element)=>
{
    setTimeout(()=>
    {
    element.className='';
    },1000)
}
div.addEventListener('click',ev=>
{
    console.log(ev.type);
    ev.stopImmediatePropagation(); //Not Work in same Event and Will Not Execute Other Parent Event 
},true); //When i Give a True,Then it will not go do further event in child class



[main,div,para,spam].forEach(element => {
    element.addEventListener('click',goldHiglight);
});