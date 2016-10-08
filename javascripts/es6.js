// console.log("es6");

// //const*
// //way to define var, cant be reassigned
// const a=8;
// console.log("a",a);
// // a=12;
// // console.log("a",a); //throws error

// //const outputDiv = $('#output');

// //let*
// //used like var, reassignable
// let b=8;
// console.log("b", b);
// b=12;
// console.log("b",b);

// //both will be 2 because hoisted
// function varTest(){
// 	var x=1;
// 	if(true){
// 		var x=2;
// 		console.log("inside x",x);
// 	}
// 	console.log("outside x",x);
// }

// //the variable changes
// function letTest(){
// 	let y=1;
// 	if(true){
// 		let y=12;
// 		console.log("inside y",y);
// 	}
// 	console.log("outside y",y);
// }

// varTest();
// letTest();

// //arrow functions
// var sum = function(){
// 	let a=1,b=2,c=3;
// 	return a + b;
// }
// console.log("hardcoded sum in ES5", sum());

// // => replaces the word function
// var sumTwo = () =>{
// 	let a=1,b=2,c=3;
// 	return a + b;
// }
// console.log("es6 arrow function", sumTwo());

// var reflect = function(value){
// 	return value;
// }
// console.log("reflect in ES5", reflect("ES5 is so yesterday"));

// var refelct2 = (value) =>{
// 	return value;
// }
// console.log("reflect in es6", refelct2("es6 is the new hotness"));

// var refelct3 = (value) => value;
// console.log("reflect in es6", refelct3("shorthand"));

// var realSum = function(num1, num2){
// 	return num1+num2;
// }
// console.log("realsum es5", realSum(2,3));

// var realSum2 = (num1, num2) => {
// 	return num1 + num2;
// }
// console.log("sum with es6", realSum2(4,5));

// //string templates*
// let m ="biteme";
// console.log("m",m);
// let r =`hello my name is ${m}`;
// console.log('r',r);

// //object literal property shorthand
// let wow = 'hey there',es6='ES6',numNum=()=>{console.log("howdy")};

// let myOldObject = {
// 	wow:wow,
// 	es6:es6,
// 	numNum:numNum
// }
// console.log('myOldObject', myOldObject);

// //if key and value are same
// let myNewObject = {
// 	wow,es6,numNum
// }
// console.log('myNewObject', myNewObject);

// //method properties
// var e5Object = {
// 	foo: function(){console.log(foo)},
// 	bar: function(){console.log(bar)}
// }
// console.log('e5Object', e5Object);

// var es6Obj = {
// 	foo(){console.log('foo')},
// 	bar(){console.log('bar')}
// }

// console.log('es6Obj', es6Obj);


















