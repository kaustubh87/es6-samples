/*var chatRooms = new Set();

// Add items

chatRooms.add('Runners');
chatRooms.add('runner');
console.log(chatRooms.size);

console.log( `Does the set has Runners: ${chatRooms.has('Runners')}`);
/*chatRooms.delete('runner');
console.log(chatRooms.size);
chatRooms.clear();
*/
//To Array
/*chatRooms.add('Kvin');
console.log([...chatRooms]);

//For Each on sets

chatRooms.forEach(function(chatRoom){
  console.log(`Found Chat room: ${chatRoom}` );
});
*/

var Movie = new Set();

function addMovie(movieTitle){
  if(Movie.has(movieTitle)){
    console.log(`Error movie already exist. Cannot add ${movieTitle}`);
  }
  else {
    Movie.add(movieTitle);
    console.log(`${movieTitle} has been added`);

  }

}


addMovie('A new hope');
addMovie('District 9');
addMovie('A new hope');
