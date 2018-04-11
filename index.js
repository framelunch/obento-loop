var cp = new (require('obento-cp'))();
var looptime = 40;
var id;

module.exports = {
  add: function(func) {
    cp.add(func);
    if (!id) {
      id = setInterval(function() {
        cp.update();
      }, looptime);
    }
  },
  remove: function(func) {
    cp.remove(func);
    if (!cp.length) {
      clearInterval(id);
      id = null;
    }
  },
};
