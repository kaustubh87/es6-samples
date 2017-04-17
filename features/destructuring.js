/*
var array = ['Kvin','second', 'third'];
//Destructuring is pulling out values from arrays and objects

var [a, ,c] = array;
console.log(a,c);

*/
var todo = {
  description : 'Watch new es6 section',
  completed: false
}
/*
var {description , completed} = todo;
console.log(description);
console.log(completed);
*/

function getTodoStatus ({completed}) {
    if(typeof completed === 'boolean'){
      return [`Todo is ${todo.completed ? ' ' : 'not'} completed.`];
    }
    else {
      return[undefined, {err: 'INVALID_TODO_ITEM'}];

    }
}

var [response, error] = getTodoStatus(todo);
if(error){
  console.log(error.error);
}
else {
  console.log(response);
}
