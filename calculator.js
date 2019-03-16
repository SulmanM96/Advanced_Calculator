// console.log("Testing")
  var condition = true;

    while(condition == true){
      var value1 = parseFloat(prompt("enter first value", "0"));
      var choice = prompt("Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide") || "a";
      var value2 = parseFloat(prompt("enter the second value","0"));

    // addition
    if(choice=="a"){
      alert(value1+value2);
    }
    //division
    else if(choice=="d"){
      alert(value1/value2);
    }
    //multiplication
    else if(choice=="m"){
      alert(value1*value2);
    }
    //subtraction
    else if(choice=="s"){
      alert(value1-value2);
    }
  //if left blank addition is chosen
    else if(choice=!null){
    choice="a"
  }
  else {
    alert = "i dont know what to use";
  }
  choice = prompt('do you wish to continue, if yes "y" if no "n"');
  if(choice  == "n"){
    condition = false;
  }

}
