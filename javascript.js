'use strict';


var a = '1';
if( a === '1'){
    console.log('true')
}else{
    console.log('false')
};

var item = false;
if( item != true ){
    console.log('true')
}else{
    console.log('false')
};



var message = (!item) ? 'true' : 'false';
    console.log(message);


var message = (a > 0 && a < 4) ? 'true' : 'false';
console.log(message);




var a = 7;
var b = 14;

var messageIN = (a > 3 && a < 12 || b >= 7 && b < 15) ? 'true' : 'false';
console.log(messageIN);



var month = 8;

var winter = (month <=2 && month ===12) ? 'true' : 'false';
console.log(winter);
var spring = (month >= 3 && month <=5) ? 'true' : 'false';
console.log(spring);
var summer = (month >= 6 && month <=8) ? 'true' : 'false';
console.log(summer);
var autumn = (month >= 9 && month <=11) ? 'true' : 'false';
console.log(autumn);

var numbers = 100;

for (var i = 0; i < numbers; i+=1) {
  if (i % 2 == 0) {
    console.log('numb: ' + i);
  }
}








    