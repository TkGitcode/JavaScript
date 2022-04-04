document.querySelector('main').addEventListener('click',clicked)
document.querySelector('div').addEventListener('click',clicked)

//querySelector is call the html(class,id,symentric) value directly

function clicked(ev)
{
    console.log('The Target Value is ',ev.target.tagName,'The Current Target value is ',ev.currentTarget.tagName);
}