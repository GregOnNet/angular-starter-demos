// Constructor Functions
function Bahnhof(gleise, zuege) {

  this.gleise = gleise;
  this.zuege   = zuege;

  this.print = function () {
    console.warn(this.gleise, this.zuege);
  };

}

var bahnhof = new Bahnhof(23, 0);
    bahnhof.print();

// Factory Functions
var fabrik = function () {

  var gleiseCount;
  var zuegeCount;

  // Objektliteral
  return {
    init  : init,
    print : print
  };

  function init(gleise, zuege) {
    gleiseCount = gleise;
    zuegeCount  = zuege;
  }

  function print() {
    console.warn(gleiseCount, zuegeCount);
  }
};

var instance = fabrik();

instance.init(543, 23);
instance.print();
