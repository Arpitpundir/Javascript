
/*
* lastFunc: stores last setTimeout function
* lastRan: stores last time function was executed
* if function has not ran before, run it and set lastRan to current time
* if there is some invocation in queue, clear it and set new setTimeout function
* in this way most recent invocation will be executed
*/
const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function() {
    const context = this
    const args = arguments
    if (!lastRan) {
      func.apply(context, args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(function() {
        //if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args)
          lastRan = Date.now()
        //}
      }, limit - (Date.now() - lastRan))
    }
  }
}

throttleBtn.addEventListener('click', throttle(function() {
  return console.log('Hey! It is', new Date().toUTCString());
}, 1000));