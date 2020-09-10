var mark = {
    fullName: 'mark',
    mass: 78,
    height: 1.69,
    BMImark: function() { return this.mass/(this.height * this.height); }
    };
var john = {
    fullName: 'john',
    mass: 92,
    height:1.95,
    BMIjohn: function() { return this.mass / (this.height * this.height)}
}

console.log(mark.BMImark());
console.log(john.BMIjohn());
var BMImark = mark.BMImark();
var BMIjohn = john.BMIjohn();
if (BMImark>BMIjohn) {console.log(mark.fullName  + ' is ' + 'heavier');}
else if (BMImark<BMIjohn) {console.log(john.fullName + ' is ' + ' heavier' )}
console.log(mark,john)



var john = ['john', 'smith', 1990, 'designer', false, 'blue']

console.log(john.length)
for (var i = 5; i >= 0; i--){
    console.log(i);
}




function tip(bill) {
    var percentage;
    if (bill<50){percentage=0.2;} else if (bill>=50&& bill<20){percentage=0.15;}else { percentage=0.1;};
    return percentage * bill
}
console.log(tip(100))



/*attempting to manipulate certain elements with DOM*/
var TimeOut = setInterval(changeword, 5000)

function changeword() {
    document.querySelector(".CAPS").textContent= "don't mind anyone!"
};
window.onload = function() { alert('you are about to get fucked up!')};
//
//function chance() { alert( 'so you have chosen death?')};

setTimeout(function(){ clearInterval(TimeOut);},7000)


/*var choice = document.getElementsByClassName('foodchoice').value;

console.log(choice)*/
/*var choice = function(){ var choice = document.getElementsByClassName('foodchoice').value; console.log(choice)}

document.addEventListener('keypress',function(key) { if (key.keycode===13 || key.which===13){

choice()}} )

window.x =1;

console.log(x)*/

/*async function coinDetails() {
  var where= prompt ('where are you?')  
   console.log('loading...')
    try {
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api//location/search/?query=${where}`);
        const allData = await result.json();
        console.log(allData);
    }catch(error) {
        console.log(`There was a problem: ${error}`);
    }
}
locationDetails;*/

fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2487956/') 
.then(result=>{return result.json()})
.then(data=>{console.log(data);})
.catch(error=>console.log('error fetching API'))