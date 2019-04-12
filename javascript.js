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






    