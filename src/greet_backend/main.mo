import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Int "mo:base/Int"; 
import Time "mo:base/Time";
import Float "mo:base/Float";


actor  greet{
  // var  currentValue = 200;  felxiable variable
  // orthogonal persistence variable
  stable var currentValue  :Float = 200   ;
   let id  =234 ;  // behaviour like  constant
  // let string = "Shadab khan ";
  // Debug.print("hello");
  // Debug.print(debug_show(currentValue));
   Debug.print(debug_show(id));
  // Debug.print(string)

  stable var startTime = Time.now();
  Debug.print(debug_show (startTime));
   public func topUp(amount :Float) {
    currentValue += amount ;
    Debug.print(debug_show (currentValue));
    
  };
  // toUp();
//  that is update call
  public func withdraw(amount: Float){
    let tempValue: Float = currentValue - amount ;
    if(tempValue  >= 0 ){
      currentValue -= amount;
    Debug.print(debug_show (currentValue));
    }else{
      Debug.print("Enter Valid amount");
    }
  };
  // that is query call using keyword  "query"

  public query func checkBalance(): async Float{
    return currentValue;
  };

  public func compound(){
    let currentTime = Time.now();
    let timeElapsedNs = currentTime - startTime;
    let timeElapsedS = timeElapsedNs/1000000000;
    currentValue := currentValue *(1.01**Float.fromInt(timeElapsedS) );
    startTime :=currentTime
  }
  
}