// Exercise 2
var employee = {
  name:"John Smith",
  job:"Programmer",
  age:31,
  employee_descrpt: function(){
    alert("Name is " +this.name+ ", Job is " +this.job+ ", Age is " +this.age )
  }
}

// Exercise 3
var employee_3 = {
  name:"John Smith",
  job:"Programmer",
  age:31,
  last_name: function(){
    alert("The last name is " +this.name.split(" ")[1] )
  }
}
