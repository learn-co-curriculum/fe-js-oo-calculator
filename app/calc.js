function Calculator() {

  var bothAreNumbers = function(n1, n2) {
    return !(isNaN(n1) || isNaN(n2));
  };

  this.input = function(n1,op,n2) {
    if (bothAreNumbers(n1,n2)) {
      switch(op) {
        case "+": return n1 + n2; break;
        case "-": return n1 - n2; break;
        case "*": return n1 * n2; break;
        case "/": return n1 / n2; break;
        default : return "unrecognized operation!";
      }
    }
    else {
      return NaN;
    }
  };
}