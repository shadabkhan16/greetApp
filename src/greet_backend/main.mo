import Debug "mo:base/Debug";
import Nat "mo:base/Nat";

actor  greet{
  var  currentValue = 200;
  // let id  =234 ;  // behaviour like  constant
  // let string = "Shadab khan ";
  // Debug.print("hello");
  // Debug.print(debug_show(currentValue));
  // Debug.print(debug_show(id));
  // Debug.print(string)
   public func topUp(amount : Nat) {
    currentValue +=amount ;
    Debug.print(debug_show (currentValue));
    
  };
  // toUp();

  public func withdraw(amount: Nat){
    currentValue -=amount;
    Debug.print(debug_show (currentValue));
  }

  
}