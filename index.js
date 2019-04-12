function BroadMember (name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
  this.veto = () => {console.log("No, I must disagree")};
  
  this.approve = () => {console.log("You can do that!")};
  
  this.doCharity = () => {console.log("I like to help people.")};
  
<<<<<<< HEAD
  this.releasePressStatement = () => {console.log"(You will see great things from Scuber.")};
=======
  this.releasePressStatement = () => {console.log("You will see great things from Scuber.")};
>>>>>>> bc54330d23fc5e46cb15867ddbcf65a2541309c1
  
  this.sayHi = () => {console.log(`Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`)};
}