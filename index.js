function t() {
  var len = arguments.length;
  var path = new Array(len);
  for (var i = 0; i < len; i++) {
    path[i] = arguments[i];
  }

  return function(p) {
    var res = p.theme;
    for (var i = 0; i < path.length; i++) {
      res = res[path[i]];
    }
    return res;
  };
}

module.exports = t;
