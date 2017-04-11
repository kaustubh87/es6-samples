var chatRooms = new Set();

// Add items

chatRooms.add('Runners');
chatRooms.add('runner');
console.log(chatRooms.size);

console.log( `Does the set has Runners: ${chatRooms.has('Runners')}`);
chatRooms.delete('runner');
console.log(chatRooms.size);
chatRooms.clear();
