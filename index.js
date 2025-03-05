// code your solution here
razzle();
function razzle() {
    console.log("You've been razzled!");
}

function razzle(lawyer = "Billy", target = "'em") {
  console.log(`${lawyer} razzle-dazzles ${target}!`);
}
razzle(); 
razzle("Methuselah", "T'challah");

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(wrapper) {
  return function(adjective) {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  };
}