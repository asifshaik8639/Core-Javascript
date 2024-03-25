

var Parent = function(){
    this.yellAtKid = function(){
      console.log('Somebody gonna get a hurt real bad!');
    };
  };
  console.time("myTimer");
  var dads = [];
  for(var i=0; i<=10000000; i++){
    dads.push(new Parent());
  }
  console.timeEnd("myTimer");

var Parent1 = function(){
};

Parent1.prototype.yellAtKid = function(){
  console.log('Somebody gonna get a hurt real bad!');
};

console.time('myTimer2');
var dads = [];
for(var i=0; i<=10000000; i++){
  dads.push(new Parent1());
}
console.timeEnd('myTimer2');