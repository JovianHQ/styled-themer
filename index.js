Object.defineProperty(exports, "__esModule", {
  value: true
});

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

exports.default = t;

function color() {
  var args = ["color"].concat(arguments);
  return function(p) {
    return "color: " + t.apply(null, args);
  };
}

exports.color = color;

function bgColor() {
  var args = ["color"].concat(arguments);
  return function(p) {
    return "background-color: " + t.apply(null, args);
  };
}

exports.bgColor = bgColor;

function fontSize() {
  var args = ["fontSize"].concat(arguments);
  return function(p) {
    return "font-size: " + t.apply(null, args);
  };
}

exports.fontSize = fontSize;
