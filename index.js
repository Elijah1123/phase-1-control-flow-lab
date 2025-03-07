function scuberGreetingForFeet(number){
  let result;
  let feet = number;
  number=parseInt(number);
  if (feet <=400){
    result = 'This one is on me!'
  }
  else if (feet >400 && feet <= 2000){
    result = 'That will be twenty bucks.'
  }
  else if (feet <=2500){
    result = 'I will gladly take your thirty bucks.'
  }
  else if (feet >2500){
    result = 'No can do.'
  }
  return result;
  }
function ternaryCheckCity(city){
  if(city == "NYC"){
    return "Ok, sounds good."
  }
  else {
    return "No go.";
  }
}

function switchOnCharmFromTip(tip){
  if(tip == "generous"){
    return 'Thank you so much.'
  }
  else if(tip == 'not as generous'){
    return 'Thank you.'
  }
  else {
    return 'Bye.'
  }
}