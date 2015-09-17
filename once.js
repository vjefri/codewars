function once(fn) {
  var calledBefore = false;

  return function() {
    if (calledBefore === false) {
      calledBefore = true;
      return fn.apply(null, arguments);
    }
    else return undefined;
  }
}

/// Other Users Solutions ///
function once(fn) {
  var call = true
  return function() {
    if (call) {
      call = false
      return fn.apply(this, arguments)
    }
  }
}

function once(fn) {
    'use strict';

    return function () {
        if (!fn.ranOnce) {
            fn.ranOnce = true;
            return fn.apply(fn, arguments);
        }
    };
}
