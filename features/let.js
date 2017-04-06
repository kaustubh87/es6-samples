/*var x = 0 ;
if(true){
  let x = 12;
  console.log(x);
}
console.log(x);
*/
for(let i = 0; i < 3; i++)
{

  console.log(`For loop = ${i}`);

}

//console.log(i);

function callBack(){
  let name = 'Kvin';
  return function(){
    console.log(`Hello ${name}`);
  }
}

callBack()();
