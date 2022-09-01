// Function in JavaScript
// DRY = Do not repeat yourself

// function avg (a, b){
    // c = (a + b)/2;
    // return c;
// }
//    function avg(a: any, b: any): boolean
// c1 = avg(4, 6);
// c2 = avg(14, 16);
// console.log(c1, c2);

// Conditionals in JavaScript

/*var age = 49;
// Single statement
if (age > 18){
    console.log('You can drink rasna water');
}
// else{
    // console.log('You can not drink rasna water');
// }

// if else Ladder
if (age > 32){
    console.log("You are not a kid");
}
else if(age >26){
    console.log("Bachhe nahi rahe");
}
else if(age >22){
    console.log("Yes Bachhe nahi rahe");
}
else if(age >18){
    console.log("18 Bachhe nahi rahe");
}
else{
    console.log("Bachhe rahe");
}
console.log("End of ladder");*/

// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         break;
//         continue;
//     }
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element);
// })
// let j = 0;
// const ac = 0;
// ac++;
// ac = ac + 1;
// Let j = 10;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }

// Do{
//     console.log(arr[j]);
//     j++;

// }while (j < arr.length);
//  myArr = ["Fan", "Camera", 34, null, true];
// Array Methods
// console.log(myArr.length);
// myArr.pop();
// myArr.push("harry")
// myArr.shift()
// const newLen = myArr.unshift("Harry");
// console.log(newLen);
// console.log(myArr);

// String Methods in Javascript
//  myLovelyString = "Himanshu is a good boy good good";
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))

// console.log(myLovelyString.slice(1,4))
// d=myLovelyString.replace("Himanshu", "Rohan");
// console.log(d,myLovelyString);

// mydate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// DOM Manipulation
// elem = document.getElementById('click');
// console.log(elem);

// elemClass = document.getElementsByClassName("container")
// console.log(elemClass);

// elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
// tn = document.getElementsByTagName('div')
// console.log(tn)
// createdElement = document.createdElement('p');
// createdElement.innerText = "This is a created para";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createdElement('b');
// createdElement2.innerText = "This is a created para";
// tn[0].replaceChild(createdElement2, createdElement);

// Selecting using Query
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

// function clicked(){
//     console.log('The button was clicked')
// window.onloaad = function(){
    // console.log('The document was loaded')

// }
// Events in JavaScript
// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("clicked on Container")
// })
// firstContainer.addEventListener('click', function(){
//     console.log("Mouse on container")
// })
//  prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// })
// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
//     console.log("Mouse down when clicked on container");
// })

// Events in javaScript
// firstContainer.addEventListener('click', function(){
//     console.log("Click hua")
// })

// Arrow Functions
// function summ(a, b){
//     return a+b;
// }
// summ = (a, b)=>{
// return a+b;
// }
// logKaro = ()=>{
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
//     console.log("I am your log")
// }
// // setTimeout and setinterval
// clr = setTimeout(logkaro, 5000);
// clr = setInterval(logkaro, 5000);
//use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

//JavaScript localStorage
// localStorage.setItem('name', 'harry')

// Json
// obj = {name: "himanshu", length: 1, a: {this: 'tha"t'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse('{"name":"Himanshu","length":1,"a":{"this":"that"}}')
// console.log(parsed);




