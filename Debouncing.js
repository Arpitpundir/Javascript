const debounce = (func, delay) => {
  /*
  * inDebounce: stores setTimeout function
  * if there is some invocation in queue, clear it and wait again for delay
  */
  let inDebounce
  return function() {
    const context = this
    const args = arguments
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => func.apply(context, args), delay)
  }
}

debounceBtn.addEventListener('click', debounce(function() {
  console.info('Hey! It is', new Date().toUTCString());
}, 3000));