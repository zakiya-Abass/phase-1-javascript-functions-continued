function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(work = "go to the office") {
  return `This Monday, I will ${work}.`;
  // console.log(`This Monday, I will ${work}.`);
}
// mondayWork();
// mondayWork("work from home");
// mondayWork("do a video call");
//scope chain makes it possible for a function to have access to all its
//variables and all the variables of its parent functions (This includes grandparents,any functionn that hoouses it)

function wrapAdjective(character) {
  return function (compliment = "a star") {
    return `You are ${character}${compliment}${character}!`;
  };
}
