/*
var map = new Map();

map.set('name' , 'Kaustubh');

console.log(map.get('name'));

map.set('age', 25);

console.log(map.has('age'));

map.delete('name');

console.log(map.size);

//Using clear to clear all contents of the map

map.clear();
console.log(map.size);

var user = { name: 'Andrew'};

map.set(user, 'Dallas');
console.log(map.get(user));

var map1 = new Map();
map1.set(1, 'Kvin');
map1.set(2, 'sa');
map1.set(3, 'Ven');

console.log([...map1]);
console.log(map1.keys());
console.log(map1.values());
*/

var location = {name : 'Dallas'};
var secondlocation = { name: 'Houston'};
var map = new Map();
function setWeather (location, temp){

    map.set(location , temp);
    console.log(map.keys());
}

function printWeather(location){
    if(map.has(location)){
      console.log(`It's ${map.get(location)} in ${location.name}`);
    }
    else{
      console.log('No weather has been recorded');
    }
}

setWeather(location,22);
printWeather(location);
printWeather(secondlocation);
