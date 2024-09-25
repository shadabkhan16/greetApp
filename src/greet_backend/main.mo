import Debug "mo:base/Debug";

actor  greet{
  var  currentValue = 200;
  currentValue :=300;
  // let id  =234 ;  // behaviour like  constant
  // let string = "Shadab khan ";
  // Debug.print("hello");
  // Debug.print(debug_show(currentValue));
  // Debug.print(debug_show(id));
  // Debug.print(string)
   public func topUp() {
    currentValue +=5 ;
    Debug.print(debug_show (currentValue));
    
  };
  // toUp();

  
}