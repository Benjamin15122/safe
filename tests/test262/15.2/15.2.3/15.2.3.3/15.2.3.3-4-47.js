  function testcase() 
  {
    var desc = Object.getOwnPropertyDescriptor(Array.prototype, "pop");
    if (desc.value === Array.prototype.pop && desc.writable === true && desc.enumerable === false && desc.configurable === true)
    {
      return true;
    }
  }
  {
    var __result1 = testcase();
    var __expect1 = true;
  }
  