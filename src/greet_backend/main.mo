import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Int "mo:base/Int";

actor  greet{
  var  currentValue = 200;
  // let id  =234 ;  // behaviour like  constant
  // let string = "Shadab khan ";
  // Debug.print("hello");
  // Debug.print(debug_show(currentValue));
  // Debug.print(debug_show(id));
  // Debug.print(string)
   public func topUp(amount : Nat) {
    currentValue += amount ;
    Debug.print(debug_show (currentValue));
    
  };
  // toUp();

  public func withdraw(amount: Nat){
    let tempValue: Int = currentValue - amount ;
    if(tempValue  >= 0 ){
      currentValue -= amount;
    Debug.print(debug_show (currentValue));
    }else{
      Debug.print("Enter Valid amount");
    }
  }

  
}