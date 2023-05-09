document.getElementById('parent').innerHTML=("Somethingelse");
// document.getElementById("parent").style.backgroundColor=("red");
// document.getElementById("parent").style.backgroundColor=("blue");
document.getElementById('parent').style.cssText=("background-color:red; color:black; text-align:center")
// document.getElementsByClassName('parent1')[0].innerHTML=("I am prashnat");
// document.getElementsByClassName('exercise')[1].innerHTML=("18");
document.getElementsByTagName("h1")[1].style.cssText=("text-align:center; text-transform:Uppercase")
document.getElementsByTagName("h2")[1].style.cssText=("text-align:center; text-transform:Uppercase")
document.querySelector('h2').innerHTML=('I am genius')
document.querySelector('.hey').innerHTML=('Stark')
const change =document.querySelectorAll("h3")
for(i = 0; i<=change.length; i++){
    change[i].innerHTML=("I am jenny ");
}

// function myfunction(){
//     document.open();
//     document.write("<h1>Hello world<h1>")
//     document.close();}

function myfunction(){
    const myWindow = window.open();
    myWindow.document.write("<h1>Hello world")
    myWindow.document.close();
}
