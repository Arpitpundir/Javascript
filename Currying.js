function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      // if function has received all arguments, call it
      return func.apply(this, args);
    } else {
      /*
      * if function has not received all arguments, return new function
      * that will receive rest of arguments and current this context
      */
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}