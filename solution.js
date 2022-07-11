
//task -1
let isDog = Boolean('');

/*if( isDog == true){
    console.log(`1.Pat ,Pat`);
}
else{
    console.log(`1.find me a dog to pat`);
}*/

console.log( isDog == true ?  `1.Pat ,Pat` :  `1.find me a dog to pat`);

console.log(`-----------------`);
//task-2

let speedLimit = 50; //km/hr
let yourSpeed = 45;

/*if(yourSpeed > speedLimit){
    console.log(`you're going too fast!'`);
}
else {
    console.log(`You're driving below the speed limit, Oma`);
}
*/

console.log( yourSpeed > speedLimit ? `you're going too fast!` : `You're driving below the speed limit, Oma`  );
console.log(`-----------------`);


//task-3

const age = 12;
/*
if( age < 16){
    console.log(`serve butter beer`);
}
else{
    console.log(`serve beer`);
}
*/

console.log(age < 16 ? `serve butter beer` : `serve beer`  );
console.log(`-----------------`);


//task-4

const isStudent ="Y";
/*
if( isStudent == "yes" || isStudent == "Yes" || isStudent== 'Y'|| isStudent == "y"){
    console.log(`Ticket costs €5,00`);
}
else{
    console.log(`Ticket costs €12,00`);
}*/

console.log( isStudent == "yes" ? `Ticket costs €5,00`: `Ticket costs €12,00` );
console.log(`-----------------`);


//task-5

const okMarie = 'cake';
/*
if( okMarie === 'cake'){
    console.log(`Let them eat cake`);
}
else{
    console.log(`oh!Brother`);
}
*/
console.log( okMarie == "cake" ? `Let them eat the cake`: `oh! Brother` );
console.log(`-----------------`);


//task-6

let num1 = 30;
num1 = 939;
num1 = 40.9;

/*if( num1 % 2 === 0 ){
    console.log(`${num1} is an even number`);
}
else{
    console.log(`${num1} is a odd number`);
}

console.log(`-----------------`);*/

console.log( num1 % 2 === 0  ? `${num1} is an even number`: `${num1} is a odd number` );