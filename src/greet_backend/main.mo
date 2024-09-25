import Debug "mo:base/Debug";

actor  DBank{
  var  currentValue = 200;
  currentValue :=300;
  let id  =234 ;  // behaviour like  constant
  Debug.print("hello");
  Debug.print(debug_show(currentValue));
  Debug.print(debug_show(id));
  
}