Object.defineProperty(exports, "__esModule", {
  value: true
});

function toArray(args) {
  var len = args.length;
  var path = new Array(len);
  for (var i = 0; i < len; i++) {
    path[i] = args[i];
  }
  return path;
}

function t() {
  path = toArray(arguments);

  return function(p) {
    var res = p.theme;
    for (var i = 0; i < path.length; i++) {
      res = res[path[i]];
    }
    return res;
  };
}

exports.default = t;

function color() {
  var args = ["color"].concat(toArray(arguments));
  return function(p) {
    return "color: " + t.apply(null, args)(p);
  };
}

exports.color = color;

function bgColor() {
  var args = ["color"].concat(toArray(arguments));
  return function(p) {
    return "background-color: " + t.apply(null, args)(p);
  };
}

exports.bgColor = bgColor;

function fontSize() {
  var args = ["fontSize"].concat(toArray(arguments));
  return function(p) {
    return "font-size: " + t.apply(null, args)(p);
  };
}

exports.fontSize = fontSize;
