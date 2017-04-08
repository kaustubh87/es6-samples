/*
var locations = [];
locations.push({
  name : 'Dallas',
  weather: 32
});

locations.push({
  name: 'Mumbai',
  weather: 43
});

for (let location of locations){
   console.log(`It's ${location.weather} in ${location.name}`);
}
*/
//Challenge

function averageGrade (...grades){
  var total = 0;
  for (let grade of grades){
     total = total + grade;
  }
  return (total/grades.length);
}

var total = averageGrade(1,44,99);
console.log(total);
