console.log("js file linked")

//Using Variables 
var x = 5;
var x=10;
var y = 6;
var z = x + y; //z=5+10=15
console.log(z);
 


//Using Nothing
x=2;
x=3;
y=9;
z=x-y; //z=3-9=-6
console.log(z)

//Using Let
let c=2;
let d=2;
let e=c-d;//e=2-2=0
console.log(e)



//Using const
const a = 10;
const b = 120;
let f=a-b;//f=10-120=-110
console.log(f)


//Assignment Operators
var x=4;
x=x+5;
console.log(x)

//Sigle and Double quotes string
const s="John"; const S='Sri';
let q="John"; let Q='Sri';
var y="John"; var x='Sri';
console.log(s);console.log(S);console.log(Q);console.log(q)
console.log(x);console.log(y)

//one statement many values
var x="John" , y='wants' , z="100rs";
console.log(x +" "+ y +" " + z);
console.log(x);
let 
p="John" ,
 P='wants' , 
 pp="100rupees";
console.log(P + pp + p);

//Undefined
var Kavuthami;
let carName;
console.log(Kavuthami);
console.log(carName);

//Re-declare available only In variable 
var name="Kavuthami"
var name;
console.log(name); 
 

//Arthimetic
var vv = "2"+3+4; console.log(vv)
let v=2+"3"+4; console.log(v)
const V=2+3+"9"; console.log(V)
var VV="2"+3+9; console.log(VV)
let dd="John"+" "+ "gone"
console.log(dd)

//Dollar Sign
var $ = 'Hi';
let $$$ = 2;
const $myMoney = 5;
var $$=$+$myMoney
console.log($+" "+$$);

//Underscore
var _x=10;
let _100="Hi";
const _f="hiiii";
const _ff=_x+_100+_f;
console.log(_ff);


//Constant Object and Array
//Constant Array
const bikes=["Honda","KTM","Yamaha"]; //create an array
console.log(bikes);
bikes[1]="Suzuki"; //change an element
console.log(bikes);
bikes.push("Pulsar"); //add an element
console.log(bikes);

//Constant Object
const mobile={type:"samsumg",model:"F1-series",color:"blue"}//create a constant
console.log(mobile);
mobile.color="black";//change the property
console.log(mobile);
mobile.seller="Sudha";
console.log(mobile);


//Const hoisting
car="BMW";
var car;
console.log(car);


//Undefined by text box
alert (bb);
var bb = "Volvo";
