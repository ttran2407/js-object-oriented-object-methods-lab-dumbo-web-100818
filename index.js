function BroadMember (name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
  this.veto = () => {console.log("No, I must disagree")};
  
  this.approve = () => {console.log("You can do that!")};
  
  this.doCharity = () => {console.log("I like to help people.")};
  
  this.releasePressStatement = () => {console.log"(You will see great things from Scuber.")};
  
  this.sayHi = () => {console.log(`Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`)};
}