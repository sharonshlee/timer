/*
Implement an alarm clock / timer which will beep after a specified 
amount of time has passed. The user can specify an unlimited number 
of alarms using command line arguments
*/
const timer = function (times) {
  if (
    times.length === 0 ||
    times.filter((x) => x < 0 || x === NaN).length > 0
  ) {
    process.exit();
  }

  for (const time of times) {
    setTimeout(() => {
      process.stdout.write("\x07"); //beep/ding sound
    }, time);
  }
};

const times = process.argv.splice(2, 2); //remove the first 2 args
console.log(timer(times.map((x) => Number(x))));

//node timer1.js 10 3 5 15 9
