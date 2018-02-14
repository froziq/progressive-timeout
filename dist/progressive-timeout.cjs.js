'use strict';

function ProgressiveTimeout(callback, _ref) {
  var _this = this;

  var min = _ref.min,
      max = _ref.max,
      step = _ref.step;

  this.tick = min;

  this.start = function () {
    var internalCallback = function internalCallback() {
      _this.tick += step;
      if (_this.tick > max) _this.tick = max;
      _this.timeoutID = setTimeout(internalCallback, _this.tick);
      callback();
    };

    _this.timeoutID = setTimeout(internalCallback, _this.tick);
  };

  this.stop = function () {
    clearTimeout(_this.timeoutID);
  };

  return this;
}

module.exports = ProgressiveTimeout;
