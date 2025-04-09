var x=1;
a();
b();
console.log(x);

function a(){
    var x=10;
    console.log(x);
}
function b(){
    c();
    var x=100;
    console.log(x);
    
}
function c(){
    var x=30;
    console.log(x);
}