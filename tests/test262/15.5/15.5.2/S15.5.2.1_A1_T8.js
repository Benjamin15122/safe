  var __stored__Function__prototype__toString = Function.prototype.toString;
  Function.prototype.toString = (function () 
  {
    return "SHIFTED";
  });
  var __str = new String((function () 
  {
    
  }));
  Function.prototype.toString = __stored__Function__prototype__toString;
  {
    var __result1 = typeof __str !== "object";
    var __expect1 = false;
  }
  {
    var __result2 = __str.constructor !== String;
    var __expect2 = false;
  }
  {
    var __result3 = __str != "SHIFTED";
    var __expect3 = false;
  }
  