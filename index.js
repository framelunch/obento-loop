var cp = new (require('obento-cp'))();
var looptime = 40;
var id;

module.exports = {
  add(func) {
    cp.add(func);
    if (!id) {
      id = setInterval(() => cp.update(), looptime);
    }
  },
  remove(func) {
    cp.remove(func);
    if (!cp.length) {
      clearInterval(id);
      id = null;
    }
  }
};
