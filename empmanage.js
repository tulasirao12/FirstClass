const readline= require("readline-sync")
let employee=[{name:"rishi",designation:"SDE",salary:"330000",employeeid:1},{name:"ram",designation:"devops",salary:"490000",employeeid:2},{name:"kiran",designation:"manager",salary:"590000",employeeid:3},{name:"sai",designation:"sales",salary:"600000",employeeid:4} ]
function employeeMang(){
  function displayOptions(){
    console.log("Employee Management System")
    console.log("1 for showEmployees")
    console.log("2 for addEmployee")
    console.log("3 for removeEmployee")
    console.log("4 for searchEmployee")
    console.log("-1 for exit")
    console.log()
    
  }
  function displayErrorMessages(selectedOption){
    if(selectedOption>4||selectedOption==0||selectedOption<-1){
      console.log("wrong Input please tryagain!")
      console.log()
      return false;
    }
    return true;
  }
  let funObj={
   1:function showEmployee(){
    console.log(employee)
  },
  2:function addEmployee(){
   console.log("enter employee details") 
     let name=readline.question("enter name: ");
     let desg=readline.question("enter designation: ") ;
      let sal=readline.question("enter salary: ");
      let id=readline.question("enter employeeid: ")  ; 
    let emp5=employee.push({name:name,designation:desg,salary:sal,employeeid:id});
    console.log(employee);
  },
  3:function removeEmployee(){
    
  },
  4:function searchEmployee(){
    
  }
}
  function init(){
    let selectedOption;
    while(true){
      displayOptions();
      selectedOption = readline.question("Select an Option: ")
      if(displayErrorMessages(selectedOption)){
        funObj[selectedOption]();
      }
      if(selectedOption==-1){
        console.log("thank you for visting")
        break;
      }
    }
  }
  init()
}
employeeMang()
