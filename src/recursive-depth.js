module.exports = class DepthCalculator {
  calculateDepth(arr) {

    let depth = 0;
    if(Array.isArray(arr)) {
      depth = 1;

      for (var i = 0; i < arr.length; i++) {
        depth = Math.max(this.calculateDepth(arr[i]) + 1, depth)
      }
    }
    return depth;
  }
};